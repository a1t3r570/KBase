/**
 * Created by wql on 2017/4/11.
 */
Ext.define('KBase.view.edit.Articleform',{
    requires:[
        'KBase.view.edit.CategoryformController',
        'KBase.view.edit.CategoryBrowse'
    ],
    controller:'edit-form-controller',

    extend:'Ext.window.Window',
    modal:true,
    //resizeable:false,
    // draggable:false,

    //xtype:'form',
    frame:true,
    width:800,
    height:500,
    bodyPadding:10,
    autoShow:true,
    title:'添加新文章',

    items:[{
        xtype:'form',
        layout:'form',
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
        },{
            xtype:'fieldcontainer',
            fieldLabel:'附件',
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
                //name:'category',
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
        },/*{
         xtype: 'textareafield',
         name:'digest',
         fieldLabel: '摘要',
         }*/,{
            xtype: 'radiogroup',
            name:'type',
            fieldLabel:'类型',
            items:[
                {boxLabel:'文本', inputValue:0},
                {boxLabel:'网址', inputValue:1},
            ]
        },{
            xtype:'htmleditor',
            //height:100
        }],
    }],

    buttons:[{                  //再修改
        text:'保存',
        handler:'onSave'
    },{
        text:'提交审核'
    },{
        text:'审核通过'
    },{
        text:'发布'
    }]
});