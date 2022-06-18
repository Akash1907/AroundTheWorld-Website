const panels=document.querySelectorAll('.panel');

panels.forEach(panel=>{
    panel.addEventListener("click",function(){
        removeActiveClasses();
        panel.classList.add("active");
    })
})

function removeActiveClasses(){
    panels.forEach(panels=>{
        panels.classList.remove("active");
    })
}