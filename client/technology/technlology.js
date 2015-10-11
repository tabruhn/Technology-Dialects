Template.technology.helpers({
	getglassdoor: function(){
		var locationParam = Router.current().params.location || "seattle";
		var technologyParam = Router.current().params.technology || "javascript";
		console.log(locationParam);
		var glassdoorresults= ReactiveMethod.call("glassdoor", locationParam, technologyParam);
		console.log(glassdoorresults);
		return glassdoorresults;
	},
	getQueryParam: function() {
		console.log(Router.current().params.technology);
		return Router.current().params.technology;
	}
});
