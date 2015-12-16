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

require([
            'jquery',
            'ju-shared/logger',
            'ju-mvc/history',
            'ju-mvc/page-manager',
            'ju-example/routes'
        ],
        function(
                    $,
                    Logger,
                    History,
                    PageManager
                )
{
    'use strict';

    /**
     * Initialization function
     */
    var init = function()
    {
        $('#site-wrapper').append('<div>... and Hello World!</div>');

        var matchedUrl = History.start();
        if (!matchedUrl) {
            log('No tab loaded by default, we will load the first available...');

            PageManager.navigateToRoute('color-numbers');
        }
    };

    // Application bootstrap
    $(init);

});