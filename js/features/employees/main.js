/**
 * ******************************************************************************************************
 *
 *   Defines a employees feature
 *
 *  @author  Chip
 * @date    March,  13,  2016
 *
 * ******************************************************************************************************
 */
'use strict';

import FeatureBase from 'lib/FeatureBase';
import Routes from './Routes';
import EmployeesDirective from './directives/EmployeesDirective';
/**
*
**/
export default class Feature extends FeatureBase {
	/**
	 * [[Description]]
	 */
	constructor() {
		super('employees'); 
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
		this.directive('employeesDirective', () => new EmployeesDirective());		
	}
}
