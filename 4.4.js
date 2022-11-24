keller5_list=["Arno Volts" ,"Aurélien Mariaule" ,"Aurore Lemaire" ,"Benjamin Porsont" ,"Céline Verreydt" ,"Corentin Miserque" ,"Dominique Coppée" ,"Edouard     de Romrée de Vichenet" ,"Hugo Goorickx ","Jofrey Houyoux" ,"Jonathan Manes" ,"jonathan bajoux" ,"Laura Wilhelmi" ,"Lysie Soyez" ,"Marnie Benalia" ,"Mathilde     Cornelis" ,"Milo Bonnet" ,"Nadim El Nakadi" ,"Nathalie Vanden Abeele" ,"Nathalie Goffette" ,"Nour Everaert" ,"Pierre Mauriello" ,"Quentin Bource ","Virginie Dourson"]

/**
 *Return a list of n elements, elements are selected randomly in inputAr
 *@param {Arrays} inputAr list of learners
*@param {Number} n A number, that should be greater than 0 and less than the length of inputAr
 */
function picklearner(inputAr,n){
    list=[];
    length=inputAr.length;
    if(n>length || n<=0){
        console.log("n must be greater than 0 and less than the length of list ")
    }
    else{
        m=Math.ceil(n)
        for( i=1;i<=m;i++){
            random=Math.floor(Math.random()*length);
            while (list.includes(inputAr[random])){
                random=Math.floor(Math.random()*length);
            }
            list.push(inputAr[random]);
        }
        return list
    }
}

console.log(picklearner(keller5_list,20))