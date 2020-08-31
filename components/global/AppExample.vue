<template lang="pug">
    div
        .container(class="bg-gray-200 dark:bg-gray-700 mx-auto text-center")
            a.text-center.activiy-category(class="inline-block leading-7 border-solid border border-r-0 border-gray-100 my-10")
                span(@click="select()") 全部
            a.text-center.activiy-category(v-for="category in categories" class="inline-block leading-7 border-solid border border-r-0 border-gray-100 my-10")
                span(@click="select(category)") {{category}}
        .container.example(class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 lg bg-gray-200 dark:bg-gray-700 mx-auto text-center")
            a.text-center(v-for="item in examples" :key="item.path" class="relative rounded overflow-hidden")
                img(:src="item.dir + '/' + item.img" )
                .absolute(class="bottom-0 py-5 text-xs left-0 w-full text-left dark:bg-opacity-50 dark:bg-gray-800")
                    p(class="ml-3") 标题： {{item.title}}
                    p(class="ml-3") 日期： {{item.datetime}}
                    p(class="ml-3") 品牌： {{item.brand}}
</template>
<script>
export default {
    data(){
        return {
            selectCategory: '',
            products:[]
        }
    },
    filters: {
        
    },
    computed:{
         categories(){

            return this.$store.getters.themeCategories()
        },
        examples(){
            const examples = this.$store.getters.example()
            return examples.filter(data=>!this.selectCategory||data.themeCategory.toLowerCase().includes(this.selectCategory))
        }
    },
    methods:{
        select(value){
            this.selectCategory = value
        }
    }
}
</script>
<style lang="stylus" scoped>
    .activiy-category
        padding 0 20px
        &:hover
            cursor pointer
        &:last-child
            border-right-width 1px
    .example
        margin 20px 0
        .text-center
            margin-bottom 20px
            transition all .2s
            box-shadow 0 2px 5px rgba(255, 255, 255, .1)
            &:hover
                cursor pointer
                box-shadow: 0 4px 10px rgba(255, 255, 255, .3)


</style>