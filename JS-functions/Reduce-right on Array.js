const strs = ['t','s','r','q'];
let best = strs.reduceRight((acc, v) => acc + v);
console.log(best); //tsrq - reduce;
						// qrst - reduceRight
