/**
 *  Entrance of init
 *
 *  Note: this module is part of application-level framework, developers should
 *  never touch this module
 *
 *
 *  @author  Chip
 *  @date    March,  13,  2016
 *
 */
'use strict';
import header from './Header';
import body from './Body';
import validator from './Validator';

export default [header, body, validator];
