// scripts/optimize-images.js
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// ============================================
// CONFIGURATION - Adjust these settings
// ============================================
const CONFIG = {
    inputDir: './src/assets/images',           // Your source images folder
    outputDir: './assets/images-optimized', // Where optimized images will be saved

    // Quality settings (1-100, lower = smaller file size)
    quality: {
        jpg: 80,    // For JPEG images (recommended: 75-85)
        png: 80,    // For PNG images (recommended: 75-85)
        webp: 80,   // For WebP format (recommended: 75-85)
    },

    // Advanced options
    convertToWebP: false,  // Set true to convert ALL images to WebP
    maxWidth: 1920,        // Resize images wider than this (0 = no resize)
    maxHeight: null,       // Max height (null = maintain aspect ratio)
    preserveOriginal: true, // Keep original file format if not converting to WebP
};

// ============================================
// HELPER FUNCTIONS
// ============================================

// Get all image files from directory (recursive)
function getAllImageFiles(dirPath, arrayOfFiles = []) {
    if (!fs.existsSync(dirPath)) {
        console.error(`❌ Directory not found: ${dirPath}`);
        return arrayOfFiles;
    }

    const files = fs.readdirSync(dirPath);

    files.forEach((file) => {
        const filePath = path.join(dirPath, file);

        if (fs.statSync(filePath).isDirectory()) {
            // Recursively search subdirectories
            arrayOfFiles = getAllImageFiles(filePath, arrayOfFiles);
        } else if (/\.(jpg|jpeg|png|webp|gif)$/i.test(file)) {
            // Add image files
            arrayOfFiles.push(filePath);
        }
    });

    return arrayOfFiles;
}

// Format bytes to readable size
function formatBytes(bytes) {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
}

// ============================================
// IMAGE OPTIMIZATION FUNCTION
// ============================================
async function optimizeImage(inputPath, outputPath) {
    const ext = path.extname(inputPath).toLowerCase();
    const relativePath = path.relative(CONFIG.inputDir, inputPath);

    try {
        let image = sharp(inputPath);
        const metadata = await image.metadata();

        // Log original dimensions
        console.log(`Processing: ${relativePath} (${metadata.width}x${metadata.height})`);

        // Resize if image is too large
        if (CONFIG.maxWidth && metadata.width > CONFIG.maxWidth) {
            image = image.resize(CONFIG.maxWidth, CONFIG.maxHeight, {
                withoutEnlargement: true,
                fit: 'inside',
            });
            console.log(`  ↓ Resized to max width: ${CONFIG.maxWidth}px`);
        }

        // Determine output format and optimize
        if (CONFIG.convertToWebP) {
            // Convert everything to WebP
            outputPath = outputPath.replace(/\.(jpg|jpeg|png|gif)$/i, '.webp');
            await image
                .webp({
                    quality: CONFIG.quality.webp,
                    effort: 6 // 0-6, higher = better compression but slower
                })
                .toFile(outputPath);
        } else {
            // Optimize based on original format
            switch (ext) {
                case '.jpg':
                case '.jpeg':
                    await image
                        .jpeg({
                            quality: CONFIG.quality.jpg,
                            progressive: true,
                            mozjpeg: true // Better compression
                        })
                        .toFile(outputPath);
                    break;

                case '.png':
                    await image
                        .png({
                            quality: CONFIG.quality.png,
                            compressionLevel: 9,
                            adaptiveFiltering: true
                        })
                        .toFile(outputPath);
                    break;

                case '.webp':
                    await image
                        .webp({
                            quality: CONFIG.quality.webp,
                            effort: 6
                        })
                        .toFile(outputPath);
                    break;

                case '.gif':
                    // Copy GIF without modification (sharp doesn't handle animated GIFs well)
                    fs.copyFileSync(inputPath, outputPath);
                    console.log(`  → GIF copied without optimization`);
                    break;

                default:
                    console.log(`  ⚠️ Unsupported format: ${ext}`);
                    return;
            }
        }

        // Calculate and display savings
        const inputSize = fs.statSync(inputPath).size;
        const outputSize = fs.statSync(outputPath).size;
        const savings = ((1 - outputSize / inputSize) * 100).toFixed(1);
        const savedBytes = inputSize - outputSize;

        if (savings > 0) {
            console.log(`  ✓ Saved ${savings}% → ${formatBytes(inputSize)} to ${formatBytes(outputSize)} (saved ${formatBytes(savedBytes)})`);
        } else {
            console.log(`  ℹ️ No reduction (${formatBytes(outputSize)})`);
        }

        return { inputSize, outputSize, savings: parseFloat(savings) };

    } catch (error) {
        console.error(`  ❌ Error optimizing ${relativePath}:`, error.message);
        return null;
    }
}

// ============================================
// MAIN OPTIMIZATION FUNCTION
// ============================================
async function optimizeAllImages() {
    console.log('\n🖼️  IMAGE OPTIMIZATION SCRIPT');
    console.log('================================\n');
    console.log(`📂 Input Directory:  ${path.resolve(CONFIG.inputDir)}`);
    console.log(`📂 Output Directory: ${path.resolve(CONFIG.outputDir)}`);
    console.log(`⚙️  Quality Settings: JPG=${CONFIG.quality.jpg}%, PNG=${CONFIG.quality.png}%, WebP=${CONFIG.quality.webp}%`);
    console.log(`📐 Max Dimensions:   ${CONFIG.maxWidth ? CONFIG.maxWidth + 'px width' : 'No resize'}`);
    console.log(`🔄 Convert to WebP:  ${CONFIG.convertToWebP ? 'Yes' : 'No'}`);
    console.log('\n================================\n');

    // Check if input directory exists
    if (!fs.existsSync(CONFIG.inputDir)) {
        console.error(`❌ Input directory does not exist: ${CONFIG.inputDir}`);
        console.log('\n💡 Please update the inputDir in the CONFIG section of this script.\n');
        process.exit(1);
    }

    // Get all image files
    const imageFiles = getAllImageFiles(CONFIG.inputDir);

    if (imageFiles.length === 0) {
        console.log(`❌ No images found in ${CONFIG.inputDir}`);
        console.log('   Supported formats: .jpg, .jpeg, .png, .webp, .gif\n');
        process.exit(1);
    }

    console.log(`📊 Found ${imageFiles.length} images to process\n`);

    // Create output directory
    if (!fs.existsSync(CONFIG.outputDir)) {
        fs.mkdirSync(CONFIG.outputDir, { recursive: true });
    }

    // Process each image
    let totalInputSize = 0;
    let totalOutputSize = 0;
    let successCount = 0;
    let failCount = 0;

    console.log('🔄 Processing images...\n');

    for (let i = 0; i < imageFiles.length; i++) {
        const inputPath = imageFiles[i];
        const relativePath = path.relative(CONFIG.inputDir, inputPath);
        const outputPath = path.join(CONFIG.outputDir, relativePath);
        const outputDir = path.dirname(outputPath);

        console.log(`[${i + 1}/${imageFiles.length}]`);

        // Create subdirectories in output folder if needed
        if (!fs.existsSync(outputDir)) {
            fs.mkdirSync(outputDir, { recursive: true });
        }

        const inputSize = fs.statSync(inputPath).size;
        totalInputSize += inputSize;

        const result = await optimizeImage(inputPath, outputPath);

        if (result) {
            totalOutputSize += result.outputSize;
            successCount++;
        } else {
            failCount++;
        }

        console.log(''); // Empty line between images
    }

    // ============================================
    // SUMMARY
    // ============================================
    console.log('\n================================');
    console.log('✅ OPTIMIZATION COMPLETE!');
    console.log('================================\n');

    const totalSavings = ((1 - totalOutputSize / totalInputSize) * 100).toFixed(1);
    const savedBytes = totalInputSize - totalOutputSize;

    console.log(`📊 Summary:`);
    console.log(`   • Processed: ${successCount} images`);
    if (failCount > 0) {
        console.log(`   • Failed: ${failCount} images`);
    }
    console.log(`   • Original size: ${formatBytes(totalInputSize)}`);
    console.log(`   • Optimized size: ${formatBytes(totalOutputSize)}`);
    console.log(`   • Total saved: ${formatBytes(savedBytes)} (${totalSavings}%)`);

    console.log(`\n📁 Optimized images saved to: ${path.resolve(CONFIG.outputDir)}`);

    console.log('\n💡 Next Steps:');
    console.log('   1. Review the optimized images in the output folder');
    console.log('   2. If satisfied, replace your original images with optimized ones');
    console.log('   3. You can delete the output folder or keep it as backup\n');
}

// ============================================
// RUN THE SCRIPT
// ============================================
optimizeAllImages().catch((error) => {
    console.error('\n❌ Script failed with error:', error);
    process.exit(1);
});