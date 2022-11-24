function sumlist(list) {
    sum=0;
    for (let elem of list){
        sum+=elem
    }
    console.log(sum)
}

sumlist([1, 2, 3, 4, 5])
sumlist([100, 101, 102])