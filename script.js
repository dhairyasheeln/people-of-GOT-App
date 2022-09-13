let root=document.querySelector('.got-list');
root.classList.add('parent','container');

	let buttonBox=document.querySelector('.buttonBox');
	buttonBox.classList.add('container');

function initialUI()
{
	root.innerHTML="";

	let search=document.createElement('input');
	search.type='text';
	search.classList.add('search');
	search.placeholder="Search the people of GOT";

	search.addEventListener('keyup',handleSearch);
	

	let searchBox=document.querySelector('.searchBox');
	searchBox.append(search);

	got.houses.forEach(house=>{
	

		let houseLink=document.createElement('a');
		houseLink.classList.add('houseLink');
		houseLink.innerText=house.name;
		
		houseLink.addEventListener('click',handleHouse);

		buttonBox.append(houseLink);

		house.people.forEach(person=>{
			
			createUI(person);
		});
	});
}
		
function createUI(person)
{
	let li=document.createElement('li');
	li.classList.add('flex-col','list');

	let personProfile=document.createElement('img');
	personProfile.src=person.image;
	personProfile.classList.add('profile');

	let personName=document.createElement('span');
	personName.innerText=person.name;
	personName.classList.add('name');

	let personDesc=document.createElement('p');
	personDesc.innerText=person.description;
	personDesc.classList.add('desc');

	// let learnMore=document.createElement('button');
	// learnMore.classList.add('btn');
	let link=document.createElement('a');
	link.href=person.wikiLink;
	link.classList.add('link');
	link.innerText="Learn More!"
	
	

	li.append(personProfile,personName,personDesc,link);
	root.append(li);
}


function handleHouse(event)
{
	root.innerHTML="";
	got.houses.forEach(house=>{
		
		if(house.name===event.target.innerText)
		{
			house.people.forEach(person=>{

				createUI(person);
			
			});
		}
	});
	
}

function handleSearch(event)
{
	root.innerHTML="";

	let text=event.target.value;
	got.houses.forEach(house=>{
		house.people.forEach(person=>{
			if(person.name.includes(text)===true)
			{
				createUI(person);
			}
		});
	});
}




initialUI();