
 

var thirdTable = new Vue({
    el: '#thirdTable',
    data: {   
      rows: [
        { BIL: 1, TARIKH : " 1 JAN 2019 "  , ROLE: "KPP",              NAMA: "SUHAILA",   STATUS : " LULUS ",              ULASAN : "LULUS"  },
        { BIL: 2, TARIKH : " 1 JAN 2019 "  , ROLE: "CHANGE ADMIN",     NAMA: "JUWITA",    STATUS : " LULUS ",              ULASAN : "LULUS"},
        { BIL: 3, TARIKH : " 1 JAN 2019 "  , ROLE: "PENTADBIR DB2",    NAMA: "SOLLEH",    STATUS : " LULUS ",              ULASAN : "LULUS"},
        { BIL: 4, TARIKH : " 1 JAN 2019 "  , ROLE: "SECURITY MANAGER", NAMA: "ROSNITA",   STATUS : " LULUS ",              ULASAN : "LULUS" },
        { BIL: 5, TARIKH : " 1 JAN 2019 "  , ROLE: "DC MANAGER",       NAMA: "SHAMSUDIN", STATUS : " LULUS ",              ULASAN : "LULUS" },
        { BIL: 6, TARIKH : " 1 JAN 2019 "  , ROLE: "PENTADBIR DB2",    NAMA: "SOLLEH",    STATUS : " TELAH DILAKSANAKAN ", ULASAN : "TELAH DILAKSANAKAN " },
        { BIL: 7, TARIKH : " 1 JAN 2019 "  , ROLE: "SECURITY MANAGER", NAMA: "DIN",       STATUS : " SELESAI",             ULASAN : "SELESAI" },
        
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