function askTvSerie(){
    Name_prompt=prompt("What is the name of your favorite TV serie")
    Production_year_prompt=prompt("which year the Tv serie was producted")
    Cast_members_prompt=[]
    x=prompt("What is the name of a cast member")
    Cast_members_prompt.push(x)
    while (x!=""){
        x=prompt("What is the name of an another cast member(press enter if you have finish")
        Cast_members_prompt.push(x)
    }
    Cast_members_prompt.pop()
    let TvSerie={
        "Name":Name_prompt,
        "Production_year": Production_year_prompt,
        "Cast_members":Cast_members_prompt
        }
    return TvSerie
}

function randomizeCast(tvSerie){
    list_cast=tvSerie["Cast_members"]
    l=list_cast.length
    randomlist=[]
    for( i=1;i<=l;i++){
        random=Math.floor(Math.random()*l);
        while (randomlist.includes(list_cast[random])){
            random=Math.floor(Math.random()*l);
        }
        randomlist.push(list_cast[random]);
    }
    return randomlist   
    
}

function newcast(){
    tvSerie=askTvSerie()
    newcast_list=randomizeCast(tvSerie)
    return "The cast of your next series will be"+" "+ newcast_list
}

console.log(newcast())