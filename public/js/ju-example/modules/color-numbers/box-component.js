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

/**
 * Example self contained component with no resource dependencies
 * that displays a "Nihao!" in the view
 *
 * WARNING : proof of concept only, not a "good practices" guideline
 *           however, explanatory comments are reliable :p
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

    //cambiar archivos .js del view por html
    //Class.getInst(). hasta acá tengo una instancia -> es un singleton

    var TEMPLATE_PATH = 'box-view';

    var RESOURCE_MAP = {
        template : [
            // 'path/to/template'
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
        /**
         * example definition
        child_component : {
            component : 'path/to/child/definition',
            insertionPoint : '.selector',
            opts : {
                // component-dependent options
            }
        */
    };

    var ColorNumbersComponent = BaseComponent.extend({
        /**
         * Constructor
         *
         * Common place for setting default options, resources, children definition,
         * selectors, variables...
         */
        init : function () {
            /*this.setOptions({
                // set any default options values here
                customizableLabel : 'Insert a number and press the ON button!'
            });*/

            this._super.apply(this, arguments);

            this.addResources(RESOURCE_MAP);

            this.status = 1;

            // selector of the box component
            // with its id
            this.S = {
                box : '.box' + this.opts.num
            }

            this.childrenDef = CHILDREN_DEFINITION;
        },

        // change the color if is turned on or off
        // change the status
        toggleColor : function () {
            if(!this.status){
                this.t.$box.css('background-color',this.opts.color);
                this.status = 1;
            } else {
                this.t.$box.css('background-color','white');
                this.status = 0;
            }
        },

        /**
         * Commonly used to setup the component's markup
         */
        configureComponent : function() {
            var boxView = TemplateStorage.getInst().get(TEMPLATE_PATH);
            var instructionMarkup =  Mustache.render(boxView,this.opts);
            this.appendToView(instructionMarkup,false);
        }

    });

    ColorNumbersComponent.classMembers({
        // add 'static' class members here
        // i.e. can be accessed from the class definition without an instance
    });

    return ColorNumbersComponent;
});