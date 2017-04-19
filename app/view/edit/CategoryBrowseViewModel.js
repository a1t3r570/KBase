/**
 * Created by wql on 2017/4/19.
 */
Ext.define('KBase.view.edit.CategoryBrowseViewModel',{
    extend:'Ext.app.ViewModel',
    alias:'viewmodel.category',

    stores:{
        lefttree:{
            //model:'KBase.model.User',
            extend : 'Ext.data.TreeStore',
            proxy: {
                type: 'ajax',
                url:'app/store/users.json',
                reader: {
                    type: 'json',
                    rootProperty: function(data){
                        // Extract child nodes from the items or children property in the dataset
                        return data.items || data.children;
                    }
                },
            },
            autoLoad:true,
        },
    }

});