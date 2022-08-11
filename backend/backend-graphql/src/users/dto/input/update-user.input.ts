import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty, IsOptional } from "class-validator";

@InputType()
export class UpdateUserInput {
    @Field()
    @IsNotEmpty()
    userId: string;
    
    @Field({ nullable: true })
    @IsOptional()
    @IsNotEmpty()
    name?: string;

    @Field({ nullable: true })
    @IsOptional()
    isActive?: boolean
}