const inputObj = {
	firstName: 'Avi',
	lastName: 'Flombaum',
	company: {
		name: 'Flatbook Labs',
		jobTitle: 'Developer Apprentice'
	},
	friends: [{
		firstName: 'Joe',
		lastName: 'Burgess',
		company: {
			name: 'Flatbook Labs',
			jobTitle: 'Developer Apprentice'
		}
	},
		{
			firstName: 'Gabe',
			lastName: 'Jackson',
			company: {
				name: 'Flatbook Labs',
				jobTitle: 'Lead Developer'
			}
		}],
	projects: [{
		title: 'Flatbook',
		description: 'The premier Flatiron School-based social network in the world.'
	},
		{
			title: 'Scuber',
			description: 'A burgeoning startup helping busy parents transport their children to and from all of their activities on scooters.'
		}]
};

// let counter = 0;
// function deepIterator(obj) {
// 	 counter++;
// 	for (let key in obj) {
// 		if (obj.hasOwnProperty(key) &&
// 			(typeof obj[key] === "object")) {
// 			deepIterator(obj[key]);
// 		} else {
// 			console.log(obj[key]);
// 		}
// 	}
// }
//deepIterator(inputObj);

let counter = 0;
function deep(obj) {
	counter ++;
	 if (typeof obj === 'object') {
	    for (const key in obj) {
	       deep(obj[key]);
	    }
	 } else {
		  console.log(obj);
	 }
	 console.log(counter);
}
deep(inputObj);

// let counter = 0; //??????/
// Object.entries(obj).map(([key]) => {
// 		if (obj.hasOwnProperty(key) &&
// 			(typeof obj[key] === "object")) {
// 			deep(obj[key]);
// 		} else {
// 			console.log(obj[key]);
// 		}
// });
//console.log(counter);