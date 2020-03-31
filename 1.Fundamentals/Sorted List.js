function solve() {
	return {
		 elements: [],
		 size: 0,
		 	 add: function(element) {
					this.elements.push(element);
					this.elements.sort((a,b) => a - b);
					this.size++;
			 },
			  remove: function(index) {
		 	 		if (index < 0 || index >= this.elements.length) {
		 	 			 throw  new RangeError('List index is outside the bounds of the list.')
		 	 		}
						 this.elements.splice(index, 1);
		 	 			 this.size--;
			  },
		 		get: function (index) {
					 if (index < 0 || index >= this.elements.length) {
						  throw  new RangeError('List index is outside the bounds of the list.')
					 }
					 return this.elements[index];
				}
	}
}

function SortedList() {
	this.elements = [];
	SortedList.prototype.add = function (element) {
		this.element.push(element);
		this.elements.sort((a,b) => a - b);
		this.size++;
	};
	
	SortedList.prototype.remove = function (index) {
		 if (index < 0 || index >= this.elements.length) {
			  throw  new RangeError('List index is outside the bounds of the list.');
		 }
		 this.elements.splice(index, 1);
	};
	
	SortedList.prototype.get = function (index) {
		 if (index < 0 || index >= this.elements.length) {
			  throw  new RangeError('List index is outside the bounds of the list.');
		 }
		 return this.elements[index];
	};
	
	Object.defineProperty(SortedList.prototype, 'size', {
		 get: function() {
			 return this.elements.length;
		 }
	 })
}

const myList = new SortedList();

myList.add(2);
console.log(myList.elements);
