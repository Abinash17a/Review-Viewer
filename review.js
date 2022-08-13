// var i=document.getElementsByTagName("img");
// const n=document.getElementsByClassName("Name");
// const r=document.getElementsByClassName("Role");
// const Para=document.getElementsByTagName("p");

const lbtn=document.querySelector(".leftbtn");


var count=1;

    // Right Btn

document.querySelector(".rightbtn").addEventListener("click",function(){
    count++;
    if(count>3){
        count=1;
    }
    document.querySelector("img").setAttribute("src","image"+count+".png");
    if(count==1){
        document.querySelector(".Name").textContent="Uzumaki Naruto";
        document.querySelector(".Role").textContent="Hokage";
        document.querySelector("p").textContent="asdsadasdasdasdasdasasddasdasadasasdasdasdasaasdasdasdasdasdasdasdasdadsd";
    }
     else if(count==2){
        document.querySelector(".Name").textContent="Hinata Hyuga";
        document.querySelector(".Role").textContent="Ninja";
        document.querySelector("p").textContent="asdsadasdasdasdasdasasddasdasd";
    }
    else if(count==3){
        document.querySelector(".Name").textContent="Kurama";
        document.querySelector(".Role").textContent="Tailed beast";
        document.querySelector("p").textContent="asdsadasdasdasdasdasasdfgddhghgdgfdcvhdddhdasdasd";

    }
    

});

        // Left Btn

    document.querySelector(".leftbtn").addEventListener("click",function(){
        count--;
        if(count<0){
            count=3;
        }

    document.querySelector("img").setAttribute("src","image"+count+".png");
    if(count==1){
        document.querySelector(".Name").textContent="Uzumaki Naruto";
        document.querySelector(".Role").textContent="Hokage";
        document.querySelector("p").textContent="asdsadasdasdasdasdasasddasdasadasasdasdasdasaasdasdasdasdasdasdasdasdadsd";
    }
    else if(count==2){
        document.querySelector(".Name").textContent="Hinata Hyuga";
        document.querySelector(".Role").textContent="Ninja";
        document.querySelector("p").textContent="asdsadasdasdasdasdasasddasdasd";
    }

});



