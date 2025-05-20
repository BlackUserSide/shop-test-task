import {PrismaClient} from "@prisma/client";
import {dataProducts} from "./data/dataProducts";

const prisma = new PrismaClient()

async function main() {
    const countProducts = await prisma.product.count()
    const categories = await prisma.category.findMany()
    const newDataProduct = await Promise.all(dataProducts.map(async (product) => {
        const findCategory = categories.find(e =>
            e.name.toLowerCase() === product.name.split(' ')[0].toLowerCase())
        if(findCategory) {
            product.category_id = findCategory.id
            return product
        }
        const findOtherCategory = await prisma.category.findFirst({where: {name: 'Other'}})
        product.category_id = findOtherCategory ? findOtherCategory.id : 1
        return product
    }))
    if(countProducts === 0) {
        await prisma.product.createMany({
            data: newDataProduct
        })
        console.log("Products seeded");
        return
    }
    console.log(`Products is already seeded. Count products: ${countProducts}`);
}

main()
    .then(() => prisma.$disconnect())
    .catch((e) => {
        prisma.$disconnect();
        process.exit(1);
    });