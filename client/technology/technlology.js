Template.technology.helpers({
	getglassdoor: function(){
		var locationParam = Router.current().params.location || "seattle";
		var technologyParam = Router.current().params.technology || "javascript";
		console.log(locationParam);
		var glassdoorresults= ReactiveMethod.call("glassdoor", locationParam, technologyParam);
		console.log(glassdoorresults);
		return glassdoorresults;
	},
	getMeetups: function(){
		var locationParam =  "seattle, wa";  //TODO need to reconcile with getglassdoor to accept loc as Seattle,WA  May need to add a third param for state.
		var technologyParam = Router.current().params.technology || "javascript";
		console.log(locationParam);
		var meetupresults= ReactiveMethod.call("meetup", locationParam, technologyParam);
		console.log(meetupresults);
		return meetupresults;
	},
	getTechnology: function() {
		console.log(Router.current().params.technology);
		return Router.current().params.technology;
	},
	getLocation: function() {
		console.log(Router.current().params.location);
		return Router.current().params.location;
	},
});
