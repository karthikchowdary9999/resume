function loadjson(file,callback){
	 var xhr=new XMLHttpRequest();
	 xhr.overrideMimeType("application/json");
	 xhr.open("GET",file,true);
	 xhr.onreadystatechange=function() {
	 if (xhr.readyState ===4 && xhr.status=="200") {
	 	callback(xhr.responseText);
	    }	
	 }
	 xhr.send();
}
loadjson("data.json",function(text){
     let data=JSON.parse(text);
     console.log(data);
     basic(data.details);
     edu(data.education);
     skills(data.skills);
})
var main=document.querySelector(".main");
var left=document.createElement("div");
left.classList.add("left");
main.appendChild(left);
function basic(MIC){
	var image=document.createElement("img");
     image.src=MIC.image;
     left.appendChild(image);
     var name=document.createElement("h2");
     name.textContent=MIC.name;
     left.appendChild(name);
   var email=document.createElement("h2");
     email.textContent=MIC.email;
     left.appendChild(email);  
 var phone=document.createElement("h2");
     phone.textContent=MIC.phone;
     left.appendChild(phone);
 }
  var right=document.createElement("div");
  right.classList.add("right");
  main.appendChild(right);
  function edu(education){
  	var e=document.createElement("h1");
  	e.textContent="Education details";
  	right.appendChild(e);
  	e.appendChild(document.createElement("HR"));
  	var un=document.createElement("ul")
  	e.appendChild(un);
  	for(var i=0;i < education.length;i++){
  		var l=document.createElement("li");
  		l.textContent=education[i].course;
  		un.appendChild(l);
  		//un.appendChild(document.createElement(HR));
  		var l1=document.createElement("li");
  		l1.textContent=education[i].college;
  		un.appendChild(l1);
  	}
  } 
function skills(skilldata){
      var s=document.createElement("div");
      s.classList.add("sset");
      right.appendChild(s);
      var head=document.createElement("h2");
      head.textContent="skills set";
      s.appendChild(head);
      
      var t=document.createElement("table");
      var tabledata=""
      for (var i = 0; i < skilldata.length;i++){
      	tabledata="<tr><td>"+skilldata[i].title+"</td><td>"+skilldata[i].output+"</td></tr>";
        t.innerHTML=tabledata;
    }
         head.appendChild(t);
     }





