Template.header.helpers({
  date: function() {
    return moment().format('MMMM Do YYYY');
  }
});
Template.header.events({
  'click #dateTitle': function(e) {
    FlowRouter.go('/calendar');
  }
});
