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
            'ju-components/base',
            'view/colorboxes/colorbox',
            'lib/vendor/mustache.js/mustache'
        ],
        function (
            BaseComponent,
            colorboxView,
            Mustache
        ) {

    'use strict';

    var RESOURCE_MAP = {
        template : [
            //'view/colorboxes/colorboxes',
        ],
        cssFile : [
            // 'path/to/css/file'
        ],
        l10n : [
            // 'l10n_key'
        ]
    };

    var CHILDREN_DEFINITION = {

    };

    var ColorboxComponent = BaseComponent.extend({
   
        init : function (opts) {            
            this._super.apply(this, arguments);

            this.addResources(RESOURCE_MAP);

            this.childrenDef = CHILDREN_DEFINITION;

            this.S = {
                color: this.opts.color
            };
            
        },

        configureComponent : function() {
            var colorboxTemplate = {
                'color' : this.opts.color
            };
            var colorBoxRendered = Mustache.render(colorboxView, colorboxTemplate);

            this.appendToView(colorBoxRendered, false);
        },

        turnOn : function(color) {                    
            (this.t['$' + color]).css('background-color', this.COLORS_HEXA[color]);
        }

    });

    ColorboxComponent.classMembers({
        COLORS : {
            RED: 'red',
            GREEN: 'green',
            BLUE: 'blue'
        }
    });

    return ColorboxComponent;
});