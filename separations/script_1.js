
 

var thirdTable = new Vue({
<<<<<<< HEAD:separations/script_1.js
  el: '#thirdTable',
  data: {   
=======
  el: '#thirdTable', //element refer to html
  data: {
>>>>>>> 82e3c6a5824eae2186d83bb959331246a526c570:separations/script.js
    rows: [
      { id: 1, name: "Chandler Bing", phone: '305-917-1301', profession: 'IT Manager', denn: 'denbhgr' },
      { id: 2, name: "Ross Geller", phone: '210-684-8953', profession: 'Paleontologist' },
      { id: 3, name: "Rachel Green", phone: '765-338-0312', profession: 'Waitress'},
      { id: 4, name: "Monica Geller", phone: '714-541-3336', profession: 'Head Chef' },
      { id: 5, name: "Joey Tribbiani", phone: '972-297-6037', profession: 'Actor' },
      { id: 6, name: "Phoebe Buffay", phone: '760-318-8376', profession: 'Masseuse' }
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