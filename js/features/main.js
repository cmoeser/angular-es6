/**
 *  Entrance of features
 *
 *  @author  Chip
 *  @date   March, 13, 2016
 *
 */
'use strict';
import common from './common/main';
import home from './home/main';
import about from './about/main';
import employees from './employees/main';
import calcs from './calcs/main';


export default [...common, home, about, employees, calcs];
