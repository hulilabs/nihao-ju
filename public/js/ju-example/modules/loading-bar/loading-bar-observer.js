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
 *
 */
define( [
            'ju-shared/class',
            'view/loading-bar/init',
            'view/loading-bar/handle',
            'view/loading-bar/load',
            'view/loading-bar/setup',
            'view/loading-bar/find',
            'view/loading-bar/bind',
            'view/loading-bar/message',
        ],
        function (
            Class,
            initView,
            handleView,
            loadView,
            setupView,
            findView,
            bindView,
            dummyMessage
        ) {

    'use strict';
    
    var LoadingBarActions = Class.extend({

        init : function(controller, ControllerDefinition, $container) {            
            this.controller = controller;
            this.ControllerDefinition = ControllerDefinition;
            this.S = {
                $buttonNext: '.button-next'
            };
            this.STAGES_LISTENERS = {
                INIT : this.initComplete,
                HANDLE: this.handleComplete,
                LOAD: this.loadComplete,
                SETUP: this.setupComplete,
                FIND: this.findComplete,
                BIND: this.bindComplete,
                DISPLAY_MESSAGE: this.displayMessage
            };
        },

        setup : function($container) {
            this.$container = $container;            
            this.findLocalElems();
            this.bindEvents();
        },      

        findLocalElems : function() {
            this.t = {
                $buttonNext : this.$container.find(this.S.$buttonNext)
            };            
        },

        bindEvents : function() {
            var nextStageHandler = this.goToNextStage.bind(this);
            this.t.$buttonNext.on('click', nextStageHandler);
        },

        goToNextStage : function() { 
            if (this.nextStage) {                
                this.nextStage();
            }
        },

        listen : function() {
            // bind handlers with *this* for access to observer's variables            
            for (var event in this.ControllerDefinition.EV) {
                this.controller.on(this.ControllerDefinition.EV[event], this.STAGES_LISTENERS[event].bind(this));
            }
        },

        initComplete : function(nextStage) {
            this.nextStage = nextStage;
            this.$container.append($(initView));
        },

        handleComplete : function(nextStage) {     
            this.nextStage = nextStage;
            this.$container.append($(handleView));
        },

        loadComplete : function(nextStage) {
            this.nextStage = nextStage;
            this.$container.append($(loadView));
        },

        setupComplete : function(nextStage) {  
            this.nextStage = nextStage;
            this.$container.append($(setupView));
        },

        findComplete : function(nextStage) {
            this.nextStage = nextStage;
            this.$container.append($(findView));
        },

        bindComplete : function(nextStage) {
            this.nextStage = nextStage;
            this.$container.append($(bindView));
            this.t.$buttonNext.prop( 'disabled', true );
        },

        displayMessage : function () {
            this.$container.append($(dummyMessage));
        }

    });

    return LoadingBarActions;
    
});