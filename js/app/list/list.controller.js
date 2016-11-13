angular
  .module('todoApp')
  .controller('ListController', ListController);

function ListController() {
  var vm = this;

  vm.list = {
    name: "Todo List",
    tasks: [
      {
        id: 1,
        name: "Take out trash",
        complete: false
      },
      {
        id: 2,
        name: "Watch tv",
        complete: true
      }
    ]
  }

}