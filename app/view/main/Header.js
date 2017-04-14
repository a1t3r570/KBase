/**
 * Created by wql on 2017/4/8.
 */
Ext.define('KBase.view.main.Header',{       //不变的Top部
    extend:'Ext.toolbar.Toolbar',
   // height:55,
    alias:'widget.maintop',
    style:{background:'whitesmoke'},//#4297d4
    items:[
        '',
        {
            xtype:'panel',
            width:100,
            bodyStyle:'background:whitesmoke',
            html:'<p style="font-size: large;color: gray;font-family: Microsoft JhengHei;">知识库系统</p>',
        },'->', {
            xtype:'button',
            text:'设置',
            glyph:0xf013
        },
        {                                       //待换组件
            xtype:'button',
            text:'编辑',
            glyph:0xf044
        },
        {
            xtype:'button',
            text:'退出',
            glyph:0xf08b
        }
    ]
});