import {Prisma} from '@prisma/client';

export const dataProducts:Prisma.ProductCreateManyInput[] = [
    { name: "Tracksuit cyan", color: "red", price: 221, brand: "Nike",  category_id: 1},
    { name: "Tracksuit lime", color: "olive", price: 252, brand: "Under Armour",  category_id: 1},
    { name: "Socks gold", color: "red", price: 227, brand: "Adidas",  category_id: 1},
    { name: "Gloves purple", color: "blue", price: 382, brand: "Puma",  category_id: 1},
    { name: "Tank Top black", color: "orange", price: 377, brand: "Under Armour", category_id: 1},
    { name: "Hoodie green", color: "gray", price: 211, brand: "Reebok",  category_id: 1},
    { name: "Sneakers black", color: "gold", price: 399, brand: "Nike",  category_id: 1},
    { name: "Scarf pink", color: "yellow", price: 213, brand: "New Balance",  category_id: 1},
    { name: "T-shirt white", color: "lime", price: 209, brand: "Under Armour",  category_id: 1},
    { name: "Cap blue", color: "purple", price: 291, brand: "Puma",  category_id: 1},
    { name: "Sweatpants cyan", color: "gold", price: 306, brand: "Under Armour",  category_id: 1},
    { name: "Cap pink", color: "silver", price: 390, brand: "Under Armour",  category_id: 1},
    { name: "Backpack brown", color: "black", price: 295, brand: "Adidas",  category_id: 1},
    { name: "Sweatpants olive", color: "gray", price: 313, brand: "Under Armour",  category_id: 1},
    { name: "Tracksuit maroon", color: "white", price: 229, brand: "Reebok",  category_id: 1},
    { name: "Socks black", color: "gold", price: 317, brand: "Nike",  category_id: 1},
    { name: "Sweatpants white", color: "black", price: 224, brand: "Puma", category_id: 1},
    { name: "T-shirt navy", color: "gray", price: 278, brand: "Puma",  category_id: 1},
    { name: "Sneakers olive", color: "gray", price: 328, brand: "New Balance",  category_id: 1},
    { name: "Shorts olive", color: "red", price: 330, brand: "Adidas",  category_id: 1}
]