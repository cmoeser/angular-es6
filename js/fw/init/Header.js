/**
 *  HeadInit set all needed head info to the index.html.
 *
 *
 *  @author  Chip
 *  @date    March,  13,  2016
 *
 */
'use strict';
import InitBase from 'lib/InitBase';
import { element } from 'angular';
import __config from 'etc/config';

export default class Initializer extends InitBase {
	/**
	 * [[Description]]
	 * @param {[[Type]]} features [[Description]]
	 */
	constructor(features) {
        super(features);
        this.head = element(document.head);
    }
    /**
     * [[Description]]
     * @param {[[Type]]} t [[Description]]
     */
    title(t) {
        var title = element('<title></title>');
        title.text(t);
        this.head.append(title);
    }
    /**
     * [[Description]]
     * @param {[[Type]]} attr [[Description]]
     */
    base(attr) {
        var base = element('<base>');
        base.attr(attr);
        this.head.find('base').remove();
        this.head.append(base);
    }
    /**
     * [[Description]]
     * @param {[[Type]]} attr [[Description]]
     */
    meta(attr) {
        var meta = element('<meta>');
        meta.attr(attr);
        this.head.append(meta);
    }
    /**
     * [[Description]]
     */
    execute() {
        this.title(__config.appname);
        this.meta({'charset': 'utf-8'});
        this.meta({
            'name': 'viewport',
            'content': 'width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1.0, user-scalable=yes, minimal-ui'
        });
        this.meta({'name': 'renderer', 'content': 'webkit'});
        this.meta({
            'http-equiv': 'X-UA-Compatible',
            'content': 'IE=edge,chrome=1'
        });
        this.meta({
            'name': 'apple-mobile-web-app-capable',
            'content': 'yes'
        });
        this.meta({
            'name': 'apple-mobile-web-app-capable',
            'content': 'yes'
        });
    }
};
