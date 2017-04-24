/**
 * Created by wql on 2017/4/24.
 */
var roleInfo =  {                       //个人信息
    xtype:'panel',
    //border:true,
    frame:true,
    padding:'4 20 2 20',
    style:{borderColor:'lightblue'},
    width:350,
    height:150,
    //title:'个人资料',
    html:'<p>个人资料</p>',
};
var shortcutBar = {                       //快捷按键
    xtype:'panel',
    width:450,
    height:150,
    frame:true,
    padding:'4 20 2 20',
    style:{borderColor:'lightblue'},
    items:[
        {
            xtype:'button',
            scale:'large',
            text:'新增分类',
            handler:'onAddCategory'
            //glyph:
        },
        {
            xtype:'button',
            scale:'large',
            text:'撰写文章',
            handler:'onAddArticle'
        },
        {
            xtype:'button',
            scale:'large',
            text:'新增资料',
            handler:'onAddResource'
        },
        {
            xtype:'button',
            scale:'large',
            text:'新增模板'
        }
    ]
};
var todoList = {
    xtype:'panel',
    padding:'4 20 2 20',
    minWidth:350,
    minHeight:200,
    frame:true,
    flex:3,
    style:{borderColor:'lightblue'},
    layout:{
        type:'table',
        columns:3
    },
    defaults:{
        bodyStyle:'padding: 20px'
    },
    items:[
        {
            html:'<p>待办任务</p>',
            rowspan:3
        },
        {
            html:'草稿：<a href="">[分类]</a>  <a href="">[文章]</a>  <a href="">[资料]</a>'
        },
        {
            html:'待审核：[分类][文章][资料]'
        },
        {
            html:'审核中：[分类][文章][资料]'
        },
        {
            html:'待发布：[分类][文章][资料]'
        },
        {
            html:'已过期：[分类][文章][资料]'
        }

    ]
};
Ext.define('KBase.view.edit.EditPanel',{
    extend:'Ext.container.Container',
    alias:'widget.Home',
    reference:'main-tab',
    layout:{
        type:'vbox',
        align:'stretch'
    },

    items:[{
        xtype:'panel',
        layout:{
            type:'hbox',
            align:'stretch'
        },
        items:[
            roleInfo,
            {                   //填充块
                xtype:'panel',
                flex:1
            },
            shortcutBar
        ]
    },{
        xtype:'panel',
        flex:1,
        layout:{
            type:'hbox',
            align:'stretch'
        },
        items:[{                   //填充块
            xtype:'panel',
            flex:1
        },
        todoList,
        {                   //填充块
            xtype:'panel',
            flex:2
        }]
    }]
});