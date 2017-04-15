/**
 * Created by wql on 2017/4/14.
 */
Ext.define('KBase.view.edit.CategoryBrowseController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.category-browse',

    onCheckChange:function (node) {
        node.checked = true;
        var records = this.getView().getChecked();
        for(var i = 0;i<records.length; ++i){
            if(records[i].id != node.id){
                records[i].set({checked:false});
            }
        }
    },
    onCheckedNodesClick: function() {
        var records = this.getView().getChecked(),
            names = [];

        Ext.Array.each(records, function(rec){
            names.push(rec.get('text'));
        });

        Ext.MessageBox.show({
            title: 'Selected Nodes',
            msg: names.join('<br />'),
            icon: Ext.MessageBox.INFO
        });
    }
});
