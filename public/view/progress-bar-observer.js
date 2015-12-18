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
            'jquery',
            'ju-shared/class',
        ],
        function (
            $,
            Class
        ) {

    'use strict';

    //  emulate the behavior of a controller
    //  uses some phases of the controller's original lifecycle

    var ProgressBarObserver = Class.extend({

        init : function(controller, classDefinition){
            this.controller = controller;
            this.classDefinition = classDefinition;
            this.S = {
                nextButton : '.next-phase-button'
            }
            //  listeners for each phase
            this.PHASES = {
                INIT_PHASE : this.initComplete,
                HANDLE_PHASE : this.handleComplete,
                LOAD_PHASE : this.loadComplete,
                SETUP_PHASE : this.setupComplete,
                FIND_PHASE : this.findComplete,
                BIND_PHASE : this.bindComplete,
                END_PHASE : this.displayEndMessage
            }
        },

        //  use this setup to get the data of the controller
        setup : function($container){
            this.$container = $container;
            this.findLocalElements();
            this.bindEvents();
        },

        findLocalElements : function(){
            this.t = {
                $nextButton : this.$container.find(this.S.nextButton)
            }
        },

        bindEvents : function(){
            var phasesHandler = this.nextPhase.bind(this);
            this.t.$nextButton.on('click', phasesHandler);
        },

        listenEvents: function(){
            for (var eventKey in this.classDefinition.EV) {
                var eventValue = this.classDefinition.EV[eventKey];
                this.controller.on(eventValue,this.PHASES[eventValue].bind(this));
            }
        },

        nextPhase : function(){
            if(this.nextPhase){
                this.nextPhase();
            }
        },

        initComplete: function(phase){
            this.nextPhase = phase;
            this.controller.appendToPage('<h4>init</h4>');
        },

        handleComplete: function(phase){
            this.nextPhase = phase;
            this.controller.appendToPage('<h4>handle</h4>');
        },

        loadComplete: function(phase){
            this.nextPhase = phase;
            this.controller.appendToPage('<h4>load</h4>');
        },

        setupComplete: function(phase){
            this.nextPhase = phase;
            this.controller.appendToPage('<h4>setup</h4>');
        },

        findComplete: function(phase){
            this.nextPhase = phase;
            this.controller.appendToPage('<h4>find</h4>');
        },

        bindComplete: function(phase){
            this.nextPhase = phase;
            this.controller.appendToPage('<h4>bind</h4>');
        },

        displayEndMessage : function(phase){
            this.nextPhase = phase;
            this.controller.appendToPage('<h4>end</h4>');
        }
    });

    return ProgressBarObserver;

});