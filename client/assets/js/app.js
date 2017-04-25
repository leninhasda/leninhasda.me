// var app = angular.module('rssApp', ['ngRoute', 'angularMoment']);
var app = angular.module('lnApp', ['ngRoute']);
var S = null;
app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){

    $locationProvider
        .html5Mode({enabled:true})
        .hashPrefix('');
    $routeProvider
        .when('/', {
            templateUrl: '/partials/root.html',
            controller: 'homeController'
        })
        .when('/about', {
            templateUrl: '/partials/about.html',
            controller: 'aboutController'
        })
        .when('/projects', {
            templateUrl: '/partials/projects.html',
            controller: 'projectsController'
        })
        .when('/skills', {
            templateUrl: '/partials/skills.html',
            controller: 'skillsController'
        })
        .when('/play', {
            templateUrl: '/partials/play.html',
            controller: 'playController'
        })
        .when('/blog', {
            redirectTo: 'http://blog.leninhasda.me'
        })
        .when('/contact', {
            templateUrl: '/partials/contact.html',
            controller: 'contactController'
        })
        .when('/4Oh4', {
            templateUrl: '/partials/4Oh4.html'
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
.filter('split', [function(){
    return function(input, splitChar, index) {
        return input.split(splitChar)[index];
    }
}
])
.controller('homeController',['$scope', '$http', '$sce', function($scope, $http, $sce){
    $http.get('/data/root')
        .then(function(res){
            console.log(res.data);
            document.title = res.data.pageTitle;
            $scope.introBlock = res.data.introBlock;
            $scope.menuCards = res.data.menuCards;
        });
}])
.controller('aboutController', ['$scope', '$http', function($scope, $http){
    $http.get('/data/about')
        .then(function(res){
            console.log(res.data);
            document.title = res.data.pageTitle;
            $scope.jumboTitle = res.data.jumboTitle;
            $scope.bodyContent = res.data.bodyContent;
        });
}])
.controller('projectsController', ['$scope', '$http', function($scope, $http){
    $http.get('/data/projects')
        .then(function(res){
            console.log(res.data);
            document.title = res.data.pageTitle;
            $scope.jumboTitle = res.data.jumboTitle;
            $scope.projects = res.data.projects;
        });

    $scope.mItem = {
        "title": "test",
        "desc": "",
        "skiils": [],
        "responsibilities": [],
        "projectSpecs": [],
        "url": ""
    };

    $(document).ready(function(){
        $('.modal').modal();
    });

    $scope.showModal = function showModal(project){
        $scope.mItem = project.info;
        $('#projectModal').modal('open');
    }
}])
.controller('skillsController', ['$scope', '$http', function($scope, $http){
    $http.get('/data/skills')
        .then(function(res){
            console.log(res.data);
            document.title = res.data.pageTitle;
            $scope.jumboTitle = res.data.jumboTitle;
            $scope.jumboTag = res.data.jumboTag;
            $scope.programmingLang = res.data.programmingLang;
            $scope.cms = res.data.cms;
            $scope.servers = res.data.servers;
            $scope.others = res.data.others;
            $scope.frameworks = res.data.frameworks;
            $scope.tools = res.data.tools;
        });
}])
;

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