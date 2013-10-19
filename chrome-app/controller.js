function MarkFlowController($scope) {
  $scope.todos = [
    {text:'learn angular', done:true},
    {text:'build an angular app', done:false}];
 
  $scope.addTodo = function() {
    $scope.todos.push({text:$scope.todoText, done:false});
    $scope.todoText = '';
  };
 
  $scope.remaining = function() {
    var count = 0;
    angular.forEach($scope.todos, function(todo) {
      count += todo.done ? 0 : 1;
    });
    return count;
  };
 
  $scope.archive = function() {
    var oldTodos = $scope.todos;
    $scope.todos = [];
    angular.forEach(oldTodos, function(todo) {
      if (!todo.done) $scope.todos.push(todo);
    });
  };

  $scope.flows = [
    {from: 0, to: 500},
    {from: 100, to: 600},
    {from: 50, to: 400},
  ];

  $scope.drawFlow = function(height, flow) {
    var canvas = document.getElementById('mainCanvas');
    var context = canvas.getContext('2d');

    context.beginPath();
    context.moveTo(flow.from, height);
    context.lineTo(flow.to, height);
    context.stroke();
  };

  $scope.drawFlows = function(flows) {
    var height = 100;
    angular.forEach(flows, function(flow) {
      $scope.drawFlow(height, flow);
      height += 100;
    });
  };
  $scope.drawFlows($scope.flows);
}
