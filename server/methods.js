Meteor.methods({
	glassdoor: function (){
		this.unblock();
		try {
			var url = "http://api.glassdoor.com/api/api.htm?v=1&format=json&t.p=45427&t.k=f4o1HyUwsiU&userip=199.59.107.218&useragent=Chrome/45.0.2454.101&action=jobs-stats&q=javascript&returnCities=true";
			var result = Meteor.http.get(url);
			console.log(result);
			return result;
		} catch (error){
			console.log(error);
			return error;
		}
	}
});