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


//INHERITANCE
class Member extends Users{
    constructor(username, email, password, memberPackage){
        super(username, email, password);
        this.package = memberPackage;
    }

    getPackage(){
        console.log(this.username+ ' is now a subscribed in the ' +this.package +' package ')
    }
}
let carlos = new Member('Carlos', 'santos@gmail.com', '12-11-1973', "standard");
carlos.getPackage(); 
carlos.register()