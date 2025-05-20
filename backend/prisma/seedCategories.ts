import {PrismaClient} from "@prisma/client";
import {categoryData} from "./data/categoryData";

const prisma = new PrismaClient()

async function main() {
    const countCategories = await prisma.category.count()
    if(countCategories === 0) {
        await prisma.category.createMany({
            data: categoryData
        })
        console.log("Category seeded");
        return
    }
    console.log(`Category is already seeded. Count category: ${countCategories}`);
}
main()
    .then(() => prisma.$disconnect())
    .catch((e) => {
        console.error('Seed error:', e)
        prisma.$disconnect();
        process.exit(1);
    });