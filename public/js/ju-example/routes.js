
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
        }
    };

    // Register the routes mapping with the page manager
    PageManager.routes(routesDef);

});