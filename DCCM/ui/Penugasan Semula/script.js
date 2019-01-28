
 

var thirdTable = new Vue({
    el: '#thirdTable',
    data: {   
      rows: [
        { Bil: 1, Peranan: "Dc Manager", Tarikh : '305-917-1301', Penugasan_semula_kepada: 'Niki', Tarikh_mula: 'denbhgr', Tarikh_Tamat : 'test', Catatan :' lulus' },
        { Bil: 2, Peranan: "Dc Manager", Tarikh : '305-917-1301', Penugasan_semula_kepada: 'Niki', Tarikh_mula: 'denbhgr', Tarikh_Tamat : 'test', Catatan :' lulus' },
        { Bil: 3, Peranan: "Dc Manager", Tarikh : '305-917-1301', Penugasan_semula_kepada: 'Niki', Tarikh_mula: 'denbhgr', Tarikh_Tamat : 'test', Catatan :' lulus' },
        { Bil: 4, Peranan: "Dc Manager", Tarikh : '305-917-1301', Penugasan_semula_kepada: 'Niki', Tarikh_mula: 'denbhgr', Tarikh_Tamat : 'test', Catatan :' lulus' }
    
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