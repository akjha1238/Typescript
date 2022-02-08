function test():void{
    console.log("Test() function called..." );
}

function greet():string{
return "hello..."
}
console.log(greet());

function test_param(n1:number,n2:number):void
{
        console.log(n1,n2);

}


test_param(1,2);
 function display(fn:string,ln:string,mn?:string):void{

    if(mn !=undefined)
    {
        console.log(fn,ln);
    }
    else{
        console.log(fn,mn,ln);
    }
 }

display("akhilesh","Jha","Kumar");
display("akhilesh","Jha");