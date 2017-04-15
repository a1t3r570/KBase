/**
 * Created by wql on 2017/4/12.
 */
var store =Ext.create('KBase.store.CategoryStore',{
});
var path;                       //最终返回的路径
Ext.define('KBase.view.edit.CategoryBrowse',{
    //单不单例
    requires:[
        'KBase.view.edit.CategoryBrowseController',
        'KBase.view.edit.CategoryBrowseViewModel'
    ],

    extend:'Ext.window.Window',                 //模态窗口
    modal:true,
    //resizeable:false,
    //draggable:false,
    viewModel:'CateVM',
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
        xtype:'treepanel',//onselectChange，mode也可以，再试
        flex:1,
        margin:10,
        store:store,
        //checkPropagation: 'both',
        bufferedRenderer: false,
        animate:true,
        //rootVisible:false,
        //useArrows:true,
        frame:true,
        // title:'分类树',
        //selModel:      //Ext.selection.Model,这是sel不是check,默认为Single，改变check要自己写
        listeners:{         //组件只能直接写？？
            checkchange:function (node) {
                node.checked = true;
                var records = this.getView().getChecked();
                for(var i = 0;i<records.length; ++i){
                    if(records[i].id != node.id){
                        records[i].set({checked:false});
                    }
                }
                path = node.getPath('text');
            },
        }
    },{
        xtype:'panel',
        flex:2,
        margin:10,
        layout:{
            type:'vbox',
            align:'stretch'
        },
        items:[{
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
        },{
            html:'<p>Path:</p>'+path,
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