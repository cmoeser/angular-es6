/**
 *
 *  Defines RouteIndicator service
 *
 *  @author  Chip
 *  @date    Dec 12, 2015
 *
 */
'use strict';
import { element } from 'angular';
import pluck from 'lib/Pluck';
import FeatureBase from 'lib/FeatureBase';

export default class Feature extends FeatureBase {
    /**
     * [[Description]]
     */
    constructor() {
        super('RouteIndicator');
        this.$body = element(document.body);
    }
	/**
	 * [[Description]]
	 * @param {object}   $rootScope [[Description]]
	 * @param {[[Type]]} Routes     [[Description]]
	 */
	indicator($rootScope, Routes) {
		var _this = this;
        var classes = pluck(Routes, 'id').join(' ');
        $rootScope.$on('$stateChangeSuccess', function(e, route) {
			_this.$body.removeClass(classes);
            if (route && route.$$route && route.$$route.id) {
                _this.$body.addClass(route.$$route.id);
            }
        });
    }
    /**
     * [[Description]]
     */
    execute() {
        var indicator = this.indicator.bind(this);
        indicator.$inject = ['$rootScope', 'Routes'];
        this.run(indicator);
    }
}
