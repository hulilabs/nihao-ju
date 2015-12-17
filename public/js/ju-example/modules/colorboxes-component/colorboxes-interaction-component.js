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
            'view/colorboxes/colorboxes-interaction'
        ],
        function (
            BaseComponent,
            colorboxesInteractionView
        ) {

    'use strict';

    var RESOURCE_MAP = {
        template : [
            //'view/colorboxes/colorboxes-interaction',
        ],
        cssFile : [
            // 'path/to/css/file'
        ],
        l10n : [
            // 'l10n_key'
        ]
    };

    var CHILDREN_DEFINITION = {       
        /* Example definition of a single color box component 
        colorbox : {
            component : 'ju-example/modules/colorboxes-component/colorbox-component',
            insertionPoint : '.colorboxes',
            opts : {
                color: 'red'
            }
        }
        */
    };

    // Path to colorbox component
    var COLORBOX_COMPONENT = 'ju-example/modules/colorboxes-component/colorbox-component';

    var ColorboxesInteractionComponent = BaseComponent.extend({
   
        init : function(boxesByColor) {            

            this._super.apply(this, arguments);

            this.addResources(RESOURCE_MAP);

            this.childrenDef = CHILDREN_DEFINITION;

            this.S = {
                turnOnBtn : '.turn-on-btn'
            };

            // Number of boxes to display for each color. You can change this from the controller
            this.boxesByColor = boxesByColor;

            // Store the color that is currently 'on'
            this.currentColor = '';

            // On and Off generic events (used by _toggleBoxes)
            this.EV = {
                TURN_ON_BOXES : 'on',
                TURN_OFF_BOXES : 'off'
            };

        },

        initChildrenDef : function() {
            this._generateColorBoxes();
        },

        configureComponent : function() {                 
            this.appendToView(colorboxesInteractionView);
        },

        bindEvents : function() {
            this.t.$turnOnBtn.on('click', this._turnOnBoxes.bind(this));
        },        

        _generateColorBoxes : function() {
            for (var i = 0; i < this.boxesByColor; i++) {

                for (var colorKey in ColorboxesInteractionComponent.COLORS) {
                    // Stores the value of the color's key
                    var color = ColorboxesInteractionComponent.COLORS[colorKey];

                    // Add to CHILDREN_DEFINITION a new definition of child colorbox component
                    CHILDREN_DEFINITION[color + i] = this._createColorBox('.colorboxes', i, color);
                }
            }            
        },

        _createColorBox : function(insertionPoint, colorboxId, color) {
            return {
                component : COLORBOX_COMPONENT,
                insertionPoint : insertionPoint,
                opts : {
                    id : colorboxId, 
                    color : color
                }
            };
        },
        // Button's onclick listener that turns on a random color and turns off previous displayed color 
        _turnOnBoxes : function() {
            var randomColor = this._getRandomElement(ColorboxesInteractionComponent.COLORS);
            
            if (randomColor != this.currentColor) {

                if (this.currentColor)
                    this._toggleBoxes(this.EV.TURN_OFF_BOXES);

                this.currentColor = randomColor;

                this._toggleBoxes(this.EV.TURN_ON_BOXES);
            }

            setTimeout(this._turnOnBoxes.bind(this), 500);
        },
        // Turns colorboxes ON or OFF based on current color being displayed
        _toggleBoxes : function(action) {            
            for (var i = 0; i < this.boxesByColor; i++) {
                if (action === this.EV.TURN_ON_BOXES) {
                    this.c(this.currentColor + i).turnOn();
                } else {
                    this.c(this.currentColor + i).turnOff();
                }
            }
        },
        // Gets the value of a random key (element) from an object 
        _getRandomElement : function(obj) {
            var objKeys = Object.keys(obj),
                randomIndex = Math.floor(Math.random() * objKeys.length),
                randomKey = objKeys[randomIndex];            

            return obj[randomKey];

        }
    });    

    ColorboxesInteractionComponent.classMembers({
        COLORS : {
            RED : 'red',
            GREEN : 'green',
            BLUE : 'blue',
            YELLOW : 'yellow'
        }
    });

    return ColorboxesInteractionComponent;
});



