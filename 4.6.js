function factorial(a){
    if(a==0){
        return 1
    }
    else if(a>0){
        return a*factorial(a-1)
    }
    else{
        return console.log("factorial is define with natural number")
    }
    
}

console.log(factorial(5))