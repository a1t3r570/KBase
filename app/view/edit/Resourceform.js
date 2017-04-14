/**
 * Created by wql on 2017/4/11.
 */
Ext.define('KBase.view.edit.Resourceform',{
    extend:'Ext.window.Window',                 //模态窗口
    modal:true,
    resizeable:false,
    draggable:false,

    xtype:'Ext.form.Panel',
    frame:true,
    width:750,
    height:500,
    bodyPadding:10,
    autoShow:true,
    layout:'form',
    title:'添加新资料',

    items:[{
        xtype:'fieldcontainer',
        fieldLabel:'所属分类',
        layout:{
            type:'hbox',
        },
        defaults: {
            flex: 1,
            hideLabel: true
        },
        items:[{
            xtype:'textfield',
            width:400,
            name:'category',
            allowBlank:false,
        },{
            xtype:'splitter',
            flex:1
        },{
            xtype:'button',
            text:'浏览',
            width:100,
        }]
    },{
        xtype: 'filefield',
        name:'resource',
        fieldLabel: '资料'
    },{
        xtype: 'displayfield',
        name: 'author',
        fieldLabel: '作者',
    },{
        xtype: 'datefield',
        name: 'vaild_time',
        fieldLabel: '有效期至'
    },{
        xtype: 'tagfield',
        fieldLabel:'标签',
        name:'tag'
    }],
    buttons:[{                  //再修改
        text:'保存'
    },{
        text:'提交审核'
    },{
        text:'审核通过'
    },{
        text:'发布'
    }]
});