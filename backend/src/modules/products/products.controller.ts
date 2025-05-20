import {BadRequestException, Controller, Get, Param, Query} from '@nestjs/common';
import {ProductsService} from "./products.service";
import {Product} from "@prisma/client";

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) {}

    @Get()
    async getAllProducts(@Query() query:any): Promise<Product[]> {

        const hasFilters = Object.keys(query).length > 0;
        if (hasFilters) {
            return this.productsService.getFilteredProducts(query);
        }
        return this.productsService.getAll();
    }
    @Get(":id")
    async getOneProduct(@Param() param:any) {
        const paramId = Number(param.id)
        if(isNaN(paramId)) {
            throw new BadRequestException('Invalid id product')
        }
        return this.productsService.getOne(paramId)
    }
}
