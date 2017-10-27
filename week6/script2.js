let countries = ["Kazakhstan","Russia","England","France"];
let citiess = {"Kazakhstan":["Almaty","Astana","Karagandy"],"Russia":["Moscow","Saint-Petersburg","Kazan"],"England":["London","Manchester","Liverpool"],"France":["Paris","Lyon","Marseille"]};

const country=document.querySelector('#countries');
for(const countr of countries){
	var opt=document.createElement('option');
	opt.value=opt.text=countr;
	country.add(opt);
}
country.onchange=City;
function City(event){
	const cities=document.querySelector('#cities');
let r=country.value;
let ar=citiess[r];
cities.innerHTML="";
for (var i=0;i<ar.length;i++){
			var opti=document.createElement('option');
			opti.value=opti.text=ar[i];
			cities.options.add(opti);
}
cities.removeEventListener('click',City);

		
}
document.querySelector("#cities").addEventListener('click',City);