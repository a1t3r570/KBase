/**
 * Created by wql on 2017/4/18.
 */
/*
Ext.create('Ext.data.Store', {
    storeId: 'simpsonsStore',
    fields:[ 'name', 'email', 'phone'],
    data: [
        {key:'啦啦啦',engine:'百度',url:'www.baidu.com'}
    ]
});
Ext.define('KBase.view.main.Grid',{
    extend:'Ext.grid.Panel',
    alias:'widget.myGrid',
    requires:[
        'Ext.grid.column.Action'
    ],

    title:'国内搜索引擎现状',
    width:500,
    height:350,
    store: Ext.data.StoreManager.lookup('simpsonsStore'),
    actions:{
        sell:{
            iconCls: 'array-grid-sell-col',
        }
    },
    column:[{
        text:'关键词',
        flex:1,
        dataIndex: 'key'
    },{
        text:'搜索引擎',
        flex:1,
        dataIndex: 'engine'
    },{
        text:'URL',
        flex:1,
        dataIndex: 'url'
    },{
        xtype: 'actioncolumn',
        width:50,
        items:['@sell'],
    }]
})*/
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

Ext.define('KBase.view.main.Grid', {
    title: '国内搜索引擎现状',
    extend:'Ext.grid.Panel',
    frame:true,
    store: Ext.data.StoreManager.lookup('simpsonsStore'),
    alias:'widget.myGrid',
    width:500,
    height:400,
    requires: [
        'Ext.grid.column.Action'
    ],
    columns: [
        { text: '关键词', dataIndex: 'key' },
        { text: '搜索引擎', dataIndex: 'engine' },
        { text: 'URL', dataIndex: 'url', flex: 1 },
        {
            xtype: 'actioncolumn',
            //padding:'0 0 0 20',
            width: 20,
            items: [{
                xtype:'button',
                style:{
                  color:'red',
                },
                glyph:0xf056,
            }]
        }
    ],
    renderTo: Ext.getBody()
});
