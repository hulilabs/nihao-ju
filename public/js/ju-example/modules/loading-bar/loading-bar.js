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
        'view/loading-bar',
        'ju-example/modules/loading-bar/loading-bar-observer'
        ],
        function (
            Controller,
            LandingBarView,
            LoadingBarObserver
        ) {

    'use strict';

    var LoadingBarController = Controller.extend({

        init : function() {
            this._super.apply(this); 
            this.observer = new LoadingBarObserver(this, LoadingBarController);
            this.S = {
                initComplete: '.init-complete',
                handleComplete: '.handle-complete',
                loadComplete: '.load-complete',
                setupComplete: '.setup-complete',
                findComplete: '.find-complete',
                bindComplete: '.bind-complete'
            };         
        },

        handleRoute : function(alreadyInStack, routerParams, urlParams) {
            this._super(alreadyInStack, routerParams, urlParams);
            this.load();
        },

        load : function() {        
            var $content = $(LandingBarView);            
            this.setContent($content);          
            this.setup();
        },

        setup : function() {
            this.findLocalElems();
            this.bindEvents();
            this.observer.listen();            
        },

        findLocalElems : function() {
            this.t = {
                $initComplete: this.$container.find(this.S.initComplete),
                $handleComplete: this.$container.find(this.S.handleComplete),
                $loadComplete: this.$container.find(this.S.loadComplete),
                $setupComplete: this.$container.find(this.S.setupComplete),
                $findComplete: this.$container.find(this.S.findComplete),
                $bindComplete: this.$container.find(this.S.bindComplete)
            };
        },

        bindEvents : function() {
            this.trigger(LoadingBarController.EV.INIT, this.t.$initComplete);
            this.trigger(LoadingBarController.EV.HANDLE, this.t.$handleComplete);
            this.trigger(LoadingBarController.EV.LOAD, this.t.$loadComplete);
            this.trigger(LoadingBarController.EV.SETUP, this.t.$setupComplete);
            this.trigger(LoadingBarController.EV.FIND, this.t.$findComplete);
            this.trigger(LoadingBarController.EV.BIND, this.t.$bindComplete);
        },

        destroy : function() {
            log("Destroy");
        }

    });

    LoadingBarController.classMembers({
        EV : {
            INIT: 'init',
            HANDLE: 'handle',
            LOAD: 'load',
            SETUP: 'setup',
            FIND: 'find',
            BIND: 'bind'
        }
    });
    

    return LoadingBarController;

});
