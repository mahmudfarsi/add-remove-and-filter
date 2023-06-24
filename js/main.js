let form = document.getElementById("form");
let input = document.getElementById("input");
let list = document.querySelector("ul.list-group");
let filter = document.getElementById("filter");
let data = JSON.parse(localStorage.getItem("tasks"))??[];
let clearAll = document.getElementById("clearAll");


  
 
form.addEventListener("submit",function(e){
  e.preventDefault();

  let task = input.value;
  data.push(task);
  localStorage.setItem("tasks",JSON.stringify(data));
  input.value = "";
  let li = document.createElement("li");
  li.classList = "list-group-item mb-3 rl";
  list.appendChild(li);
  li.textContent = task;
  let i = document.createElement("i");
  i.className = "fas fa-times text-danger float-end mt-1 delete";
  i.style.cursor ="pointer";
  li.appendChild(i);
  list.appendChild(li);
})



data.forEach(function(value){
  let li = document.createElement("li");
  li.classList = "list-group-item mb-3  rl";
  list.appendChild(li);
  li.textContent = value;
  let i = document.createElement("i");
  i.className = "fas fa-times text-danger float-end  mt-1 delete";
  i.style.cursor ="pointer";
  li.appendChild(i);
  list.appendChild(li);
});



clearAll.addEventListener("click",function(){
  localStorage.clear();
  list.innerHTML = "";
});


filter.addEventListener("keyup",function(e){
  let x = e.target.value.toLocaleLowerCase(); //English
  document.querySelectorAll("li.rl").forEach(function(value){
    if(value.textContent.toLocaleLowerCase().indexOf(x) == -1){
      value.style.display = "none";
    }else{
      value.style.display = "block";
    }
  })
})

list.addEventListener("click",function(e){
  let el = e.target.textContent;
  let findData = data.indexOf(el);
  data.splice(findData,1)
  if(e.target.classList.contains("delete")==true){
    let p = e.target.parentElement;
    p.style.display = "none";
    localStorage.setItem("tasks",JSON.stringify(data))
  }
  
  
})