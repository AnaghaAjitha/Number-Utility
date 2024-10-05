function fib() {

    let num = parseInt(document.getElementById("fib_id").value);
    let res = document.getElementById("fib_res");
    let num1 = -1, num2 = 1;
    res.innerHTML = " ";
    for (let i = 0; i < num; i++) {
        res.innerHTML += " " + (num1 + num2);
        num2 = num1 + num2;
        num1 = num2 - num1;
    }
}

function armstrong() {
    let num = parseInt(document.getElementById("arm_id").value);
    let res = document.getElementById("arm_res");
    let sum = 0, rem;
    let temp = num;
    res.innerHTML = " ";
    while (num > 0) {
        rem = num % 10;
        sum += (rem * rem * rem);
        num = Math.floor(num / 10);
    }
    if (sum == temp) {
        res.innerHTML = "It is an armstrong number";
    }
    else {
        res.innerHTML = " It is not an armstrong number";

    }

}

function prime() {
    let num = parseInt(document.getElementById("prime_id").value);
    let res = document.getElementById("prime_res");
    res.innerHTML = " ";
    let flag = 0;
    for (let i = 2; i < num / 2; i++) {
        if (num % i == 0) {
            flag = 1;
        }
    }
    if (flag == 1) {
        res.innerHTML = "It is not a prime number";
    }
    else {
        res.innerHTML = "It is a prime number";
    }
}

function palindrome() {
    let num = parseInt(document.getElementById("pal_id").value);
    let res = document.getElementById("pal_res");
    res.innerHTML = " ";
    let rev = 0, rem;
    let temp = num;
    while (num > 0) {
        rem = num % 10;
        rev = rev * 10 + rem;
        num = Math.floor(num / 10);
    }
    if (rev == temp) {
        res.innerHTML = "It is a palindrome number";
    }
    else {
        res.innerHTML = "It is not a palindrome number";
    }
}

function oddeven() {
    let num = parseInt(document.getElementById("oddeven_id").value);
    let res = document.getElementById("oddeven_res");
    res.innerHTML = " ";
    if (num % 2 == 0) {
        res.innerHTML = "It is an even number";
    }
    else {
        res.innerHTML = "It is an odd number";

    }
}

function factorial() {
    let num = parseInt(document.getElementById("fact_id").value);
    let res = document.getElementById("fact_res");
    res.innerHTML = " ";
    let fact = 1;
    for (let i = 1; i < num; i++) {
        fact = fact * i;
    }
    res.innerHTML = fact;
}