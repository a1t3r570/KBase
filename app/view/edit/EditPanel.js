/**
 * Created by wql on 2017/4/24.
 */
var roleInfo =  {                       //个人信息
    xtype:'panel',
    //frame:true,
    style:{borderColor:'#9e9e9e'},
    width:350,
    height:150,
    margin:'10 0 0 10',
    //title:'个人资料',
    layout:'column',
    items:[{
        xtype:'button',
        width:100,
        height:125,
        border:false,
        padding:'20 0 0 0',
        margin:'10 10 0 10',
        style:{backgroundColor:'#9e9e9e'},
        text:'<i class="fa fa-user-circle-o fa-5x" aria-hidden="true"></i><br/>' + '<p style="font-size: medium">用户</p> ',
        //disabled:true,
    },{
        xtype:'panel',
        width:200,
        height:125,
        frame:true,
        style:{borderColor:'lightblue'},
        padding:'5 0 0 10',
        margin:'10 0 0 10',
        html:'<p style="font-size: medium">姓名：wql</p><br/>' +
        '<p style="font-size: medium">权限：3</p>'
    }]
};
var shortcutBar = {                       //快捷按键
    xtype:'panel',
    width:450,
    height:150,
    //frame:true,
    margin:'10 10 0 10',
    //padding:'4 20 2 20',
    style:{borderColor:'#9e9e9e'},
    items:[{
        xtype:'button',
        width:100,
        height:125,
        border:false,
        padding:'20 0 0 0',
        margin:'10 0 0 10',
        style:{backgroundColor:'#9e9e9e'},
        text:'<i class="fa fa-plus fa-5x" aria-hidden="true"></i><br/>' + '<p style="font-size: medium">新建分类</p> ',
        handler:'onAddCategory',
    }, {
        xtype:'button',
        width:100,
        height:125,
        border:false,
        padding:'20 0 0 0',
        margin:'10 0 0 10',
        style:{backgroundColor:'#9e9e9e'},
        text:'<i class="fa fa-pencil-square-o fa-5x" aria-hidden="true"></i><br/>' + '<p style="font-size: medium">撰写文章</p>',
        handler:'onAddArticle'
    }, {
        xtype:'button',
        width:100,
        height:125,
        border:false,
        padding:'20 0 0 0',
        margin:'10 0 0 10',
        style:{backgroundColor:'#9e9e9e'},
        text:'<i class="fa fa-file-archive-o fa-5x" aria-hidden="true"></i><br/>' + '<p style="font-size: medium">添加资料</p>',
        handler:'onAddResource'
    }, {
        xtype:'button',
        width:100,
        height:125,
        border:false,
        padding:'20 0 0 0',
        margin:'10 0 0 10',
        style:{backgroundColor:'#9e9e9e'},
        text:'<i class="fa fa-text-width fa-5x" aria-hidden="true"></i><br/>' + '<p style="font-size: medium">新增模板</p>',
    }]
};
var todoList = {
    xtype:'panel',
    padding:'4 20 2 20',
    margin:'10',
    minWidth:650,
    minHeight:200,
    //frame:true,
    flex:3,
    style:{borderColor:'lightblue'},
    layout:{
        type:'table',
        columns:3
    },
    defaults:{
        bodyStyle:'padding: 10px;'
    },
    items:[{
        html:'<p style="font-size: large">待 办</p><p style="font-size: large">任 务</p>',
        rowspan:3
    }, {
        frame:true,
        width:240,
        margin:'10 10 10 20',
        itemId:"s0",
        layout: {
            type:'hbox',
            align:'stretch'
        },
        items:[{
            xtype: 'panel',
            html:'<p style="font-size: medium">草稿箱：</p>',
        },{
            xtype:'button',
            text:'[分类]',
            margin:'0 2 0 0',
            handler:'onCategoryLink'
        },{
            xtype:'button',
            margin:'0 2 0 0',
            text:'[文章]',
            handler:'onArticleLink'
        },{
            xtype:'button',
            margin:'0 2 0 0',
            text:'[资料]',
            handler:'onResourceLink'
        }],
    }, {
        frame:true,
        width:240,
        margin:'10 10 10 20',
        itemId:"s1",
        layout: {
            type:'hbox',
            align:'stretch'
        },
        items:[{
            xtype: 'panel',
            html:'<p style="font-size: medium">待审核：</p>',
        },{
            xtype:'button',
            text:'[分类]',
            margin:'0 2 0 0',
            handler:'onCategoryLink'
        },{
            xtype:'button',
            margin:'0 2 0 0',
            text:'[文章]',
            handler:'onArticleLink'
        },{
            xtype:'button',
            margin:'0 2 0 0',
            text:'[资料]',
            handler:'onResourceLink'
        }],
    }, {
        frame:true,
        width:240,
        margin:'10 10 10 20',
        itemId:"s2",
        layout: {
            type:'hbox',
            align:'stretch'
        },
        items:[{
            xtype: 'panel',
            html:'<p style="font-size: medium">审核中：</p>',
        },{
            xtype:'button',
            text:'[分类]',
            margin:'0 2 0 0',
            handler:'onCategoryLink'
        },{
            xtype:'button',
            margin:'0 2 0 0',
            text:'[文章]',
            handler:'onArticleLink'
        },{
            xtype:'button',
            margin:'0 2 0 0',
            text:'[资料]',
            handler:'onResourceLink'
        }],
    }, {
        frame:true,
        width:240,
        margin:'10 10 10 20',
        itemId:"s3",
        layout: {
            type:'hbox',
            align:'stretch'
        },
        items:[{
            xtype: 'panel',
            html:'<p style="font-size: medium">待发布：</p>',
        },{
            xtype:'button',
            text:'[分类]',
            margin:'0 2 0 0',
            handler:'onCategoryLink'
        },{
            xtype:'button',
            margin:'0 2 0 0',
            text:'[文章]',
            handler:'onArticleLink'
        },{
            xtype:'button',
            margin:'0 2 0 0',
            text:'[资料]',
            handler:'onResourceLink'
        }],
    },{
        frame:true,
        width:240,
        margin:'10 10 10 20',
        itemId:"s5",
        layout: {
            type:'hbox',
            align:'stretch'
        },
        items:[{
            xtype: 'panel',
            html:'<p style="font-size: medium">已过期：</p>',
        },{
            xtype:'button',
            text:'[分类]',
            margin:'0 2 0 0',
            handler:'onCategoryLink'
        },{
            xtype:'button',
            margin:'0 2 0 0',
            text:'[文章]',
            handler:'onArticleLink'
        },{
            xtype:'button',
            margin:'0 2 0 0',
            text:'[资料]',
            handler:'onResourceLink'
        }],
    }],
};
Ext.define('KBase.view.edit.EditPanel',{
    extend:'Ext.panel.Panel',
    //extend:'Ext.container.Container',
    alias:'widget.Home',
    title:'Welcome',
    header:false,
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
            roleInfo, {                   //填充块
            xtype:'panel',
            flex:1
        }, shortcutBar
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
        }, todoList, {                   //填充块
            xtype:'panel',
            flex:2
        }]
    }]
});