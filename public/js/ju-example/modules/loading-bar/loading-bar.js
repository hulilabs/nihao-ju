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

define([
        'ju-mvc/controller',
        'view/loading-bar/loading-bar',
        'ju-example/modules/loading-bar/loading-bar-observer'
        ],
        function (
            Controller,
            landingBarView,
            LoadingBarObserver
        ) {

    'use strict';

    var LoadingBarController = Controller.extend({

        init : function() {
            this._super.apply(this); 
            this.observer = new LoadingBarObserver(this, LoadingBarController);            
            this.observer.listen();            
            this.S = {
                buttonDummy : '.button-dummy'
            };         
        },

        handleRoute : function(alreadyInStack, routerParams, urlParams) {
            this._super(alreadyInStack, routerParams, urlParams);            
            this.load();
        },

        load : function() {        
            var $content = $(landingBarView);
            this.setContent($content);
            this.observer.setup(this.$container);            
            this.trigger(LoadingBarController.EV.INIT);
            this.trigger(LoadingBarController.EV.HANDLE);
            this.trigger(LoadingBarController.EV.LOAD, this.setup.bind(this));            
            //  In an usual life cycle, setup is called after loading is complete
            
            //  this.setup();  
            
        },

        setup : function() {            
            this.trigger(LoadingBarController.EV.SETUP, this.findLocalElems.bind(this));             
            //  In an usual life cycle, both findLocalElems and bindEvents
            //  are called in setup. But bindEvents was moved to findLocalElems
            //  for the example's purpose

            //  this.findLocalElems();
            //  this.bindEvents();            
            
        },

        findLocalElems : function() {
            this.t = {
                $buttonDummy: this.$container.find(this.S.buttonDummy)
            };
            this.trigger(LoadingBarController.EV.FIND, this.bindEvents.bind(this));
        },

        bindEvents : function() {
            var messageHandler = this.displayMessage.bind(this);
            this.t.$buttonDummy.on('click', messageHandler);
            this.trigger(LoadingBarController.EV.BIND);
        },

        destroy : function() {
            log("Destroy");
        },

        displayMessage : function() {
            this.trigger(LoadingBarController.EV.DISPLAY_MESSAGE);
        }

    });

    LoadingBarController.classMembers({
        EV : {
            INIT: 'INIT',
            HANDLE: 'HANDLE',
            LOAD: 'LOAD',
            SETUP: 'SETUP',
            FIND: 'FIND',
            BIND: 'BIND',
            DISPLAY_MESSAGE: 'DISPLAY_MESSAGE'
        }
    });    

    return LoadingBarController;

});
