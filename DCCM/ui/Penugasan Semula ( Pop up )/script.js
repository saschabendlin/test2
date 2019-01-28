
 

var thirdTable = new Vue({
    el: '#thirdTable',
    data: {   
      rows: [
        { Bil: "Nama Role", SenaraiNama : "sila pilih"   },
        { Bil: "Penugasan Kepada", SenaraiNama : "sila pilih"   },
        { Bil: "Tarikh Mula", SenaraiNama : "Date"   },
        { Bil:"Tarikh Tamat", SenaraiNama : "Date"   },
        { Bil:"Ulasan", SenaraiNama : "Masukkan Ulasan"   }
        
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