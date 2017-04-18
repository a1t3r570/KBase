/**
 * Created by wql on 2017/4/11.
 */
Ext.define('KBase.view.edit.Categoryform',{
    requires:[
        'KBase.view.edit.CategoryformController',
        'KBase.view.edit.CategoryBrowse'
    ],
    controller:'edit-form-controller',

    extend:'Ext.window.Window',                 //模态窗口
    modal:true,
    resizable:false,
    //draggable:false,

    xtype:'Ext.form.Panel',                     //表单面板
    frame:true,
    width:750,
    height:500,
    bodyPadding:10,
    autoShow:true,
    layout:'form',
    title:'创建新分类',

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
            id:'categoryfield',
            name:'category',
            allowBlank:false,
        },{
            xtype:'splitter',
            flex:1
        },{
            xtype:'button',
            text:'浏览',
            width:100,
            handler:'onBrowseCategory'
        }]
    },{
        fieldLabel:'标题',
        xtype:'textfield',
        name:'title',
        allowBlank:false
    },{                         //再修改
        xtype: 'tagfield',
        fieldLabel:'标签',
        name:'tag',
    },{
        xtype: 'displayfield',
        name: 'author',
        fieldLabel: '作者',
    },{
        xtype: 'datefield',
        name: 'vaild_time',
        fieldLabel: '有效期至'
    },{
        xtype: 'radiogroup',
        name:'type',
        fieldLabel:'类型',
        items:[
            {boxLabel:'列表形', inputValue:0},
            {boxLabel:'章节形', inputValue:1},
            {boxLabel:'FAQ形', inputValue:2},
            {boxLabel:'二维表形', inputValue:3},
            {boxLabel:'课程形', inputValue:4},
        ]
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