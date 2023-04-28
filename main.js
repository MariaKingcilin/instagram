let showIcon=document.getElementsByClassName("heart-show");
let hideIcon=document.getElementsByClassName("insta-bg-icon");

for(let i=0;i<showIcon.length;i++){
	showIcon[i].addEventListener("click",function(){
		let parents=this.parentNode;
		parents.getElementsByClassName("insta-bg-icon")[0].classList.remove("heart-hide");
		let count=parents.getElementsByClassName("values")[0];
		let valuee=count.innerHTML;
		let valuees=parseInt(valuee);
		valuees+=1;
		count.innerHTML=valuees+" Likes";
	});

	hideIcon[i].addEventListener("click",function(){
		let parents=this.parentNode;
		this.classList.add("heart-hide");
		let count=parents.getElementsByClassName("values")[0];
		let valuee=count.innerHTML;
		let valuees=parseInt(valuee);
		valuees-=1;
		count.innerHTML=valuees+" Likes";
	});

	let shareBtn=document.getElementsByClassName("share");
	let closeBtn=document.getElementsByClassName("close");

	shareBtn[i].addEventListener("click",function(){
		let main=this.parentNode;
		let mainSec=main.parentNode;
		mainSec.getElementsByClassName("insta-bg-share")[0].classList.add("share-bg");
	});

	closeBtn[i].addEventListener("click",function(){
		let main=this.parentNode;
		main.classList.remove("share-bg");
	});
	
	let saveBtn=document.getElementsByClassName("save-icon");
	let savedBtn=document.getElementsByClassName("hide-icon");
	
	saveBtn[i].addEventListener("click",function(){
		let save=this.parentNode;
		let saved=save.parentNode.parentNode;
		let hide=saved.getElementsByClassName("insta-icon-show")[0];
		hide.classList.add("show-save");
		saved.getElementsByClassName("insta-icon-save")[1].classList.remove("icon-hide");
		let i=1;
		if(i==1){
			setInterval(remove,2000);
		}
		function remove(){
			if(hide.classList.contains("show-save")){
				hide.classList.remove("show-save");
			}
		}
	});
	
	savedBtn[i].addEventListener("click",function(){
		let save=this.parentNode;
		let saved=save.parentNode.parentNode;
		let hide=saved.getElementsByClassName("insta-icon-show")[1];
		hide.classList.add("show-save");
		saved.getElementsByClassName("insta-icon-save")[1].classList.add("icon-hide");
		let i=1;
		if(i==1){
			setInterval(remove,2000);
		}
		function remove(){
			if(hide.classList.contains("show-save")){
				hide.classList.remove("show-save");
			}
		}
	});
}