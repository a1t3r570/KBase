/**
 * Created by wql on 2017/4/9.
 */
var navigationBar = {       //导航栏
    xtype:'container',
    height:40,
    region:'north',
    style:{
        background:'#4297d4',
    },
    items:[{
        //fieldLabel: 'Toggle Group',
        xtype: 'fieldcontainer',
        hideLabel:true,

        items: [{
            xtype: 'segmentedbutton',
            items: [{
                text:'首页',
                glyph:0xf015,
                scale:'large',
                pressed: true
            },{
                text:'知识体系',
                scale:'large'
            }, {
                text:'分类',
                glyph:0xf029,
                scale:'large'
            },{
                text:'文章',
                glyph:0xf02d,
                scale:'large'
            },{
                text:'资料',
                glyph:0xf0b1,
                scale:'large'
            },{
                text:'模板',
                glyph:0xf09d,
                scale:'large'
            },{
                text:'回收站',
                glyph:0xf1f8,
                scale:'large'
            }]
        }]
    }]
};
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
            html:'草稿：[分类][文章][资料]'
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
var editPanel = {           //编辑面板
    xtype:'panel',
    region:'center',
    minWidth:400,
    minHeight:200,
    margin:'4 2 2 4',
    //layout:'anchor',
    layout:{
        type:'vbox',
        align:'stretch'
    },
    title:'Welcome',
    items:[
        {
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
        },
        {
            xtype:'panel',
            flex:1,
            layout:{
                type:'hbox',
                align:'stretch'
            },
            items:[
                {                   //填充块
                    xtype:'panel',
                    flex:1
                },
                todoList,
                {                   //填充块
                    xtype:'panel',
                    flex:2
                }
            ]
        }
    ]
};

var latestPanel = {
    xtype:'panel',
    region:'east',
    width:300,
    margin:'4 2 2 4',
    title:'The latest news',
    items:[
        {
            xtype:'panel',
            html:'<p>欢迎</p>',
        },
    ]
}
var blankBar = {
    xtype:'panel',
    region:'south',
    height:20,
};

Ext.define('KBase.view.main.Editpage',{
    extend:'Ext.container.Container',
    layout:'border',
    requires:[
        'KBase.view.main.Editcontroller',
        //待解决
        'KBase.view.edit.Categoryform',
        'KBase.view.edit.Articleform',
        'KBase.view.edit.Resourceform'
    ],
    alias:'widget.mainpage',
    controller:'edit-controller',
    items:[
        navigationBar,
        editPanel,
        latestPanel,
        blankBar
    ]
});