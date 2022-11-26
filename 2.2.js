let min=Number(prompt("Donner un nombre minimal"));
let max=Number(prompt("Donner un nombre maximal"));

if(max<min) {
    console.log("Il va falloir revoir les maths");

}   
else{
    let current=prompt("Doner un nombre intermédiaire");
    if (min <= current && current <= max){
        console.log(current);
    }
}

