
 

var thirdTable = new Vue({
    el: '#thirdTable',
    data: {   
      rows: [
        { BIL: 1, NAMA : " NIKE "  , EMAIL : "KPP",   STAFF_VENDOR : " STAFF ",   NO_TEL : "0190000000" },
        { BIL: 2, NAMA : " NIKE "  , EMAIL : "KPP",   STAFF_VENDOR : " STAFF ",   NO_TEL : "0190000000" },
        { BIL: 3, NAMA : " NIKE "  , EMAIL : "KPP",   STAFF_VENDOR : " STAFF ",   NO_TEL : "0190000000" },
        { BIL: 1, NAMA : " NIKE "  , EMAIL : "KPP",   STAFF_VENDOR : " STAFF ",   NO_TEL : "0190000000" }
        
        
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