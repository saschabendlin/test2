var thirdTable = new Vue({
    el: '#thirdTable',
    data: {   
      rows: [
        { bil: 1, program: "text box", transaction: 'text box', db2_transaction: 'text box', db2_entry: 'text box', transaction_remote: 'text box', tambahrow :'image tambah' },
        { bil: 2, program: "text box", transaction: 'text box', db2_transaction: 'text box', db2_entry: 'text box', transaction_remote: 'text box', tambahrow :'image tambah' },
        { bil: 3, program: "text box", transaction: 'text box', db2_transaction: 'text box', db2_entry: 'text box', transaction_remote: 'text box', tambahrow :'image tambah'}
      ]
    },
    methods: {
      "sortTable": function sortTable(col) { 
        this.rows.sort(function(a, b) {
          if (a[col] > b[col]) {
            return 1;
          } else if (a[col] < b[col]) {
            return  -1;
          }
          return 0;
        })
      }
    },
    computed: {
      "columns": function columns() {
        if (this.rows.length == 0) {
          return [];
        }
        return Object.keys(this.rows[0])
      }
    }
  });