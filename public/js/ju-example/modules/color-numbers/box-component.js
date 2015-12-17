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
            'view/box-view'
        ],
        function (
            BaseComponent,
            Mustache,
            boxView
        ) {

    'use strict';

    var RESOURCE_MAP = {
        template : [
            // 'path/to/template'
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

            // selector of the box component
            // with its id
            this.S = {
                box : '.box' + this.opts.num
            }

            this.childrenDef = CHILDREN_DEFINITION;
        },

        // set the color white to the box component
        // if it is selected by the user
        setClearColor : function () {
            this.t.$box.css('background-color','white');
        },

        // set the color of the parameter to the box component
        // to return it to the original color
        setSelectedColor : function (color) {
            this.t.$box.css('background-color',color);
        },

        getColor : function () {
            return this.t.$box.css('background-color');
        },

        /**
         * Commonly used to setup the component's markup
         */
        configureComponent : function() {
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