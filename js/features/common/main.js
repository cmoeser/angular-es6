/**
 *  Entrance of common service
 *
 *
 *  @author  Chip
 *  @date    March,  13,  2016
 *
 */
import ui from './ui/main';
import employeesTable from './employees_table/main';
import currencyInput from './currency_input/main';
import phoneInput from './phone_input/main';
import threeInputs from './three_inputs/main';

export default [...ui, employeesTable, currencyInput, phoneInput, threeInputs];
