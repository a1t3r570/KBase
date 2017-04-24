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
            form.getForm().submit({
                url:'https://mail.bupt.edu.cn/webmailgo.php?v=1493004083',
                //url:serverpath+'/save',
                hasUpload:true,//还待研究
                success:function(response,opts){
                    var obj = Ext.decode(response.responseText);
                },
                failure:function (response,opts) {
                    var obj = Ext.decode(response.responseText);
                }
            });
           /* Ext.Ajax.request({
                url:serverpath+'/save',
                method:'POST',
                headers: { 'Content-Type': 'application/json' },
                params:Ext.JSON.encode(form.getValues()),
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