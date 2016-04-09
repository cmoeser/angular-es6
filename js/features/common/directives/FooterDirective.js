/**
 * This is an example of a "component" directive which encapsulates a template.
 */
import { element } from 'angular';
//
const templateUrl = require('js/features/common/ui/footer.tpl.html');
/**
*
*/
export default class FooterDirective {
	/**
	 * [[Description]]
	 */
	constructor() {
		this.templateUrl = templateUrl;
        this.restrict = 'E';
        this.replace = true;
    }
    /**
     * [[Description]]
     */
    link() { }
};

