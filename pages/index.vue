<template lang="pug">
    .container
        h3.container(class="text-5xl text-center") 
            span(class="inline-block w-20 bg-gray-100 h-1 align-middle mx-8")
            |H5模板
            span(class="inline-block w-20 bg-gray-100 h-1 align-middle mx-8")

        AppExample
            
        nuxt-content(:document="docs")
</template>
<script>
export default {
    async asyncData({$content, params}){
        const path = `/${params.pathMatch || 'index'}`
        const docs = await $content({deep: true}).fetch()
        // const themeCategory = await $content({deep: true}).only(['themeCategory']).fetch()
        // themeCategories = themeCategory.split(',')
        // console.log(docs, themeCategories);
        return {docs}
    }
    
}
</script>
<style lang="stylus" scoped>
    h3.container
        span
            height 1px
    
</style>