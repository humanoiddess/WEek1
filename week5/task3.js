function Click(){
	const newPerson=document.createElement('tr');
	const name=document.createElement('td');
	const surname=document.createElement('td');
	const faculty=document.createElement('td');
	const getName=document.querySelector('#name').value;
	const getSurname=document.querySelector('#surname').value;
	const getFac=document.querySelector('#faculty').value;
	
		name.textContent = getName;
		surname.textContent = getSurname;
		faculty.textContent = getFac;
	

	const students=document.querySelector('#students');
	if(getName==='' || getSurname==="" || getFac==='-1'){
		if(getName===""){
			const err=document.querySelector("#name");
			err.className="error";
		}
		if(getSurname===""){
			const err=document.querySelector("#surname");
			err.className="error";
		}
		if(getFac==="-1"){
			const err=document.querySelector("#faculty");
			err.className="error";
		}

	}
	else{
		newPerson.appendChild(name);
		newPerson.appendChild(surname);
		newPerson.appendChild(faculty);
		students.appendChild(newPerson);
	}
	document.querySelector('#name').value='';
	document.querySelector('#surname').value='';	
}