'use strict';
/**
 * PhoneInput a directive for the accordian feature.
 */
export default class PhoneInputDirective {
	/**
	 * Constructor for Phone Input Directive 
	 */
	/*@ngInject*/
	constructor($filter) {
		this.restrict = 'A';
		this.require = 'ngModel';
		this.link = ($scope, $element, $attrs, ngModelCtrl)=>{
			var listener = ()=> {
                var value = $element.val().replace(/[^0-9]/g, '');
                $element.val($filter('tel')(value, false));
            };

            // This runs when we update the text field
            ngModelCtrl.$parsers.push((viewValue)=>{
                return viewValue.replace(/[^0-9]/g, '').slice(0,10);
            });

            // This runs when the model gets updated on the scope directly and keeps our view in sync
            ngModelCtrl.$render = ()=> {
                $element.val($filter('tel')(ngModelCtrl.$viewValue, false));
            };

            $element.bind('change', listener);
            $element.bind('keydown', (event)=> {
                var key = event.keyCode;
                // If the keys include the CTRL, SHIFT, ALT, or META keys, or the arrow keys, do nothing.
                // This lets us support copy and paste too
                if (key == 91 || (15 < key && key < 19) || (37 <= key && key <= 40)){
                    return;
                }
                //$browser.defer(listener); // Have to do this or changes don't get picked up properly
            });

            $element.bind('paste cut', ()=>{
                //$browser.defer(listener);
            });
        }
	}
	/**
	 * Link function for the currency input directive
	 * 
	 */	
	link(){}


}