/**
 *  NotifierConfig set angular-sweetnotifier needed configuration
 *  Notifications
 *
 *  @author  Chip
 *  @date    March,  13,  2016
 *
 */
'use strict';
import ConfiguratorBase from 'lib/ConfiguratorBase';
/**
*
**/
class Configurator extends ConfiguratorBase {
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
	 * @param {[[Type]]} notifierProvider [[Description]]
	 */
	/*@ngInject*/
	notifierConfig(notifierProvider) {
		notifierProvider.setPlacement('top', 'right');
		notifierProvider.setUseNativeWhileBlur(true);
	}
	/**
	 * [[Description]]
	 */
	execute() {
		this.config(this.notifierConfig);
	}
}

export default Configurator;
