/**
 * Created by wql on 2017/4/12.
 */
Ext.define('KBase.view.edit.CategoryformController',{
    extend:'Ext.app.ViewController',
    alias:'controller.edit-form-controller',
    onBrowseCategory:function () {
        ViewClass = Ext.ClassManager.get('KBase.view.edit.CategoryBrowse');
        cmp = new ViewClass();
    },
    onSave:function () {

    },
    onSubmit:function () {

    },
    onApproval:function () {
        
    },
    onPublish:function () {
        
    }
});