let content = new ReactiveVar('editor');
let contentData = new ReactiveVar({});
let overlay = new ReactiveVar(null);
let overlayData = new ReactiveVar({});
let getData = function() {
  return {
    content: content.get(),
    contentData: contentData.get(),
    overlay: overlay.get(),
    contentData: contentData.get(),
  }
};

FlowRouter.route('/', {
  action: function() {
    content.set('editor');
    overlay.set(null);
  }
});
FlowRouter.route('/calendar', {
  action: function() {
    overlay.set('calendar');
  }
});

Meteor.startup(() => {
  Blaze.renderWithData(Template.basicLayout, getData, document.body);
});
