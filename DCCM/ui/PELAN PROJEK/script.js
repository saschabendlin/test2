
 

var thirdTable = new Vue({
    el: '#thirdTable',
    data: {   
      rows: [
        { Bil: 1, Tugas : "Chandler Bing", RancangTarikh : '305-917-1301', RancangMasa: 'IT Manager', SebenarTarikh: 'denbhgr', SebenarMasa : 'Baru',Hasil : ' Berjaya', PegawaiBertanggungJawab12a : ' Nama rujuk (pasukan pelaksana)', Tambah : 'row baru'   },
        { Bil: 2, Tugas : "Chandler Bing", RancangTarikh : '305-917-1301', RancangMasa: 'IT Manager', SebenarTarikh: 'denbhgr', SebenarMasa : 'Baru',Hasil : ' Berjaya', PegawaiBertanggungJawab12a : ' Nama rujuk (pasukan pelaksana)', Tambah : 'row baru'   },
        { Bil: 3, Tugas : "Chandler Bing", RancangTarikh : '305-917-1301', RancangMasa: 'IT Manager', SebenarTarikh: 'denbhgr', SebenarMasa : 'Baru',Hasil : ' Berjaya', PegawaiBertanggungJawab12a : ' Nama rujuk (pasukan pelaksana)', Tambah : 'row baru'   },
        { Bil: 4, Tugas : "Chandler Bing", RancangTarikh : '305-917-1301', RancangMasa: 'IT Manager', SebenarTarikh: 'denbhgr', SebenarMasa : 'Baru',Hasil : ' Berjaya', PegawaiBertanggungJawab12a : ' Nama rujuk (pasukan pelaksana)', Tambah : 'row baru'   }
        
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