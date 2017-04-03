/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Sencha.test.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
Ext.create('Ext.window.Window',{
    title:'My Window',
    modal:true,
    width:200,
    height:200,
    items:[
      Ext.create('Ext.grid.Panel', {
        renderTo: document.body,
        selModel: Ext.create('Ext.selection.CheckboxModel', {
          mode: 'MULTI',
          checkOnly: true,
          showHeaderCheckbox: false,
          listeners: {
            select: function(){
              console.log('selected');    
            },
            deselect: {
                fn: function() {
                   Ext.Msg.alert('Deselect', 'Do you really want to do this?');
                   console.log('deselected');    
                },
                delay: 1
            }
          }
        }),
        store: {
           fields: ['a'],
           data: [{ a: 1 }, { a: 2 }, { a: 3 }]
        },
        columns: [{
            text: 'Column Header',
            dataIndex: 'a',
            flex:1
         }]
      })
    ]
  }).show();

        }
    }
});
