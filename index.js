let s=document.querySelector(".src");
let btn=document.querySelector(".search-btn");
let input=document.querySelector(".search-input");
btn.addEventListener("click",(event)=>{
  event.preventDefault();
  if(input.value==""){
    alert("TYPE SOMETHING IN THE SEARCH BOX");
    return;
  }
  let i=input.value.toLowerCase();
    s.innerHTML='<p class="src">You searched for: "'+i+'"</p><p class="src">Sorry, no results found for "'+i+'". </p><p class="src">Please try again with different keywords.</p><br>';
    input.value="";
})