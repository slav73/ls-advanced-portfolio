import Vue from 'vue';
import Flickity from 'vue-flickity';
 
new Vue({
  el: "#impressions",
  components: {
    Flickity
  },
  
  data() {
    return {
      flickityOptions: {
        groupCells: true,
        pageDots: false,
        prevNextButtons: false,
        resize: true
      }
    }
  },
  
  methods: {
    next() {
      this.$refs.flickity.next();
    },
    
    previous() {
      this.$refs.flickity.previous();
    }
  },

  mounted() {
    this.$refs.flickity.on('change', function (event, pointer) {
      
      console.log(pointer);
    })
  }
});