import _ from 'lodash'



const state = () =>({
    categories: {}
})


const getters = {
    themeCategories:(state)=>()=>{   
        const theme = _.groupBy(state.categories, 'themeCategory')
        _.unset(theme, 'undefined')
        const keys = _.keys(theme)
        const keysSplit = keys.map(v=>{
            return v.split(',')
        })
        return _.uniq(_.concat(...keysSplit))

        
    },
    example:(state)=>()=>{
        
        
        return state.categories.filter((v)=>{
            return v.dir !== '/'
        })

    }
}
const mutations = {
    categories(state, categories){

        state.categories = categories
    }
}
const actions = {
    async categories({commit}){
        const categories = await this.$content({deep: true}).fetch()
        
        commit('categories', categories)
    }
}










export default {state, getters, mutations, actions}