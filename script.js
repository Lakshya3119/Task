function validation(){
    var ema = document.getElementById('exampleInputEmail3').value;
    var user = document.getElementById('exampleInputPassword3').value;
    var auser = document.getElementById('firstname').value;
    var buser = document.getElementById('lastname').value;
    var code = document.getElementById('areacode').value;
    var mob = document.getElementById('telnum').value;
    var aema = document.getElementById('emailid"').value;
    var feed = document.getElementById('feedback').value;
    if(ema==""){
		document.getElementById('email').innerHTML="**Please fill the Patient's email";
		return false;
	}
	if(ema.indexOf('@')<=0){
		document.getElementById('email').innerHTML="**Invalid email address";
		return false;
	}
	if((ema.charAt(ema.length-4)!='.')&&(ema.charAt(ema.length-3)!='.')){
		document.getElementById('email').innerHTML="**Invalid email address";
		return false;
    }
    if(user==""){
		document.getElementById('username').innerHTML="**Please fill the Patient name field";
		return false;
	}
	if((user.length<=6)||(user.length>100)){
		document.getElementById('username').innerHTML="**Name must contain characters between 2 and 100";
		return false;
    }
    if(auser==""){
		document.getElementById('username').innerHTML="**Please fill the Patient name field";
		return false;
	}
	if((auser.length<=6)||(auser.length>100)){
		document.getElementById('username').innerHTML="**Name must contain characters between 2 and 100";
		return false;
    }
    if(!isNaN(auser)){
		document.getElementById('username').innerHTML="**Only characters are allowed";
		return false;
    }
    if(buser==""){
		document.getElementById('username').innerHTML="**Please fill the Patient name field";
		return false;
	}
	if((buser.length<=6)||(buser.length>100)){
		document.getElementById('username').innerHTML="**Name must contain characters between 2 and 100";
		return false;
    }
    if(!isNaN(buser)){
		document.getElementById('username').innerHTML="**Only characters are allowed";
		return false;
    }
    if(code==""){
		document.getElementById('symptoms').innerHTML="**Please fill the symptoms field";
		return false;
    }
    if(mob==""){
		document.getElementById('mobile').innerHTML="**Please fill the Patient's mobile number";
		return false;
	}
	if(isNaN(mob)){
		document.getElementById('mobile').innerHTML="**Please enter digits only";
		return false;
	}
	if(mob.length!=10){
		document.getElementById('mobile').innerHTML="**Please enter correct mobile nummber";
		return false;
    }
    if(aema==""){
		document.getElementById('email').innerHTML="**Please fill the Patient's email";
		return false;
	}
	if(aema.indexOf('@')<=0){
		document.getElementById('email').innerHTML="**Invalid email address";
		return false;
	}
	if((aema.charAt(aema.length-4)!='.')&&(aema.charAt(aema.length-3)!='.')){
		document.getElementById('email').innerHTML="**Invalid email address";
		return false;
    }
    if(feed==""){
		document.getElementById('symptoms').innerHTML="**Please fill the symptoms field";
		return false;
    }
}