/*1. Използвайки jasonplaseholder покажете всички потребители, които са си приключили todos.
Данните за потребителите да са във формат:
[{username, geo, company.name}, ...]
Данните трябва да са сортирани по: username, company.name
2. Съберете постовете на users from 1 to 5, и ги подредете по title. Изходните данни трябва да във формат:
{userId, id, title, body, userEmail, userUserName}
 */

function setURL(route, baseURL = 'https://jsonplaceholder.typicode.com/') {
	return baseURL + route;
}

function getUniqueUserIds(todos) {
	const uniqueIds = todos.reduce((acc, current) => {
		return acc.concat(current.userId);
	}, []);

	return [... new Set(uniqueIds)];
}

function filterTodos(todos, completed = true) {
	return todos.filter(value => value.completed === completed);
}

async function getUsers(userIds){
	const userData = [];
	for(const userId of userIds) {
		const userURL = setURL(`users/${userId}`);
		const user = await getData(userURL);
		userData.push({username: user.username, geo: user.address.geo, companyname: user.company.name});
	
	}
	return userData;
}

async function getData(url, options= {}) {
	try{
		const result = await fetch(url, options);
		return await result.json();
	}catch(e) {
		console.error(e);
	}
}

const fiveUserIds = [1, 2, 3, 4, 5];

function* generator(ids) {
	yield* ids;
}

  async function getUsersWithPosts(ids) {
    const genUserIds = generator(ids);
	 let userWithPosts = [];
    while(true) {
        const {value, done} = genUserIds.next();

        if(done) break;
        
		const userURL = setURL(`users/${value}`);
		const user = await getData(userURL);
		const postURL = setURL(`posts?userId=${user.id}`);
		const posts = await getData(postURL);
		user.posts = posts;
        userWithPosts.push({userId: user.id, posts: user.posts, username: user.username, userEmail: user.email});
    }
	return userWithPosts;
}

getUsersWithPosts(fiveUserIds).then(data => console.table(data));

async function getUsersWithPosts(ids) {
	try {
		const userData = [];

		for(const userId of ids) {
			const userURL = setURL(`users/${userId}`);
			const user = await getData(userURL);
			const postURL = setURL(`posts?userId=${userId}`);
			const post = await getData(postURL);
			userData.push({userId: user.id, posts: post, username: user.username, userEmail: user.email});
		}

		return userData;
		
	}catch(e){
		console.error(e);
	}
}

async function getUserData() {
	const todos = await getData(setURL('todos'));
	const users = await getUsers(getUniqueUserIds(filterTodos(todos)));
	console.log(users);
	users.push({username: "Delphine", geo: {lat: "24.6463", lng: "-168.8889"}, companyname: "Test"});
	return  users.sort((a, b) => a.username.localeCompare(b.username) || a.companyname.localeCompare(b.companyname)); 
}

getUserData();
getUsersWithPosts(fiveUserIds).then(data => console.table(data));
