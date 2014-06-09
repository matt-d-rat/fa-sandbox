define(function (require) {
	'use strict';

	// Boostrap the application declaring module dependencies
	require([
		'angular',
		'app/modules/main/MainModule'
	],
	function(angular, mainModule) {
		angular.module('fa-sandbox', ['famous.angular']).config(function($famousProvider) {
			// Register your modules
			$famousProvider.registerModule('main', mainModule);
		});

		angular.element().ready(function() {
	        angular.bootstrap(document, [mainModule.name]);
	    });
	});
});