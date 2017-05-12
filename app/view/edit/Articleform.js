/**
 * Created by wql on 2017/4/11.
 */
var tag = Ext.create('KBase.store.TagStore',{});
Ext.define('KBase.view.edit.Articleform',{
    requires:[
        'KBase.view.edit.EditformController',
        'KBase.view.edit.CategoryBrowse',
        'KBase.store.TagStore',//这个最好放到application；里
        //'Ext.ux.plugins'
    ],
    config:{
        name:'article'
    },
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
                reference:'category',
                allowBlank:false,
                readOnly:true,
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
            reference:'title',
            allowBlank:false
        },{
            xtype: 'filefield',
            // xtype:'fieldcontainer',
            fieldLabel:'附件',
            //name:'accessory2',
            name:'file',
            reference:'file',
            buttonText:'添加',
            buttonConfig:{
                width:100
            }
            /*layout:{
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
            }]*/
        },{
            xtype: 'filefield',
            // xtype:'fieldcontainer',
            fieldLabel:'附件',
            // name:'accessory',
            name:'file',
            reference:'file',
            buttonText:'添加',
            buttonConfig: {
                width: 100
            }
        },{
            xtype: 'displayfield',
            name: 'author',
            reference:'author',
            value:"wql",
            fieldLabel: '作者'
        },{
            xtype: 'datefield',
            name: 'vaild_time',
            reference:'valid_time',
            fieldLabel: '有效期至'
        },{
            xtype: 'tagfield',
            fieldLabel:'标签',
            store:tag,
            name:'tag',
            reference:'tag',
            displayField:'tag_name',
            valueField:'tag_id',
            createNewOnEnter: true,
            createNewOnBlur: true,
            filterPickList: true
        },{
            xtype: 'radiogroup',
            name:'type',
            fieldLabel:'类型',
            items:[
                {boxLabel:'文本', inputValue:0},
                {boxLabel:'网址', inputValue:1},
            ]
        },{
            xtype:'htmleditor',
            name:'content',
            reference:'content',
            /*plugins: [
                Ext.create('KBase.view.edit.Editorplugin')
            ],*/
            //height:100
        },{
            xtype:'textfield',
            name: 'state',
            reference:'state',
            hidden:true,
            value:"0",
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