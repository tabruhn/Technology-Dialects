Meteor.methods({
	glassdoor: function (technology, location){
		console.log(location);
		console.log(technology);
		this.unblock();
		try {
			var url = "http://api.glassdoor.com/api/api.htm?v=1&format=json&t.p=45427&t.k=f4o1HyUwsiU&userip=199.59.107.218&useragent=Chrome/45.0.2454.101&action=jobs-stats&returnCities=true&l=" + location + "&q=" + technology;
			console.log(url);
			var result = Meteor.http.get(url);
			console.log(result.data.response);
			return result.data.response;
		} catch (error){
			console.log(error);
			return error;
		}
	}

	meetup: function (technology, location){
		// meetup api login: meteor@mail.bentrask.com, pw: atmosphere
		var technologies = {
			"reactjs" : {
				"id": 29042,
				"members": 29042
			},
			"angularjs" : {
				"id": 939612,
				"members": 157787
			},
			"javascript" : {
				"id": 7029,
				"members": 1345142
			},
			"nodejs": {
				"id": 101960,
				"members": 357987
			},
			"emberjs": {
				"id": 632142,
				"members": 	41343
			}
		}
		console.log(location);
		console.log(technology);
		this.unblock();
		try {
			if (!location || location.toLowerCase() == "the world") {
				if (!technology || technology.toLowerCase() == "all technologies" ) {
					return technologies;
				} else {
					return technologies[technology];
				}
			}
			var [city, state] = loc.split(/, */);
			if (!technology || technology.toLowerCase() == "all technologies") {
				var url = "https://api.meetup.com/2/groups?key=6a43157b29c5e444838761074153558&sign=true&photo-host=public&topic=technology&page=20"
				console.log(url);
				var result = Meteor.http.get(url);
				console.log(result.data.response);
				return result.data.results;

			} else { // specific technology page
				var url = "https://api.meetup.com/2/groups?key=6a43157b29c5e444838761074153558&photo-host=public&topic="+technology+"&country=us&city="+city+"&state="+state+"&page=20";
				console.log(url);
				var result = Meteor.http.get(url);
				console.log(result.data.response);
				return result.data.results;
			}			
		} catch (error){
			console.log(error);
			return error;
		}
	}
});
