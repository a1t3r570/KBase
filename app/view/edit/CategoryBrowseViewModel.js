/**
 * Created by wql on 2017/4/19.
 */
var searchItem = Ext.create('Ext.data.Model',{
    fields:['text','path'],
});
Ext.define('KBase.view.edit.CategoryBrowseViewModel',{
    extend:'Ext.app.ViewModel',
    alias:'viewmodel.category',

    stores:{
        lefttree:{
           type:'category-store',
            /*root:{
                text:'知识库',
                expanded:true,
                checked:true
            },*/
        },
        searchlist:{
            model:searchItem,
            data:[],
        }
    }

});