export default function sitemap() {
    return [
        {
            url: 'https://vijayoverseas.com',
            lastModified: new Date(),
            priority: 1,
        },
        {
            url: 'https://vijayoverseas.com/product',
            lastModified: new Date(),
            priority: 0.8,
        },
        {
            url: 'https://vijayoverseas.com/blogs',
            lastModified: new Date(),
            priority: 0.7,
        },
    ];
}
