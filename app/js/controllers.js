wdApp.controller('HomeController', ['$scope', '$state', function($scope, $state) {

  $scope.hData = [];

  $.getJSON('../api/home')
    .success(function(data) {

      //console.log(data);
      $scope.hData = data;
      console.log($scope.hData);

      $scope.$apply();

    });

  $('#saveButton').click(function() {

    var title = $('#hallucinationTitle').val();
    var text = $('#hallucinationText').val();

    $scope.hData.unshift({
      'title': title,
      'text': text
    });

    $.post( '../api/home', {
      'title': title,
      'text': text
    } );

    $('#hallucinationTitle').val('');
    $('#hallucinationText').val('');
  });
}])
