function sortString(text) {
	return text.split('').sort().join('');
}

function isAnagram(inputOne, inputTwo) {
	if (inputOne.length === inputTwo.length) {
		const inputOneSorted = sortString(inputOne);
		const inputTwoSorted = sortString(inputTwo);
		return inputOneSorted === inputTwoSorted;
	} else return false;
}

console.log(isAnagram('angel', 'glean'));
console.log(isAnagram('termas', 'master'));
console.log(isAnagram('angel', 'angeles'));
console.log(isAnagram('angel', 'angels'));
