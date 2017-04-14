/**
 * Created by wql on 2017/4/12.
 */
var store =Ext.create('KBase.store.CategoryStore',{
});
Ext.define('KBase.view.edit.CategoryBrowse',{
    //单不单例
    requires:[
        'KBase.view.edit.CategoryBrowseController',
    ],

    extend:'Ext.window.Window',                 //模态窗口
    modal:true,
    //resizeable:false,
    //draggable:false,

    xtype:'Ext.panel.Panel',
    closable:false,
    frame:true,
    width:650,
    height:500,
    bodyPadding:10,
    autoShow:true,
    layout:{
        type:'hbox',
        align:'stretch'
    },
    title:'浏览分类',
    items:[{                    //左树面板
        //extend:'Ext.grid.Panel',
        xtype:'treepanel',
        flex:1,
        margin:10,

        store:store,
        checkPropagation: 'both',
        bufferedRenderer: false,
        animate:true,
        //rootVisible:false,
        useArrows:true,
        frame:true,
        // title:'分类树',

        root:{
            text:'知识库',
            expanded:true,
        }
    },{
        xtype:'panel',
        flex:2,
        margin:10,
        layout:{
            type:'vbox',
            align:'stretch'
        },
        items:[
            {
                xtype:'fieldcontainer',
                bodyPadding:5,
                layout:{
                    type:'hbox',
                },
                items:[{
                    xtype:'textfield',
                    name:'category',
                    width:200
                },{
                    xtype:'splitter',
                    flex:1
                },{
                    xtype:'button',
                    text:'搜索',
                    width:80
                },{
                    xtype:'splitter',
                    flex:1
                },{
                    xtype:'button',
                    text:'清空',
                    width:80
                }]
            }
        ]
    }],
    buttons:[{
        text:'确定'
    },{
        text:'关闭',
        handler:function () {
            var win = this.up('window');
            win.close();
        }
    }]
});