Meteor.publish('theTechs', function() {
  //check(listId, String);

  return Techs.find();
});

Meteor.publish('theLocs', function() {
  //check(listId, String);

  return Locs.find();
});
