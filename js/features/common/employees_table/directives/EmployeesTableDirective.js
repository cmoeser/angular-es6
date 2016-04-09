/**
 * This is an example of a 'component' directive which encapsulates a template.
 */
import {
	element
}
from 'angular';
import EmployeesTableController from '../controller/EmployeesTableController';

const templateUrl = require('js/features/common/employees_table/partials/employees.table.tpl.html');
/**
*
**/
export default class EmployeesTableDirective {
	/**
	 * [[Description]]
	 * @param {[[Type]]} $scope [[Description]]
	 */
	constructor() {
		this.templateUrl = templateUrl;
		this.restrict = 'E';
		this.bindToController = {
			tables: '='
		};
		this.controller = EmployeesTableController;
		this.controllerAs = 'vm';;
	}
	/**
	 * [[Description]]
	 * @param {object}   scope      [[Description]]
	 * @param {[[Type]]} element    [[Description]]
	 * @param {[[Type]]} attributes [[Description]]
	 * @param {[[Type]]} controller [[Description]]
	 */
	link(scope, element, attributes, controller) {
	/**
	 * Change the sorting for the player details table
	 * @param {[[Type]]} column [[Description]]
	 */
	scope.sort = {column: 'first_name', descending: false};
		
	scope.changeSorting = (column) => {
		let sort = scope.sort;
        if (scope.sort.column === column) {			
            scope.sort.descending = !scope.sort.descending;
			//console.log('Sort: '+scope.sort.column);
        } else {			
            scope.sort.column = column;
            scope.sort.descending = false;
			//console.log('Sort: '+scope.sort.column);
        }
    };	

	}
};
