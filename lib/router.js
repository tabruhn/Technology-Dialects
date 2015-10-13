
Router.route('/', function() {
  this.render('index');
});

// filter by location || tech
Router.route('/detail/:technology/:city/:state', function() {
  this.render('detail');
},
{
  name: 'detail.show'
});

Router.route('/technology/:technology', function() {
this.render('technology');
},
{
name: 'technology.show'

});

/*
Router.route('/items', function () {
  this.render('Items');
});

Router.route('/items/:_id', function () {
  var item = Items.findOne({_id: this.params._id});
  this.render('ShowItem', {data: item});
});

Router.route('/files/:filename', function () {
  this.response.end('hi from the server\n');
}, {where: 'server'});
*/
