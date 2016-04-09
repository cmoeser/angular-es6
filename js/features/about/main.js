/**
 * ******************************************************************************************************
 *
 *   Defines a about feature
 *
 *  @author  Chip
 * @date    March,  13,  2016
 *
 * ******************************************************************************************************
 */
'use strict';
const EmployeeService = new WeakMap();

import FeatureBase from 'lib/FeatureBase';
import Routes from './Routes';
import AboutController from './controller/AboutController';
import AboutDirective from './directives/AboutDirective';
import EmployeesService from 'fw/service/EmployeesService';

/**
*
**/
export default class Feature extends FeatureBase {
	/**
	 * [[Description]]
	 */
	constructor() {
		super('About'); 
		this.routes = Routes;
	}
	/**
	 * [[Description]]
	 */
	beforeStart() {	}
	/**
	 * [[Description]]
	 */
	execute() {
		this.factory('EmployeesService', EmployeesService.EmployeesFactory);
		this.controller('AboutController', AboutController);
		this.directive('aboutDirective', () => new AboutDirective());

		
	}
}
