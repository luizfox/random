/**
 * @param {Array} array
 * @return {Array} flatten array
 * @description flattens an array of arbitrarily nested arrays of integers into a flat array of integers.
 * Complexity:
 * Time - O(N + s), where s is the number of nestings (can't know which one is smaller)
 * Space- O(N)
 */

function flat(array){
	var ret = [];
	var isarray = array instanceof Array;
	if ( !isarray ){ //if it's not an array
		return null;
	}

	for (var i = 0; i < array.length; i++){
		if (array[i] instanceof Array){
			var flatten = flat(array[i]);
			for (var j = 0; j < flatten.length; j++)
				ret.push(flatten[j]);
		}else {
			ret.push(array[i]);
		}
	}
	return ret;
}

// Tests are below
var a = [[1,2,[3]],4]; // the original supplied test
var b = [[1,2,[3]],4, [[[[[[[[[[[[[[[[[[[[5]]]]]]]]]]]]]]]]]]]]];
var c = [[1,2,[3]],4, [[[[[[[[[[[[[[[[[[[[5]]]]]]]]]]]]]]]]]]]],[[[[[[[[[[6,[[[[[[7,8]]]]]]]]]]]]]]]]];
var d = [[[[[[[[]]]]]]]];
var e = {};
var f;

console.assert(flat(123) === null, 'Should be null');
console.assert(flat('a') === null, 'Should be null');
console.log(flat(a));
console.log(flat(b));
console.log(flat(c));
console.log(flat(d));
console.log(flat(e));
console.log(flat(f));
