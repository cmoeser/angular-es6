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
import PhoneInputDirective from './directives/PhoneInputDirective';
/**
 * Main class for a employee table component
 */
export default class Feature extends FeatureBase {
	/**
	 * COnstructor function for CurrencyInput class
	 */
	constructor() {
		super('phoneInput');
	}
	/**
	 * Executes feature properties, assigns service, controller, and creates new isntance of directive and assigns it
	 */
	execute() {	
		//TODO move to filter class
		this.filter('tel', () => {
			return (tel)=> {
				if (!tel) {
					return '';
				}

				var value = tel.toString().trim().replace(/^\+/, '');

				if (value.match(/[^0-9]/)) {
					return tel;
				}

				var country, city, number;

				switch (value.length) {
					case 1:
					case 2:
					case 3:
						city = value;
						break;

					default:
						city = value.slice(0, 3);
						number = value.slice(3);
				}

				if (number) {
					if (number.length > 3) {
						number = number.slice(0, 3) + '-' + number.slice(3, 7);
					} else {
						number = number;
					}

					return ('(' + city + ') ' + number).trim();
				} else {
					return '(' + city;
				}

			};
		});
		
		this.directive('phoneInputDirective', ($filter) => new PhoneInputDirective($filter));
	}
}

