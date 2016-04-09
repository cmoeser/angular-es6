/**
 * This is an example of a 'component' directive which encapsulates a template.
 */
import {element} from 'angular';

/**
*
**/
export default class ThreeInputsDirective {
	/**
	 * [[Description]]
	 * @param {[[Type]]} $parse [[Description]]
	 */
	constructor($parse) {
		this.restrict = 'A';
		this.scope = true;
		}
	/**
	 * [[Description]]
	 * @param {object}   scope   [[Description]]
	 * @param {[[Type]]} element [[Description]]
	 * @param {[[Type]]} attrs   [[Description]]
	 * @param {[[Type]]} ctrls   [[Description]]
	 */
	link(scope, element, attrs, ctrls) {
		let cursorPosVal = -1,
			oldValue = '';
		
		scope.iNumber = '';
		
		scope.inputChange = () => {
			if (scope.iNumber.length == 5) {
				let nextInput = $(element).next('input');
				    nextInput.focus();
			}
			if ((cursorPosVal == 0) && (scope.iNumber !== oldValue)) {
				let previousInput = $(element).prev('input');
				    previousInput.focus();
			}
			oldValue = scope.iNumber;
		};

		scope.getCursorPos = ($event) => {
			let myEl = $event.target;
			    scope.doGetCaretPosition(myEl);
		};

		scope.doGetCaretPosition = (oField) => {
			// Initialize
			let iCaretPos = 0;

			// IE Support
			if (document.selection) {
				// Set focus on the element
				oField.focus();
				// To get cursor position, get empty selection range
				let oSel = document.selection.createRange();
				// Move selection start to 0 position
				oSel.moveStart('character', -oField.value.length);
				// The caret position is selection length
				iCaretPos = oSel.text.length;
			}
			// Firefox support
			else if (oField.selectionStart || oField.selectionStart == '0')
				iCaretPos = oField.selectionStart;

			// Return results
			cursorPosVal = iCaretPos;
		};

	}
};
