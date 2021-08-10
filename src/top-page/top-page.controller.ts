import {Body, Controller, Delete, HttpCode, Param, Patch, Post, Get} from '@nestjs/common';
import {TopPageModel} from "./top-page.model";
import {FindTopPageDto} from "./dto/find-top-page.dto";

@Controller('top-page')
export class TopPageController {
    @Post('create')
    async create(@Body() dto: Omit<TopPageModel, '_id'>){

    }
    @Get(':id')
    async get(@Param('id') id: string){

    }

    @Delete(':id')
    async delete(@Param('id') id: string){

    }
    @Patch(':id')
    async patch(@Param('id') id: string, @Body() dto: TopPageModel){

    }
    @HttpCode(200)
    @Post('find')
    async find(@Body() dto: FindTopPageDto){

    }
}
