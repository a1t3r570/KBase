/**
 * Created by wql on 2017/4/14.
 */
var nodeid=1;
var path = '知识库';          //返回最终路径                        //还是存在问题
Ext.define('KBase.view.edit.CategoryBrowseController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.category-browse',

    initViewModel:function (vm) {
        vm.bind('{selectedsearchItem}','onSelect',this);
    },
    afterRender:function () {
        tree = this.getViewModel().getStore('lefttree');
        root = tree.getRoot();
        this.onItemExpand(root);
    },
    onItemExpand:function (node) {
        tree = this.getViewModel().getStore('lefttree');
        //store = tree.getStore();
        if(!node.isLeaf()&&!node.hasChildNodes()) {//如果是分支节点并且没有加载过数据
            Ext.Ajax.request({
                async:false,
                url: 'http://localhost:8080/kbms/base/category/scan',//http://localhost:8080/kbms/filesUpload',
                method: 'POST',
                params: {
                    userId: '1',
                    action: 'add',
                    param: Ext.JSON.encode({category: 'E:' + node.getPath('text')}),
                },
                success: function (response, opts) {
                    var obj = Ext.decode(response.responseText);
                    for (var i = 0; i < obj.data.length; ++i) {
                        var newnode = [{text: obj.data[i][0], checked:false,id:++nodeid, leaf: obj.data[i][1]}];
                        var pnode = tree.getNodeById(node.id);
                        pnode.appendChild(newnode);
                        //pnode.set('leaf', false);
                    }
                    //store.reload();
                    //pnode.expend();
                },
                failure: function (response, opts) {
                    var obj = Ext.decode(response.responseText);
                }
            });
        }
        /*else{//Store里有数据，直接展开
            //tree.expandPath(node.getPath('text'),'text');
        }*/
    },
    onCheckChange:function (node) {
       var me = this.getView();        //获取对应视图类（如何全局,this无效问题）
        //this.onSearchClick();
        var records = me.items.first().getChecked();
        for(var i = 0;i<records.length; ++i){
            if(records[i].id != node.id){
                records[i].set({checked:false});
            }
        };
        var me = this.getViewModel();    //的确双向绑定，但是暂时没啥用，因为选完了就窗口关闭了，点击，还会重新浏览窗口
        me.getStores('{lefttree}')
        path = node.getPath('text');
    },
    onSearchClick:function () {
        //var me = this.getView();
        // var tree = this.getViewModel().getStore('lefttree');   //获取viewmodel中store数据对象
        var phrase = this.lookupReference('searchfield').value; //获取搜索框的内容
            // root = tree.getRoot();              //通过treeModel获取根节点
            //root=me.items.first().getRootNode();   //通过视图获取获取根节点
        //var obj=[];
        var list = this.getViewModel().getStore('searchlist');
        Ext.Ajax.request({
            url: 'http://localhost:8080/kbms/base/category/search',//http://localhost:8080/kbms/filesUpload',
            method: 'POST',
            params: {
                userId: '1',
                action: 'add',
                param: Ext.JSON.encode({category: phrase}),
            },
            success: function (response, opts) {
                var Items=[];
                var obj = Ext.decode(response.responseText);

                for(var i=0;i<obj.data.length;++i){
                    var item = {text:'',path:''};
                    item.text = obj.data[i][0];
                    item.path = obj.data[i][2];
                    Items.push(item);
                }
                list.setData(Items);
            },
            failure: function (response, opts) {
                var obj = Ext.decode(response.responseText);
            }
        });
        /*findchildnode(root);

        function findchildnode(node) {//深度遍历
            if(node.data.text == phrase){
                var data={text:'',path:''};
                //data.id = node.id;
                data.text = node.data.text;
                data.path = node.getPath('text');
                obj.push(data);
            };
            var childnodes = node.childNodes;
            for(var i=0;i<childnodes.length;++i){//从节点中取出子节点依次遍历
                findchildnode(childnodes[i]);
            }
        }*/
        //list.setData(obj);                      //重写searchlist的Data
        //var cmp = me.lookupReference('searchlist');
        //tpl_list.overwrite(cmp.body,list);
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

    onSelect:function (selection) {
        if(selection != null) {
            var me = this;
            this.lookup('treepanel').selectPath(selection.data.path, 'text', '/', function (success, lastNode) {
                if (lastNode.getPath('text') == selection.data.path) {//已经扩展过了
                    lastNode.set('checked', true);
                    me.onCheckChange(lastNode);
                    flag = false;
                } else {
                    me.onSelect(selection);
                }
            });
        }
    }
});
