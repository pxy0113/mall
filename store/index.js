import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {  
        cartList:[]
    },  
    mutations: {  
        setCartList(state, list) {  
           state.cartList = list;
        }
    },
     actions: {
    	 setCart({commit},data){
    		 commit('setCartList',data);
    	 }
     }
})

export default store