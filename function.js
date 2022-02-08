function test() {
    console.log("Test() function called...");
}
function greet() {
    return "hello...";
}
console.log(greet());
function test_param(n1, n2) {
    console.log(n1, n2);
}
test_param(1, 2);
function display(fn, ln, mn) {
    if (mn != undefined) {
        console.log(fn, ln);
    }
    else {
        console.log(fn, mn, ln);
    }
}
display("akhilesh", "Jha", "Kumar");
display("akhilesh", "Jha");
