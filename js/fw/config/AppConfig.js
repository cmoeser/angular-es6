/**
 *  AppConfig is the configuration of the whole application, in case
 *  you have different stuff for each env
 *
 *
 *  @author  Chip
 *  @date    March,  13,  2016
 *
 */
'use strict';
import ConfiguratorBase from 'lib/ConfiguratorBase';
import __config from 'etc/config';
/**
 * Configurator. Initializes config file 
 * and assigns it to this.config
 * @extends {ConfiguratorBase}
 */
export default class Configurator extends ConfiguratorBase {
	/**
	 * [[Description]]
	 * @param {[[Type]]} features [[Description]]
	 * @param {[[Type]]} app      [[Description]]
	 */
	constructor(features, app) {
        super(features, app);
        this.config = __config;
    }
    /**
     * [[Description]]
     */
    execute() {
        this.constant('CONF', this.config);
    }
};
