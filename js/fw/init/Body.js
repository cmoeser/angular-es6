/**
 *  BodyInit set ui-view to the index.html.
 *
 *
 *  @author  Chip
 *  @date    March,  13,  2016
 *
 */
'use strict';
import InitBase from 'lib/InitBase';
import { element } from 'angular';
/**
*
**/
class Initializer extends InitBase {
    /**
     * [[Description]]
     * @param {[[Type]]} features [[Description]]
     */
    constructor(features) {
        super(features);
    }
    /**
     * [[Description]]
     */
    execute() {
        element(document.body).append('<div ui-view autoscroll="true" class="main"></div>');
    }
}

export default Initializer;
