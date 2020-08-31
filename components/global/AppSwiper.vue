<template lang="pug">
  swiper(ref="mySwiper" :options="swiperOptions")
    swiper-slide(v-for="banner in banners" :key="banners.key")
      img(src="~/static/index/5eb4ca4b205a5.jpg", alt="alt")
    .swiper-button-prev(slot="button-prev", @click="prev")
    .swiper-button-next(slot="button-next", @click="next")
    .swiper-pagination(slot="pagination")
</template>

<script>
import { Swiper, SwiperSlide, directive, Autoplay} from 'vue-awesome-swiper'

import 'swiper/swiper-bundle.css'

export default {
  components:{
    Swiper,
    SwiperSlide
  },
  directives: {
    swiper: directive
  },
  data(){
    return {
      banners: ['~/static/index/5eb4ca4b205a5.jpg', '~/static/index/5f0d25acd44f7.jpg', '~/static/index/5f0d25acd44f7.jpg'],
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination'
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-next'
        }
      }
    }
  },
  computed:{
    swiper(){
      return this.$refs.mySwiper.$swiper
    }
  },
  mounted(){

  },
  methods:{
    prev(){
      let currentIndex = this.swiper.activeIndex == 0 ? 0 : --this.swiper.activeIndex

      this.swiper.slideTo(currentIndex, 1000, false)
    },
    next(){

      let currentIndex = this.swiper.activeIndex == this.swiper.slides.length-1 ?  this.swiper.activeIndex : ++this.swiper.activeIndex
      this.swiper.slideTo(currentIndex, 1000, false)
    }
  }
  
}
</script>
