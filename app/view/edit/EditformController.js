/**
 * Created by wql on 2017/4/12.
 */
// var global_path = '';
Ext.define('KBase.view.edit.EditformController',{
    extend:'Ext.app.ViewController',
    alias:'controller.edit-form-controller',
    onBrowseCategory:function () {
        ViewClass = Ext.ClassManager.get('KBase.view.edit.CategoryBrowse');
        cmp = new ViewClass();
    },
    onSave:function () {
        var me = this.getView();
        var form = this.getView().down('form');
        var type = this.getView().getName();
        if(form.getForm().isValid()){
            form.getForm().submit({
                 url: window.url +type+'/upload',//http://localhost:8080/kbms/filesUpload',//http://httpbin.org/post',
                hasUpload:true,
                 params:{
                     userId:'1',
                     action:'add',
                     param:Ext.JSON.encode(form.getValues())
                 },
                //url:serverpath+'/save',
                //hasUpload:true,//还待研究
                success:function(form,action){
                    //var obj = Ext.decode(response);
                    Ext.Msg.alert('Success',action.result.msg);
                    me.close();
                },
                failure:function (form,action) {
                    Ext.Msg.alert('Success',"成功上传文章");
                    me.close();
                }
            });
           /* Ext.Ajax.request({
                url:'http://localhost:8080/kbms/test/test',//http://localhost:8080/kbms/filesUpload',
                method:'POST',

                //headers: { 'Content-Type':'multipart/form-data' },//'application/json'
                params:{
                    userId:'1',
                    action:'add',
                    param:Ext.JSON.encode(form.getValues())
                } ,//Ext.JSON.encode(form.getValues()),
                success:function(response,opts){
                    var obj = Ext.decode(response.responseText);
                },
                failure:function (response,opts) {
                    var obj = Ext.decode(response.responseText);
                }
            })*/
        }
    },
    onSubmit:function () {

    },
    onApproval:function () {
        
    },
    onPublish:function () {
        
    }
});