
 

var thirdTable = new Vue({
    el: '#thirdTable',
    data: {   
      rows: [
        { Bil: 1, SenaraiNama : "Auto Display 12A"   },
        { Bil: 2, SenaraiNama : "Auto Display 12A"   },
        { Bil: 3, SenaraiNama : "Auto Display 12A"   },
        { Bil: 4, SenaraiNama : "Auto Display 12A"   }
        
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