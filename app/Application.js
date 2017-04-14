/**
 * Created by wql on 2017/4/8.
 */
Ext.define('KBase.Application',{
    name:'KBase',
    //views:['KBase.view.main.Main'],
    extend:'Ext.app.Application',
    views:[
        'main.Main',
        'main.Editpage',
    ],
    stores:['CategoryStore'],
    //controllers:['Editcontroller'],
    /*routes:{
        'edit/:url':'onEditClick',
    },
    onEditClick:function (url) {
        className = Ext.ClassManager.getNameByAlias('widget.cateform');
        ViewClass = Ext.ClassManager.get(className);
        cmp = new ViewClass();
        this.getView().add(cmp);
    }*/

});