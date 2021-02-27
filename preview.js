odoo.define('ModuleName.FileName', function (require) {
"use strict";


var form_widget = require('web.form_widgets');
var core = require('web.core');
var _t = core._t;
var QWeb = core.qweb;

form_widget.WidgetButton.include({
    on_click: function() {
         if(this.node.attrs.custom === "click"){
         if(typeof($('.classname')[0]) != "undefined"){
                $('.classname')[0].click()
         }
         else{
            alert("Cant find Attachment..")
         }

            return true;
         }
         this._super();
    },
});
});
