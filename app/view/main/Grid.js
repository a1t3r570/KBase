/**
 * Created by wql on 2017/4/18.
 */
Ext.create('Ext.data.Store', {
    storeId: 'simpsonsStore',
    fields:[ 'name', 'email', 'phone'],
    data: [
        {key:'啦啦啦',engine:'百度',url:'www.baidu.com'},
        {key:'啦啦啦',engine:'百度',url:'www.baidu.com'},
        {key:'啦啦啦',engine:'百度',url:'www.baidu.com'},
        {key:'啦啦啦',engine:'百度',url:'www.baidu.com'}
    ]
});
var navigationBar = {       //导航栏
    xtype:'container',
    height:40,
    region:'north',
    style:{
        background:'#4297d4',
    },
    items:[{
        fieldLabel: '            ',
        xtype: 'fieldcontainer',
        //hideLabel:true,

        items: [{
            xtype: 'segmentedbutton',
            items: [{
                text:'导航1',
                glyph:0xf015,
                scale:'large',
                pressed: true
            },{
                text:'导航2',
                scale:'large'
            }, {
                text:'导航3',
                glyph:0xf029,
                scale:'large'
            },{
                text:'导航4',
                glyph:0xf02d,
                scale:'large'
            },{
                text:'导航5',
                glyph:0xf0b1,
                scale:'large'
            },{
                text:'导航6',
                glyph:0xf09d,
                scale:'large'
            },{
                text:'导航7',
                glyph:0xf1f8,
                scale:'large'
            }]
        }]
    }]
};
var grid = {
    xtype:'gridpanel',
    title: '国内搜索引擎现状',
    frame:true,
    region:'center',
    store: Ext.data.StoreManager.lookup('simpsonsStore'),
    width:500,
    height:400,
    requires: [
        'Ext.grid.column.Action'
    ],

    margin:'20',
    columns: [
        { text: '关键词', dataIndex: 'key',
            renderer:function(value){
                return '<span style="font-size:16px;">' + value + '</span>';
            }
        },
        { text: '搜索引擎', dataIndex: 'engine',
            renderer:function(value){
                return '<span style="font-size:16px;">' + value + '</span>';
            }},
        { text: 'URL', dataIndex: 'url', flex: 1 ,
            renderer:function(value){
                return '<span style="font-size:16px;">' + value + '</span>';
            }},
        {
            xtype: 'actioncolumn',
            //padding:'0 0 0 20',
             width: 20,
            items: [{
                xtype:'button',
                style:{
                    fontSize:'large',
                },
                glyph:0xf056,
            }],
        }
    ],
};
var func = {
    xtype:'container',
    height:40,
    region:'west',
    style:{
        background:'#4297d4',
    },
    margin:'5 0 0 0',
    items:[{
        xtype: 'fieldcontainer',

        hideLabel: true,
        columnWidth: 0.25,
        items: [{
            xtype: 'segmentedbutton',

            vertical: true,
            items: [{
                text: '功能一',
                scale:'large',
                glyph:0xf211,
            }, {
                text: '功能二',
                scale:'large',
                glyph:0xf211,
                pressed: true
            }, {
                text: '功能三',
                scale:'large',
                glyph:0xf211,
            },{
                text: '功能四',
                scale:'large',
                glyph:0xf211,
            },{
                text: '功能五',
                scale:'large',
                glyph:0xf211,
            },{
                text: '功能六',
                scale:'large',
                glyph:0xf211,
            }]
        }]
    }]
}
Ext.define('KBase.view.main.Grid', {
    extend:'Ext.container.Container',
    layout:'border',
    alias:'widget.myGrid',
    items:[
        navigationBar,
        grid,
        func
    ],
    renderTo: Ext.getBody()
});
