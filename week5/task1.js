function deter(){
	const num1=document.querySelector('#num1');
	const num2=document.querySelector('#num2');
	const num3=document.querySelector('#num3');
	const num4=document.querySelector('#num4');
	const num5=document.querySelector('#num5');
	const num6=document.querySelector('#num6');
	const num7=document.querySelector('#num7');
	const num8=document.querySelector('#num8');
	const num9=document.querySelector('#num9');
	let x=parseInt(num1.value)*parseInt(num5.value)*parseInt(num9.value) +
	 parseInt(num2.value)*parseInt(num6.value)*parseInt(num7.value) + 
	 parseInt(num3.value)*parseInt(num4.value)*parseInt(num8.value)-
	 parseInt(num3.value)*parseInt(num5.value)*parseInt(num7.value) -
	 parseInt(num6.value)*parseInt(num8.value)*parseInt(num1.value)-
	 parseInt(num9.value)*parseInt(num2.value)*parseInt(num4.value);
	document.querySelector('#res').innerHTML=x;
}