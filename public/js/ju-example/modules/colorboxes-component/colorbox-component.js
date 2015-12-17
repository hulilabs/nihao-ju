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
            //'view/colorboxes/colorbox',
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
   
        init : function () {            
            this._super.apply(this, arguments);

            //this.addResources(RESOURCE_MAP);

            //this.childrenDef = CHILDREN_DEFINITION;

            // Store uppercase box's color for future reference (used as key for COLORS_HEXA)
            this.upperCaseColor = this.opts.color.toUpperCase();

            this.S = {
                colorbox : '#' + this.opts.color + this.opts.id
            };

            this.COLORS_HEXA = {
                RED : '#ef0000',
                GREEN : '#00ef00',
                BLUE : '#0000ef',
                YELLOW : '#ffff00',
                WHITE : '#ffffff'
            };
            
        },

        configureComponent : function() {
            // Mustache's template
            var colorboxTemplate = { 'colorboxId' : this.opts.color + this.opts.id },
                colorBoxRendered = Mustache.render(colorboxView, colorboxTemplate);

            // Use false as second parameter to not combine child's class with parent's class 
            this.appendToView(colorBoxRendered, false);
        },

        turnOn : function() {
            this.t.$colorbox.css('background-color', this.COLORS_HEXA[this.upperCaseColor]);
        },

        turnOff : function() {
            this.t.$colorbox.css('background-color', this.COLORS_HEXA.WHITE);
        }

    });

    return ColorboxComponent;
});