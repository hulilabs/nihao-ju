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
        colorbox : {
            component : 'ju-example/modules/colorboxes-component/colorbox-component',
            insertionPoint : '.colorboxes',
            opts : {
                color: 'red'
            }
        }
    };

    var ColorboxesInteractionComponent = BaseComponent.extend({
   
        init : function() {
            this._super.apply(this, arguments);

            this.addResources(RESOURCE_MAP);

            this.childrenDef = CHILDREN_DEFINITION;

            this.S = {
                turnOnBtn : '.turn-on-btn'
            };
        },

        configureComponent : function() {                 
            this.appendToView(colorboxesInteractionView);
        },

        bindEvents : function() {
            this.t.$turnOnBtn.on('click', this._turnOnBoxes.bind(this));
        },

        _turnOnBoxes : function() {
            log('jeja');
        }
    });    

    return ColorboxesInteractionComponent;
});