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
import HomeController from '../controller/HomeController';
//
const templateUrl = require('js/features/home/partials/home.tpl.html');
/**
 * HomeDirective a directive for the home feature/tab.
 */
export default class HomeDirective {
	/**
	 * [[Description]]
	 * @param {[[Type]]} $scope [[Description]]
	 */
	constructor() {
		this.templateUrl = templateUrl;
		this.restrict = 'E';
		this.controller = HomeController;
		this.controllerAs = 'vm';
	}
	/**
	 * [[Description]]
	 */
	link() {}
}

