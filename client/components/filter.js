Template.filter.helpers({
  settingsTechs: function() {
    return {
      position: "top",
      rules:[
        {
          collection: Techs,
          field: "name",
          matchAll: true,
          template: Template.dataTechs
        }
      ]
    };
  },
  settingsLocs: function() {
    return {
      position: "top",
      rules:[
        {
          collection: Locs,
          field: "locs",
          matchAll: true,
          template: Template.dataLocs
        }
      ]
    };
  }
});

Template.filter.events({

'submit form': function(event) {
  event.preventDefault();
  var technology = event.target.technology.value;
  var location = [];
  location = event.target.location.value.split(',').map(function(loc) { return loc.trim(); });
  Router.go('/detail/:technology/:city/:state', {technology: technology, city: location[0], state:location[1]});

}

});
