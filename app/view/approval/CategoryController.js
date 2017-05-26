/**
 * Created by wql on 2017/5/9.
 */
Ext.define('KBase.view.approval.CategoryController',{
    extend:'Ext.app.ViewController',
    alias:'controller.category',
    //视图初始化，先初始化total
    initViewModel:function(vm){

    },
    afterRender:function () {
        this.refresh();
    },
    onSearchClick:function () {

    },
    onTabChange:function (tabPanel,newCard,oldCard) {
        var Items=[];
        var total = this.getViewModel().getStore('total'),
             nextTab = this.getViewModel().getStore(newCard.getReference());
        for(var i=0;i<total.data.items.length;++i) {
            var item={title:'',tag:'',category:'',valid_time:'',state:''};
                temp=total.data.items[i];
                if(newCard.getItemId() == "s" || temp.data.state == newCard.getItemId().substr(-1)){
                    item.title = temp.data.title;
                    item.tag = temp.data.tag;
                    item.category = temp.data.category;
                    item.valid_time = temp.data.valid_time;
                    item.state = temp.data.state;
                    Items.push(item);
                }
        }
        nextTab.setData(Items);
    },
    onApproval:function (btn) {
        me = this;
        grid = btn.up('gridpanel');
        model = grid.getSelection();
        path=[];
        for(var i=0;i<model.length;++i){
             path.push("E:" + model[i].data.category);
        };
        Ext.Ajax.request({
            url:'http://localhost:8080/kbms/base/article/updatestate',
            method:'POST',
            params:{
                userId:'1',
                action:'show',
                param:Ext.JSON.encode({filepath:path, oldstate:model[0].data.state, newstate:"3"}),
            },
            success:function(response,opts){
                var obj = Ext.decode(response.responseText);
                me.refresh();
            },
            failure:function(response,opts){
                var obj = Ext.decode(response.reponseText);
            }
        });
    },
    onAddCategory:function(){
        ViewClass = Ext.ClassManager.get('KBase.view.edit.Categoryform');
        cmp = new ViewClass();
    },
    refresh:function () {
        var total = this.getViewModel().getStore('total');
        Ext.Ajax.request({
            async:false,
            url:window.url + 'category/get',
            method:'POST',
            params:{
                userId:'1',
                action:'show',
                param:'',
            },
            success:function(response,opts){
                var Items=[];
                var obj = Ext.decode(response.responseText);
                for(var i=0;i<obj.data.length;++i) {
                    var item={title:'',tag:'',category:'',valid_time:'',state:''};
                    item.title = obj.data[i][0];
                    item.tag = obj.data[i][1];
                    item.category = obj.data[i][2];
                    item.valid_time = obj.data[i][3];
                    item.state = obj.data[i][4];
                    Items.push(item);
                }
                total.setData(Items);
            },
            failure:function(response,opts){
                var obj = Ext.decode(response.reponseText);
            }
        });
    }

});