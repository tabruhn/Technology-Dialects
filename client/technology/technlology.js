Template.technology.helpers({
	getglassdoor: function(){
		var glassdoorresults= ReactiveMethod.call("glassdoor");
		console.log(glassdoorresults);
		return glassdoorresults;
	}
});