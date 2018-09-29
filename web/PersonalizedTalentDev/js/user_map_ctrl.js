var app = angular.module('myApp', []);
app.controller('userCtrl', function($scope) {
	$scope.showModal = false;
	$scope.isClicked2 = false;
	$scope.isClicked3 = false;
    $scope.text = "You Are Here";
	$scope.isArray = angular.isArray;
	$scope.myFunction = function() {
	$scope.text = "Choose your destination";
	$scope.isClicked= true;
	
	$scope.showModal = !$scope.showModal;
	
	$scope.myData = {"Current Role": "Senior Software engineer","Expertise": [{"UI5": "Intermediate"},{"Java": "Beginner"},{"ABAP": "Novice"},{"JavaScript": "Intermediate"}], 
	"Courses":[{"Introduction to SAP Screen Personas":"C"},{"Basics of Design Reserch":"C"},{"Software Design for non Designers":"C"}]};
    }
	$scope.myCourseCompletion = function() {
	$scope.showModal = !$scope.showModal;	
	$scope.myData = {"Desired Role": "Principal Software engineer","Expertise": [{"UI5": "Expert"},{"Java": "Expert"},{"ABAP": "Novice"},{"JavaScript": "Expert"},{"HANA":"Intermediate"},{"CDS Views":"Expert"}], 
	"Courses":[{"Introduction to SAP Screen Personas":"C"},{"Basics of Design Reserch":"P"},{"Software Design for non Designers":"P"},{"Developing webApp with SAPUI5":"C"},{"Software Development on SAP HANA":"C"}]};
    }
	$scope.myCourseCompletion1 = function() {
	$scope.showModal = !$scope.showModal;	
	$scope.myData = {"Desired Role": "Architect","Expertise": [{"UI5": "Expert"},{"Java": "Expert"},{"ABAP": "Novice"},{"JavaScript": "Expert"},{"HANA":"Intermediate"},{"CDS Views":"Expert"},
	{"SCALA":"Intermediate"},{"R":"Beginner"},{"Python":"Intermediate"}], 
	"Courses":[{"Introduction to SAP Screen Personas":"C"},{"Basics of Design Reserch":"P"},{"Software Design for non Designers":"P"},{"Developing webApp with SAPUI5":"C"},{"Software Development on SAP HANA":"C"},{"Developing mobile Apps with SAP HANA":"P"}]};
	}
    	
	$scope.myCourseCompletion2 = function() {
	$scope.showModal = !$scope.showModal;	
	$scope.myData = {"Desired Role": "Chief Architect","Expertise": [{"UI5": "Expert"},{"Java": "Expert"},{"ABAP": "Novice"},{"JavaScript": "Expert"},{"HANA":"Intermediate"},{"CDS Views":"Expert"},
	{"SCALA":"Intermediate"},{"R":"Beginner"},{"Python":"Intermediate"},{"SQL":"Expert"},{"Hadoop":"Expert"},{"Ruby":"Intermediate"},{"Docker":"Beginner"}], 
	"Courses":[{"Introduction to SAP Screen Personas":"C"},{"Basics of Design Reserch":"P"},{"Software Design for non Designers":"P"},{"Developing webApp with SAPUI5":"C"},{"Software Development on SAP HANA":"C"},{"Developing mobile Apps with SAP HANA":"P"}, {"In-Memory Data Management in a nutshell":"P"}]};
    }
	$scope.myCourseCompletion3 = function() {
	$scope.showModal = !$scope.showModal;	
	$scope.myData = {"Desired Role": "Principal Software engineer","Expertise": [{"UI5": "Expert"},{"Java": "Expert"},{"ABAP": "Novice"},{"JavaScript": "Expert"},{"HANA":"Intermediate"},{"CDS Views":"Expert"}], 
	"Courses":[{"Introduction to SAP Screen Personas":"C"},{"Basics of Design Reserch":"P"},{"Software Design for non Designers":"P"},{"Developing webApp with SAPUI5":"C"},{"Software Development on SAP HANA":"C"}]};
    }
	$scope.myCourseCompletion4 = function() {
	$scope.showModal = !$scope.showModal;	
	$scope.myData = {"Desired Role": "Architect","Expertise": [{"UI5": "Expert"},{"Java": "Expert"},{"ABAP": "Novice"},{"JavaScript": "Expert"},{"HANA":"Intermediate"},{"CDS Views":"Expert"},
	{"SCALA":"Intermediate"},{"R":"Beginner"},{"Python":"Intermediate"}], 
	"Courses":[{"Introduction to SAP Screen Personas":"C"},{"Basics of Design Reserch":"P"},{"Software Design for non Designers":"P"},{"Developing webApp with SAPUI5":"C"},{"Software Development on SAP HANA":"C"},{"Developing mobile Apps with SAP HANA":"P"}]};
	}
    	
	$scope.myCourseCompletion5 = function() {
	$scope.showModal = !$scope.showModal;	
	$scope.myData = {"Desired Role": "Chief Architect","Expertise": [{"UI5": "Expert"},{"Java": "Expert"},{"ABAP": "Novice"},{"JavaScript": "Expert"},{"HANA":"Intermediate"},{"CDS Views":"Expert"},
	{"SCALA":"Intermediate"},{"R":"Beginner"},{"Python":"Intermediate"},{"SQL":"Expert"},{"Hadoop":"Expert"},{"Ruby":"Intermediate"},{"Docker":"Beginner"}], 
	"Courses":[{"Introduction to SAP Screen Personas":"C"},{"Basics of Design Reserch":"P"},{"Software Design for non Designers":"P"},{"Developing webApp with SAPUI5":"C"},{"Software Development on SAP HANA":"C"},{"Developing mobile Apps with SAP HANA":"P"}, {"In-Memory Data Management in a nutshell":"P"}]};
    }
	
	
	$scope.toggleModal = function(btnClicked){
        $scope.buttonClicked = btnClicked;
        $scope.showModal = !$scope.showModal;
    };
	$scope.showNav = function() {	
	$scope.isClicked1= !$scope.isClicked1;
    }
	$scope.showNav1 = function() {	
	$scope.isClicked2= !$scope.isClicked2;
    }
	$scope.showNav2 = function() {	
	$scope.isClicked3=  !$scope.isClicked3;
    }
});

app.directive('modal', function () {
    return {
      template: '<div class="modal fade">' + 
          '<div class="modal-dialog">' + 
            '<div class="modal-content">' + 
              '<div class="modal-header">' + 
                '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>' + 
                '<h4 class="modal-title">{{ buttonClicked }} Required Coures/Skills</h4>' + 
              '</div>' + 
              '<div class="modal-body" ng-transclude></div>' + 
            '</div>' + 
          '</div>' + 
        '</div>',
      restrict: 'E',
      transclude: true,
      replace:true,
      scope:true,
      link: function postLink(scope, element, attrs) {
          scope.$watch(attrs.visible, function(value){
          if(value == true)
            $(element).modal('show');
          else
            $(element).modal('hide');
        });

        $(element).on('shown.bs.modal', function(){
          scope.$apply(function(){
            scope.$parent[attrs.visible] = true;
          });
        });

        $(element).on('hidden.bs.modal', function(){
          scope.$apply(function(){
            scope.$parent[attrs.visible] = false;
          });
        });
      }
    };
  });

