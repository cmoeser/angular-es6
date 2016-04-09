'use strict';
/**
 * CurrencyDirective a directive for the accordian feature.
 * Handles event delegation between child directives
 */
export default class CurrencyInputDirective {
	/**
	 * Constructor for Currency Directive 
	 */
	constructor($filter) {
		this.restrict = 'A';
		this.require = 'ngModel';
	}
	/**
	 * Link function for the currency input directive
	 * 
	 */	
	link(){}


}