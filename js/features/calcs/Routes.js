/**
 *
 *  Routes module expose route information used in about feature
 *
 *  @author  Chip
 *  @date    March,  13,  2016
 *
 */

export default [
	{
		name: 'home.calcs',
		url: '/calcs',
		isDefault: false,
		template: '<calcs-directive ng-model="calcs"/>'
	  }

];
