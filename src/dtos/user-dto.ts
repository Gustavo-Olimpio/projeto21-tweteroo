import { IsNotEmpty, IsString, IsUrl } from "class-validator";

export class createUserDto {
    @IsString({
        message:"All fields are required!"
    })
    @IsNotEmpty({
        message:"All fields are required!"
    })
    username : string;
    @IsString({
        message:"All fields are required!"
    })
    @IsNotEmpty({
        message:"All fields are required!"
    })
    @IsUrl()
    avatar : string;
}
export class createTweetDto{
    @IsString()
    @IsNotEmpty()
    username: string;
    @IsString()
    @IsNotEmpty()
    tweet: string;
}