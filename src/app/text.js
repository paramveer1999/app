

let names=["CITY"];
let word=names[0];
let text="";
let boolval=false;
let idx=0;
let write=document.querySelector("#changing-text");
window.addEventListener("load",function(){
    typewords();
})

function typewords(){
    if(text.length==word.length){
        boolval=true;
    }
    if(text.length==0&&boolval){
        boolval=false;
        idx++;
        idx= idx % names.length;
        word=names[idx];
        console.log("param");
    }
    


    text=boolval?word.substring(0,text.length-1):word.substring(0,text.length+1);
   

    setTimeout(typewords,boolval?300:200);

}