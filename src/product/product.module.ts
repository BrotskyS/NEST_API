import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import {TypegooseModule} from "nestjs-typegoose";
import {ProductModel} from "./product.model";

@Module({
  controllers: [ProductController],
  imports: [
    TypegooseModule.forFeature([{
      typegooseClass: ProductModel,
      // schemaOptions: {
      //   collation: 'Product'
      // }
    }])
  ]
})
export class ProductModule {}
