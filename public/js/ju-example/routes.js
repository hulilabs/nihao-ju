
/**                   _
 *  _             _ _| |_
 * | |           | |_   _|
 * | |___  _   _ | | |_|
 * | '_  \| | | || | | |
 * | | | || |_| || | | |
 * |_| |_|\___,_||_| |_|
 *
 * (c) Huli Inc
 */

define( [
            'ju-mvc/page-manager'
        ],
        function(
                    PageManager
                )
{
    'use strict';

    var routesDef = {
        'nihao' : {
            route: 'nihao',
            defaultRoute : 'nihao',
            controller : 'ju-example/modules/landing/landing'
        },

        'nihao-component' : {
            route: 'nihao-component',
            controller: 'ju-example/modules/nihao-components/controller-with-component'
        },

        'loading-bar' : {
            route: 'loading-bar',
            controller: 'ju-example/modules/loading-bar/loading-bar'
        },

        'colorboxes' : {
            route: 'colorboxes',
            controller: 'ju-example/modules/colorboxes-component/colorboxes-controller'
        },

        'progress-bar' : {
            route : 'progress-bar',
            defaultRoute : 'progress-bar',
            controller : 'js/ju-example/modules/progress-bar/progress-bar-ctrl'
        },

        'color-numbers' : {
            route : 'color-numbers',
            defaultRoute : 'color-numbers',
            controller : 'js/ju-example/modules/color-numbers/color-numbers-controller'
        }
    };

    // Register the routes mapping with the page manager
    PageManager.routes(routesDef);

});