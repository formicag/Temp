var name = 'Max';
var age = 29;
var hasHobbies = true;
//console.log(name, age, hasHobbies);

function summarizeUser(userName, userAge, userHasHobby){
	return (
		'Name is ' + userName +
		', age is ' + userAge +
		' and the user has hobbies: ' +
		userHasHobby
	);
}

console.log(summarizeUser(name, age, hasHobbies));
