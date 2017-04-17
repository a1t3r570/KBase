/**
 * Created by wql on 2017/4/12.
 */
var store =Ext.create('KBase.store.CategoryStore',{
});
var tpl_list = new Ext.XTemplate(
    '<tpl for=".">',
    '<b>Text:{text}</b>',
    '<br/>'
);
var data = {
    name: 'Don Griffin',
    title: 'Senior Technomage',
    company: 'Sencha Inc.',
    drinks: ['Coffee', 'Water', 'More Coffee'],
    kids: [
        { name: 'Aubrey',  age: 17 },
        { name: 'Joshua',  age: 13 },
        { name: 'Cale',    age: 10 },
        { name: 'Nikol',   age: 5 },
        { name: 'Solomon', age: 0 }
    ]
};
var path = '/知识库';                       //最终返回的路径
Ext.define('KBase.view.edit.CategoryBrowse',{
    //单不单例
    requires:[
        'KBase.view.edit.CategoryBrowseController'
    ],

    extend:'Ext.window.Window',                 //模态窗口
    modal:true,
    controller:'category-browse',
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
        scrollable:true,    //目前只能垂直滚动
        autoLoad:true,

        root:{
            text:'知识库',
            expended:true,
            checked:true
        },
        listeners:{
            checkchange:'onCheckChange',
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
                reference:'searchfield',
                //name:'category_phrase',
                width:200
            },{
                xtype:'splitter',
                flex:1
            },{
                xtype:'button',
                text:'搜索',
                width:80,
                handler:'onSearchClick'
            },{
                xtype:'splitter',
                flex:1
            },{
                xtype:'button',
                text:'清空',
                width:80,
                handler:'onClearClick'
            }]
        },/*{
            reference:'pathlabel',
            html:'<p>Path:</p>'+path,
        },*/{
            bodyPadding:5,
            scrollable:true,
            reference:'searchlist',
            //title:'showList',
            flex:1
        }
        ]
    }],
    buttons:[{
        text:'确定',
        handler:function () {
            var win = this.up('window');
            var parent = win.up('window');
            var cmp = parent.lookupReference('categoryfield');
            cmp.setValue(path);

            win.close();
        }
    },{
        text:'关闭',
        handler:function () {
            var win = this.up('window');
            win.close();
        }
    }]
});