
const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");

document.getElementById("startBtn").onclick = () => {

page1.classList.add("hidden");

page2.classList.remove("hidden");

};

const members = document.querySelectorAll(".member");

members.forEach(member=>{

member.onclick=()=>{

localStorage.setItem("bias",member.dataset.member);

alert("You selected "+member.innerText);

};

});
