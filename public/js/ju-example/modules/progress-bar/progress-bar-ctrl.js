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
            'view/progress-bar-observer',
            'view/progress-bar-view',
            'ju-shared/observable-class'
        ],
        function (
            Controller,
            ProgressBarObserver,
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
            this.observer = new ProgressBarObserver(this,ProgressBarCtrl);
            this.observer.listenEvents();
            this.S = {
                dummyButton : '.dummy-button',
            }
        },


        handleRoute : function(alreadyInStack, routerParams, urlParams) {
            this._super(alreadyInStack, routerParams, urlParams);
            this.load.apply(this, urlParams);
        },

        load : function (){
            var $content = $(progressBarView);
            this.setContent($content);
            this.observer.setup(this.$container);
            this.trigger(ProgressBarCtrl.EV.INIT);
            this.trigger(ProgressBarCtrl.EV.HANDLE);
            this.trigger(ProgressBarCtrl.EV.LOAD,this.setup.bind(this));
        },

        setup : function() {
            this.trigger(ProgressBarCtrl.EV.SETUP,this.findLocalElements.bind(this));
        },

        findLocalElements : function(){
            this.t = {
                $dummyButton : this.$container.find(this.S.dummyButton)
            }
            this.trigger(ProgressBarCtrl.EV.FIND,this.bindEvents.bind(this));
        },

        bindEvents : function(){
            this.t.$dummyButton.on('click',function(){
                log('Dummy Button Clicked');
            });
            this.trigger(ProgressBarCtrl.EV.BIND,this.displayEndMessage.bind(this));
        },

        destroy : function(){

        },

        appendToPage : function(mkp) {
            this.$container.append(mkp);
        },

        displayEndMessage : function(){
            this.trigger(ProgressBarCtrl.EV.END_MESSAGE);
        }

    });

    /*Constant events stored in class*/
    ProgressBarCtrl.classMembers({
        EV : {
            INIT: 'INIT_PHASE',
            HANDLE: 'HANDLE_PHASE',
            LOAD: 'LOAD_PHASE',
            SETUP: 'SETUP_PHASE',
            FIND: 'FIND_PHASE',
            BIND: 'BIND_PHASE',
            END_MESSAGE : 'END_PHASE'
        }
    });

    return ProgressBarCtrl;

});