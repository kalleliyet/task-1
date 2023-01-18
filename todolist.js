let button = document.querySelector("button");

      let liste = document.querySelector("ul");

      let input = document.querySelector("input");

      button.addEventListener("click", addTodo);
let i=0;
let l=[];
document.addEventListener("onekeydown",e=>{
  if(e.key==="enter"){
    addTodo()
  };
})

function addTodo() {
  i++;
  l.push(i);
  
  
  if (input.value===''){
    alert("it's empty");
  }
  else{
    let li=document.createElement("li")

    let s1=document.createElement("span")
    let cbox=document.createElement("input")
    cbox.setAttribute('type',"checkbox")
    li.appendChild(cbox)
    let s2=document.createElement("span");
    s2.innerHTML=input.value;
    li.appendChild(s2);
    let deleteButton=document.createElement('button');
    deleteButton.innerText='Delete';
    deleteButton.setAttribute('id',i);
    
    li.appendChild(deleteButton)
    li.setAttribute("style","display:flex;flex-direction:row;")
    liste.appendChild(li);
    deleteButton.addEventListener("click",function(){
      liste.removeChild(li)
    })
    cbox.addEventListener("click",function(){
      if(!cbox.checked){
        s2.setAttribute("style","text-decoration:none")
      }
      else{
      s2.setAttribute("style","text-decoration: line-through")}
    })
  }
  input.value ="";
  
  

}
