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
});
