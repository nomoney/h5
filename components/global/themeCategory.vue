<template lang="pug">
    .container(class="bg-gray-200 dark:bg-gray-700 mx-auto text-center")
        a.text-center.activiy-category(v-for="item in categories" class="border-solid border border-r-0 border-gray-100")
           |{{item}}
</template>
<script>
export default {

    computed:{
        categories(){

            return this.$store.getters.themeCategories()
        }
    }
}
</script>
<style lang="stylus" scoped>
    .activiy-category
        padding 0 20px
        &:last-child
            border-right-width 1px
</style>