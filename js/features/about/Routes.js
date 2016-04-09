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
		name: 'home.about',
		url: '/about/:company/:id',
		isDefault: false,
		template: '<about-directive></about-directive>'
	  }

];
