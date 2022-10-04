import {createStore} from "vuex";
import {State} from "@/types/state";
import axios from "axios";

export default createStore<State>({
    state: {
        countries: [],
    },
    getters: {
        getCountries: (state) => state.countries,
    },
    actions: {
        fetchCountries({commit}) {
            axios.get('https://restcountries.com/v3.1/all').then(res => {
                commit('SET_COUNTRIES', res.data)
            }).catch(e => {
                //@TODO implement snackbar or a similar alternative
            })
        },
    },
    mutations: {
        SET_COUNTRIES(state, countries) {
            state.countries = countries
        },
    },
})
