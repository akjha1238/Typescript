var num = 4;
var User = /** @class */ (function () {
    function User() {
    }
    User.prototype.setUserId = function (userId) {
        var localVar = 10;
        console.log("localVar" + localVar);
        this.userId = userId;
    };
    return User;
}());
console.log("Global Num:" + num);
var u = new User();
u.setUserId(1);
console.log("class Variavle :" + u.name, u.userId);
