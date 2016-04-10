FlowRouter.route('/', {
  action: function() {
    BlazeLayout.render('basicLayout', {content: 'editor'});
  }
});
