/**
 * ******************************************************************************************************
 *
 *  This is an example of a "component" directive which encapsulates a template.
 *
 *  @author  Chip
 * @date    March,  13,  2016
 *
 * ******************************************************************************************************
 */
'use strict';

import {element} from 'angular';
//
const templateUrl = require('js/features/employees/partials/employees.tpl.html');
/**
 * EmployeesDirective a directive for the home feature/tab.
 */
export default class EmployeesDirective {
	/**
	 * [[Description]]
	 */
	constructor() {
		this.templateUrl = templateUrl;
		this.restrict = 'E';
	}

	link() {}
}

