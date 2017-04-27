/**
 * Created by wql on 2017/4/12.
 */
// var global_path = '';
Ext.define('KBase.view.edit.CategoryformController',{
    extend:'Ext.app.ViewController',
    alias:'controller.edit-form-controller',
    onBrowseCategory:function () {
        ViewClass = Ext.ClassManager.get('KBase.view.edit.CategoryBrowse');
        cmp = new ViewClass();

    },
    onSave:function () {
        var form = this.getView().down('form');
        if(form.getForm().isValid()){
            /*form.getForm().submit({
                url:'http://httpbin.org/post',//http://localhost:8080/kbms/filesUpload',//http://httpbin.org/post',
                params:{
                    userId:'1',
                    action:'add',
                },
                //url:serverpath+'/save',
                //hasUpload:true,//还待研究
                success:function(response,opts){
                    var obj = Ext.decode(response.responseText);
                },
                failure:function (response,opts) {
                    var obj = Ext.decode(response.responseText);
                }
            });*/
            Ext.Ajax.request({
                url:'http://localhost:8080/kbms/test/test',//http://localhost:8080/kbms/filesUpload',
                method:'POST',

                headers: { 'Content-Type':'multipart/form-data' },//'application/json'
                params: form.getFieldValues(),//Ext.JSON.encode(form.getValues()),
                success:function(response,opts){
                    var obj = Ext.decode(response.responseText);
                },
                failure:function (response,opts) {
                    var obj = Ext.decode(response.responseText);
                }
            })
        }
    },
    onSubmit:function () {

    },
    onApproval:function () {
        
    },
    onPublish:function () {
        
    }
});