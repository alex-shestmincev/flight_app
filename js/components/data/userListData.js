window.addEventListener('load', function() {
  var UserList = flight.component(userList);

  function userList() {
    this.getUserList = function() {
      var self = this;

      User.load(function(e, data) {
        self.trigger('dataGetUserList', data);
      })
    };

    this.after('initialize', function() {
      this.on('uiGetUserList', this.getUserList);
    })
  }
  UserList.attachTo('#user-list');
});