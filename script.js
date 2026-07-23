const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");
const page3 = document.getElementById("page3");

document.getElementById("startBtn").onclick = () => {

page1.classList.add("hidden");
page2.classList.remove("hidden");

};

const memberData = {

jungwon:{
name:"Yang Jungwon",
age:"Age: 22",
birthday:"Birthday: February 9, 2004",
nationality:"Nationality: Korean",
position:"Leader",
image:"images/jungwon.jpg",
qualities:["Responsible","Cute","Talented","Calm"]
},

heeseung:{
name:"Lee Heeseung",
age:"Age: 24",
birthday:"Birthday: October 15, 2002",
nationality:"Nationality: Korean",
position:"Main Vocalist",
image:"images/heeseung.jpg",
qualities:["All-rounder","Hardworking","Kind","Charismatic"]
},

jay:{
name:"Park Jongseong (Jay)",
age:"Age: 24",
birthday:"Birthday: April 20, 2002",
nationality:"Nationality: Korean-American",
position:"Rapper",
image:"images/jay.jpg",
qualities:["Funny","Confident","Caring","Stylish"]
},

jake:{
name:"Jake Sim",
age:"Age: 23",
birthday:"Birthday: November 15, 2003",
nationality:"Nationality: Australian",
position:"Vocalist",
image:"images/jake.jpg",
qualities:["Sweet","Friendly","Gentle","Loyal"]
},

sunghoon:{
name:"Park Sunghoon",
age:"Age: 23",
birthday:"Birthday: December 8, 2003",
nationality:"Nationality: Korean",
position:"Visual",
image:"images/sunghoon.jpg",
qualities:["Elegant","Cool","Hardworking","Calm"]
},

sunoo:{
name:"Kim Sunoo",
age:"Age: 23",
birthday:"Birthday: June 24, 2003",
nationality:"Nationality:" +
" Korean",
position:"Vocalist",
image:"images/sunoo.jpg",
qualities:["Cheerful","Cute","Bright","Lovely"]
},

niki:{
name:"Nishimura Riki (Ni-ki)",
age:"Age: 20",
birthday:"Birthday: December 9, 2005",
nationality:"Nationality: Japanese",
position:"Main Dancer",
image:"images/niki.jpg",
qualities:["Amazing Dancer","Energetic","Funny","Hardworking"]
}

};

document.querySelectorAll(".member").forEach(button=>{

button.onclick=()=>{

let selected=button.dataset.member;

let member=memberData[selected];

page2.classList.add("hidden");
page3.classList.remove("hidden");

document.getElementById("memberImage").src=member.image;
document.getElementById("memberName").innerHTML=member.name;
document.getElementById("memberAge").innerHTML=member.age;
document.getElementById("memberBirthday").innerHTML=member.birthday;
document.getElementById("memberNationality").innerHTML=member.nationality;
document.getElementById("memberPosition").innerHTML=member.position;

let list=document.getElementById("qualities");

list.innerHTML="";

member.qualities.forEach(q=>{

list.innerHTML+=`<li>💙 ${q}</li>`;

});

};

});

document.getElementById("nextBtn").onclick=()=>{

alert("Next page coming in Step 5!");

};

