import { Field, Int, ObjectType } from "@nestjs/graphql";

//User Interface
@ObjectType()

export class User {
    @Field(() => String)
    userId: string;
    
    @Field()
    email: String;

    @Field({ nullable: true })
    password?: string

    @Field()
    name: String;

    @Field({ nullable: true })
    isActive?: boolean;
}