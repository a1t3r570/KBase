/**
 * Created by wql on 2017/5/3.
 */
//Ext.namespace('Ext.ux','Ext.ux.plugins');
Ext.define('KBase.view.edit.Editorplugin', {//定义插入html的图片插件
        extend: 'Ext.util.Observable',
        alias: 'widget.image_insert',

        init: function (view) {
            var scope = this;
            view.on('render', function () {
               scope.onRender(view);
            });
        },
        /**
         * 添加'插入图片'按钮
         */
        onRender: function (view) {
            var scope = this;
            view.getToolbar().add({
                glyph: 0xf03e,
                tooltip: {
                    title: '插入图片',
                    width: 60
                },
                handler: function () {
                    scope.showImgWindow(view);
                }
            });
        },
        /**
         * 显示'插入图片'窗体
         */
        showImgWindow: function (view) {
            var scope = this;
            Ext.create('Ext.window.Window', {
                width: 400,
                height: 305,
                title: '插入图片',
                layout: 'fit',
                autoShow: true,
                modal: true,
                resizable: false,
                maximizable: false,
                constrain: true,
                plain: true,
                //enableTabScroll: true,
                border: false,
                // items:[{
                //     title: '上传本地图片',
                items: [{
                    xtype: 'form',
                    items: [{
                        xtype: 'fileuploadfield',
                        //fieldLabel:'选择图像',
                        buttonText: '选择图像',
                        name: 'upload',
                    }]
                }],
                // }]
                buttons: [{
                    text: '保存',
                    handler: function (btn) {
                        scope.saveUploadImg(btn, view)
                    }
                }, {
                    text: '取消',
                    handler: function (btn) {
                        btn.up('window').close();
                    }
                }]
            });
        },
    /**
     * 上传图片
     */
    saveUploadImg:function (btn,view) {
        var scope = this;
        var windowObj =btn.up('window');
        var formObj = windowObj.down('form');
        if(formObj.getForm().isValid()){
            formObj.getForm().submit({
                url:'http://localhost:8080/kbms/file/filesUpload',
                method:'POST',
                waitMsg:'正在上传..',
                success:function(response,options){
                    var result = options.result;
                    if (!result.success) {
                        Ext.MessageBox.alert('温馨提示', result.msg);
                        return;
                    }
                    scope.insertImg(view, result.data);
                    windowObj.close(); //关闭窗体
                },
                failure: function (response, options) {
                    Ext.MessageBox.alert('温馨提示', options);
                }
            });
        }
    },
    /**
     * 插入图片
     */
    insertImg:function (view,data) {
        var url = data.url;
        //var content = data.content;
        var str = '<img src="' + url + '" border="0" ';
        str += ' />';
        view.insertAtCursor(str);
    }
});
