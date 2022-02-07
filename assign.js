var Student = /** @class */ (function () {
    function Student() {
    }
    Student.prototype.setDetails = function (id, name, address) {
        this.id = id;
        this.name = name;
        this.address = address;
    };
    Student.prototype.displayDetails = function () {
        console.log(this.id);
    };
    return Student;
}());
var student = new Student();
student.id = 123;
student.name = "akhilesh";
student.address = "Bhubaneswar";
var s2 = new Student();
s2.setDetails(12, "subhangi", "Ranchi");
student.displayDetails();
s2.displayDetails();
