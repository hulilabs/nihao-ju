
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
                '    <input class="box-number-input" type="number" min="1" max="9">',
                '    <button class="turn-on-button" type="submit">ON</button>',
                '</div>',
                '<table>',
                '  <tr>',
                '    <td><div class="box1"></div></td>',
                '    <td><div class="box2"></div></td>',
                '    <td><div class="box3"></div></td>',
                '  </tr>',
                '  <tr>',
                '    <td><div class="box4"></div></td>',
                '    <td><div class="box5"></div></td>',
                '    <td><div class="box6"></div></td>',
                '  </tr>',
                '  <tr>',
                '    <td><div class="box7"></div></td>',
                '    <td><div class="box8"></div></td>',
                '    <td><div class="box9"></div></td>',
                '  </tr>',
                '</table>',
            '</div>',
        '</div>'
    ].join('');



});