
 

var thirdTable = new Vue({
    el: '#thirdTable',
    data: {   
      rows: [
        { BIL: 1,  KOMPONEN: "HOST", PENGUBASUAIAN: "APLIKASI"  },
        { BIL: 2,  KOMPONEN: "HOST",   PENGUBASUAIAN: "APLIKASI / CICS / RACF" },
        { BIL: 3,  KOMPONEN: "HOST",  PENGUBASUAIAN: "DB2"},
        { BIL: 4,  KOMPONEN: "HOST", PENGUBASUAIAN: "APLIKASI DB2" },
        { BIL: 5,  KOMPONEN: "HOST",   PENGUBASUAIAN: "APLIKASI / DB2 / CICS / RACF" },
        { BIL: 6,  KOMPONEN: "HOST",  PENGUBASUAIAN: "RANGKAIAN"},
        { BIL: 7,  KOMPONEN: "HOST", PENGUBASUAIAN: "DB2 / SQL" },
        { BIL: 8,  KOMPONEN: "ICSC",   PENGUBASUAIAN: "ORACLE" },
        { BIL: 9,  KOMPONEN: "ICSC",  PENGUBASUAIAN: "ORACLE / SQL"},
        { BIL: 10, KOMPONEN: "ICSC", PENGUBASUAIAN: "SQL" },
        { BIL: 11, KOMPONEN: "PERALIHAN",   PENGUBASUAIAN: "KELUAR MASUK PERALATAN" },
        { BIL: 12, KOMPONEN: "ALIRAN NORMAL",  PENGUBASUAIAN: "SELAIN PILIHAN DI ATAS"},
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