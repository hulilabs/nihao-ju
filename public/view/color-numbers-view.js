
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
                '<div class="number-input">',
                    '<button>ON</button>',
                    '<input type="number" min="1" max="9">',
                '</div>',
                '<table>',
                '  <tr>',
                '    <td><div class="box1"></div></td>',
                '    <td><div class="box2"></div></td>',
                '  </tr>',
                '</table>',
            '</div>',
        '</div>'
    ].join('');



});