<template lang="pug">
    .container
        |H5作品
        nuxt-content(:document="docs")
</template>
<script>
export default {
    async asyncData({$content, params}){
        const path = `/${params.pathMatch || 'index'}`
        const [docs] = await $content({deep: true}).where({path}).fetch()

        console.log(docs);
        return {docs}
    }
    
}
</script>
<style lang="stylus" scoped>

</style>