<template>
  <main>
    <div>
      <button class="btn-reactive" @click="hideForm = !hideForm"> Formulario</button>
      <button class="btn-reactive" @click="hideSlider = !hideSlider"> Slider</button>
      <button class="btn-reactive" @click="hideCounter = !hideCounter"> Counter</button>
    </div>
    <ContactForm v-if="hideForm"/>
    <SliderScroll :images="slides" v-if="hideSlider"/>
    <Cuenta v-if="hideCounter"/>
  </main>

</template>

<script>
import ContactForm from '@/components/ContactForm.vue'
import SliderScroll from '@/components/SliderScroll.vue'
import Cuenta from '@/components/Cuenta.vue'
export default {
  name: 'ReactiveContent',
  components: {
    Cuenta,
    SliderScroll,
    ContactForm
  },
  data() {
    return {
      hideForm: false,
      hideSlider: false,
      hideCounter: false,
      slides: [
        'https://autocosmoscloudstorage.blob.core.windows.net/noticias/fotosbig/NPAZ_59c52733cf2f438888037bf5e3c75c8d.jpg',
        'https://s1.cdn.autoevolution.com/images/news/the-new-450-hp-audi-rs4-avant-does-0-100-km-h-in-41-seconds-120378-7.jpg',
        'https://img.motor16.com/articulos/13000/13129_MF02Rti5ENg6m-p1.jpg'
      ]
    }
  },
}
</script>

<style>
  main{
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  .btn-reactive{
    background-color: goldenrod;
    border-radius: 8px;
    background: linear-gradient(to right, #f69d3c, #f3d08a);
    box-shadow: 0 2px 2px 0 #888888;
    margin: 3px;
  }
</style>

