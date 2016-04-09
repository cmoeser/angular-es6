/**
 *  Validate the features is loaded correctly
 *
 *
 *  @author  Chip
 *  @date    March,  13,  2016
 *
 */
'use strict';
import InitBase from 'lib/InitBase';
import pluck from 'lib/Pluck';
/**
*
*/
export default class Initializer extends InitBase {
	/**
	 * [[Description]]
	 * @param {[[Type]]} features [[Description]]
	 */
	constructor(features) {
        super(features);
    }
    /**
     * [[Description]]
     * @throws {Error} [[Description]]
     */
    execute() {
        if (!this.features || this.features.length === 0) {
            console.warn('No features loaded');
            return;
        }

        var modNames = pluck(this.features, 'export').sort();
        for (var i = 0; i < modNames.length - 1; i++) {
            if (modNames[i] === modNames[i + 1]) {
                throw new Error('Duplicated Module: [ ' + modNames[i] + ' ], you have to specify another name');
            }
        }
    }
};
