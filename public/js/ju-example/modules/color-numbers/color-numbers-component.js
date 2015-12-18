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

    var TEMPLATE_PATH = 'color-numbers-view';

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
            this.setOptions({
                // set any default options values here
                customizableLabel : 'Insert a number and press the ON button!',
                numberOfBoxes : 16
            });

            this._super.apply(this, arguments);

            this.addResources(RESOURCE_MAP);

            this.S = {
                turnOnButton : '.turn-on-button',
                boxNumberInput : '.box-number-input',
            }

            this.childrenDef = CHILDREN_DEFINITION;
        },

        // check init() to change the number of boxes to generate
        initChildrenDef : function () {
            this._generateBoxes(this.opts.numberOfBoxes);
        },

        bindEvents : function () {
            this.t.$turnOnButton.on('click', this._getInputText.bind(this));
        },

        _getInputText : function () {
            var selectedBox = this._getBox(this.t.$boxNumberInput.val());
            this._changeBoxColor(selectedBox);
        },

        _getRandomColor : function (colorKeys) {
            var randomColor = colorKeys[Math.floor(Math.random()*colorKeys.length)];
            return randomColor;
        },

        _getBox : function (boxId) {
            return this.c('box' + boxId);
        },

        _generateBoxes : function (numberOfBoxes) {
            var boxKey, randomColor;
            var colorKeys = Object.keys(ColorNumbersComponent.BOX_COLORS);
            for (var i = 1; i <= numberOfBoxes; i++) {
                boxKey = 'box' + i;
                randomColor = this._getRandomColor(colorKeys);
                CHILDREN_DEFINITION[boxKey] = {
                    component : 'ju-example/modules/color-numbers/box-component',
                    insertionPoint : '.boxes-table',
                    opts : {
                        num : i,
                        color : randomColor
                    }
                }
            };
        },

        _changeBoxColor : function (box) {
            if(this.clearedBox){
                this.clearedBox.toggleColor();
            }
            // used to store the box 
            // that is selected
            this.clearedBox = box;
            box.toggleColor();
        },

        /**
         * Commonly used to setup the component's markup
         */
        configureComponent : function() {
            var colorNumbersView = TemplateStorage.getInst().get(TEMPLATE_PATH);
            var instructionMarkup =  Mustache.render(colorNumbersView,this.opts);//'<div class="color-numbers-instruction">' + this.opts.customizableLabel + '</div><div class="box"></div>';
            this.appendToView(instructionMarkup);
        }

    });

    ColorNumbersComponent.classMembers({
        // add 'static' class members here
        // i.e. can be accessed from the class definition without an instance

        // colors of the box components
        BOX_COLORS : {
            red : 'red',
            green : 'green',
            blue : 'blue',
            yellow : 'yellow',
            coral : 'coral',
            darkblue : 'darkblue',
            darkred : 'darkred',
            darkslategray : 'darkslategray'
        }
    });

    return ColorNumbersComponent;
});