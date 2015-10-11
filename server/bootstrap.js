Meteor.startup(function() {

	function fill(col, source){
		col.remove({});
		JSON.parse(Assets.getText(source)).forEach(function(it){
			col.insert(typeof map === 'function' ? map(it) : it);
		});
	}

	fill(Techs, 'data.json');

});