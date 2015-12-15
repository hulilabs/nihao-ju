
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
        ],
        function(
        )
{
    'use strict';

    return [
        '<div class="loading-bar">',
            '<h3>ju-mvc life cycle example</h3>',
            '<ul>',
                '<li><p>Next Button: go to the next life cycle stage</p></li>',
                "<li><p>Dummy Button: won't work until 'bind events' stage is completed</p></li>",
            '</ul>',
        	'<button class="button-dummy">Dummy</button>',
        	'<button class="button-next">Next</button>',
        '</div>'
    ].join('');



});