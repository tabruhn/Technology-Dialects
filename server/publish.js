Meteor.publish('theTechs', function() {
  //check(listId, String);

  return Techs.find();
});
