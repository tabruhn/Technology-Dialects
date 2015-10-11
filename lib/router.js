Router.map( function () {
  this.route('home', {
    path:'/'
  });

  this.route('filter', {
    path:'/:technology/:location'
  });

  this.route('technology', {
    path:'/:technology/'
  });

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
