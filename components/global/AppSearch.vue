<template lang="pug">
    div(class="w-full relative flex flex-col justify-between my-10")
        input(
            class="block w-full pl-10 pr-3 py-2 truncate leading-5 placeholder-gray-500 border border-transparent text-gray-700 dark:text-white dark-focus:text-white focus:border-gray-300 dark-focus:border-gray-700 rounded-md focus:outline-none focus:bg-white dark-focus:bg-gray-900 bg-gray-200 dark:bg-gray-800"
            v-model="serachQuery"
            type="search"
            autocomplete="off"
            placeholder="输入内容"
            @focus="onFocus"
        )
        ul(
            v-show="focus && (searching || results.length)"
            class=" w-full flex-1 top-0 bg-white dark:bg-gray-900 rounded-md border border-gray-300 dark:border-gray-700 overflow-hidden"
        )
            li(v-if="searching && !results.length") 搜索中...
            li(v-for="(result, index) of results" :key="result.slug")
                nuxt-link(
                    :to="result.path"
                    class="flex px-4 py-2 items-center leading-5 transition ease-in-out duration-150"
                    @click="focus = false"    
                )
                    span(v-show="result.brand") {{result.brand}}>
                    |{{result.title}}
</template>
<script>
export default {
    data(){
        return{
            serachQuery: '',
            focus: false,
            searching: false,
            results: []
        }
    },
    watch:{
        async serachQuery(q){
            console.log(q);
            if(!q){
                this.searching = false
                this.results = []
                return
            }
            this.searching = true
            this.results = await this.$content({deep: true}).only(['title', 'brand', 'slug']).limit(12).search(q).fetch()

            this.searching = false
        }
    },
    methods:{
        onFocus(){
            this.focus = true
            this.$emit('focus', false)
        }
    }
}
</script>