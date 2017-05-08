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
                text:'搜索'
            },
                {
                    xtype: 'button',
                    text: '清空'
                }
            ]
        }

    ]
};

var tabPanel = {
    xtype:'panel',
    padding:'4 20 2 20',
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
    items:[{
        region:'center',
        xtype: 'tabpanel',
        items:[{

            title:'全部',
            items:[
                {
                    xtype:'gridpanel',
                    title:'|分类列表',
                    frame:true,
                    store: Ext.data.StoreManager.lookup('simpsonsStore'),
                    height:300,
                    forceFit:true,
                    stripeRows:true,
                    selType: "checkboxmodel",
                    bbar:{
                        xtype:'pagingtoolbar',
                        store:'',
                        dock:'bottom',
                        displayInfo:true
                    },
                    requires: [
                        'Ext.grid.column.Action'
                    ],
                    autoScroll: true,
                    tbar: ['->',{

                        xtype:'button',
                        text: '撤回',
                        handler: function () {}
                    },
                        {
                            xtype:'button',
                            text: '审核通过',
                            handler: function () {
                            }
                        },
                        {
                            xtype:'button',
                            text: '发布',
                            handler: function () {
                            }
                        } ,{
                            xtype:'button',
                            text: '删除',
                            handler: function () {
                            }
                        }, {
                            xtype:'button',
                            text: '重置父分类',
                            handler: function () {
                            }
                        }, {
                            xtype:'button',
                            text: '新增分类',
                            handler: function () {
                            }
                        }

                    ],

                    columns: [
                        { xtype: 'actioncolumn',
                            text: '操作', dataIndex: 'active',//flex:1,
                            items: [{
                                xtype:'button',
                                glyph:0xf002,
                            },
                                {
                                    xtype:'button',
                                    glyph:0xf0ad,
                                },
                                {
                                    xtype:'button',
                                    glyph:0xf00d,
                                },
                                {
                                    xtype:'button',
                                    glyph:0xf0e2,
                                },

                            ],},

                        { text: '标题', dataIndex: 'title',flex: 1,
                            renderer:function(value){
                                return '<span style="font-size:16px;">' + value + '</span>';
                            }},
                        { text: '关键词', dataIndex: 'key', //flex: 1 ,
                            renderer:function(value){
                                return '<span style="font-size:16px;">' + value + '</span>';
                            }},
                        { text: '所属分类', dataIndex: 'parentcategory', flex: 1 ,
                            renderer:function(value){
                                return '<span style="font-size:16px;">' + value + '</span>';
                            }},
                        { text: '有效时间', dataIndex: 'validtime', flex: 1 ,
                            renderer:function(value){
                                return '<span style="font-size:16px;">' + value + '</span>';
                            }},

                    ],
                    store:{data: [
                        ['放假通知','关键字','知识库','永久'],
                        ['放假通知','关键字','知识库','永久'],
                        ['放假通知','关键字','知识库','永久'],
                        ['放假通知','关键字','知识库','永久'],
                        ['放假通知','关键字','知识库','永久'],
                        ['放假通知','关键字','知识库','永久'],
                        ['放假通知','关键字','知识库','永久'],
                        ['放假通知','关键字','知识库','永久'],
                        ['放假通知','关键字','知识库','永久'],
                        ['放假通知','关键字','知识库','永久'],
                        ['放假通知','关键字','知识库','永久'],
                        ['放假通知','关键字','知识库','永久'],
                        ['放假通知','关键字','知识库','永久'],
                        ['放假通知','关键字','知识库','永久'],
                        ['放假通知','关键字','知识库','永久'],
                        ['放假通知','关键字','知识库','永久'],
                        ['放假通知','关键字','知识库','永久'],
                        ['放假通知','关键字','知识库','永久'],
                        ['放假通知','关键字','知识库','永久'],
                        ['放假通知','关键字','知识库','永久'],
                        ['放假通知','关键字','知识库','永久'],
                        ['放假通知','关键字','知识库','永久'],
                        ['放假通知','关键字','知识库','永久'],
                        ['放假通知','关键字','知识库','永久'],

                    ],
                        fields:[
                            {name:'title'},
                            {name:'key'},
                            {name:'parentcategory'},
                            {name:'validtime'}
                        ]
                    }

                },

            ]
        }, {
            title:'草稿',
            items:[
                {
                    xtype:'gridpanel',
                    title:'|分类列表',
                    frame:true,
                    store: Ext.data.StoreManager.lookup('simpsonsStore'),
                    height:300,
                    forceFit:true,
                    stripeRows:true,
                    selType: "checkboxmodel",
                    bbar:{
                        xtype:'pagingtoolbar',
                        store:'',
                        dock:'bottom',
                        displayInfo:true
                    },
                    requires: [
                        'Ext.grid.column.Action'
                    ],
                    autoScroll: true,
                    tbar: ['->',{

                        xtype:'button',
                        text: '撤回',
                        handler: function () {}
                    },
                        {
                            xtype:'button',
                            text: '审核通过',
                            handler: function () {
                            }
                        },
                        {
                            xtype:'button',
                            text: '发布',
                            handler: function () {
                            }
                        } ,{
                            xtype:'button',
                            text: '删除',
                            handler: function () {
                            }
                        }, {
                            xtype:'button',
                            text: '重置父分类',
                            handler: function () {
                            }
                        }, {
                            xtype:'button',
                            text: '新增分类',
                            handler: function () {
                            }
                        }

                    ],

                    columns: [
                        { xtype: 'actioncolumn',
                            text: '操作', dataIndex: 'active',//flex:1,
                            items: [{
                                xtype:'button',
                                glyph:0xf002,
                            },
                                {
                                    xtype:'button',
                                    glyph:0xf0ad,
                                },
                                {
                                    xtype:'button',
                                    glyph:0xf00d,
                                },
                                {
                                    xtype:'button',
                                    glyph:0xf0e2,
                                },

                            ],},

                        { text: '标题', dataIndex: 'title',flex: 1,
                            renderer:function(value){
                                return '<span style="font-size:16px;">' + value + '</span>';
                            }},
                        { text: '关键词', dataIndex: 'key', //flex: 1 ,
                            renderer:function(value){
                                return '<span style="font-size:16px;">' + value + '</span>';
                            }},
                        { text: '所属分类', dataIndex: 'parentcategory', flex: 1 ,
                            renderer:function(value){
                                return '<span style="font-size:16px;">' + value + '</span>';
                            }},
                        { text: '有效时间', dataIndex: 'validtime', flex: 1 ,
                            renderer:function(value){
                                return '<span style="font-size:16px;">' + value + '</span>';
                            }},

                    ],
                    store:{data: [
                        ['放假通知草稿','关键字','知识库','永久'],
                        ['放假通知','关键字','知识库','永久'],
                        ['放假通知','关键字','知识库','永久'],
                        ['放假通知','关键字','知识库','永久'],
                        ['放假通知','关键字','知识库','永久'],


                    ],
                        fields:[
                            {name:'title'},
                            {name:'key'},
                            {name:'parentcategory'},
                            {name:'validtime'}
                        ]
                    }

                },

            ]
        }, {
            title:'待审核',
            items:[
                {
                    xtype:'gridpanel',
                    title:'|分类列表',
                    frame:true,
                    store: Ext.data.StoreManager.lookup('simpsonsStore'),
                    height:300,
                    forceFit:true,
                    stripeRows:true,
                    selType: "checkboxmodel",
                    bbar:{
                        xtype:'pagingtoolbar',
                        store:'',
                        dock:'bottom',
                        displayInfo:true
                    },
                    requires: [
                        'Ext.grid.column.Action'
                    ],
                    autoScroll: true,
                    tbar: ['->',{

                        xtype:'button',
                        text: '撤回',
                        handler: function () {}
                    },
                        {
                            xtype:'button',
                            text: '审核通过',
                            handler: function () {
                            }
                        },
                        {
                            xtype:'button',
                            text: '发布',
                            handler: function () {
                            }
                        } ,{
                            xtype:'button',
                            text: '删除',
                            handler: function () {
                            }
                        }, {
                            xtype:'button',
                            text: '重置父分类',
                            handler: function () {
                            }
                        }, {
                            xtype:'button',
                            text: '新增分类',
                            handler: function () {
                            }
                        }

                    ],

                    columns: [
                        { xtype: 'actioncolumn',
                            text: '操作', dataIndex: 'active',//flex:1,
                            items: [{
                                xtype:'button',
                                glyph:0xf002,
                            },
                                {
                                    xtype:'button',
                                    glyph:0xf0ad,
                                },
                                {
                                    xtype:'button',
                                    glyph:0xf00d,
                                },
                                {
                                    xtype:'button',
                                    glyph:0xf0e2,
                                },

                            ],},

                        { text: '标题', dataIndex: 'title',flex: 1,
                            renderer:function(value){
                                return '<span style="font-size:16px;">' + value + '</span>';
                            }},
                        { text: '关键词', dataIndex: 'key', //flex: 1 ,
                            renderer:function(value){
                                return '<span style="font-size:16px;">' + value + '</span>';
                            }},
                        { text: '所属分类', dataIndex: 'parentcategory', flex: 1 ,
                            renderer:function(value){
                                return '<span style="font-size:16px;">' + value + '</span>';
                            }},
                        { text: '有效时间', dataIndex: 'validtime', flex: 1 ,
                            renderer:function(value){
                                return '<span style="font-size:16px;">' + value + '</span>';
                            }},

                    ],
                    store:{data: [
                        ['放假通知待审核','关键字','知识库','永久'],
                        ['放假通知','关键字','知识库','永久'],
                        ['放假通知','关键字','知识库','永久'],
                        ['放假通知','关键字','知识库','永久'],


                    ],
                        fields:[
                            {name:'title'},
                            {name:'key'},
                            {name:'parentcategory'},
                            {name:'validtime'}
                        ]
                    }

                },

            ]
        }, {
            title:'审核中',
            items:[
                {
                    xtype:'gridpanel',
                    title:'|分类列表',
                    frame:true,
                    store: Ext.data.StoreManager.lookup('simpsonsStore'),
                    height:300,
                    forceFit:true,
                    stripeRows:true,
                    selType: "checkboxmodel",
                    bbar:{
                        xtype:'pagingtoolbar',
                        store:'',
                        dock:'bottom',
                        displayInfo:true
                    },
                    requires: [
                        'Ext.grid.column.Action'
                    ],
                    autoScroll: true,
                    tbar: ['->',{

                        xtype:'button',
                        text: '撤回',
                        handler: function () {}
                    },
                        {
                            xtype:'button',
                            text: '审核通过',
                            handler: function () {
                            }
                        },
                        {
                            xtype:'button',
                            text: '发布',
                            handler: function () {
                            }
                        } ,{
                            xtype:'button',
                            text: '删除',
                            handler: function () {
                            }
                        }, {
                            xtype:'button',
                            text: '重置父分类',
                            handler: function () {
                            }
                        }, {
                            xtype:'button',
                            text: '新增分类',
                            handler: function () {
                            }
                        }

                    ],

                    columns: [
                        { xtype: 'actioncolumn',
                            text: '操作', dataIndex: 'active',//flex:1,
                            items: [{
                                xtype:'button',
                                glyph:0xf002,
                            },
                                {
                                    xtype:'button',
                                    glyph:0xf0ad,
                                },
                                {
                                    xtype:'button',
                                    glyph:0xf00d,
                                },
                                {
                                    xtype:'button',
                                    glyph:0xf0e2,
                                },

                            ],},

                        { text: '标题', dataIndex: 'title',flex: 1,
                            renderer:function(value){
                                return '<span style="font-size:16px;">' + value + '</span>';
                            }},
                        { text: '关键词', dataIndex: 'key', //flex: 1 ,
                            renderer:function(value){
                                return '<span style="font-size:16px;">' + value + '</span>';
                            }},
                        { text: '所属分类', dataIndex: 'parentcategory', flex: 1 ,
                            renderer:function(value){
                                return '<span style="font-size:16px;">' + value + '</span>';
                            }},
                        { text: '有效时间', dataIndex: 'validtime', flex: 1 ,
                            renderer:function(value){
                                return '<span style="font-size:16px;">' + value + '</span>';
                            }},

                    ],
                    store:{data: [
                        ['放假通知审核中','关键字','知识库','永久'],
                        ['放假通知','关键字','知识库','永久'],
                        ['放假通知','关键字','知识库','永久'],
                        ['放假通知','关键字','知识库','永久'],
                        ['放假通知','关键字','知识库','永久'],


                    ],
                        fields:[
                            {name:'title'},
                            {name:'key'},
                            {name:'parentcategory'},
                            {name:'validtime'}
                        ]
                    }

                },

            ]
        }, {
            title:'待发布',
            items:[
                {
                    xtype:'gridpanel',
                    title:'|分类列表',
                    frame:true,
                    store: Ext.data.StoreManager.lookup('simpsonsStore'),
                    height:300,
                    forceFit:true,
                    stripeRows:true,
                    selType: "checkboxmodel",
                    bbar:{
                        xtype:'pagingtoolbar',
                        store:'',
                        dock:'bottom',
                        displayInfo:true
                    },
                    requires: [
                        'Ext.grid.column.Action'
                    ],
                    autoScroll: true,
                    tbar: ['->',{

                        xtype:'button',
                        text: '撤回',
                        handler: function () {}
                    },
                        {
                            xtype:'button',
                            text: '审核通过',
                            handler: function () {
                            }
                        },
                        {
                            xtype:'button',
                            text: '发布',
                            handler: function () {
                            }
                        } ,{
                            xtype:'button',
                            text: '删除',
                            handler: function () {
                            }
                        }, {
                            xtype:'button',
                            text: '重置父分类',
                            handler: function () {
                            }
                        }, {
                            xtype:'button',
                            text: '新增分类',
                            handler: function () {
                            }
                        }

                    ],

                    columns: [
                        { xtype: 'actioncolumn',
                            text: '操作', dataIndex: 'active',//flex:1,
                            items: [{
                                xtype:'button',
                                glyph:0xf002,
                            },
                                {
                                    xtype:'button',
                                    glyph:0xf0ad,
                                },
                                {
                                    xtype:'button',
                                    glyph:0xf00d,
                                },
                                {
                                    xtype:'button',
                                    glyph:0xf0e2,
                                },

                            ],},

                        { text: '标题', dataIndex: 'title',flex: 1,
                            renderer:function(value){
                                return '<span style="font-size:16px;">' + value + '</span>';
                            }},
                        { text: '关键词', dataIndex: 'key', //flex: 1 ,
                            renderer:function(value){
                                return '<span style="font-size:16px;">' + value + '</span>';
                            }},
                        { text: '所属分类', dataIndex: 'parentcategory', flex: 1 ,
                            renderer:function(value){
                                return '<span style="font-size:16px;">' + value + '</span>';
                            }},
                        { text: '有效时间', dataIndex: 'validtime', flex: 1 ,
                            renderer:function(value){
                                return '<span style="font-size:16px;">' + value + '</span>';
                            }},

                    ],
                    store:{data: [
                        ['放假通知待发布','关键字','知识库','永久'],
                        ['放假通知','关键字','知识库','永久'],
                        ['放假通知','关键字','知识库','永久'],
                        ['放假通知','关键字','知识库','永久'],
                        ['放假通知','关键字','知识库','永久'],
                        ['放假通知','关键字','知识库','永久'],
                        ['放假通知','关键字','知识库','永久'],
                        ['放假通知','关键字','知识库','永久'],
                        ['放假通知','关键字','知识库','永久'],
                        ['放假通知','关键字','知识库','永久'],
                        ['放假通知','关键字','知识库','永久'],
                        ['放假通知','关键字','知识库','永久'],
                        ['放假通知','关键字','知识库','永久'],
                        ['放假通知','关键字','知识库','永久'],
                        ['放假通知','关键字','知识库','永久'],
                        ['放假通知','关键字','知识库','永久'],
                        ['放假通知','关键字','知识库','永久'],
                        ['放假通知','关键字','知识库','永久'],
                        ['放假通知','关键字','知识库','永久'],
                        ['放假通知','关键字','知识库','永久'],
                        ['放假通知','关键字','知识库','永久'],
                        ['放假通知','关键字','知识库','永久'],
                        ['放假通知','关键字','知识库','永久'],
                        ['放假通知','关键字','知识库','永久'],

                    ],
                        fields:[
                            {name:'title'},
                            {name:'key'},
                            {name:'parentcategory'},
                            {name:'validtime'}
                        ]
                    }

                },

            ]
        }, {
            title:'已发布',
            items:[
                {
                    xtype:'gridpanel',
                    title:'|分类列表',
                    frame:true,
                    store: Ext.data.StoreManager.lookup('simpsonsStore'),
                    height:300,
                    forceFit:true,
                    stripeRows:true,
                    selType: "checkboxmodel",
                    bbar:{
                        xtype:'pagingtoolbar',
                        store:'',
                        dock:'bottom',
                        displayInfo:true
                    },
                    requires: [
                        'Ext.grid.column.Action'
                    ],
                    autoScroll: true,
                    tbar: ['->',{

                        xtype:'button',
                        text: '撤回',
                        handler: function () {}
                    },
                        {
                            xtype:'button',
                            text: '审核通过',
                            handler: function () {
                            }
                        },
                        {
                            xtype:'button',
                            text: '发布',
                            handler: function () {
                            }
                        } ,{
                            xtype:'button',
                            text: '删除',
                            handler: function () {
                            }
                        }, {
                            xtype:'button',
                            text: '重置父分类',
                            handler: function () {
                            }
                        }, {
                            xtype:'button',
                            text: '新增分类',
                            handler: function () {
                            }
                        }

                    ],

                    columns: [
                        { xtype: 'actioncolumn',
                            text: '操作', dataIndex: 'active',//flex:1,
                            items: [{
                                xtype:'button',
                                glyph:0xf002,
                            },
                                {
                                    xtype:'button',
                                    glyph:0xf0ad,
                                },
                                {
                                    xtype:'button',
                                    glyph:0xf00d,
                                },
                                {
                                    xtype:'button',
                                    glyph:0xf0e2,
                                },

                            ],},

                        { text: '标题', dataIndex: 'title',flex: 1,
                            renderer:function(value){
                                return '<span style="font-size:16px;">' + value + '</span>';
                            }},
                        { text: '关键词', dataIndex: 'key', //flex: 1 ,
                            renderer:function(value){
                                return '<span style="font-size:16px;">' + value + '</span>';
                            }},
                        { text: '所属分类', dataIndex: 'parentcategory', flex: 1 ,
                            renderer:function(value){
                                return '<span style="font-size:16px;">' + value + '</span>';
                            }},
                        { text: '有效时间', dataIndex: 'validtime', flex: 1 ,
                            renderer:function(value){
                                return '<span style="font-size:16px;">' + value + '</span>';
                            }},

                    ],
                    store:{data: [
                        ['放假通知已发布','关键字','知识库','永久'],
                        ['放假通知','关键字','知识库','永久'],
                        ['放假通知','关键字','知识库','永久'],

                    ],
                        fields:[
                            {name:'title'},
                            {name:'key'},
                            {name:'parentcategory'},
                            {name:'validtime'}
                        ]
                    }

                },

            ]
        }, {
            title:'已过期',
            items:[
                {
                    xtype:'gridpanel',
                    title:'|分类列表',
                    frame:true,
                    store: Ext.data.StoreManager.lookup('simpsonsStore'),
                    height:300,
                    forceFit:true,
                    stripeRows:true,
                    selType: "checkboxmodel",
                    bbar:{
                        xtype:'pagingtoolbar',
                        store:'',
                        dock:'bottom',
                        displayInfo:true
                    },
                    requires: [
                        'Ext.grid.column.Action'
                    ],
                    autoScroll: true,
                    tbar: ['->',{

                        xtype:'button',
                        text: '撤回',
                        handler: function () {}
                    },
                        {
                            xtype:'button',
                            text: '审核通过',
                            handler: function () {
                            }
                        },
                        {
                            xtype:'button',
                            text: '发布',
                            handler: function () {
                            }
                        } ,{
                            xtype:'button',
                            text: '删除',
                            handler: function () {
                            }
                        }, {
                            xtype:'button',
                            text: '重置父分类',
                            handler: function () {
                            }
                        }, {
                            xtype:'button',
                            text: '新增分类',
                            handler: function () {
                            }
                        }

                    ],

                    columns: [
                        { xtype: 'actioncolumn',
                            text: '操作', dataIndex: 'active',//flex:1,
                            items: [{
                                xtype:'button',
                                glyph:0xf002,
                            },
                                {
                                    xtype:'button',
                                    glyph:0xf0ad,
                                },
                                {
                                    xtype:'button',
                                    glyph:0xf00d,
                                },
                                {
                                    xtype:'button',
                                    glyph:0xf0e2,
                                },

                            ],},

                        { text: '标题', dataIndex: 'title',flex: 1,
                            renderer:function(value){
                                return '<span style="font-size:16px;">' + value + '</span>';
                            }},
                        { text: '关键词', dataIndex: 'key', //flex: 1 ,
                            renderer:function(value){
                                return '<span style="font-size:16px;">' + value + '</span>';
                            }},
                        { text: '所属分类', dataIndex: 'parentcategory', flex: 1 ,
                            renderer:function(value){
                                return '<span style="font-size:16px;">' + value + '</span>';
                            }},
                        { text: '有效时间', dataIndex: 'validtime', flex: 1 ,
                            renderer:function(value){
                                return '<span style="font-size:16px;">' + value + '</span>';
                            }},

                    ],
                    store:{data: [
                        ['放假通知已过期','关键字','知识库','永久'],
                        ['放假通知','关键字','知识库','永久'],
                        ['放假通知','关键字','知识库','永久'],
                        ['放假通知','关键字','知识库','永久'],
                        ['放假通知','关键字','知识库','永久'],
                        ['放假通知','关键字','知识库','永久'],
                        ['放假通知','关键字','知识库','永久'],
                        ['放假通知','关键字','知识库','永久'],
                        ['放假通知','关键字','知识库','永久'],
                        ['放假通知','关键字','知识库','永久'],
                        ['放假通知','关键字','知识库','永久'],
                        ['放假通知','关键字','知识库','永久'],
                        ['放假通知','关键字','知识库','永久'],
                        ['放假通知','关键字','知识库','永久'],
                        ['放假通知','关键字','知识库','永久'],
                        ['放假通知','关键字','知识库','永久'],
                        ['放假通知','关键字','知识库','永久'],
                        ['放假通知','关键字','知识库','永久'],
                        ['放假通知','关键字','知识库','永久'],
                        ['放假通知','关键字','知识库','永久'],
                        ['放假通知','关键字','知识库','永久'],
                        ['放假通知','关键字','知识库','永久'],
                        ['放假通知','关键字','知识库','永久'],
                        ['放假通知','关键字','知识库','永久'],

                    ],
                        fields:[
                            {name:'title'},
                            {name:'key'},
                            {name:'parentcategory'},
                            {name:'validtime'}
                        ]
                    }

                },

            ]
        }]
    }]
};





Ext.define('KBase.view.approval.Category',{
    extend:'Ext.container.Container',
    title:'分类',
    alias:'widget.Category',
    reference:'main-tab',
    autoShow:true,
    //region:'center',
    /*layout:{
     type:'vbox',
     align:'stretch'
     },*/

    items:[
        searchBar,
        tabPanel,
        //grid,
    ]
});