/**
 * Created by wql on 2017/4/11.
 */
Ext.define('KBase.view.main.Editcontroller',{
    extend:'Ext.app.ViewController',
    alias:'controller.edit-controller',
    routes:{
        'edit/:url':'handleRoute',
    },
    //shortcutBar   window
    onAddCategory:function(){
        ViewClass = Ext.ClassManager.get('KBase.view.edit.Categoryform');
        cmp = new ViewClass();
    },
    onAddArticle:function () {
        ViewClass = Ext.ClassManager.get('KBase.view.edit.Articleform');
        cmp = new ViewClass();
    },
    onAddResource:function () {
        ViewClass = Ext.ClassManager.get('KBase.view.edit.Resourceform');
        cmp = new ViewClass();
    },
    //navigationBar  routes
    handleRoute:function (url) {
        // this.redirectTo('edit/Categoryform');
       // className = Ext.ClassManager.getNameByAlias('widget.'+url);

        ViewClass = Ext.ClassManager.get('KBase.view.edit.'+url);
        cmp = new ViewClass();
        this.getView().add(cmp);
    }
});