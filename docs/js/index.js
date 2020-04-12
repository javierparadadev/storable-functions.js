var app = new Vue({
  el: '#app',
  data: {
    test: 'Hello test!',
    tab: 'documentation'
  },
  methods: {
    setTab: function(currentTab) {
      this.tab = currentTab
    }
  }
})
