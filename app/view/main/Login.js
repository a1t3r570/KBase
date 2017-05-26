/**
 * Created by wql on 2017/5/15.
 */
var form = {
    xtype:'form',
    defaultType: 'textfield',
    items:[{
        fieldLabel:'用户名',
        name:'userName',
        allowBlank:false,
        emptyText: 'user id',
        margin:'10 0 20 0',
    },{
        fieldLabel: '密码',
        allowBlank: false,
        name:'password',
        emptyText: 'password',
        inputType: 'password',
        margin:'10 0 20 0',
    },{
        xtype:'fieldcontainer',
        width:240,
        layout:{
            type:'hbox',
            align:'stretch'
        },
        items:[{
            margin:'10 0 10 20',
            xtype:'button',
            width:100,
            scale:'large',
            text:'登录',
            handler:'Signin'
        },{
            margin:'10 0 10 20',
            xtype:'button',
            width:100,
            scale:'large',
            disabled:true,
            text:'注册',
        }]
    }],
};




Ext.define('KBase.view.main.Login',{//主界面布局
    extend:'Ext.container.Container',
    alias:'widget.login',
    frame:true,
    style:'background:url(../KBase/resources/images/square.gif)',
    layout:'center',
    controller:'login',
    items:[{
        xtype:'panel',
        title:'Sign in',
        border:true,
        layout:'center',
        //bodyPadding:'0 0',
        width:'25%',
        height:'30%',

        items:form,
    }],
});

Ext.define('KBase.view.main.LoginController',{
    extend:'Ext.app.ViewController',
    alias:'controller.login',

    Signin:function () {
        var me = this.getView();
        form = me.down('form');
        if(form.getForm().isValid()){
            form.getForm().submit({
                url:window.url+'user/execute',
                params:{
                    userId:'1',
                    action:'login',
                    param:Ext.JSON.encode(form.getValues())
                },
                success:function(form,action){
                    //var obj = Ext.decode(response);
                    if(action.result.code == "000000"){
                        //Ext.Msg.alert('Success',action.result.msg);
                        mainView = me.up('panel');
                        me.destroy();
                        ViewClass = Ext.ClassManager.get('KBase.view.main.Header');
                        cmp1 = Ext.create(ViewClass,{
                            height:60
                        });
                        mainView.add(cmp1);
                        ViewClass = Ext.ClassManager.get('KBase.view.main.Editpage');
                        cmp2 = Ext.create(ViewClass,{
                            anchor:"0 -60"
                        });
                        mainView.add(cmp2);
                    }
                    else {
                        Ext.Msg.alert('Warning',action.result.msg);
                    }
                },
                failure:function (response,opts) {
                    var obj = Ext.decode(response.responseText);
                }
            });
        }
       /* mainView = me.up('panel');
        me.destroy();
        ViewClass = Ext.ClassManager.get('KBase.view.main.Header');
        cmp1 = Ext.create(ViewClass,{
            height:60
        });
        mainView.add(cmp1);
        ViewClass = Ext.ClassManager.get('KBase.view.main.Editpage');
        cmp2 = Ext.create(ViewClass,{
            anchor:"0 -60"
        });
        mainView.add(cmp2);*/
    }

});
