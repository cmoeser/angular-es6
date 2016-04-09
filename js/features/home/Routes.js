/**
 *
 *  Routes module expose route information used in home feature
 *
 *  @author  Chip
 *  @date    March,  13,  2016
 *
 */

export default [
	{
		abstract: true,
		name: 'home',
		url: '/home',
		isDefault: true,
		template: '<home-directive></home-directive>'
	  }

];
