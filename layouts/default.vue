<template lang="pug">
    .w-full
        header(class="w-full h-16 z-10")
            div(class="mx-auto container flex")
                .logo(class="text-3xl")
                    |xlazy
                .menu(class="text-3xl w-3/4 text-center")
                    nuxt-link(to="/") 首页
                    nuxt-link(to="/example") 作品
                    nuxt-link(to="/about") 关于
   
        AppSwiper
        main(class="mx-auto container")
           
            AppSearch
            nuxt(class="mx-auto")
        footer
            |bottom
        
</template>
<script>
export default {

    head: {
        titleTemplate: '%s - h5.xlazy.com',
         bodyAttrs: {
            class: ['bg-white text-gray-700 dark:bg-gray-700 dark:text-white']
        }
    }
}
</script>
<style lang="stylus" scoped>
    header 
        box-shadow 0 10px 15px rgba(255, 255, 255, .1)
        .menu
            a
                margin 0 20px

</style>