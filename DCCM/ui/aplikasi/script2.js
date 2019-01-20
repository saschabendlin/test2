
 

var thirdTable1 = new Vue({
    el: '#thirdTable1',
    data: {   
      rows: [
        { Bil: 1, Dataset: "Chandler Bing", MemberProgram : '305-917-1301', Status: 'IT Manager', Catatan: 'denbhgr', DB2BukanDB2 : 'Baru', NamaPelanDB2 : 'Baru', NamaGrant : 'Baru', Tambah : 'Baru'},
        { Bil: 2, Dataset: "nike", MemberProgram: '210-684-8953', Status: 'Paleontologist',  },
        { Bil: 3, Dataset: "sal", phone: '765-338-0312', profession: 'Waitress'},
        { Bil: 4, Dataset: "Monica", phone: '714-541-3336', profession: 'Head Chef' },
        { Bil: 5, Dataset: "Joey ", phone: '972-297-6037', profession: 'Actor' },
        { Bil: 6, Dataset: " Buffay", phone: '760-318-8376', profession: 'Masseuse' }
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