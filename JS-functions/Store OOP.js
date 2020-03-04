class Product {
	quantity = 0;
    constructor(name, price) {
        this.name = name;
        this.price = price;
		
		Object.seal(this);
    }

	 get total() {
        return this.price * this.quantity;
    }
}

class Client {
    constructor(name, discountPercent = 0) {
        this.name = name;
		  this.discountPercent = discountPercent;
		
		Object.seal(this);
    }
}

class BaseProducts {

	findProductIndex(productName) {
		return this.products.findIndex(p => p.name === productName);
	}

	resetTotal() {
		for(let p in this.products) {
			this.products[p].quantity = 0;
		}
	}
}

class Products extends BaseProducts {
	products = [];
	constructor(productConfig) {
		super();
		this.setProducts(productConfig);
	}
	setProducts(productConfig) {
		if(Object.keys(productConfig).length > 0) {
			for(let p in productConfig) {
				this.products.push(new Product(p, productConfig[p]));
			}
		}	
	}
	setQuantity(name, quantity = 0) {
		const index = this.findProductIndex(name);

		try {
			if(index === -1) throw new CustomError(name, `Product with name: ${name} does not exist!`);//throw new Error('index = -1')//return;
			this.products[index].quantity = quantity;

			if(quantity < 0) throw new error(quantity, `Quantity: ${quantity} cannot be a negative value!`);
		} catch (e) {
			console.error(e.name); //CustomError
			console.error(e.additionalInfo); //baz
			console.error(e.message); //bazMessage
			console.error(e.stack); //stacktrace

			CustomLogger.consoleWarning(e.message, {product: name});
			CustomLogger.consoleInfo(e.message, {product: name, quantity});
		}
		finally{
			console.log('completed');
		}
	}

	totalDiscount(discountPercent = 0) {
		return this.total - this.total * discountPercent / 100;
	}

	get total() {
		return this.products.reduce((total, product) => total += product.total, 0);
	}
}

class Store {
	constructor(products, currency = 'BGN') {
		this.products = products;
		this.currency = currency;
	}

	registerClient(client) {
		this.client = client;
	}

	checkOut() {
		let checkOut = this.products.totalDiscount(this.client.discountPercent);
		
		this.products.resetTotal();
		console.log(this.currency);
		return this.numberFormat(checkOut, this.currency);
	}

	numberFormat(number, currency) {
		try {
			return new Intl.NumberFormat('en-EN', { style: 'currency', currency })
				 .format(number)
				 .replace(',', ' ');
		}
		catch(e) {
			console.error(e);
			console.log(currency);
		}
	}
}

const productConfig = {
	apple: 1.5,
	bread: 1,
	milk: 2.2,
	water: 0.5,
	meat: 10
};

test = new Products(productConfig);
client = new Client('Asen', 10);
store = new Store(test, 'USD');
store.products.setQuantity('milk', 1000);
store.products.setQuantity('apple', 2000);
store.products.total;
store.registerClient(client);
store.checkOut();

class CustomError extends Error {
	constructor(info, ...params) {
	  // Pass remaining arguments (including vendor specific ones) to parent constructor
	  super(...params);
  
	  // Maintains proper stack trace for where our error was thrown (only available on V8)
	  if (Error.captureStackTrace) {
			Error.captureStackTrace(this, CustomError);
	  }
  
	  this.name = 'CustomError';
	  // Custom debugging information
	  this.additionalInfo = info;
	  this.date = new Date();
	}
  }
  
class CustomLogger {
	static consoleInfo(...params) {
		const[message, data = {}] = params;
		const date = new Date();
		const level = 'info';
		console.info(`${level.toUpperCase}: with message: ${message}, time: ${date}`);
		console.table(data);
	}

	static consoleLog() {
		console.log();
	}

	static consoleWarning(...params) {
		const[message, data = {}] = params;
		const date = new Date();
		const level = 'warning';
		console.warn(`${level.toUpperCase}: with message: ${message}, time: ${date}`);
	}

	static consoleFatal() {
		console.error();
	}
}