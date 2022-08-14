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
        document.querySelector("p").textContent="Im gonna be a hokage dattebayo";
    }
     else if(count==2){
        document.querySelector(".Name").textContent="Hinata Hyuga";
        document.querySelector(".Role").textContent="Ninja";
        document.querySelector("p").textContent="Im a ninja";
    }
    else if(count==3){
        document.querySelector(".Name").textContent="Kurama";
        document.querySelector(".Role").textContent="Tailed beast";
        document.querySelector("p").textContent=" Konoha Nine tailed beast";

    }
    

});

        // Left Btn

    document.querySelector(".leftbtn").addEventListener("click",function(){
        count--;
        if(count<1){
            count=3;
        }

    document.querySelector("img").setAttribute("src","image"+count+".png");
    if(count==1){
        document.querySelector(".Name").textContent="Uzumaki Naruto";
        document.querySelector(".Role").textContent="Hokage";
        document.querySelector("p").textContent="Im gonna be a Hokage dattebayo";
    }
    else if(count==2){
        document.querySelector(".Name").textContent="Hinata Hyuga";
        document.querySelector(".Role").textContent="Ninja";
        document.querySelector("p").textContent="Im a ninja";
    }
    else if(count==3){
        document.querySelector(".Name").textContent="Kurama";
        document.querySelector(".Role").textContent="Tailed beast";
        document.querySelector("p").textContent=" Konoha Nine tailed beast";

    }
});
document.querySelector(".surp").addEventListener("click",function(){
   // var ran=randnum();
    function randnum(){
        return Math.floor(Math.random()*3)+1;
    }
    var ran=randnum();
   
    // while(ran===count){
    //     ran=randnum();
    // }
    if(ran===1){
        document.querySelector("img").setAttribute("src","image"+ran+".png");
        document.querySelector(".Name").textContent="Uzumaki Naruto";
        document.querySelector(".Role").textContent="Hokage";
        document.querySelector("p").textContent="Im gonna be a Hokage dattebayo";
    }
    else if(ran===2){
        document.querySelector("img").setAttribute("src","image"+ran+".png");
    document.querySelector(".Name").textContent="Hinata Hyuga";
        document.querySelector(".Role").textContent="Ninja";
        document.querySelector("p").textContent="Im a ninja";
    }
    else if(ran===3){
        document.querySelector("img").setAttribute("src","image"+ran+".png");
        document.querySelector(".Name").textContent="Kurama";
        document.querySelector(".Role").textContent="Tailed beast";
        document.querySelector("p").textContent=" Konoha Nine tailed beast";

    }
    
});


