

//Homework JS document

let info= document.querySelector("#app");
let note = prompt("Please enter the note :");



if(note<0 || note>100){
    info.innerHTML="Please enter the correct valid value !!!";
}else{
    let smiley = "<span>😊</span>"; // Gülen yüz simgesi
    let bad ="<span>😰</span>";
    if(note>=90 && note<=100){
        info.innerHTML ="AA" + smiley;
    }else if(note>=85 && note<=89){
        info.innerHTML ="BA"+ smiley;
    }else if(note>=80 && note<=84){
        info.innerHTML ="BB"+ smiley;
    }else if(note>=75 && note<=79){
        info.innerHTML ="CB"+ smiley;
    }else if(note>=70 && note<=74){
        info.innerHTML ="CC"+ smiley;
    }else if(note>=65 && note<=69){
        info.innerHTML ="DC"+ smiley;
    }else if(note>=60 && note<=64){
        info.innerHTML ="DD"+ smiley;
    }else if(note>=50  && note<=59){
        info.innerHTML ="FD"+ smiley;
    }else if(note>=0 && note<=49){
        info.innerHTML ="FF" +bad;
    }
    
}