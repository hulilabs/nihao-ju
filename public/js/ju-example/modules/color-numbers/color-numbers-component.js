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

            this.S = {
                turnOnButton : '.turn-on-button',
                boxNumberInput : '.box-number-input',
            }

            this._generateBoxes(9);

            this.childrenDef = CHILDREN_DEFINITION;
        },

        //initChildrenDef

        bindEvents : function () {
            this.t.$turnOnButton.on('click', this._changeButtonText.bind(this));
        },

        _changeButtonText : function () {
            log('ON Button Clicked');
        },

        _generateBoxes : function (numberOfBoxes) {
            var usedColorKeys = [];
            var boxKey, randomColor;
            for (var i = 1; i <= numberOfBoxes; i++) {
                boxKey = 'box'+i;
                randomColor = this._getRandomValidColor(usedColorKeys);
                usedColorKeys.push(randomColor);
                CHILDREN_DEFINITION[boxKey] = {
                    component : 'ju-example/modules/color-numbers/box-component',
                    insertionPoint : '.'+boxKey,
                    opts : {
                        num : i,
                        color : randomColor
                    }
                }
            };
        },

        _getRandomColor : function (colorKeys) {
            var randomColor = colorKeys[Math.floor(Math.random()*colorKeys.length)];
            return randomColor;
        },

        _getRandomValidColor : function (usedColorKeys){
            var colorKeys = Object.keys(ColorNumbersComponent.BOX_COLORS);
            var randomColor = this._getRandomColor(colorKeys);
            if (usedColorKeys.indexOf(randomColor) == -1) {
                usedColorKeys.push(randomColor);
            } else {
                while (usedColorKeys.indexOf(randomColor) != -1) {
                    randomColor = this._getRandomColor(colorKeys);
                }
            }

            return randomColor;
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
        BOX_COLORS : {
            red : 'red',
            green : 'green',
            blue : 'blue',
            yellow : 'yellow',
            white : 'white',
            coral : 'coral',
            darkblue : 'darkblue',
            darkred : 'darkred',
            darkslategray : 'darkslategray'
        }
    });

    return ColorNumbersComponent;
});