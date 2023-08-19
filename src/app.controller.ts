import { Body, Controller, Get,HttpCode,HttpException,HttpStatus,Param,ParseIntPipe,Post, Query, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { createTweetDto, createUserDto } from './dtos/user-dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("/")
  getHealth() {
    return this.appService.health();
  }
  @Post("/sign-up")
  @HttpCode(200)
  postSignUp(@Body() body: createUserDto) {
    return this.appService.postSignUp(body);
  }
  @Post("/tweets")
  postTweets(@Body() body: createTweetDto) {
    try{
      return this.appService.postTweets(body);
    } catch(error){
      throw new HttpException('UNAUTHORIZED',HttpStatus.UNAUTHORIZED)
    }
    
  }
  @Get("/tweets")
  getTweet(@Query('page') page : number) {
    try{
      return this.appService.getTweets(page);
    } catch(error){
      throw new HttpException('BAD REQUEST',HttpStatus.BAD_REQUEST)
    }
    
  }
  @Get("/tweets/:username")
  getTweetByName(@Param('username') username:string ) {
    return this.appService.getTweetByName(username);
  }
}
