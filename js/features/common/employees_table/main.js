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
import EmployeesTableController from './controller/EmployeesTableController';
import EmployeesTableDirective from './directives/EmployeesTableDirective';
import EmployeesService from 'fw/service/EmployeesService';

/**
 * Main class for a employee table component
 */
export default class Feature extends FeatureBase {
	/**
	 * COnstructor function for EmployeesTable class
	 */
	constructor() {
		super('EmployeesTable');
	}

	beforeStart() {}
	/**
	 * Executes feature properties, assigns service, controller, and creates new isntance of directive and assigns it
	 */
	execute() {
		this.factory('EmployeesService', EmployeesService.EmployeesFactory);
		this.controller('EmployeeTableController', EmployeesTableController);
		this.directive('employeeTableDirective', () => new EmployeesTableDirective());


	}
}

