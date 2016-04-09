/**
 * ******************************************************************************************************
 *
 *  Defines a AboutController
 *
 *  @author  Chip
 * @date    March,  13,  2016
 *
 * ******************************************************************************************************
 */
'use strict';

const EmployeeService = new WeakMap();
/**
 * AboutController a controller for the home feature/tab.
 * Handles event delegation between child directives
 */
export default class AboutController {
	/**
	 * About controller constructor function
	 * @param {[[Type]]} EmployeesService [[Description]]
	 */
	constructor(EmployeesService, $stateParams) {
		var vm = this;
		EmployeeService.set(this, EmployeesService);
		this.selectedEmployee = {};
		this.employee_name = ''
		this.getSelectedEmployee();
		this.company_name = $stateParams.company;
		this.company_id = $stateParams.id;
	}
    /**
     * [[Description]]
     */
    getSelectedEmployee(){
		this.selectedEmployee = EmployeeService.get(this).getSelectedEmployee();
		if(this.selectedEmployee.first_name !== undefined)
		this.employee_name = this.selectedEmployee.first_name + ' ' + this.selectedEmployee.last_name;
	}
	/**
	 * Returns name of AboutController
	 * @returns {string} - 'AboutController'
	 */
	run() {
		return 'AboutController';
	};
}
