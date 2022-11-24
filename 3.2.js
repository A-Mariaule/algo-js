function average(list) {
    sum=0;
    n=list.length;
    for (let elem of list){
        sum+=elem
    }
    console.log(sum/n);
}



average([100, 101, 102]);
average([1, 2, 3, 4, 5] )