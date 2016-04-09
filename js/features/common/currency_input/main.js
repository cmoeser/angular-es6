/**
 * ******************************************************************************************************
 *
 *   Defines a CurrencyInput feature
 *
 *  @author  Chip
 * @date    March,  13,  2016
 *
 * ******************************************************************************************************
 */
'use strict';

import FeatureBase from 'lib/FeatureBase';
import CurrencyInputDirective from './directives/CurrencyInputDirective';
/**
 * Main class for a employee table component
 */
export default class Feature extends FeatureBase {
	/**
	 * COnstructor function for CurrencyInput class
	 */
	constructor() {
		super('CurrencyInput');
	}
	/**
	 * Executes feature properties, assigns service, controller, and creates new isntance of directive and assigns it
	 */
	execute() {		
		this.directive('currencyInputDirective', () => new CurrencyInputDirective());
	}
}

