function personController($scope) {
    $scope.person = {
        firstName: "Rachnaddd",
        lastName: "Mishra",
        fullName: function() {
            var x;
            x = $scope.person;
            return x.firstName + " " + x.lastName;
        }
    };
}
