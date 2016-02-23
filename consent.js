
var app = angular.module('consentForm', []);

app.directive("consentSignature", function(){
  return {
    restrict: 'AE',
    replace: 'true',
    templateUrl: function(elem, attr){
      'signature-'+attr.language+'.html';
    }
  };

});
console.log("Loaded");
