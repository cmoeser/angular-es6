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

const templateUrl = require('js/features/calcs/partials/calcs.tpl.html');
/**
 * CalcsDirective a directive for the home feature/tab.
 */
export default class CalcsDirective {
	/**
	 * [[Description]]
	 * @param {[[Type]]} $scope [[Description]]
	 */
	constructor($scope) {
		this.templateUrl = templateUrl;
		this.restrict = 'E';
	}
	/**
	 * [[Description]]
	 * @param {object}   scope   [[Description]]
	 * @param {[[Type]]} element [[Description]]
	 * @param {[[Type]]} attrs   [[Description]]
	 * @param {[[Type]]} ctrls   [[Description]]
	 */
	link(scope, element, attrs, ctrls) {
		scope.total = 0,
		scope.inputOne = 100,
		scope.inputTwo = 100,
		scope.inputThree = 100;
		
		scope.makeTotal = () => {
			scope.total = Math.round(scope.inputOne + scope.inputTwo +scope.inputThree);
		}
		scope.totalChange = ()=> {
			let children = Math.round(scope.total/3);
			
			    scope.inputOne =children; scope.inputTwo = children; scope.inputThree = children;
		}
		
		scope.makeTotal();
	}
}

