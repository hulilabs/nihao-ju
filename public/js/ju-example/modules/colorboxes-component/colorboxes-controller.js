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
 * Example controller that loads a component
   open in your browser: http[s]://[your-app]/#index
 *
 *
 * WARNING : proof of concept only, not a "good practices" guideline
 *           however, explanatory comments are reliable :p
 */
define([
            'ju-mvc/controller',
            'ju-example/modules/colorboxes-component/colorboxes-interaction-component',
            'view/colorboxes/colorboxes-controller'
        ],
        function (
            Controller,
            ColorboxesInteractComp,
            colorboxesControllerView
        ) {

    'use strict';

    /**
     * Handles routing to display a component
     *
     * The only requirement is to set the member `this.landCompClass`
     * with a component definition (i.e. a class that extends component/base)
     */
    var ColorboxesController = Controller.extend({

        /*
        init : function() {
            this._super.apply(this);
            this.landCompClass = NihaoComponent;
        },
        */

        /**
         * Must be implemented in child classes
         */
        handleRoute : function (alreadyInStack, routerParams, urlParams) {
            this._super(alreadyInStack, routerParams, urlParams);
            this.load.apply(this, urlParams);
        },

        load : function () {
            var $content = $(colorboxesControllerView);
            this.setContent($content);

            // Number of boxes to display for each color
            var boxesByColor = 5;

            this.colorboxInteractInst = new ColorboxesInteractComp(boxesByColor);
            
            this.colorboxInteractInst.isRootComponent = true;

            this.colorboxInteractInst.load.apply(this.colorboxInteractInst, $.merge([$content], arguments));
        }

    });

    return ColorboxesController;

});
