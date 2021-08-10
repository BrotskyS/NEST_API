import {Body, Controller, Delete, Param, Post, Patch, HttpCode} from '@nestjs/common';
import {ProductModel} from "./product.model";
import {FindProductDto} from "./dto/find-product.dto";

@Controller('product')
export class ProductController {
    @Post('create')
    async create(@Body() dto: Omit<ProductModel, '_id'>){

    }
    @Post('get')
    async get(@Param('id') id: string){

    }

    @Delete('delete')
    async delete(@Param('id') id: string){

    }
    @Patch('patch')
    async patch(@Param('id') id: string, @Body() dto: ProductModel){

    }
    @HttpCode(200)
    @Post('find')
    async find(@Body() dto: FindProductDto){

    }

}
