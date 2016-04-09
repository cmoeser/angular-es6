/**
 * ******************************************************************************************************
 *
 *   Defines a calcs feature
 *
 *  @author  Chip
 * @date    March,  13,  2016
 *
 * ******************************************************************************************************
 */
'use strict';

import FeatureBase from 'lib/FeatureBase';
import Routes from './Routes';
import CalcsDirective from './directives/CalcsDirective';

/*
*
**/
export default class Feature extends FeatureBase {
	/**
	 * [[Description]]
	 */
	constructor() {
		super('Calcs'); 
		this.routes = Routes;
	}
	/**
	 * [[Description]]
	 */
	beforeStart() {	}
	/**
	 * [[Description]]
	 */
	execute() {
		this.directive('calcsDirective', () => new CalcsDirective());		
	}
}
