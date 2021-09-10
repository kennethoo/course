let stateop=0
let bar= document.getElementById("bar")
let boxcourser = document.querySelectorAll(".box-courser")
if (localStorage.currentpage) {
	boxcourser[parseInt(localStorage.currentpage)].style.display="flex"
	stateop=parseInt(localStorage.currentpage)
let progress= (stateop + 1) * 100 / boxcourser.length 
bar.style.width=`${progress}%`
if (progress==100) {
	bar.style.backgroundColor=`#2ECC71`
}
}else{
	boxcourser[0].style.display="flex"
}

let presentationcourser = document.getElementById("presentation-courser") 
let boxchange= document.getElementById("box-to-mode")
let changemode = document.getElementById("swich")
let nav = document.getElementById("nav")
let state="close";
let min
let sec
let hour
let data 
if (localStorage.blacktheme) {
	darkmode()
	state="open"
}

boxchange.addEventListener("click",function(){

	if (state=="close") {
		
       darkmode()
       localStorage.setItem("blacktheme","black")
       state="open"


	}else{
		
       normalmode()
        localStorage.removeItem("blacktheme")
        state="close"
      
	}
	
	
})

function darkmode(){
	boxchange.style.backgroundColor="#000";
       boxchange.style.left="30px";
       changemode.style.backgroundColor="#2E86C1";
	document.querySelector("html").style.backgroundColor="#181818"
	document.querySelector("html").style.color="#fff"
boxchange.style.boxShadow="1px 1px 5px rgb(255,255,255,0.1)"
document.getElementById("back").style.color="white"
}

function normalmode(){
	  changemode.style.backgroundColor="#707B7C";
		  boxchange.style.backgroundColor="white";
       boxchange.style.left="0px";
	document.querySelector("html").style.backgroundColor="#fff"
	document.querySelector("html").style.color="#181818"
	boxchange.style.boxShadow="2px 2px 10px rgb(0,0,0,0.5)"
	document.getElementById("back").style.color="#181818"
}

let hamberger =document.getElementById("hamberger")
hamberger.onclick=function(){
	nav.style.display="flex"
	nav.style.transform="translateY(0vh)"
}
let close=document.getElementById("close")
close.onclick=function(){
	nav.style.transform="translateY(100vh)"

}
let playbu = document.querySelectorAll(".overlay-play")
playbu.forEach(play=>{
play.addEventListener("click", function(e){
	let x
let video=e.target.parentElement.parentElement.parentElement.children[0].children[0]
let barpro=e.target.parentElement.parentElement.parentElement.children[1].children[0]
let timeleft=e.target.parentElement.parentElement.children[2].children[0]
let timeend=e.target.parentElement.parentElement.children[2].children[1]
let playorplause=e.target.parentElement.children[1]
//let timeendnumber= convert(video.duration.toFixed(2)) 

convert(parseInt(video.duration.toFixed(2)))

timeend.innerText=data
if (video.classList.contains("play")) {
video.pause()
video.classList.remove("play")
playorplause.innerHTML=`<i class="fas fa-play op"></i>`
}
else{
video.classList.add("play")
video.play()
playorplause.innerHTML=`<i class="fas fa-pause op"></i>`
x=setInterval(function(){
	if (video.classList.contains("play")) {
		getcurrentTime()


	}else{
		clearInterval(x)
	}

	
},1000)

function getcurrentTime(){
let currentime= parseInt(video.currentTime.toFixed(2))
let percent = (video.currentTime *100)/video.duration
barpro.style.width=`${percent}%`
let data
const hours =  Math.floor(currentime / 60 / 60);  
  const minutes = Math.floor(currentime / 60) - (hours * 60);
sec= currentime % 60;
data=`${hours}:${minutes}:${sec}`
if (hours<=0) {
data=`${minutes}:${sec}`
}
if (minutes<=0) {
data= `00:${sec}`

}
timeleft.innerText=data



}
}

})
	
})

                 

function convert(s){
const hours =  Math.floor(s / 60 / 60);  
  const minutes = Math.floor(s / 60) - (hours * 60);
sec= s % 60;
data=`${hours}:${minutes}:${sec}`
if (hours<=0) {
data=`${minutes}:${sec}`
}
if (minutes<=0) {
data= `00:${sec}`

}

}


let back = document.getElementById("back")
let next= document.getElementById("next")
back.onclick=function(){
if (stateop>0) {
	stateop--
pagemove(stateop)
	}
	}

next.onclick=function(){
if (stateop<=boxcourser.length -2) {
	
stateop++
pagemove(stateop)
	}
}

function pagemove(s){

let pageindex=-1
boxcourser.forEach(page=>{
pageindex++
if (pageindex==s) {
if (s==0) {
let nextpage=boxcourser[pageindex]
localStorage.setItem("currentpage", pageindex)
nextpage.style.display="flex"
}else{
let nextpage=boxcourser[pageindex]
let previous=boxcourser[pageindex-1]
nextpage.style.display="flex"
previous.style.display="none"
localStorage.setItem("currentpage", pageindex)
let progress= (pageindex + 1) * 100 / boxcourser.length 
bar.style.width=`${progress}%`
if (progress==100) {
	bar.style.backgroundColor=`#2ECC71`
}


}
	
}else{
	page.style.display="none"
}
})
}