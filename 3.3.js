/*version push*/
function copypush(list){
    let copylist=[]
    for (let elem of list){
        copylist.push(elem)
    }
    return copylist
}
console.log(copypush([10,15,25,35] ))
/*version method*/

function copyclone(list){
    let copylist=list.slice();
    return copylist
}

console.log(copyclone([10,15,25,35] ))