export class User {
    public username : string;
    public avatar : string;

    constructor(username: string , avatar : string){
        this.username = username;
        this.avatar = avatar;
    }
}

export class Tweet {
    public username : string;
    public tweet : string;
    public avatar : string;

    constructor(user: string ,  avatar : string,tweet : string){
        this.username = user;
        this.avatar = avatar;
        this.tweet = tweet;
    }
}