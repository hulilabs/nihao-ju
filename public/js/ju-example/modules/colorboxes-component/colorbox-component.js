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
            'lib/vendor/mustache.js/mustache',
            'ju-components/resource/storage/template-storage'
        ],
        function (
            BaseComponent,
            Mustache,
            TemplateStorage
        ) {

    'use strict';

    var TEMPLATE_PATH = 'colorboxes/colorbox';

    var RESOURCE_MAP = {
        template : [
            TEMPLATE_PATH
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

            this.addResources(RESOURCE_MAP);

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

            var colorboxView = TemplateStorage.getInst().get(TEMPLATE_PATH);
            // Mustache's template for setting the id of colorbox in markup
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