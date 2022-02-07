class Student{
    id:number;
    name:string;
    address:string;

    public setDetails(id:number,name:string,address:string):void{
        this.id=id;
        this.name=name;
        this.address=address;

    }

    public displayDetails():void{
        console.log(this.id);

    }
     
   
}
let student = new Student();
student.id=123;
student.name="akhilesh";
student.address="Bhubaneswar"

let s2=new Student();
s2.setDetails(12,"subhangi","Ranchi");
student.displayDetails();
s2.displayDetails();