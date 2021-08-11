import {prop} from "@typegoose/typegoose";
import {Types} from "mongoose";

export class createReviewDto{
    name: string;
    title: string;
    description: string;
    rating: string
    productId: string
}
