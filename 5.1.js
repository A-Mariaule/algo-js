function askTvSerie(){
    Name_prompt=prompt("What is the name of your favorite TV serie")
    Production_year_prompt=prompt("which year the Tv serie was producted")
    Cast_members_prompt=[]
    x=prompt("What is the name of a cast member")
    Cast_members_prompt.push(x)
    while (x!=""){
        x=prompt("What is the name of a another cast member(press enter if you have finish")
        Cast_members_prompt.push(x)
    }
    Cast_members_prompt.pop()
    let TvSerie={"Name":Name_prompt,"Production_year": Production_year_prompt,"Cast_members":Cast_members_prompt}
    return TvSerie
}



console.log(askTvSerie())