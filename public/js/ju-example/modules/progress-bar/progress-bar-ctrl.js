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
            'view/graphics',
            'view/progress-bar-view',
            'ju-shared/observable-class'
        ],
        function (
            Controller,
            Graphics,
            progressBarView,
            ObservableClass
        ) {

    'use strict';

    var ProgressBarCtrl = Controller.extend({

        /**
         * Must be implemented in child classes
         */

        init : function(){
            this._super.apply(this);
            this.observer = new Graphics(this,ProgressBarCtrl);
            this.observer.listenEvents();
            this.S = {
                /*init : '.init-complete',
                handleRoutes : '.handle-complete',
                load : '.load-complete',
                setup : '.setup-complete',
                find : '.find-complete',
                bind : '.bind-complete'*/
                dummyButton : '.dummy-button',
            }
        },


        handleRoute : function(alreadyInStack, routerParams, urlParams) {
            this._super(alreadyInStack, routerParams, urlParams);
            this.load.apply(this, urlParams);
        },

        load : function () {
            var $content = $(progressBarView);
            this.setContent($content);
            this.trigger(ProgressBarCtrl.EV.INIT);
            this.trigger(ProgressBarCtrl.EV.HANDLE);
            this.trigger(ProgressBarCtrl.EV.LOAD);
            this.setup();
        },

        setup : function(){
            this.trigger(ProgressBarCtrl.EV.SETUP);
            this.findLocalElems();
        },

        findLocalElems : function(){
            this.t = {
                /*$initComplete: $(this.S.init),
                $handleComplete: $(this.S.handleRoutes),
                $loadComplete: $(this.S.load),
                $setupComplete: $(this.S.setup),
                $findComplete: $(this.S.find),
                $bindComplete: $(this.S.bind)*/
                $dummyButton : this.$container.find(this.S.dummyButton),
            }
            this.trigger(ProgressBarCtrl.EV.FIND);
            this.bindEvents();
        },

        bindEvents : function(){
            this.t.$dummyButton.on('click',function(){
                log("Dummy Button Clicked");
            });
            this.trigger(ProgressBarCtrl.EV.BIND);
        },

        destroy : function(){

        }

    });

    ProgressBarCtrl.classMembers({
        EV : {
            INIT: "init",
            HANDLE: "handleRoutes",
            LOAD: "load",
            SETUP: "setup",
            FIND: "find",
            BIND: "bind"
        }
    });

    return ProgressBarCtrl;

});