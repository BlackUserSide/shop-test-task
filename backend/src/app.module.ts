import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {PrismaModule} from "./prisma/prisma.module";
import {ProductsModule} from './modules/products/products.module';
import {CategoriesModule} from './modules/categories/categories.module';

@Module({
  imports: [PrismaModule, ProductsModule, CategoriesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
