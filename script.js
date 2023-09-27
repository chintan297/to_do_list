var form1 = document.getElementById("form")
var text = document.getElementById("input")
var submitBtn = document.getElementById("submit")
var msg = document.getElementById("msg")
var post = document.getElementById("data")

form1.addEventListener("submit",(e)=>{
    e.preventDefault()
    formValidation()
})
formValidation=()=>{
    if(text.value === ""){
        msg.innerHTML = "Message is blanked"
        console.log("Blnak Message")
    }
    else{
        console.log("Success")
        msg.innerHTML = ""
        acceptData()
    }
}
var data ={}
let acceptData=()=>{
    data["text"] = text.value
    console.log(data)
    createPost()
}

let createPost=()=>{
    console.log("Post are created")
    post.innerHTML +=   `
    <div id="data">
        <p>${data.text}</p>
          <span class="option">
            <button class="btn" onclick="handleEdit(this)">Edit</button>
            <button class="btn" onclick="handleDelete(this)">Delete</button>
          </span>
        
      </div>
    `
    text.value=""
}

let handleDelete=(e)=>{
    console.log("delete ho gya")
    e.parentElement.parentElement.remove()
}
let handleEdit=(e)=>{
    text.value = e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove();

}

