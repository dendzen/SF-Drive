let coll = document.getElementsByClassName("main-questions-block__collapsible");
let i;

for(i = 0; i < coll.length; i++){
    coll[i].addEventListener("click", function(){
        this.classList.toggle("main-questions-block__active");
        let content = this.nextElementSibling;
        if(content.style.maxHeight){
            content.style.maxHeight = null;
        }else{
            content.style.maxHeight = content.scrollHeight + "px"
        }
    })
}