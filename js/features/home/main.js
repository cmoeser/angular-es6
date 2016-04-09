/**
 * ******************************************************************************************************
 *
 *   Defines a home feature
 *
 *  @author  Chip
 * @date    March,  13,  2016
 *
 * ******************************************************************************************************
 */
'use strict';


import FeatureBase from 'lib/FeatureBase';
import Routes from './Routes';
import HomeController from './controller/HomeController';
import HomeDirective from './directives/HomeDirective';

export default class Feature extends FeatureBase {

	constructor() {
		super('home'); 
		this.routes = Routes;
	}

	beforeStart() {	}

	execute() {
		this.controller('HomeController', HomeController);
		this.directive('homeDirective', () => new HomeDirective());		
	}
}
