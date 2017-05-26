/**
 * Created by wql on 2017/4/9.
 */

Ext.define('KBase.view.main.Main',{ //主界面布局
    extend:'Ext.panel.Panel',
    layout:'anchor',
    requires:[
        'KBase.view.main.Header',
        'KBase.view.main.Editpage',
        'KBase.view.approval.Category',
        'KBase.view.main.Login'
    ],

    //,'KBase.view.main.Grid'
    //xtype:'mainview',
    autoShow:true,
    initComponent:function () {
       Ext.setGlyphFontFamily('FontAwesome');
       this.callParent();
    },
    items:[
        {   //Top部
            xtype:'login',
            anchor:'100% 100%'
        },
        /*{   //Top部
            xtype:'maintop',
            height:60
        },
        {   //编辑门户（目前）
            xtype:'mainpage',
            anchor:"0 -60"
        }*/
       /* {
            xtype:'myGrid',
            //x:500,
            // y:200,
            height:600,
        }*/
    ]
});