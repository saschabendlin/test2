
 

var thirdTable = new Vue({
    el: '#thirdTable',
    data: {   
      rows: [
        { Bil: 1, Dataset: "Chandler Bing", Member_Program : '305-917-1301', Status: 'IT Manager', Catatan: 'denbhgr' },
        { Bil: 2, Dataset: "Ross Geller", phone: '210-684-8953', profession: 'Paleontologist' },
        { Bil: 3, Dataset: "Rachel Green", phone: '765-338-0312', profession: 'Waitress'},
        { Bil: 4, Dataset: "Monica Geller", phone: '714-541-3336', profession: 'Head Chef' },
        { Bil: 5, Dataset: "Joey Tribbiani", phone: '972-297-6037', profession: 'Actor' },
        { Bil: 6, Dataset: "Phoebe Buffay", phone: '760-318-8376', profession: 'Masseuse' }
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