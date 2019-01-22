var thirdTable = new Vue({
    el: '#thirdTable',
    data: {   
      rows: [
        { bil: 1, namatable: "Chandler Bing", mula: '305-917-1301', harian: 'IT Manager', bulanan: 'denbhgr', tahunan: '2010', catatan: 'catatan', tambahrow :'simbol tambah' },
        { bil: 2, namatable: "Ross Geller", mula: '210-684-8953', harian: 'Paleontologist', bulanan: 'denbhgr', tahunan: '2010', catatan: 'catatan', tambahrow :'simbol tambah' },
        { bil: 3, namatable: "Rachel Green", mula: '765-338-0312', harian: 'Waitress', bulanan: 'denbhgr', tahunan: '2010', catatan: 'catatan', tambahrow :'simbol tambah'}
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