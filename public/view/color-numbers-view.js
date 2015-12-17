
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
        '<div class="color-numbers">',
            '<div class="color-numbers-instruction"> {{customizableLabel}} </div>',
            '<div class="color-numbers">',
                '<div class="color-numbers-input">',
                '    <input class="box-number-input" type="number" min="1">',
                '    <button class="turn-on-button" type="submit">ON</button>',
                '</div>',
                '<div class="boxes-table" style="width : 20%">',
                '</div>',
            '</div>',
        '</div>'
    ].join('');



});