require.config({
    baseUrl: './',
    waitSeconds: 0,
    paths: {
        'angular': 'bower_components/angular/angular',
        'ngRoute': 'bower_components/angular-route/angular-route',
        'ngCookies': 'bower_components/angular-cookies/angular-cookies',
        'ngSanitize': 'bower_components/angular-sanitize/angular-sanitize',
        'ngResource': 'bower_components/angular-resource/angular-resource',
        'ngMocks': 'bower_components/angular-mocks/angular-mocks',
        'ngAnimate': 'bower_components/angular-animate/angular-animate',
        'famous': 'bower_components/famous',
        'famous-angular': 'bower_components/famous-angular/dist/famous-angular',
        'famous-polyfills': 'bower_components/famous-polyfills',
        'ui.router': 'bower_components/angular-ui-router/release/angular-ui-router',
        'bootstrap': 'app/bootstrap'
    },
    shim: {
        'angular' : {
            'exports': 'angular'
        },
        'ngRoute': ['angular'],
        'ngCookies': ['angular'],
        'ngSanitize': ['angular'],
        'ngResource': ['angular'],
        'ngAnimate': ['angular'],
        'ngMocks': {
            'deps':['angular'],
            'exports':'angular.mock'
        }
    },
    priority: ['angular', 'famousAngular']
 });

// Load in famous-angular and its dependencies, then bootstrap the application.
 require([
    'angular',
    'famous-polyfills/requestAnimationFrame',
    'famous-angular',
    'ngRoute',
    'ngAnimate', 
    'bootstrap'
]);