window.localStorage.setItem("NieuwOpSite", "Nee");

function onboardingskip() {
	document.getElementById('welcomepopup').style.display = "none";
	document.getElementById('step1').style.display = "none";
	document.getElementById('step2').style.display = "none";
	document.getElementById('step3').style.display = "none";
	document.getElementById('step4').style.display = "none";
	document.getElementById('step4a').style.display = "none";
	document.getElementById('step5').style.display = "none";
	document.getElementById('step6').style.display = "none";
	document.getElementById('step7').style.display = "none";
	document.getElementById('step8').style.display = "none";
	document.getElementById('step9').style.display = "none";
	document.getElementById('step10').style.display = "none";
	document.getElementById('bgfade').style.display = "none";
	document.getElementById('tijdall').style.display = "none";
	document.getElementById('counter').style.display = "none";
	document.getElementById('onboardingskip').style.display = "none";
	document.getElementById('c1').style.display = "none";
	document.getElementById('c2').style.display = "none";
	document.getElementById('c4').style.display = "flex";
	document.getElementsByTagName("BODY")[0].style.background = "#E1E8F0";
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
		document.getElementById('c1').style.display = "none";
		document.getElementById('c2').style.display = "none";
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
	else if (step == 5)
	{	
		document.getElementById('step4').style.display = "none";
		document.getElementById('step4a').style.display = "none";
		document.getElementById('k2c').style.opacity = "0";
		document.getElementById('k2c').style.display = "none";
		document.getElementById('counter').innerHTML = "6/10";
		document.getElementById('k3c').style.display = "block";
		document.getElementById('k1').style.top = "667px";
		document.getElementById('k3c').style.opacity = "1";
		document.getElementById('step5').style.opacity = "0";
		document.getElementById('step5').style.zIndex = "0";
 		document.getElementById('step6').style.opacity = "1";
 		document.getElementById('step6').style.zIndex = "16";
	}
	else if (step == 6)
	{	
		document.getElementById('step5').style.display = "none";
		document.getElementById('k3c').style.opacity = "0";
		document.getElementById('k3c').style.display = "none";
		document.getElementById('counter').innerHTML = "7/10";
		document.getElementById('k4c').style.display = "block";
		document.getElementById('k1').style.top = "455px";
		document.getElementById('k4c').style.opacity = "1";
		document.getElementById('step6').style.opacity = "0";
		document.getElementById('step6').style.zIndex = "0";
 		document.getElementById('step7').style.opacity = "1";
 		document.getElementById('step7').style.zIndex = "16";
	}
	else if (step == 7)
	{	
		document.getElementById('step6').style.display = "none";
		document.getElementById('counter').innerHTML = "8/10";
		document.getElementById('step7').style.opacity = "0";
		document.getElementById('step7').style.zIndex = "0";
 		document.getElementById('step8').style.opacity = "1";
 		document.getElementById('step8').style.zIndex = "16";
 		document.getElementById('k1').style.zIndex = "12";

	}
	else if (step == 8)
	{	
		document.getElementById('step7').style.display = "none";
		document.getElementById('counter').innerHTML = "9/10";
		document.getElementById('step8').style.opacity = "0";
		document.getElementById('step8').style.zIndex = "0";
 		document.getElementById('step9').style.opacity = "1";
 		document.getElementById('step9').style.zIndex = "16";
 		document.getElementById('kaartfade').style.display = "none";
 		document.getElementById('bgfade').style.display = "block";
 		document.getElementById('bgfade').style.zIndex = "0";
	}
	else if (step == 9)
	{	
		document.getElementById('step8').style.display = "none";
		document.getElementById('counter').innerHTML = "10/10";
		document.getElementById('step9').style.opacity = "0";
		document.getElementById('step9').style.zIndex = "0";
 		document.getElementById('step10').style.opacity = "1";
 		document.getElementById('step10').style.zIndex = "16";
 		document.getElementById('tijdall').style.display= "none";
 		document.getElementById('c3').style.display= "flex";
 		document.getElementById('onboardingskip').style.display = "none";
	}
	else if (step == 10)
	{	
		location.href='projects.php';
		document.getElementById('step8').style.display = "none";
		document.getElementById('counter').style.display = "none";
		document.getElementById('onboardingskip').style.display = "none";
		document.getElementById('step9').style.display = "none";
		document.getElementById('step10').style.display = "none";
		document.getElementById('bgfade').style.display = "none";
 		document.getElementById('tijdall').style.display= "none";
 		document.getElementsByTagName("BODY")[0].style.background = "#E1E8F0";
	}



 
}