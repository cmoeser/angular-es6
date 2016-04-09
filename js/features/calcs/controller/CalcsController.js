/**
 * ******************************************************************************************************
 *
 *  Defines a CalcsController
 *
 *  @author  Chip
 * @date    March,  13,  2016
 *
 * ******************************************************************************************************
 */
'use strict';

const SCOPE = new WeakMap();
/**
 * CalcsController a controller for the home feature/tab.
 * Handles event delegation between child directives
 */
export default class CalcsController {
	/**
	 * Calcs controller constructor function
	 * @param {[[Type]]} $scope     [[Description]]
	 */
	/*@ngInject*/
	constructor($scope) {
		var vm = this;
		SCOPE.set(this, $scope);
		//this.addListeners();
	}

	/**
	 * Returns name of CalcsController
	 * @returns {string} - 'CalcsController'
	 */
	run() {
		return 'CalcsController';
	};
}
