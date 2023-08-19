import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { Tweet, User } from './entities/user.entity';

@Injectable()
export class AppService {
  private users: User[];
  private tweets : Tweet[];
  constructor(){
    this.users=[
      new User('Gustavo1','https://www.google.com.br/'),
      new User('Gustavo2','https://www.google.com.br/'),
    ];
    this.tweets=[
      new Tweet('Gustavo1','https://www.google.com.br/','Eu que escrevi'),
      new Tweet('Gustavo1','https://www.google.com.br/','Eu que escrevi'),
      new Tweet('Gustavo1','https://www.google.com.br/','Eu que escrevi'),
      new Tweet('Gustavo2','https://www.google.com.br/','Eu que escrevi'),
    ];
  }
  health() {
    return "I'm okay!";
  }
  postSignUp(body: User) {
    return this.users.push(body);
  }
  postTweets(body) {
    const user = this.users.find((e) => e.username === body.username)
    if(!user){
      throw UnauthorizedException
    }
    return this.tweets.push({
      username:body.username,
      avatar:user.avatar,
      tweet:body.tweet
    });
  }
  getTweets(page:number){
    if(!page){
      if(this.tweets.length > 15){
        const array = []
        for(let i=1; i<16;i++){
          array.push(this.tweets[this.tweets.length-i])
        }
        return array;
      } else {
        return this.tweets;
      }
    } else {
      if(Number(page) && Number(page) !== 0){
        const array = []
        for(let i=1; i<6;i++){ // PAGINA = 2
          array.push(this.tweets[this.tweets.length-i])
        }
        return array;  
      } else {
        throw BadRequestException
      }
    }
  }
  getTweetByName(username:string) {
    const user = this.users.find((e) => e.username === username)
    const array = []
    for(let i = 0;i<this.tweets.length;i++){
      if(this.tweets[i].username === username){
        array.push({
          username: username,
          avatar: user.avatar,
          tweet: this.tweets[i].tweet
        })
      }
    }
    return array;
  }
}
