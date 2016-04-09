/**
 *  Feature loader
 *
 *  @author  Chip
 *  @date    March,  13,  2016
 *
 */
'use strict';

var loader = function(Feature) {
    var feature = new Feature();
    feature.run();
    return feature;
};

export default loader;
