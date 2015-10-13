Template.home.helpers({
techs: function() {
  techsObj = Techs.find();
  console.log(techsObj);
  return techsObj;
}
});

Template.home.events({

"click .item": function() {
  Router.go('technology', {technology: this.name});
}
});
