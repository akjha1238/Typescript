var num=4;

class User{
    userId:number;
    name:string;


    setUserId(userId:number):void{
        var localVar:number=10;
        console.log("localVar :" +localVar);
        this.userId=userId;
    }

}

console.log("Global Num :"+num);
var u =new User();
u.setUserId(1);
console.log("class Variavle :" +u.name, u.userId);