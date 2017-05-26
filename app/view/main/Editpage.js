/**
 * Created by wql on 2017/4/9.
 */
var maintab = {
    xtype:'Home',
};//主面板

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
            reference:'navbar',
            items: [{
                text:'首页',
                border:false,
                glyph:0xf015,
                scale:'large',
                pressed: true,
                handler:'onHomeClick',
                // border:false,
            },{
                text:'知识体系',
                border:false,
                scale:'large'
            }, {
                text:'分类',
                border:false,
                itemId:"s",
                glyph:0xf029,
                scale:'large',
                handler:'onCategoryClick'
            },{
                text:'文章',
                border:false,
                glyph:0xf02d,
                scale:'large'
            },{
                text:'资料',
                border:false,
                glyph:0xf0b1,
                scale:'large'
            },{
                text:'模板',
                border:false,
                glyph:0xf09d,
                scale:'large'
            },{
                text:'回收站',
                border:false,
                glyph:0xf1f8,
                scale:'large'
            }]
        }]
    }]
};
var editPanel = {           //编辑面板
    xtype:'panel',
    region:'center',
    reference:'editpanel',
    minWidth:400,
    minHeight:200,
    margin:'4 2 2 4',
    //layout:'anchor',
    title:'Welcome',
    layout:'fit',
    items:[
        maintab
    ],
};

var latestPanel = {
    xtype:'panel',
    region:'east',
    width:300,
    margin:'4 2 2 4',
    title:'The latest news',
    items:[{
        xtype:'panel',
        html:'<p>欢迎</p>',
    }]
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
        'KBase.view.edit.Resourceform',
        'KBase.view.edit.EditPanel'
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