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
            'ju-example/modules/colorboxes-component/colorboxes-interaction-component'
        ],
        function (
            Controller,
            ColorboxesInteractComp
        ) {

    'use strict';

    /**
     * Handles routing to display a component
     *
     * The only requirement is to set the member `this.landCompClass`
     * with a component definition (i.e. a class that extends component/base)
     */
    var ControllerWithComponent = Controller.extend({

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

        setComponentClass : function (ComponentClass) {
            this.ComponentClass = ComponentClass;
        },

        load : function () {
            var $content = $("<div class='component-content'>Colorboxes!</div>");
            this.setContent($content);

            var ComponentClass = this.ComponentClass || ColorboxesInteractComp;

            this.ColorboxesInteractComp = new ComponentClass();
            
            this.ColorboxesInteractComp.isRootComponent = true;

            this.ColorboxesInteractComp.load.apply(this.ColorboxesInteractComp, $.merge([$content], arguments));
        }

    });

    return ControllerWithComponent;

});
