/**
 * ******************************************************************************************************
 *
 *   Defines the TopNavbar Module.
 *
 *  @author  Chip
 * @date    March,  13,  2016
 *
 * ******************************************************************************************************
 */
'use strict';

import { element } from 'angular';
import FeatureBase from 'lib/FeatureBase';
import TopNavbarDirective from '../directives/TopNavbarDirective';
/**
 * Main class for a top navbar component
 * Assigns controller. Creates new instance of TopNavbarDirective and assigns it to the .directive propeerty
 */
export default class Feature extends FeatureBase {
    /**
     * Constructor for top nav bar
     */
    constructor() {
        super('TopnavModule');        
		this.$body = element(document.body);		
   }
    /**
     * Prepends the directive before beginning the app
     */
    beforeStart() {
        this.$body.prepend('<top-navbar-directive></top-navbar-directive>');
    }
    /**
     * Executes by app Main
     */
    execute() {
        this.directive('topNavbarDirective', () => new TopNavbarDirective());		
    }
}

