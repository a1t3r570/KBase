/**
 * Created by wql on 2017/4/24.
 */
Ext.define('KBase.store.TagStore',{
    extend:'Ext.data.ArrayStore',
    alias:'store.tag',
    model:'KBase.model.Tag',

    data:[
        [001,'3G'],
        [002,'4G'],
        [003,'5G'],
        [004,'杂项'],
        [005,'金融'],
        [006,'需求分析'],
    ]
})