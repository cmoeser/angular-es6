/**
 * ******************************************************************************************************
 *
 *   Defines a Footer
 *
 *  @author  Chip
 * @date    March,  13,  2016
 *
 * ******************************************************************************************************
 */
'use strict';
import FeatureBase from 'lib/FeatureBase';
import { element } from 'angular';
import FooterDirective from '../directives/FooterDirective';
/**
 * Footer JS 
 */
export default class Feature extends FeatureBase {
    /**
     * Constructor for the footer module
     */
    constructor() {
        super('FooterModule');
        this.$body = element(document.body);
    }
    /**
     * [[Description]]
     */
    beforeStart() {
        this.$body.append('<footer-directive></footer-directive>');
    }
    /**
     * [[Description]]
     */
    execute() {
        this.directive('footerDirective', () => new FooterDirective());
    }
}
