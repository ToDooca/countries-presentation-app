import {createStore} from "vuex";
import {State} from "@/types/state";
import axios from "axios";

export default createStore<State>({
    state: {
        countries: [],
        country: []
    },
    getters: {
        getCountries: (state) => state.countries,
        getCountry: (state) => state.country,
    },
    actions: {
        fetchCountries({commit}) {
            axios.get('https://restcountries.com/v3.1/all').then(res => {
                commit('SET_COUNTRIES', res.data)
            }).catch(e => {
                //@TODO implement snackbar or a similar alternative
                console.log(e)
            })
        },
        fetchCountry({commit}) {
            axios.get('https://restcountries.com/v3.1/name/malta').then(res => {
                commit('SET_COUNTRY', res.data)
            }).catch(e => {
                //@TODO implement snackbar or a similar alternative
                console.log(e)
            })
        }
    },
    mutations: {
        SET_COUNTRIES(state, countries) {
            state.countries = countries
        },
        SET_COUNTRY(state, country) {
            state.country = country
        }
    },
})
