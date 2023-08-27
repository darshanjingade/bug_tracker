 
        var bugTrackerApp=angular.module("bugTrackerApp",[]);
        bugTrackerApp.run(function($rootScope){
            console.log("app is initilized")
        })

        bugTrackerApp.controller("bugController",function($scope){
            $scope.bugs=[
                {name:"Static error",isClosed:false},
                {name:'Stack over Flow',isClosed:false},
                {name:'Dynamic erroe',isClosed:false},
                {name:'Syntex error',isClosed:false}
            ]
            $scope.newBug="";
            $scope.date=new Date;
            $scope.addNewBugs=function(){
                addBug={
                    name : $scope.newBug,
                    isClosed:false
                }
                $scope.bugs.push(addBug);
                $scope.newBug=''
            }
            $scope.toggal=function(bug){
                bug.isClosed=!bug.isClosed;
            }
            $scope.removeClosed=function(){
               for(var i=$scope.bugs.length-1 ; i>=0; i--){
                var bug1=$scope.bugs[i];
                    if(bug1.isClosed){
                        $scope.bugs.splice(i,1);
                    }
               }
            }
           $scope.closedCount=function(){
                var result=0;
                for(var i=$scope.bugs.length-1 ; i>=0; i--){
                var bug1=$scope.bugs[i];
                    if(bug1.isClosed){
                        ++result
                    }
               }return result
           }
        });