/**
 * Created by wql on 2017/4/14.
 */
var tpl_list = new Ext.XTemplate(
    '<tpl for=".">',
    '<div class="list-item" style="background-color: #bfbfbf">',
    '<p>{text}</p>',
    '<p>{path}</p>',
    '</div>',
    '<hr/>',
    '</tpl>',
    {
        checkSelectedNode : function(data) {
            //var me = this.getView();
            //var node = me.items.first().getCmp(data.id);
            //node.checked = true;
            alert('z');
        }
    }
);
var path = '/知识库';          //返回最终路径                        //还是存在问题
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
        path = node.getPath('text');
    },
    onSearchClick:function () {
        var me = this.getView();
        var phrase = me.lookupReference('searchfield').value, //获取搜索框的内容
            root=me.items.first().getRootNode();   //获取根节点
        var list=[];

        findchildnode(root);

        function findchildnode(node) {//深度遍历
            if(node.data.text == phrase){
                var data={id:'',text:'',path:''};
                data.id = node.id;
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
    onSubmit:function () {//再考虑

        var me =  this.getView();
        //var parent = me.up('window');//.up('window');
        var cmp = Ext.getCmp('categoryfield');
        cmp.setValue(path);
        me.close();
    },
    onClose:function () {
       var me = this.getView();
       me.close();
   },
});
