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
        },

        listenEvents: function(){
            this.ctrl.on(this.classDef.EV.INIT,this.initComplete);
            this.ctrl.on(this.classDef.EV.HANDLE,this.handleComplete);
            this.ctrl.on(this.classDef.EV.LOAD,this.loadComplete);
            this.ctrl.on(this.classDef.EV.SETUP,this.setupComplete);
            this.ctrl.on(this.classDef.EV.FIND,this.findComplete);
            this.ctrl.on(this.classDef.EV.BIND,this.bindComplete);
        },

        initComplete: function($view){
            $view.html("init complete");
        },

        handleComplete: function($view){
            $view.html("handle complete");
        },

        loadComplete: function($view){
            $view.html("load complete");
        },

        setupComplete: function($view){
            $view.html("setup complete");
        },

        findComplete: function($view){
            $view.html("find complete");
        },

        bindComplete: function($view){
            $view.html("bind complete");
        }
    });

    return Graphics;

});