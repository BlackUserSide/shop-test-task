import {Controller, Get} from '@nestjs/common';
import {CategoriesService} from './categories.service';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {
  }

  @Get()
  async getAllCategories() {
    return this.categoriesService.getAll()
  }
}
