<template lang="pug">
    .container.example(class="grid grid-cols-4 gap-4 bg-gray-200 dark:bg-gray-700 mx-auto text-center")
        a.text-center(v-for="item in examples" class="relative rounded overflow-hidden" :href="item.dir")
           img(:src="item.dir + '/' + item.img" )
           .absolute(class="bottom-0 text-xs left-0 w-full text-left dark:bg-opacity-50 dark:bg-gray-800")
                p(class="ml-3") 标题： {{item.title}}
                p(class="ml-3") 日期： {{item.datetime}}
                p(class="ml-3") 品牌： {{item.brand}}
</template>
<script>
export default {

    computed:{
        examples(){
            return this.$store.getters.example()
        }
    }
}
</script>
<style lang="stylus" scoped>
    .example
        margin 20px 0
        .text-center
            margin-bottom 20px
            transition all .2s
            box-shadow 0 2px 5px rgba(255, 255, 255, .1)
            &:hover
                box-shadow: 0 4px 10px rgba(255, 255, 255, .3)


</style>