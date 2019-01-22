var thirdTable = new Vue({
    el: '#thirdTable',
    data: {   
      rows: [
        { bil: 1, jenis_peralihan: "Data dari db", keluar_masuk: 'Data dari db', no_siri_peralatan: 'Data dari db', produk_peralatan: 'Data dari db', part_nombor: 'Data dari db', jenama: 'Data dari db', kategori:'Data dari db', tarikh_masuk:'Data dari db', masa_masuk:'Data dari db', tarikh_keluar:'Data dari db', masa_keluar:'Data dari db', aktiviti_edit:'Imej Kemaskini', aktiviti_delete:'Imej Padam'},
        { bil: 2, jenis_peralihan: "Data dari db", keluar_masuk: 'Data dari db', no_siri_peralatan: 'Data dari db', produk_peralatan: 'Data dari db', part_nombor: 'Data dari db', jenama: 'Data dari db', kategori:'Data dari db', tarikh_masuk:'Data dari db', masa_masuk:'Data dari db', tarikh_keluar:'Data dari db', masa_keluar:'Data dari db', aktiviti_edit:'Imej Kemaskini', aktiviti_delete:'Imej Padam'},
        { bil: 3, jenis_peralihan: "Data dari db", keluar_masuk: 'Data dari db', no_siri_peralatan: 'Data dari db', produk_peralatan: 'Data dari db', part_nombor: 'Data dari db', jenama: 'Data dari db', kategori:'Data dari db', tarikh_masuk:'Data dari db', masa_masuk:'Data dari db', tarikh_keluar:'Data dari db', masa_keluar:'Data dari db', aktiviti_edit:'Imej Kemaskini', aktiviti_delete:'Imej Padam'}
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