/**
 * Created by wql on 2017/4/8.
 */

Ext.application({
    name:'KBase',
    extend:'KBase.Application',
    //requires:['KBase.view.main.Main'],
    mainView:'KBase.view.main.Main'
   /* launch:function(){
        Ext.create('Ext.Panel',{
            renderTo:Ext.getBody(),
            width:200,
            height:150,
            title:'hello world',
            html:'Hello <b>world</b>'
        })
    }*/
});