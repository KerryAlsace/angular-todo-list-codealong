angular
  .module('todoApp')
  .controller('ListController', ListController);

function ListController() {
  var vm = this;
  var selectedId = -1;
  var addFlag = false;
  var editFlag = false;
  var removeFlag = false;

  vm.currentTask = {};
  vm.startAdd = startAdd;
  vm.startEdit = startEdit;
  vm.isInAddMode = isInAddMode;
  vm.isInEditMode = isInEditMode;
  vm.add = add;
  vm.save = save;

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

  function reset() {
    selectedId = -1;
    addFlag = false;
    editFlag = false;
    removeFlag = false;
  }

  function startAdd() {
    reset();
    addFlag = true;
    vm.currentTask = {};
  }

  function startEdit() {

  }

  function isInAddMode() {
    return addFlag;
  }

  function isInEditMode() {

  }

  function add() {
    vm.currentTask.complete = false;
    vm.list.tasks.push(vm.currentTask);
    reset();
  }

  function save() {
    
  }

}