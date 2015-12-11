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
 * Example self contained component with no resource dependencies
 * that displays a "Nihao!" in the view
 *
 * WARNING : proof of concept only, not a "good practices" guideline
 *           however, explanatory comments are reliable :p
 */
define( [
            'ju-shared/class'
        ],
        function (
            Class
        ) {

    'use strict';
    
    var LoadingBarActions = Class.extend({

        init : function(controller, ControllerDefinition) {
            this.controller = controller;
            this.ControllerDefinition = ControllerDefinition;
        },

        listen : function() {            
            this.controller.on(this.ControllerDefinition.EV.INIT, this.initComplete);        
            this.controller.on(this.ControllerDefinition.EV.HANDLE, this.handleComplete);
            this.controller.on(this.ControllerDefinition.EV.LOAD, this.loadComplete);
            this.controller.on(this.ControllerDefinition.EV.SETUP, this.setupComplete);
            this.controller.on(this.ControllerDefinition.EV.FIND, this.findComplete);
            this.controller.on(this.ControllerDefinition.EV.BIND, this.bindComplete);
        },

        initComplete : function($view) {            
            $view.html('init');
        },

        handleComplete : function($view) {
            $view.html('handle');
        },

        loadComplete : function($view) {
            $view.html('load');
        },

        setupComplete : function($view) {
            $view.html('setup');
        },

        findComplete : function($view) {
            $view.html('find');
        },

        bindComplete : function($view) {
            $view.html('bind');
        }
    });

    
    

    return LoadingBarActions;
    
});