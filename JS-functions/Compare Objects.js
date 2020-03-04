const items = {
	p1: 'Chris Brown',
	p2: 'Zoe Morris',
	p3: 'Adam Stone',
	p4: 'Chris Brown'
};

console.log(Object.entries(items).sort((a,b) => 
				   b[1].localeCompare(a[1]) || 
				   b[0].localeCompare(a[0])));

