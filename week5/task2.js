function openFirst(event){
	const image=document.querySelector("#top");
	image.src="https://media.wired.com/photos/593236cd4dc9b45ccec5c9f0/master/w_760,c_limit/Alien-3.jpg";
	
}
const one=document.querySelector('#first');
one.addEventListener('click', openFirst);

function openSecond(event){
	const image=document.querySelector('#top');
	image.src="https://media.wired.com/photos/593236cdaef9a462de981658/master/w_760,c_limit/Alien-4.jpg";
	
}
const two=document.querySelector('#second');
two.addEventListener('click', openSecond);

function openThird(event){
	const image=document.querySelector('#top');
	image.src="http://dreamicus.com/data/alien/alien-05.jpg";
}
const three=document.querySelector('#third');
three.addEventListener('click', openThird);

function openFourth(event){
	const image=document.querySelector('#top');
	image.src="http://dreamicus.com/data/alien/alien-04.jpg";
}
const four=document.querySelector('#fourth');
four.addEventListener('click', openFourth);

function openFifth(event){
	const image=document.querySelector('#top');
	image.src="http://www.scified.com/u/xSide_pose01_sm.jpg.pagespeed.ic.HgiaxbzO-X.webp";
}
const five=document.querySelector('#fifth');
five.addEventListener('click', openFifth);