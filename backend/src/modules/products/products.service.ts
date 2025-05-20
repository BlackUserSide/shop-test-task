import {Injectable, NotFoundException} from '@nestjs/common';
import {PrismaService} from "../../prisma/prisma.service";
import {Prisma} from "@prisma/client";

@Injectable()
export class ProductsService {
    constructor(private readonly prisma: PrismaService) {
    }

    async getAll() {
        return this.prisma.product.findMany()
    }

    async getFilteredProducts(query: {
        brand?: string,
        color?: string,
        minPrice: string,
        maxPrice?: string,
        categoryId?: string
    }) {
        const where: Prisma.ProductWhereInput = {
            ...(query.brand && query.brand !== '' && {brand: query.brand}),
            ...(query.color && query.color !== '' && {color: query.color}),
            ...(query.categoryId !== undefined && query.categoryId !== '' && {
                category_id: Number(query.categoryId),
            }),
            ...((query.minPrice !== undefined && query.maxPrice !== undefined) &&
            !(+query.minPrice === 0 && +query.maxPrice === 0)
                ? {
                    price: {
                        ...(query.minPrice !== '' && {gte: Number(query.minPrice)}),
                        ...(query.maxPrice !== '' && {lte: Number(query.maxPrice)}),
                    },
                }
                : {}),
        };


        return this.prisma.product.findMany({where});
    }

    async getOne(id: number) {
        const findProduct = await this.prisma.product.findUnique({where: {id}})
        if (!findProduct) {
            throw new NotFoundException(`Product with id ${id} not found`);
        }
        return findProduct
    }
}
