Template.technology.helpers({
	getglassdoor: function(){
		var locationParam = Router.current().params.technology || "seattle";
		console.log(locationParam);
		var glassdoorresults= ReactiveMethod.call("glassdoor", location);
		console.log(glassdoorresults);
		return glassdoorresults;
	}
});