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
            'view/color-numbers-view'
        ],
        function (
            BaseComponent,
            Mustache,
            colorNumbersView
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

        box_component1 : {
            component : 'ju-example/modules/color-numbers/box-component',
            insertionPoint : '.box1',
            opts : {
                num : '1',
                color : 'red'
            }
        },

        box_component2 : {
            component : 'ju-example/modules/color-numbers/box-component',
            insertionPoint : '.box2',
            opts : {
                num : '2',
                color : 'blue'
            }
        }
    };

    var ColorNumbersComponent = BaseComponent.extend({
        /**
         * Constructor
         *
         * Common place for setting default options, resources, children definition,
         * selectors, variables...
         */
        init : function () {
            this.setOptions({
                // set any default options values here
                customizableLabel : 'Insert a number and press the ON button!'
            });

            this._super.apply(this, arguments);

            this.addResources(RESOURCE_MAP);

            this.childrenDef = CHILDREN_DEFINITION;
        },

        /**
         * Commonly used to setup the component's markup
         */
        configureComponent : function() {
            var instructionMarkup =  Mustache.render(colorNumbersView,this.opts);//'<div class="color-numbers-instruction">' + this.opts.customizableLabel + '</div><div class="box"></div>';
            this.appendToView(instructionMarkup);
        }

    });

    ColorNumbersComponent.classMembers({
        // add 'static' class members here
        // i.e. can be accessed from the class definition without an instance
    });

    return ColorNumbersComponent;
});