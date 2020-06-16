function onboardingskip() {
	
}

function onboardingstart() {
	document.getElementById('welcomepopup').style.display = "none";
	document.getElementById('onboardingskip').style.opacity = "1";
	document.getElementById('counter').style.opacity = "1";
	document.getElementById('step1').style.opacity = "1";

}

function nextstep(step) {
	if (step == 1)
	{
		document.getElementById('step1').style.opacity = "0";
		document.getElementById('counter').innerHTML = "2/10";
		document.getElementById('projectadd').style.zIndex = "16";
		document.getElementById('step2').style.opacity = "1";
	}
	else if (step == 2)
	{
		document.getElementById('c1').style.opacity = "0";
		document.getElementById('c2').style.opacity = "0";
		document.getElementById('step1').style.display = "none";
		document.getElementById('step2').style.opacity = "0";
		document.getElementById('counter').innerHTML = "3/10";
		document.getElementById('step3').style.opacity = "1";
		document.getElementById('step3' ).style.zIndex = "16";
		document.getElementById('tijdall').style.opacity = "1";
	}
	else if (step == 3)
	{	
		document.getElementById('step2').style.display = "none";
 		document.getElementById('step3').style.opacity = "0";
 		document.getElementById('step4').style.opacity = "1";
 		document.getElementById('step4a').style.opacity = "1";
 		document.getElementById('step4').style.zIndex = "16";
 		document.getElementById('step4a').style.zIndex = "16";
 		document.getElementById('bgfade').style.display = "none";
 		document.getElementById('kaartfade').style.opacity = "0.7";
 		document.getElementById('k1').style.top = "630px";
 		document.getElementById('k4').style.opacity = "1";
 		document.getElementById('k4').style.zIndex = "15";
 		document.getElementById('counter').innerHTML = "4/10";
	}
	else if (step == 4)
	{	
		document.getElementById('step3').style.display = "none";
		document.getElementById('k1c').style.opacity = "0";
		document.getElementById('k1c').style.display = "none";
		document.getElementById('counter').innerHTML = "5/10";
		document.getElementById('k2c').style.display = "block";
		document.getElementById('k1').style.top = "667px";
		document.getElementById('k2c').style.opacity = "1";
		document.getElementById('step4').style.opacity = "0";
 		document.getElementById('step4a').style.opacity = "0";
 		document.getElementById('step5').style.opacity = "1";
 		document.getElementById('step5').style.zIndex = "16";
	}



 
}