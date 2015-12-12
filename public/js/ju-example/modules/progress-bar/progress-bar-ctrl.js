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
            this.S = {
                init : '.init-complete',
                handleRoutes : '.handle-complete',
                load : '.load-complete',
                setup : '.setup-complete',
                find : '.find-complete',
                bind : '.bind-complete'
            }
        },


        handleRoute : function(alreadyInStack, routerParams, urlParams) {
            this._super(alreadyInStack, routerParams, urlParams);
            this.load.apply(this, urlParams);
            this.trigger(this._class.EV.HANDLE,this.t.$handleComplete);
        },

        load : function () {
            var $content = $(progressBarView);
            this.setContent($content);
            this.setup();
        },

        setup : function(){
            this.observer.listenEvents();
            this.findLocalElems();
            this.bindEvents();
        },

        findLocalElems : function(){
            this.t = {
                $initComplete: $(this.S.init),
                $handleComplete: $(this.S.handleRoutes),
                $loadComplete: $(this.S.load),
                $setupComplete: $(this.S.setup),
                $findComplete: $(this.S.find),
                $bindComplete: $(this.S.bind)
            }
            this.trigger(this._class.EV.INIT,this.t.$initComplete);
            this.trigger(this._class.EV.LOAD,this.t.$loadComplete);
            this.trigger(this._class.EV.FIND,this.t.$findComplete);
        },

        bindEvents : function(){
            this.trigger(this._class.EV.BIND,this.t.$bindComplete);
            this.trigger(this._class.EV.SETUP,this.t.$setupComplete);
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