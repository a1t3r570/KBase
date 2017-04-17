/**
 * Created by wql on 2017/4/14.
 */
var tpl_list = new Ext.XTemplate(
    '<tpl for=".">',
    '<p>{text}</p>',
    '<p>{path}</p>',
    '<hr/>',
    '</tpl>'
);

Ext.define('KBase.view.edit.CategoryBrowseController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.category-browse',
    onCheckChange:function (node) {
        var me = this.getView();        //获取对应视图类（如何全局,this无效问题）
        var records = me.items.first().getChecked();
        for(var i = 0;i<records.length; ++i){
            if(records[i].id != node.id){
                records[i].set({checked:false});
            }
        };
        me.path = node.getPath('text');
        /*var el = me.lookupReference('pathlabel');
        el.setHtml('<p>Path:</p>'+path);*/
    },
    onSearchClick:function () {
        var me = this.getView();
        var phrase = me.lookupReference('searchfield').value, //获取搜索框的内容
            root=me.items.first().getRootNode();   //获取根节点
        var list=[];

        findchildnode(root);

        function findchildnode(node) {//深度遍历
            if(node.data.text == phrase){
                var data={text:'',path:''};
                data.text = node.data.text;
                data.path = node.getPath('text');
                list.push(data);
            };
            var childnodes = node.childNodes;
            for(var i=0;i<childnodes.length;++i){//从节点中取出子节点依次遍历
                findchildnode(childnodes[i]);
            }
        }

        var cmp = me.lookupReference('searchlist');
        tpl_list.overwrite(cmp.body,list);
    },
    onClearClick:function () {
        var me = this.getView();
        var cmp = me.lookupReference('searchfield');
        cmp.setValue('');
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
    },
   /* onSubmitClick:function () {//再考虑
        var me =  this.getView();
        var parent = me.up('window');//.up('window');
        var cmp = parent.lookupReference('category_field');
        cmp.setValue(me.path);
    }*/
});
