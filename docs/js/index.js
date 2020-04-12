var app = new Vue({
  el: '#app',
  data: {
    test: 'Hello test!',
    tab: 'playground',
    code: '',
    solution: ''
  },
  methods: {
    setTab: function(currentTab) {
      this.tab = currentTab
    },
    resolve: function() {
      try {
        this.solution = sf.resolve(JSON.parse(this.code.replace(/'/g, '"')))
      } catch (err) {
        this.solution = ''
      }
    }
  }
})
