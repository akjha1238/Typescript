interface IEmployee{
    fname:string;
    lname:string;
    fullName():string;


}
var emp: IEmployee={
    fname: "Akhilesh",
    lname: " Jha",
    fullName: function():string{
            return this.fname+" "+this.lname;
    }
};
//console.log(person.fname,person.lname);