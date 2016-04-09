/**
 * ******************************************************************************************************
 *
 *   Defines a EmployeesTable feature
 *
 *  @author  Chip
 * @date    March,  13,  2016
 *
 * ******************************************************************************************************
 */
'use strict';

import FeatureBase from 'lib/FeatureBase';
import ThreeInputsDirective from './directives/ThreeInputsDirective';
/**
 * Main class for a employee table component
 */
export default class Feature extends FeatureBase {
	/**
	 * COnstructor function for EmployeesTable class
	 */
	constructor() {
		super('ThreeInputs');
	}
	/**
	 * [[Description]]
	 */
	beforeStart() {	}
	/**
	 * Executes feature properties, assigns service, controller, and creates new isntance of directive and assigns it
	 */
	execute() {
		this.directive('threeInputsDirective', ($parse) => new ThreeInputsDirective($parse));


	}
}

