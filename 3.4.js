/*methode*/
function minmax(list){
    min=Math.min(...list)
    max=Math.max(...list)
    console.log(["le minimum est "+ min,"le maximum est " + max])
}

minmax([3,5,7,2])

/*à la main*/
function minmax2(list){
    min=list[0]
    max=list[0]
    for (let elem of list ){
        if (elem < min){
            min = elem
        }
        else if (elem>max){
            max=elem
        }
    }
    console.log(["le minimum est "+ min,"le maximum est " + max])
}

minmax2([-14,12.5,6,12])