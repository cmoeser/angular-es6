/**
 *  Defines the EmployeeService
 *
 *  @author  Chip Moeser
 *  @date    March,  13,  2016
 *
 */
'use strict';
//WeakMap for $http service 
const HTTP = new WeakMap();
/**
 * EmployeesService a service for employee related tasks
 */
export default class EmployeesService {
	/**
	 * [[Description]]
	 * @param   {Class} $http - Service
	 * @param   {Class} utils - utility class
	 */
	constructor($http, utils) {
		HTTP.set(this, $http);
		this.utils = utils;
		this.selectedEmployee = {};
	}
	/**
	 * Makes a call to a external REST API
	 * @param   {String} endPoint - API url
	 * @returns {Object} - JSON object of empoyees
	 */
	makeAPICall(endPoint) {
			return HTTP.get(this).get(this.utils.getExternalApi(endPoint)).then(result => result.data.employees);
	}
	/**
	 * Sets selected employee
	 * @param {ObjectUtil} employee - selected employee
	 */
	setSelectedEmployee(employee){
		this.selectedEmployee = employee;
	}
	/**
	 * Gets selected employee
	 * @returns {Object} selectedEmployee
	 */
	getSelectedEmployee(){
		return this.selectedEmployee;
	}
	/**
	 * Returns a new instance of the Employees service
	 * @param   {Class} $http - Service
	 * @param   {Class} utils - utility class
	 * @returns {Class} - EmployeesService
	 */
	/*@ngInject*/
	static EmployeesFactory($http, utils) {
		return new EmployeesService($http, utils);
	}
	/**
	 * [[Description]]
	 */
	execute() {}

};

