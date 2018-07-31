'use strict';
/**
 * @ngdoc overview
 * @name shobashAdminApp
 * @description
 * # shobashAdminApp
 *
 * Main module of the application.
 */
angular
    .module('shobashAdminApp', ["ui.router"])
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.when('', '/');
        $stateProvider

            .state('admin-log', {
                url: "/admin-log",
                templateUrl: "content/admin-log.html",
            })
            .state('category-master', {
                url: "/category-master",
                templateUrl: "content/category-master.html",
            })
            .state('daily-horoscope', {
                url: "/daily-horoscope",
                templateUrl: "content/daily-horoscope.html",
            })
            .state('quote', {
                url: "/quote",
                templateUrl: "content/quote.html",
            })
            .state('miscellaneous', {
                url: "/miscellaneous",
                templateUrl: "content/miscellaneous.html",
            })
            .state('add-user',{
                url:"/add-user",
                templateUrl:"content/add-user.html",
            })
            .state('login', {
                url: "/",
                templateUrl: "content/login.html",
            })
            .state('dashboard', {
                url: "/dashboard",
                templateUrl: "content/dashboard.html",
            })
            .state('logout', {
                url: "/logout",
                templateUrl: "content/logout.html",
            })
            .state('add-admin', {
                url: "/add-admin",
                templateUrl: "content/add-admin.html",
            })
            .state('admin-listing', {
                url: "/sub-admin-listing",
                templateUrl: "content/sub-admin-listing.html",
            })
            .state('add-source', {
                url: "/add-source",
                templateUrl: "content/add-source.html",
            })
            .state('add-mainsource', {
                url: "/add-mainsource",
                templateUrl: "content/add-mainsource.html",
            })
            .state('source-listing', {
                url: "/source-listing",
                templateUrl: "content/source-listing.html",
            })    
 
            .state('mainsource-listing', {
                url: "/mainsource-listing",
                templateUrl: "content/mainsource-listing.html",
            })
            
             .state('view-admin', {
                 url: "/view-admin?id",
                 templateUrl: "content/add-admin.html",
                 controller: function ($scope, $stateParams) {
                     $scope.id = $stateParams.id;
                 }
             })
             .state('view-source', {
                 url: "/view-source?id",
                 templateUrl: "content/add-source.html",
                 controller: function ($scope, $stateParams) {
                     $scope.id = $stateParams.id;
                 }
             })
             // .state('users-listing', {
            //     url: "/users-listing",
            //     templateUrl: "content/users-listing.html"
            // })
            // .state('agents-listing', {
            //     url: "/agents-listing",
            //     templateUrl: "content/agent-listing.html"
            // })
           
            // .state('header-footer', {
            //     url: "/header-footer",
            //     templateUrl: "content/header-footer.html"
            // })
            // .state('add-agent', {
            //     url: "/add-agent",
            //     templateUrl: "content/add-agent.html",
            // })
            // .state('delete-user', {
            //     url: "/delete-user/:id",
            //     controller: function ($scope, $stateParams) {
            //         $scope.id = $stateParams.id;
            //     }
            // })
            // .state('delete-property', {
            //     url: "/delete-property/:id",
            //     controller: function ($scope, $stateParams) {
            //         $scope.id = $stateParams.id;
            //     }
            // })
            // .state('property-listing', {
            //     url: "/property-listing",
            //     templateUrl: "content/property-listing.html",
            // })
            // .state('header-menus-list', {
            //     url: "/header-menus-list",
            //     templateUrl: "content/header-menus-list.html",
            // })
            // .state('view-property', {
            //     url: "/view-property?id",
            //     templateUrl: "content/view-property.html",
            //     controller: function ($scope, $stateParams) {
            //         $scope.id = $stateParams.id;
            //     }
            // })
            // .state('parent-menu', {
            //     url: "/parent-menu",
            //     templateUrl: "content/add-parent-menu.html",
            // })
            // .state('edit-sub-menu', {
            //     url: "/edit-sub-menu?id&reload",
            //     templateUrl: "content/edit-sub-menu.html",
            //     controller: function ($scope, $stateParams) {
            //         $scope.id = $stateParams.id;
            //         $scope.reload = $stateParams.reload;
            //     }
            // })
            // .state('edit-event', {
            //     url: "/edit-event?id",
            //     templateUrl: "content/save-event.html",
            //     controller: function ($scope, $stateParams) {
            //         $scope.id = $stateParams.id;
            //     }
            // })
            // .state('add-event', {
            //     url: "/add-event",
            //     templateUrl: "content/save-event.html",
            // })
            // .state('package-listing', {
            //     url: "/package-listing",
            //     templateUrl: "content/package-listing.html",
            // })
            // .state('user-questions-listing', {
            //     url: "/user-questions-listing",
            //     templateUrl: "content/user-questions-listing.html",
            // })
            // .state('edit-user-question', {
            //     url: "/edit-user-question?id",
            //     templateUrl: "content/add-user-meta-questions.html",
            //     controller: function ($scope, $stateParams) {
            //         $scope.id = $stateParams.id;
            //     }
            // })
            // .state('add-user-question', {
            //     url: "/add-user-question",
            //     templateUrl: "content/add-user-meta-questions.html",
            // })
            // .state('add-package', {
            //     url: "/add-package",
            //     templateUrl: "content/add-package.html",
            // })
            // .state('edit-package', {
            //     url: "/edit-package?id",
            //     templateUrl: "content/add-package.html",
            //     controller: function ($scope, $stateParams) {
            //         $scope.id = $stateParams.id;
            //     }
            // })
            // .state('admin-listing', {
            //     url: "/admin-listing",
            //     templateUrl: "content/sub-admin-listing.html",
            // })
           
        // .state('edit-admin', {
        //     url: "/edit-admin?id",
        //     templateUrl: "content/add-admin.html",
        //     controller: function ($scope, $stateParams) {
        //         $scope.id = $stateParams.id;
        //     }
        // })
        // .state('page-listing', {
        //     url: "/page-listing",
        //     templateUrl: "content/page-listing.html",
        // })
        // .state('app-language-listing', {
        //     url: "/app-language-listing",
        //     templateUrl: "content/app-language-listing.html",
        // })
        // .state('edit-app-language', {
        //     url: "/edit-app-language?id",
        //     templateUrl: "content/add-language-label.html",
        //     controller: function ($scope, $stateParams) {
        //         $scope.id = $stateParams.id;
        //     }
        // })
        // .state('add-page', {
        //     url: "/add-page",
        //     templateUrl: "content/add-page.html",
        // })
        // .state('edit-page', {
        //     url: "/edit-page?id",
        //     templateUrl: "content/add-page.html",
        //     controller: function ($scope, $stateParams) {
        //         $scope.id = $stateParams.id;
        //     }
        // })
        // .state('language-listing', {
        //     url: "/language-listing",
        //     templateUrl: "content/language-listing.html",
        // })
        // .state('add-language', {
        //     url: "/add-language",
        //     templateUrl: "content/add-language.html",
        // })
        // .state('edit-language', {
        //     url: "/edit-language?id",
        //     templateUrl: "content/add-language.html",
        //     controller: function ($scope, $stateParams) {
        //         $scope.id = $stateParams.id;
        //     }
        // })
        // .state('question-listing', {
        //     url: "/question-listing",
        //     templateUrl: "content/question-listing.html",
        // })
        // .state('add-question', {
        //     url: "/add-question",
        //     templateUrl: "content/add-question.html",
        // })
        // .state('edit-question', {
        //     url: "/edit-question?id",
        //     templateUrl: "content/add-question.html",
        //     controller: function ($scope, $stateParams) {
        //         $scope.id = $stateParams.id;
        //     }
        // })
        // .state('feedback-listing', {
        //     url: "/feedback-listing",
        //     templateUrl: "content/feedback-listing.html"
        // })
        // .state('404client', {
        //     url: '*path',
        //     templateUrl: "content/404.html"
        // });
    })