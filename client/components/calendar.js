Template.calendar.helpers({
  daysOfMonth: function() {
    let firstDay = moment().date(1);
    let firstDayOfWeek = firstDay.day();

    let days = []
    for (var day = 1; day < firstDay.daysInMonth(); day++) {
      days.push({
        day,
        class: day == 1 ? 'offset-' + firstDayOfWeek : '',
      })
    }
    return days;
  }
});
Template.calendar.events({
  'click .cancelBtn': function(e) {
    FlowRouter.go('/');
  }
});
