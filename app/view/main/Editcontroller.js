/**
 * Created by wql on 2017/4/11.
 */
Ext.define('KBase.view.main.Editcontroller',{
    extend:'Ext.app.ViewController',
    alias:'controller.edit-controller',
    routes:{
        'edit/:url':'handleRoute',
        'edit/:url/:state':'handleRoute',
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
    onHomeClick:function(){
        this.redirectTo('edit/Home');
    },
    onCategoryClick:function(btn){
        this.redirectTo('edit/Category/'+btn.getItemId());
    },

    handleRoute:function (url,state) {
        // this.redirectTo('edit/Categoryform');
        className = Ext.ClassManager.getNameByAlias('widget.'+url);
        ViewClass = Ext.ClassManager.get(className);
        cmp = new ViewClass();
        title = cmp.getTitle();
        this.lookup('editpanel').setTitle(title);
        this.lookup('main-tab').destroy();
        this.lookup('editpanel').add(cmp);
        if(state && state!="s"){//其他状态
            tab = cmp.down('tabpanel');
            index = Ext.Number.from(state[1],0)+1;
            //oldCard = tab.getActiveTab();
            tab.setActiveTab(index);
            //newCard = tab.getActiveTab();
            //tab.getController()

        }
    },

    onCategoryLink:function(btn){
        nav = this.lookup('navbar').query('button');
        nav[2].setPressed();
        itemId = btn.up('panel').getItemId();
        this.redirectTo('edit/Category/'+itemId);
    }
});