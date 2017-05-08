/**
 * Created by wql on 2017/4/12.
 */
Ext.define('KBase.store.CategoryStore',{
    extend : 'Ext.data.TreeStore',
    alias:'store.category-store',
    /*proxy: {
        type: 'ajax',
        url:'http://localhost:8080/kbms/base/category/get',
        /!*reader: {
            type: 'json',
            rootProperty: function(data){
                // Extract child nodes from the items or children property in the dataset
                return data.items || data.children;
            }
        },*!/
    },*/
    root:{
        text:'知识库',
        id:0,
        expanded:true,
        checked:true
    },
   //autoLoad:true
});