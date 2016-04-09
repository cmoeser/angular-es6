/**
 *  SSOConfig set authorised configuration.
 *
 *  @author  Chip
 *  @date    March,  13,  2016
 *
 */
'use strict';
import ConfiguratorBase from 'lib/ConfiguratorBase';
import AppHttpResponseInterceptor from 'lib/AppHttpResponseInterceptor';

export default class Configurator extends ConfiguratorBase {
	/**
	 * [[Description]]
	 * @param {[[Type]]} features [[Description]]
	 * @param {[[Type]]} app      [[Description]]
	 */
	constructor(features, app) {
        super(features, app);
    }
	/**
	 * [[Description]]
	 * @param {object}   $httpProvider [[Description]]
	 * @param {[[Type]]} $provide      [[Description]]
	 */
	/*@ngInject*/
	httpConfig($httpProvider, $provide) {
        $httpProvider.defaults.headers.common.Accept = 'application/json;charset=utf-8';
        //$httpProvider.defaults.withCredentials = true;
		$provide.factory('authorizeInterceptor', AppHttpResponseInterceptor.httpAuthFactory);
		$httpProvider.interceptors.push('authorizeInterceptor');
    }
    /**
     * [[Description]]
     */
    execute() {
        this.config(this.httpConfig);
    }
};
