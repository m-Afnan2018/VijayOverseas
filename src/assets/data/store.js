import item1 from '@/assets/images/product/product1.png'
import item2 from '@/assets/images/product/product2.png'
import item3 from '@/assets/images/product/product3.png'
import item4 from '@/assets/images/product/product4.png'
import item5 from '@/assets/images/product/product5.png'

const image1 = item1;
const image2 = item2;
const image3 = item3;
const image4 = item4;
const image5 = item5;

// const storeData = [
//     {
//         image: image1,
//         heading:"Natural jaggery",
//         description: "Pure, unrefined jaggery made from fresh sugarcane juice",
//         link: "/",
//         price: "₹70",
//     },
//     {
//         image: image2,
//         heading:"Fennel Seed Jaggery",
//         description: "Refreshing jaggery infused with premium saunf (fennel)",
//         link: "",
//         price: "₹85",
//     },
//     {
//         image: image3,
//         heading:"Coconut Jaggery",
//         description: "Made from the nectar of coconut palm flowers",
//         link: "",
//         price: "₹85",
//     },
//     {
//         image: image4,
//         heading:"Peanut Jaggery",
//         description: "Classic peanut-jaggery crunch made the traditional way",
//         link: "",
//         price: "₹85",
//     },
//     {
//         image: image5,
//         heading:"Dry Ginger Jaggery",
//         description: "A warm, aromatic fusion of jaggery and sun-dried ginger",
//         link: "",
//         price: "₹85",
//     },
//     {
//         image: image6,
//         heading:"Dry Fruit + Sesame Seed Jaggery",
//         description: "A crunchy mix of dry fruits, sesame, and jaggery",
//         link: "",
//         price: "₹85",
//     },
//     {
//         image: image7,
//         heading:"Jaggery Powder",
//         description: "Fine, easy-to-use jaggery powder for everyday sweetness",
//         link: "",
//         price: "₹70",
//     },
// ]

const storeData = [
    {
        heading: "Natural Jaggery (Brick)",
        image: image1,
        description: "Traditional rectangular bricks made from pure sugarcane juice, slow-cooked to preserve natural sweetness, rich flavour, and consistent quality for everyday use.",
        offer: "-15% OFF",
        table: true,
        map: [500, 1000, 2500],
        discount: [425, 850, 2125],
        cutPrice: null,
        cta: null
    },
    {
        heading: "Natural jaggery (cube/chocolate)",
        image: image2,
        description: "Carefully prepared chocolate-style jaggery cubes made from unrefined sugarcane.Offers natural sweetness with a rich taste and everyday convenience.",
        offer: "26% OFF NEW YEAR",
        table: true,
        map: [600, 1200, 3000],
        discount: [444, 888, 2220],
        cutPrice: null,
        cta: null
    },
    {
        heading: "Natural Jaggery (Brick)",
        image: image3,
        description: "✓ Normal Jaggery\n✓ Fennel Seeds Jaggery\n✓ Dry Ginger Jaggery\n✓ Coconut Jaggery\n✓ Black Pepper Jaggery\n✓ Coffee Jaggery",
        offer: "26% OFF NEW YEAR",
        table: true,
        map: [500, 1000, 2500],
        discount: [425, 850, 2125],
        cutPrice: null,
        cta: null
    },
    {
        heading: "6-Variant Combo",
        image: image4,
        description: "✓ Normal Jaggery\n✓ Fennel Seeds Jaggery\n✓ Dry Ginger Jaggery\n✓ Coconut Jaggery\n✓ Black Pepper Jaggery\n✓ Coffee Jaggery",
        offer: "26% OFF NEW YEAR",
        table: false,
        map: [500, 1000, 2500],
        discount: [425, 850, 2125],
        cutPrice: "MRP: ₹495",
        cta: "₹399 (26% OFF - Welcome 2026!)"
    },
    {
        heading: "Natural jaggery (  export )",
        image: image5,
        description: "Premium-quality natural jaggery crafted for global markets, ensuring purity, consistency, and export-ready standards in every batch.",
        table: false,
        cutPrice: "MRP: ₹155/kg",
        cta: "₹27,90,000 ( 155/kg)"
    },
]

export default storeData;