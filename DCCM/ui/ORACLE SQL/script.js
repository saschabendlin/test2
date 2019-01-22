
 

var thirdTable = new Vue({
    el: '#thirdTable',
    data: {   
      rows: [
        { BIL: 1,  NAMA_SISTEM : "HOST", NAMA_FILE_TABLE: "APLIKASI", KETERANGAN_REKOD : " MASUKKAN DATA", TAMBAH : "BARU"  },
        { BIL: 2,  NAMA_SISTEM : "HOST", NAMA_FILE_TABLE: "APLIKASI", KETERANGAN_REKOD : " MASUKKAN DATA", TAMBAH : "BARU"  },
        { BIL: 3,  NAMA_SISTEM : "HOST", NAMA_FILE_TABLE: "APLIKASI", KETERANGAN_REKOD : " MASUKKAN DATA", TAMBAH : "BARU" },
        { BIL: 4,  NAMA_SISTEM : "HOST", NAMA_FILE_TABLE: "APLIKASI", KETERANGAN_REKOD : " MASUKKAN DATA", TAMBAH : "BARU" }
        
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