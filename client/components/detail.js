Template.detail.helpers({
	getglassdoor: function(){
		var technologyParam = Router.current().params.technology || "javascript";
		var locationParam = Router.current().params.city || "seattle";
		console.log(locationParam);
		var glassdoorresults= ReactiveMethod.call("glassdoor", locationParam, technologyParam);
		console.log(glassdoorresults);
		return glassdoorresults;
	},
	getMeetups: function(){
		var cityParam =  Router.current().params.city;
		var stateParam =  Router.current().params.state;
		var technologyParam = Router.current().params.technology || "javascript";
		console.log(technologyParam);
		var meetupresults= ReactiveMethod.call("meetup", cityParam, stateParam, technologyParam);
		console.log(meetupresults);
		return meetupresults;
	},
	getTechnology: function() {
		console.log(Router.current().params.technology);
		return Router.current().params.technology;
	},
	getCity: function() {
		console.log(Router.current().params.city);
		return Router.current().params.city;
	},
	getState: function() {
		console.log(Router.current().params.state);
		return Router.current().params.state;
	},
});
