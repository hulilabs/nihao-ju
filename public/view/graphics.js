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

    var Graphics = Class.extend({

        init : function(ctrl, classDef){
            this.ctrl = ctrl;
            this.classDef = classDef;
            this.PHASES = {
                INIT_PHASE : 'init',
                HANDLE_PHASE : 'handle',
                LOAD_PHASE : 'load',
                SETUP_PHASE : 'setup',
                FIND_PHASE : 'find',
                BIND_PHASE : 'bind'
            }
        },

        listenEvents: function(){
            this.ctrl.on(this.classDef.EV.INIT,this.initComplete.bind(this));
            this.ctrl.on(this.classDef.EV.HANDLE,this.handleComplete.bind(this));
            this.ctrl.on(this.classDef.EV.LOAD,this.loadComplete.bind(this));
            this.ctrl.on(this.classDef.EV.SETUP,this.setupComplete.bind(this));
            this.ctrl.on(this.classDef.EV.FIND,this.findComplete.bind(this));
            this.ctrl.on(this.classDef.EV.BIND,this.bindComplete.bind(this));
        },

        initComplete: function($view){
            //$view.html("init complete");
            this.ctrl.appendPage("<h4>init</h4>");
        },

        handleComplete: function($view){
            //$view.html("handle complete");
            this.ctrl.appendPage("<h4>handle</h4>");
        },

        loadComplete: function($view){
            //$view.html("load complete");
            this.ctrl.appendPage("<h4>load</h4>");
        },

        setupComplete: function($view){
            //$view.html("setup complete");
            this.ctrl.appendPage("<h4>setup</h4>");
        },

        findComplete: function($view){
            //$view.html("find complete");
            this.ctrl.appendPage("<h4>find</h4>");
        },

        bindComplete: function($view){
            //$view.html("bind complete");
            this.ctrl.appendPage("<h4>bind</h4>");
        }
    });

    return Graphics;

});