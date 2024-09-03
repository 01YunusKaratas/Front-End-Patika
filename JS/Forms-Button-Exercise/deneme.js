
let formDom = document.querySelector("#userForm");//user içerik alındı
formDom.addEventListener("submit",forms);

function forms(event){
    event.preventDefault();
    //form submit edilince bilgiler alındı.
    const nameDom = document.querySelector("#name") //name içerik alındı
    const surnameDom=document.querySelector("#surname");//surname içerik alındı.
    if(nameDom.value.length >0 && surnameDom.value.length>0){
        this.focus();
        userList(nameDom.value ,surnameDom.value)
    }else{
        alert("Lütfen kayıt için isim soyisim giriniz.")
        console.log("isim veya soyisim girilmedi")
    }

}

let userlistesi =document.querySelector("#listUser");
function userList(name,surname){
    let liDom = document.createElement("li");
    liDom.innerHTML= `${name} ${surname}`
    liDom.classList.add("list-group-item" , "d-flex" ,"justify-content-between" ,"align-items-center");

    userlistesi.append(liDom);
}


const resetbuttonu = document.querySelector("#resetle");

resetbuttonu.addEventListener("click",rest)

function rest(){
    const içerik = document.querySelector("#listUser");
    içerik.innerHTML="";
}














