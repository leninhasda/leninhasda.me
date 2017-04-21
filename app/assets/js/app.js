// var app = angular.module('rssApp', ['ngRoute', 'angularMoment']);
var app = angular.module('lnApp', ['ngRoute']);
var S = null;
app.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl: '/template/root',
            controller: 'homeController'
        })
        .when('/about', {
            templateUrl: '/template/about',
            controller: 'aboutController'
        })
        .when('/projects', {
            templateUrl: '/template/projects',
            controller: 'projectsController'
        })
        .when('/skills', {
            templateUrl: '/template/skills',
            controller: 'skillsController'
        })
        .when('/play', {
            templateUrl: '/template/play',
            controller: 'playController'
        })
        .when('/blog', {
            redirectTo: 'http://blog.leninhasda.me'
        })
        .when('/contact', {
            templateUrl: '/template/contact',
            controller: 'contactController'
        })
        .otherwise({
            redirectTo: '/4Oh4'
        });
}])
.filter('html', ['$sce', function($sce){
    return function(data){
        return $sce.trustAsHtml(data);
    };
}])
.controller('homeController',['$scope', '$sce', '$http', function($scope, $sce, $http){
    // console.log('hello');
    S = $scope;
    $http.get('/api/v0/root')
        .then(function(res){
            console.log(res.data);
            document.title = res.data.pageTitle;
            // $scope.introBlock = $sec.trustAsHtml(res.data.introBlock);
            $scope.introBlock = res.data.introBlock;
            $scope.menuCards = res.data.menuCards;
        });
}]);
// .controller('feedController', ['$scope', '$sce', '$http', function($scope, $sce, $http){
//     rss_url = 'http://ax.itunes.apple.com/WebObjects/MZStore.woa/wpa/MRSS/justadded/limit=10/rss.xml';
//     rss_2_json = 'api/tojson';
//     $scope.url = $sce.trustAsResourceUrl('http://jonaklab.com');
//     $scope.item = false;
//     // $http.get(rss_url)
//     $http.get(rss_2_json)
//         .then(function(rss_data){
//             // console.log(rss_data.data);

//             // angular.forEach(r)
//             for(idx in rss_data.data) {

//                 rss_data.data[idx].description = $sce.trustAsHtml(rss_data.data[idx].description);
//                 rss_data.data[idx].content = $sce.trustAsHtml(rss_data.data[idx].content);
//             }
//             $scope.rss_data = rss_data.data;
//         });

//     $scope.resetIframe = function(item) {
//         $scope.item = item;
//         // alert(href);
//         // href = $(e.target).data('href');
//         // console.log(href)
//         // $http.get(href)
//         //     .then(function(res){
//         //         console.log('test');
//         //         console.log(res);
//         //         console.log($('#iiFrame'))
//         //         $('#iiFrame').html(res.data);
//         //     });
//         // $scope.url = $sce.trustAsResourceUrl(href);
//         // return false;
//     }
// }]);