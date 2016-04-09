/**
 *  RouterConfig collect route information from each feature and combine them
 *  with ngRoute.
 *
 *
 *  @author  Chip
 *  @date    Dec 12, 2015
 *
 */
'use strict';
import ConfiguratorBase from 'lib/ConfiguratorBase';
import pluck from 'lib/Pluck';
import omit from 'lib/Omit';
/*
*
**/
export default class Configurator extends ConfiguratorBase {
	/**
	 * [[Description]]
	 * @param {[[Type]]} features [[Description]]
	 * @param {[[Type]]} app      [[Description]]
	 */
	constructor(features, app) {
			super(features, app);
		}
	/**
	 * [[Description]]
	 * @param   {[[Type]]} $stateProvider     [[Description]]
	 * @param   {[[Type]]} $urlRouterProvider [[Description]]
	 * @param   {object}   $locationProvider  [[Description]]
	 * @returns {[[Type]]} [[Description]]
	 */
	routeConfig($stateProvider, $urlRouterProvider, $locationProvider) {		
		//config each router		
		this.routes.forEach(function (ro) {
			let stateProps = omit(ro, ['name', 'isDefault']);
			    $stateProvider.state(ro.name, stateProps);
		});
		
		//config default page
		let defaultRouter = this.routes.filter(function (route) {
			return route.isDefault;
		})[0];

		if (defaultRouter) {
			$urlRouterProvider.otherwise(defaultRouter.name);
		}
		
		$locationProvider.html5Mode( {
			enabled: true,
			requireBase: false,
			rewriteLinks: true
        });
		
		$urlRouterProvider.otherwise('/home/about/Oracle/23');
	}
	/**
	 * [[Description]]
	 * @returns {[[Type]]} [[Description]]
	 */
	execute() {
		if (!this.features || this.features.length === 0) {
			console.warn('No features loaded');
			return;
		}

		this.routes = this.features
			.filter(function (feature) {
				return feature.routes && feature.routes.length > 0;
			})
			.map(function (feature) {
				return feature.routes;
			})
			.reduce(function (previous, current) {
				return previous.concat(current);
			}, []);

		var defaultRoutes = this.routes.filter(function (route) {
			return route.isDefault;
		});

		if (defaultRoutes.length === 0) {
			console.warn('There is no any default route set. Try setting isDefault to the route you preferred');
		} else if (defaultRoutes.length > 1) {
			var defaultWhens = pluck(defaultRoutes, 'when');
			console.warn('You have set [' + defaultRoutes.length + '] default routes, they are [' + defaultWhens.join(', ') + ']. Try to correct it');
		}

		this.constant('Routes', this.routes);

		var routeConfig = this.routeConfig.bind(this);

		routeConfig.$inject = [
            '$stateProvider',
            '$urlRouterProvider',
			'$locationProvider'
        ];
		this.config(routeConfig);
	}
}
