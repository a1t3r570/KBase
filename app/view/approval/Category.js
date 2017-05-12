/**
 * Created by wql on 2017/4/24.
 */
var searchBar = {
    xtype:'panel',
    frame:true,
    padding:'4 10 2 5',
    style:{borderColor:'lightblue'},
    //width:1050,
    //height:90,
    layout:'column',
    //layout:'hbox',
    items:[
        {
            fieldLabel:'标题',
            //layout:'form',
            margin:'5,5,5,5',
            xtype:'textfield',
            name:'title',
            allowBlank:false,
            labelAlign : 'top'
        },
        {
            fieldLabel:'作者',
            margin:'5,5,5,5',
            xtype:'textfield',
            name:'title',
            allowBlank:false,
            labelAlign : 'top'
        },
        {
            fieldLabel:'所属分类',
            margin:'5,5,5,5',
            xtype:'textfield',
            name:'title',
            allowBlank:false,
            labelAlign : 'top'
        },
        {
            fieldLabel:'更新时间（起）',
            margin:'5,5,5,5',
            xtype:'datefield',
            name:'update_time',
            allowBlank:false,
            labelAlign : 'top'
        },
        {
            fieldLabel:'更新时间（止）',
            margin:'5,5,5,5',
            xtype:'datefield',
            name:'date_time',
            allowBlank:false,
            labelAlign : 'top'
        },
        {

            layout:'column',
            padding:'30 0 0 0',
            items:[{
                xtype:'button',
                text:'搜索',
                handler:'onSearchClick',
            },
                {
                    xtype: 'button',
                    text: '清空'
                }
            ]
        }

    ]
};

var buttonBar = {
    xtype:'toolbar',
    items:['->',{
        xtype:'button',
        text: '撤回',
        handler: function () {}
    },{
        xtype:'button',
        text: '审核通过',
        handler: 'onApproval'
    },{
        xtype:'button',
        text: '发布',
        handler: function () {}
    } ,{
        xtype:'button',
        text: '删除',
        handler: function () {}
    }, {
        xtype:'button',
        text: '重置父分类',
        handler: function () {}
    }, {
        xtype:'button',
        text: '新增分类',
        handler: 'onAddCategory'
    }]
};
var tabPanel = {
    xtype:'panel',
    padding:'4 2 2 20',
    frame:true,
    flex:3,
    style:{borderColor:'lightblue'},
    layout:{
        type:'table',
        columns:3
    },
    items:[{
        xtype: 'tabpanel',
        listeners:{
            tabchange:'onTabChange',
        },
        items:[{
            title:'全部',
            itemId:"s",
            reference:'total',
            items:[{
                xtype:'gridpanel',
                // width:750,
                frame:true,
                bind:{
                    store:'{total}',
                },
                height:400,
                // forceFit:true,
                //stripeRows:true,
                selModel: "checkboxmodel",
                bbar:{
                    xtype:'pagingtoolbar',
                    bind:{
                        store:'{total}'
                    },
                    dock:'bottom',
                    displayInfo:true
                },
                requires: [
                    'Ext.grid.column.Action'
                ],
                autoScroll: true,
                tbar:buttonBar,
                columns: [{
                    xtype: 'actioncolumn',
                    text: '操作', dataIndex: 'active',
                    width:100,
                    items: [{
                        xtype:'button',
                        glyph:0xf002,
                    }, {
                        xtype:'button',
                        glyph:0xf0ad,
                    }, {
                        xtype:'button',
                        glyph:0xf00d,
                    }, {
                        xtype:'button',
                        glyph:0xf0e2,
                    }]
                }, {
                    text: '标题', dataIndex: 'title',flex: 2,
                    renderer:function(value){
                        return '<span style="font-size:16px;">' + value + '</span>';
                    }
                }, {
                    text: '关键词', dataIndex: 'tag', flex: 1 ,
                    renderer:function(value){
                        return '<span style="font-size:16px;">' + value + '</span>';
                    }
                }, {
                    text: '所属分类', dataIndex: 'category', flex: 2 ,
                    renderer:function(value){
                        return '<span style="font-size:16px;">' + value + '</span>';
                    }
                }, {
                    text: '有效时间', dataIndex: 'valid_time', flex: 1 ,
                    renderer:function(value){
                        return '<span style="font-size:16px;">' + value + '</span>';
                    }
                },{
                    text: '状态', dataIndex: 'state', flex: 1 ,
                    renderer:function(value){
                        return '<span style="font-size:16px;">' + value + '</span>';
                    }
                }]
            }]
        }, {
            title:'草稿',
            itemId:"s0",
            reference:'draft',
            items:[{
                xtype:'gridpanel',
                frame:true,
                bind:{
                    store:'{draft}'
                },
                height:400,
                forceFit:true,
                stripeRows:true,
                selModel: "checkboxmodel",
                bbar:{
                    xtype:'pagingtoolbar',
                    bind:{
                        store:'{draft}'
                    },
                    dock:'bottom',
                    displayInfo:true
                },
                requires: [
                    'Ext.grid.column.Action'
                ],
                autoScroll: true,
                tbar:buttonBar,
                columns: [{
                    xtype: 'actioncolumn',
                    text: '操作', dataIndex: 'active',//flex:1,
                    items: [{
                        xtype:'button',
                        glyph:0xf002,
                    }, {
                        xtype:'button',
                        glyph:0xf0ad,
                    }, {
                        xtype:'button',
                        glyph:0xf00d,
                    }, {
                        xtype:'button',
                        glyph:0xf0e2,
                    }]
                }, {
                    text: '标题', dataIndex: 'title',flex: 1,
                    renderer:function(value){
                        return '<span style="font-size:16px;">' + value + '</span>';
                    }
                }, {
                    text: '关键词', dataIndex: 'tag', //flex: 1 ,
                    renderer:function(value){
                        return '<span style="font-size:16px;">' + value + '</span>';
                    }
                }, {
                    text: '所属分类', dataIndex: 'category', flex: 1 ,
                    renderer:function(value){
                        return '<span style="font-size:16px;">' + value + '</span>';
                    }
                }, {
                    text: '有效时间', dataIndex: 'valid_time', flex: 1 ,
                    renderer:function(value){
                        return '<span style="font-size:16px;">' + value + '</span>';
                    }
                },{
                    text: '状态', dataIndex: 'state', flex: 1 ,
                    renderer:function(value){
                        return '<span style="font-size:16px;">' + value + '</span>';
                    }
                }]
            }]
        }, {
            title:'待审核',
            itemId:"s1",
            reference:'pending',
            items:[{
                xtype:'gridpanel',
                frame:true,
                bind:{
                    store:'{pending}'
                },
                height:400,
                forceFit:true,
                stripeRows:true,
                selModel: "checkboxmodel",
                bbar:{
                    xtype:'pagingtoolbar',
                    bind:{
                        store:'{pending}'
                    },
                    dock:'bottom',
                    displayInfo:true
                },
                requires: [
                    'Ext.grid.column.Action'
                ],
                autoScroll: true,
                tbar:buttonBar,
                columns: [{
                    xtype: 'actioncolumn',
                    text: '操作', dataIndex: 'active',//flex:1,
                    items: [{
                        xtype:'button',
                        glyph:0xf002,
                    }, {
                        xtype:'button',
                        glyph:0xf0ad,
                    }, {
                        xtype:'button',
                        glyph:0xf00d,
                    }, {
                        xtype:'button',
                        glyph:0xf0e2,
                    }]
                }, {
                    text: '标题', dataIndex: 'title',flex: 1,
                    renderer:function(value){
                        return '<span style="font-size:16px;">' + value + '</span>';
                    }
                }, {
                    text: '关键词', dataIndex: 'tag', //flex: 1 ,
                    renderer:function(value){
                        return '<span style="font-size:16px;">' + value + '</span>';
                    }
                }, {
                    text: '所属分类', dataIndex: 'category', flex: 1 ,
                    renderer:function(value){
                        return '<span style="font-size:16px;">' + value + '</span>';
                    }
                }, {
                    text: '有效时间', dataIndex: 'valid_time', flex: 1 ,
                    renderer:function(value){
                        return '<span style="font-size:16px;">' + value + '</span>';
                    }
                },{
                    text: '状态', dataIndex: 'state', flex: 1 ,
                    renderer:function(value){
                        return '<span style="font-size:16px;">' + value + '</span>';
                    }
                }]
            }]
        }, {
            title:'审核中',
            itemId:"s2",
            reference:'inreview',
            items:[{
                xtype:'gridpanel',
                frame:true,
                bind:{
                    store:'{inreview}'
                },
                height:400,
                forceFit:true,
                stripeRows:true,
                selModel: "checkboxmodel",
                bbar:{
                    xtype:'pagingtoolbar',
                    bind:{
                        store:'{inreview}'
                    },
                    dock:'bottom',
                    displayInfo:true
                },
                requires: [
                    'Ext.grid.column.Action'
                ],
                autoScroll: true,
                tbar:buttonBar,
                columns: [{
                    xtype: 'actioncolumn',
                    text: '操作', dataIndex: 'active',//flex:1,
                    items: [{
                        xtype:'button',
                        glyph:0xf002,
                    }, {
                        xtype:'button',
                        glyph:0xf0ad,
                    }, {
                        xtype:'button',
                        glyph:0xf00d,
                    }, {
                        xtype:'button',
                        glyph:0xf0e2,
                    }]
                }, {
                    text: '标题', dataIndex: 'title',flex: 1,
                    renderer:function(value){
                        return '<span style="font-size:16px;">' + value + '</span>';
                    }
                }, {
                    text: '关键词', dataIndex: 'tag', //flex: 1 ,
                    renderer:function(value){
                        return '<span style="font-size:16px;">' + value + '</span>';
                    }
                }, {
                    text: '所属分类', dataIndex: 'category', flex: 1 ,
                    renderer:function(value){
                        return '<span style="font-size:16px;">' + value + '</span>';
                    }
                }, {
                    text: '有效时间', dataIndex: 'valid_time', flex: 1 ,
                    renderer:function(value){
                        return '<span style="font-size:16px;">' + value + '</span>';
                    }
                },{
                    text: '状态', dataIndex: 'state', flex: 1 ,
                    renderer:function(value){
                        return '<span style="font-size:16px;">' + value + '</span>';
                    }
                }]
            }]
        },{
            title:'待发布',
            itemId:"s3",
            reference:'unpublished',
            items:[{
                xtype:'gridpanel',
                frame:true,
                bind:{
                    store:'{unpublished}'
                },
                height:400,
                forceFit:true,
                stripeRows:true,
                selModel: "checkboxmodel",
                bbar:{
                    xtype:'pagingtoolbar',
                    bind:{
                        store:'{unpublished}'
                    },
                    dock:'bottom',
                    displayInfo:true
                },
                requires: [
                    'Ext.grid.column.Action'
                ],
                autoScroll: true,
                tbar:buttonBar,
                columns: [{
                    xtype: 'actioncolumn',
                    text: '操作', dataIndex: 'active',//flex:1,
                    items: [{
                        xtype:'button',
                        glyph:0xf002,
                    }, {
                        xtype:'button',
                        glyph:0xf0ad,
                    }, {
                        xtype:'button',
                        glyph:0xf00d,
                    }, {
                        xtype:'button',
                        glyph:0xf0e2,
                    }]
                }, {
                    text: '标题', dataIndex: 'title',flex: 1,
                    renderer:function(value){
                        return '<span style="font-size:16px;">' + value + '</span>';
                    }
                }, {
                    text: '关键词', dataIndex: 'tag', //flex: 1 ,
                    renderer:function(value){
                        return '<span style="font-size:16px;">' + value + '</span>';
                    }
                }, {
                    text: '所属分类', dataIndex: 'category', flex: 1 ,
                    renderer:function(value){
                        return '<span style="font-size:16px;">' + value + '</span>';
                    }
                }, {
                    text: '有效时间', dataIndex: 'valid_time', flex: 1 ,
                    renderer:function(value){
                        return '<span style="font-size:16px;">' + value + '</span>';
                    }
                },{
                    text: '状态', dataIndex: 'state', flex: 1 ,
                    renderer:function(value){
                        return '<span style="font-size:16px;">' + value + '</span>';
                    }
                }]
            }]
        }, {
            title:'已发布',
            itemId:"s4",
            reference:'published',
            items:[{
                xtype:'gridpanel',
                frame:true,
                bind:{
                    store:'{published}'
                },
                height:400,
                forceFit:true,
                stripeRows:true,
                selModel: "checkboxmodel",
                bbar:{
                    xtype:'pagingtoolbar',
                    bind:{
                        store:'{published}'
                    },
                    dock:'bottom',
                    displayInfo:true
                },
                requires: [
                    'Ext.grid.column.Action'
                ],
                autoScroll: true,
                tbar:buttonBar,
                columns: [{
                    xtype: 'actioncolumn',
                    text: '操作', dataIndex: 'active',//flex:1,
                    items: [{
                        xtype:'button',
                        glyph:0xf002,
                    }, {
                        xtype:'button',
                        glyph:0xf0ad,
                    }, {
                        xtype:'button',
                        glyph:0xf00d,
                    }, {
                        xtype:'button',
                        glyph:0xf0e2,
                    }]
                }, {
                    text: '标题', dataIndex: 'title',flex: 1,
                    renderer:function(value){
                        return '<span style="font-size:16px;">' + value + '</span>';
                    }
                }, {
                    text: '关键词', dataIndex: 'tag', //flex: 1 ,
                    renderer:function(value){
                        return '<span style="font-size:16px;">' + value + '</span>';
                    }
                }, {
                    text: '所属分类', dataIndex: 'category', flex: 1 ,
                    renderer:function(value){
                        return '<span style="font-size:16px;">' + value + '</span>';
                    }
                }, {
                    text: '有效时间', dataIndex: 'valid_time', flex: 1 ,
                    renderer:function(value){
                        return '<span style="font-size:16px;">' + value + '</span>';
                    }
                },{
                    text: '状态', dataIndex: 'state', flex: 1 ,
                    renderer:function(value){
                        return '<span style="font-size:16px;">' + value + '</span>';
                    }
                }]
            }]
        }, {
            title:'已过期',
            itemId:"s5",
            reference:'expired',
            items:[{
                xtype:'gridpanel',
                frame:true,
                bind:{
                    store:'{expired}'
                },
                height:400,
                forceFit:true,
                stripeRows:true,
                selModel: "checkboxmodel",
                bbar:{
                    xtype:'pagingtoolbar',
                    bind:{
                        store:'{expired}'
                    },
                    dock:'bottom',
                    displayInfo:true
                },
                requires: [
                    'Ext.grid.column.Action'
                ],
                autoScroll: true,
                tbar:buttonBar,
                columns: [{
                    xtype: 'actioncolumn',
                    text: '操作', dataIndex: 'active',//flex:1,
                    items: [{
                        xtype:'button',
                        glyph:0xf002,
                    }, {
                        xtype:'button',
                        glyph:0xf0ad,
                    }, {
                        xtype:'button',
                        glyph:0xf00d,
                    }, {
                        xtype:'button',
                        glyph:0xf0e2,
                    }]
                }, {
                    text: '标题', dataIndex: 'title',flex: 1,
                    renderer:function(value){
                        return '<span style="font-size:16px;">' + value + '</span>';
                    }
                }, {
                    text: '关键词', dataIndex: 'tag', //flex: 1 ,
                    renderer:function(value){
                        return '<span style="font-size:16px;">' + value + '</span>';
                    }
                }, {
                    text: '所属分类', dataIndex: 'category', flex: 1 ,
                    renderer:function(value){
                        return '<span style="font-size:16px;">' + value + '</span>';
                    }
                }, {
                    text: '有效时间', dataIndex: 'valid_time', flex: 1 ,
                    renderer:function(value){
                        return '<span style="font-size:16px;">' + value + '</span>';
                    }
                },{
                    text: '状态', dataIndex: 'state', flex: 1 ,
                    renderer:function(value){
                        return '<span style="font-size:16px;">' + value + '</span>';
                    }
                }]
            }]
        }]
    }]
};

Ext.define('KBase.view.approval.Category',{
   requires:[
        'KBase.view.approval.CategoryController',
        'KBase.view.approval.CategoryViewModel'
   ],
    extend:'Ext.panel.Panel',
    title:'分类列表',
    header:false,
    alias:'widget.Category',
    reference:'main-tab',
    autoShow:true,
    controller:'category',
    viewModel:{
        type:'category1'
    },
    items:[
        searchBar,
        tabPanel,
        //grid,
    ]
});