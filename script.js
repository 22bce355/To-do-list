let tasklist=[];
function doit(){
    let a= document.querySelector('#textread').value;
    if(a=='') alert("you have to write something!");
    else {
        let my= document.createElement("li");
        my.innerHTML=a;
        listt.appendChild(my);
        let b=document.querySelector('#textread');
        b.value="";
        my.addEventListener("click",function(){
            my.style.textDecoration="line-through";
        })
        my.addEventListener("dblclick",function(){
           listt.removeChild(my);
        })
    }
    

}
