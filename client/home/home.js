Template.home.helpers({
techs: function() {
  techsObj = Techs.find();
  console.log(techsObj);
  return techsObj;
}
});
