const EmployeeService = new WeakMap();
/**
 * EmployeesTableController a controller for the league tables.
 * Fetches league table data, allows users to switch between leagues
 * Sends team information with table loaded event or when user clicks
 * on a team to get sepcific details
 */
export default class EmployeesTableController {
	/*@ngInject*/
	constructor($timeout, EmployeesService, CONF) {
		var vm = this;
		EmployeeService.set(this, EmployeesService);
		this.tables = {};
		this.config = CONF;
		this.selectedEmployee = '';
		this.getEmployeesTable();
	}
	/**
	 * Gets a league table then calls a function to retrieve the team ID at the top of the table
	 */
	getEmployeesTable() {		
		EmployeeService.get(this).makeAPICall(this.config.employeesApi).then(
			//Success handler 
			response => {
				this.tables = response;
			},
			//Error handler
			response => {
				console.log('EmployeeService error: ' + response.data);
			}
		);
	}
	/**
	 * Set employee
	 * @param {String} empID
	 */
	setEmployee(empID){
		this.getEmployee(empID);
		EmployeeService.get(this).setSelectedEmployee(this.getEmployee(empID));		
	}
	/**
	 * Employees JSON object iterable
	 * @param   {[[Type]]} empID [[Description]]
	 * @returns {object}   [[Description]]
	 */
	getEmployee(empID){
		this.tables[Symbol.iterator] = () => {
			let properties = Object.keys(this.tables);
			let count = 0;
			let isDone = false;
			
			let next = () => {
				if(count >= properties.length){
					isDone = true;
				}
				return {done: isDone, value: this.tables[properties[count++]]};
			}
			return {next};
		}
		let key = 'id';
		for (let employee of this.tables) {
			if(employee.id == empID){
			    return employee;
				break;
			}
		}
	}
		
	/**
	 * Returns the Name of this controller
	 * @returns {string} ['EmployeesTableController']
	 */
	run() {
		return 'EmployeesTableController';
	};
}
