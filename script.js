

let line1=document.getElementById("line1");
let line2=document.getElementById("line2");
let myFhoto=document.querySelector(".profilePhoto");
let myName=document.querySelector(".myName");
let DropDownMenuDiv=document.querySelector(".dropDownMenuDiv");
let optionsDiv=document.querySelector(".optionsDiv");
let hr=document.querySelector(".hr");
hr.style.opacity=0;

function changeTheStyle(){
	let properity=parseInt( window.getComputedStyle(DropDownMenuDiv).getPropertyValue("width") );

	if(properity==70){
		DropDownMenuDiv.style.width="310px";
		DropDownMenuDiv.style.transition="0.5s";
		
		myFhoto.style.zIndex=1;
		myFhoto.style.transition="0.5s";
		
		myName.style.zIndex=1;
		myName.style.transition="0.5s";
		
		line1.style.transform="rotate(40deg)";
		line1.style.boxShadow="0px 0px 0px white";
		line1.style.transition="0.5s";
		
		line2.style.transform="rotate(-40deg)";
		line2.style.top="47%";
		line2.style.transition="0.5s";
		
		optionsDiv.style.width="310px";
		optionsDiv.style.height="350px";
		optionsDiv.style.top="24%";
		optionsDiv.style.transition="0.5s";
		optionsDiv.style.zIndex="2";
		
		hr.style.opacity=1;
		hr.style.transition="0.5s";
	}
	if(properity==310){
		DropDownMenuDiv.style.width="70px";
		DropDownMenuDiv.style.transition="0.5s";
		
		myFhoto.style.zIndex=-1;
		myName.style.zIndex=1;
		
		line1.style.transform="rotate(0deg)";
		line1.style.boxShadow=" 0px 10px 0px black";
		
		line2.style.transform="rotate(0deg)";
		line2.style.top="34%";
		
		optionsDiv.style.width="30px";
		optionsDiv.style.height="25px";
		optionsDiv.style.top="10%";
		optionsDiv.style.transition="0.5s";
		optionsDiv.style.zIndex="-1";	

		hr.style.opacity=0;
		hr.style.transition="0.5s";
	}
}