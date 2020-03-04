class CookieHelper {
	 static createCookie() {

	 }

	 static findCookie(name) {
		  return document.cookie
				.split(/; */)
				.find(cookie => cookie.startsWith(name));
	 }

	 static readCookie(name) {
	 	 return this.findCookie(name).document.cookie
			  .replace(/.*=/gm, '');
	 	 //return foundCookie ? foundCookie.replace(`${name}=`, '') : null;
		  //     }

	 }

	 static hasCookie(name) {
	 	 return document.cookie.includes(name);
	 }

	 static hasValue(name, value) {
		  const found = CookieHelper.findCookie(name);
		  return found ? found.includes(value) : false;
	 	}
	 }

	 // static deleteCookie(name) {
	 // 	if(CookieHelper.hasCookie(name)) {
	// 	 CookieHelper.createCookie(name, '', -1);
	// }
	 // }
}

class Storage {
	 static setItemObj() {
		  const person = {
				name: "Obaseki Nosa",
				location: "Lagos",
		  };
		  window.localStorage.setItem('user', JSON.stringify(person));
	 }

	 static setItemArr() {
	 	 const array = [
	 	 	 'John Doe', 'USA'
		 ];
		  window.localStorage.setItem('user', array.toString());
	 }
}

function f(response) {
	return fetch('https://jsonplaceholder.typicode.com/todos/1');
}
