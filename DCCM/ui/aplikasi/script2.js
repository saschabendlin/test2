
 

var thirdTable1 = new Vue({
    el: '#thirdTable1',
    data: {   
      rows: [
        { Bil: 1, Dataset: "Chandler Bing", Member_Program : '305-917-1301', Status: 'IT Manager', Catatan: 'denbhgr', DB2_Bukan_DB2 : 'Baru', Nama_Pelan_DB2 : 'Baru', Nama_Grant : 'Baru'},
        { Bil: 2, Dataset: "nike", MemberProgram: '210-684-8953', Status: 'Paleontologist',  },
        { Bil: 3, Dataset: "sal", phone: '765-338-0312', profession: 'Waitress'}
        
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