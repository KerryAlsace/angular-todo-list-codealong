angular
  .module('todoApp')
  .controller('ListController', ListController);

function ListController() {
  var vm = this;

  vm.currentTask = {};
  vm.add = add;

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

  function add() {
    vm.currentTask.complete = false;
    vm.list.tasks.push(vm.currentTask);
  }

}