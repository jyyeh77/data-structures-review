var HashTable = function(){
  this.numBuckets = 35;
	this.table = {};
}

HashTable.prototype.hash = function (key) {
  var charCodeSum = 0;
  key.split('').forEach(letter => {
    charCodeSum += letter.charCodeAt(0);
  })
	return charCodeSum % this.numBuckets;
}

HashTable.prototype.set = function (key, value){
	if (typeof key !== 'string') throw new TypeError('Keys must be strings');
	if (!this.table[this.hash(key)]) {
		this.table[this.hash(key)] = [];
		this.table[this.hash(key)].push({[key]: value});
	} else {
		this.table[this.hash(key)].push({[key]: value});
	}
}

HashTable.prototype.get = function (key){
	let value,
			hash = this.hash(key).toString();
	if (this.table[hash]) {
		this.table[hash].forEach(obj => {
			if (Object.keys(obj).includes(key)) value = obj[key];
		})
	}
	return value;
}

HashTable.prototype.hasKey = function (queryKey){
	let val = false;
	let hash = this.hash(queryKey).toString();
	if (this.table[hash]){
		this.table[hash].forEach(obj => {
			if (Object.keys(obj).includes(queryKey)){
				val = true;
			}
		})
	}
	return val;

}

