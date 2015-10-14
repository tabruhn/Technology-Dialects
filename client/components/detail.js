Template.detail.helpers({
	getGlassdoor: function(){
		var technologyParam = Router.current().params.technology || "javascript";
		var locationParam = Router.current().params.city || "seattle";
		var glassdoorresults= ReactiveMethod.call("glassdoor", locationParam, technologyParam);
		console.log(glassdoorresults);
		return glassdoorresults;
	},
	getMeetups: function(){
		var cityParam =  Router.current().params.city;
		var stateParam =  Router.current().params.state;
		var technologyParam = Router.current().params.technology || "javascript";
		var meetupresults = ReactiveMethod.call("meetup", cityParam, stateParam, technologyParam);
		console.log(meetupresults);
		return meetupresults;
	},
	getStackOverflowSrv: function() {
		var technologyParam = Router.current().params.technology || "javascript";
		console.log(technologyParam);
		var stackoverflowresults = ReactiveMethod.call("stackoverflow", technologyParam);
		console.log(stackoverflowresults);
		var soCount = JSON.parse(stackoverflowresults).length;
		console.log(soCount);
		var soResult = [];
		soResult.push = soCount;
		soResult.push = JSON.parse(stackoverflowresults);
		console.log(soResult);
		return soResult;
	},
	getStackOverflow: function() {  //todo: needs heavy refactoring or to put into the server side.    for serer side, need to figure out gzip compression.
		var technologyParam = Router.current().params.technology || "javascript";
		var url = "https://api.stackexchange.com/2.2/questions?order=desc&sort=activity&tagged=" + technologyParam + "&site=stackoverflow";
		var stackoverflowresults = Meteor.http.call("GET",url, function(error, result) {
			if (!error) {
				Session.set("soresult", result.content);
			}
		});
		var soResult = [];
		soResult[0] = Session.get("soresult");
		soResult[1] = soResult[0].length;
		return soResult[1];  // only returning the amt of questions... we can use the actual data later if needed.
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
