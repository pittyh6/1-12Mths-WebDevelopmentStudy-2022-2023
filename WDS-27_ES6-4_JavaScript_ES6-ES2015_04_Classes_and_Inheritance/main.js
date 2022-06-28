class Users{
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    register(){
        console.log( this.username+ ' is now registered');
    }

    static countUsers(){
        console.log("There are 50 users")
    }
}
// call a method object
let pri = new Users('Pri', 'pri@gmail.com', '123test');
pri.register()

//call a static method
Users.countUsers()