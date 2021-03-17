<template>
  <slider-scroll :images="slides"/>
</template>

<script>
import SliderScroll from '@/components/SliderScroll.vue'
export default {
  components: {
    SliderScroll
  },
  data() {
    return {
      slides: [
        'https://autocosmoscloudstorage.blob.core.windows.net/noticias/fotosbig/NPAZ_59c52733cf2f438888037bf5e3c75c8d.jpg',
        'https://s1.cdn.autoevolution.com/images/news/the-new-450-hp-audi-rs4-avant-does-0-100-km-h-in-41-seconds-120378-7.jpg',
        'https://img.motor16.com/articulos/13000/13129_MF02Rti5ENg6m-p1.jpg'
      ]
    }
  }
  }
</script>

<style scoped>

</style>
