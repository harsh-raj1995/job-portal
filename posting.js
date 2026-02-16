let title = document.querySelector("#jobTitle");
let company = document.querySelector("#company");
let loc = document.querySelector("#location");
let description = document.querySelector("#description");
let range = document.querySelector("#range");
let submitBtn = document.querySelector("#submitBtn");
let list = document.querySelector("#ol")

submitBtn.addEventListener("click", addjob)

function addjob(){
    let t=title.value;
    let c=company.value;
    let l=loc.value;
    let d=description.value;
    let r=range.value;

    if(t=="" || c=="" || l=="" || d=="" || r==""){
        alert("Please fill all the fields")
        return
    }
    alert("Job posted successfully!")
    let li=document.createElement("li")
    li.innerHTML="<h2>"+t+"<br></h2><h3>Company: "+c+"</h3><p>Location: "+l+"</p><p>Description: "+d+"</p><p>Salary Range: "+r+"</p><form><button class='updateBtn'>Update</button><button class='deleteBtn'>Delete</button></form>"
    
    list.appendChild(li)

    title.value="";
    company.value="";
    location.value="";
    description.value="";
    range.value="";
}

