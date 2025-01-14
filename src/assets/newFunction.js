 import { newButton,span,newInput,editButton,deleteButton} from "./consts.js"
 export function newFunction(){
    newButton.addEventListener("click",()=>{
        span.style.display="block"
        span.textContent=newInput.value
        newInput.style.display="none"
        newButton.style.display="none"
        editButton.style.display="block"
        deleteButton.style.display="block"
        })
}