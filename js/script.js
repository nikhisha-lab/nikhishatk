document.write("hellow world")
function test(){
    console.log("this is sample test function")
}
test()
test()
function greetings(msg){
console.log("hello world",msg)
}
greetings("have a good day")
greetings()
function add(x,y){
    let sum = x + y
    console.log(sum)
    return sum
}
let result=add(23,34)
console.log(result)
console.log(add(3,4))
//console.log(sum)
for(let i=1;i<10;i+=2){
    console.log(i)
    if(i==3){
       // break
        
        continue}
        console.log(i)
    

}
let k=0
while (k<10){
    console.log(k)
    k+=1
}

function average(a,b,c){
    return (a+b+c)/3
} console.log("Average =",average(12,13,12))



function load(){
    let name= promt("enter your name")
    alert("hey "+name+" welcome")
}
function getvalue(){
    let uname=document.getElementById('username').value
    alert(uname)
}

function add(){
    let num1=parseInt(document.getElementById("num1").value)
    let num2=parseInt(document.getElementById("num2").value)
    let sum=num1+num2
    document.getElementById("result").value=sum
}
