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

import AboutController from '../controller/AboutController';

const templateUrl = require('js/features/about/partials/about.tpl.html');
/**
 * AboutDirective a directive for the home feature/tab.
 */
export default class AboutDirective {
	/**
	 * [[Description]]
	 */
	constructor() {
		this.templateUrl = templateUrl;
		this.restrict = 'E';
		this.controller = AboutController;
		this.controllerAs = 'vm';
	}
	/**
	 * [[Description]]
	 */
	link() {}
}

