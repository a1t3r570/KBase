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
        xtype: 'tabpanel',

        items:[{
            title:'全部',
            html:'1'
        }, {
            title:'草稿',
            html:'2'
        }, {
            title:'待审核'
        }, {
            title:'审核中'
        }, {
            title:'待发布'
        }, {
            title:'已发布'
        }, {
            title:'已过期'
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
        tabPanel
    ]
});