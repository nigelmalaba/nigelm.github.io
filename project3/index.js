function q1() {
    input = document.getElementById("task1")
    x = parseInt(input.value)
    output = document.getElementById("q1") 
    output.innerHTML = 5 * x - 3 * (x ^ 2) + 13;
}
document.getElementById("q1").innerHTML = q1(3);

function q2() {
    input1 = document.getElementById("task2a");
    input2 = document.getElementById("task2b");
    input3 = document.getElementById("task2c");
    var a = input1.value;
    var b = input2.value;
    var c = input3.value;
    output = document.getElementById("q2") ;
    output.innerHTML = "Hello, "+ a +" " + b +" "+ c ;
}
document.getElementById("q1").innerHTML = q1(3);

function q3() {
    input1 = document.getElementById("task3a");
    input2 = document.getElementById("task3b");
    var x = parseInt(input1.value);
    var y = parseInt(input2.value);
    output = document.getElementById("q3") ;
    if x>y{
        var string="bananas"
        var ans=string.fontcolor("yellow");
        output.innerHTML = ans;
        
    }
    else if y>x{
        var string="porcupine"
        var ans=string.fontcolor("brown");
        output.innerHTML = ans;
    }
    else if x==y && y<0 && x<0{
        
        var string="red apples"
        var ans=string.fontcolor("red");
        output.innerHTML = ans;
    }
    else{
        var string="green apples"
        var ans=string.fontcolor("green");
        output.innerHTML = ans;
    }
function q4() {
    input1 = document.getElementById("task4");
    var a = input1.value;
    var b= a.replace(/\D/g,'');
    output = document.getElementById("q4") ;
    
    if len(b)==10 or len(b)==11{
        var string ="valid"
        var ans=string.fontcolor("green")
        output.innerHTML =ans 
    }
       
}

function q5() {
    input1 = document.getElementById("task5");
    var a = input1.value;
    output.innerHTML = a.split(" ")[3];
}





function q6(){
    input1 = document.getElementById("task6a");
    input2 = document.getElementById("task6b");
    input3 = document.getElementById("task6c");
    input1 = document.getElementById("task6d");
    input2 = document.getElementById("task6e");
    if( document.getElementById('task6a').onclick || document.getElementById('task6b').onclick || output  = document.getElementById('task6c').onclick ) || document.getElementById('task6d').onclick ){
        output  = document.getElementById('task6e').onclick.fontcolor("blue");
        
    }
    else if (document.getElementById('task6e').onclick){
        "task6a".fontcolor.("red");
        "task6b".fontcolor.("red");
        "task6c".fontcolor.("red");
        "task6d".fontcolor.("red");
    }
    
}