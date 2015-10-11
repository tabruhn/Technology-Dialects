Template.technology.helpers({
	getglassdoor: function(){
		var locationParam = Router.current().params.technology || "seattle";
		console.log(locationParam);
		var glassdoorresults= ReactiveMethod.call("glassdoor", locationParam);
		console.log(glassdoorresults);
		return glassdoorresults;
	},
	getQueryParam: function() {
		console.log(Router.current().params.technology);
		return Router.current().params.technology;
	}
});
