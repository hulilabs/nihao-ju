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
 * Example controller, loads landing page using an external view file
 *
 *
 * WARNING : proof of concept only, not a "good practices" guideline
 *           however, explanatory comments are reliable :p
 */
define([
            'ju-mvc/controller',
            'view/nihao'
        ],
        function (
            Controller,
            nihaoView
        ) {

    'use strict';


    var ControllerWithComponent = Controller.extend({

        /**
         * Must be implemented in child classes
         */
        handleRoute : function (alreadyInStack, routerParams, urlParams) {
            this._super(alreadyInStack, routerParams, urlParams);
            this.load.apply(this, urlParams);
        },

        load : function () {
            var $content = $(nihaoView);
            this.setContent($content);
        }

    });

    return ControllerWithComponent;

});
