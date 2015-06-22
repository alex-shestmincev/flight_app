window.addEventListener('load', function() {
  var UserList = flight.component(userList);

  function userList() {
    this.renderUserList = function(e, data) {

      for (var i=0;i<data.length;i++){
        console.log(data[i])
        $("#user-list").append(data[i]);
      }
      console.log(data)
    };

    this.after('initialize', function() {

      this.on('dataGetUserList', this.renderUserList);

      this.trigger('uiGetUserList');
    });
  }
  UserList.attachTo('#user-list');
});