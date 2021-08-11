import {Body, Controller, Delete, Param, Post, Get, HttpException, HttpStatus} from '@nestjs/common';
import {ReviewModel} from "./review.model";
import {createReviewDto} from './dto/create-review.dto'
import {ReviewService} from "./review.service";
import {REVIEW_NOT_FOUND} from "./review.constans";

@Controller('review')
export class ReviewController {
    constructor(private readonly reviewService: ReviewService) {
    }

    @Post('create')
    async create(@Body() dto: createReviewDto){
        return  this.reviewService.create(dto)
    }
    @Delete(':id')
    async delete(@Param('id') id: string){
        const deleteDoc = await this.reviewService.delete(id)
        if(!deleteDoc){
            throw new HttpException(REVIEW_NOT_FOUND, HttpStatus.NOT_FOUND)
        }
    }

    @Get('getByProduct/:productId')
    async getByProduct(@Param('productId') productId: string){
        return this.reviewService.findByProductId(productId)
    }
}
