// const store = {
// 	merchandise: {
// 		milk: 10.25,
// 		cheese: 2.00,
// 		bread: 0.5
// 	},
// 	showMerch() {
// 		console.table(this.merchandise);
// 	}
// };
// store.showMerch();

const store = {
	merchandise: {
		milk: 10.25,
		cheese: 2.00,
		bread: 0.5
	},
	showMerch(){
		this.getMerch()
	},
	getMerch() {
		for (let merch in this.merchandise) {
			console.log(`${merch} - ${this.merchandise[merch]}`);
		}
	},
	buyProducts(milkQuantiy, cheeseQuantiy, breadQuantiy) {
		let totalprice = this.merchandise.milk * milkQuantiy +
						 this.merchandise.cheese * cheeseQuantiy +
						 this.merchandise.bread * breadQuantiy;
		console.log(`Total Price: ${totalprice}`);
	}
};

store.buyProducts(2,4,5);