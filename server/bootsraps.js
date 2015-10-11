Meteor.startup(function() {

function fill(col, source, map) {
  col.remove({});
  JSON.parse(Asets.getText(source)).forEach(function(it){
    col.insert(typeof map === 'function' ? map(it) : it);

  });
}

fill(Techs, 'data.json');

});
