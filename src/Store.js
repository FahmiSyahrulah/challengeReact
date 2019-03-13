import createStore from "unistore";
import axios from "axios";

const initialState = {
    listNews: [],
    topNews: [],
    search: "",
    isLogin: false,
    username: "",
    full_name: "",
    password: "",
    email: ""
};
const apiKey = "0141b5fbbbdd412da424f5c2b2b7844f";
const baseUrl = "https://newsapi.org/v2/";
const urlHeadline = baseUrl + "top-headlines?" +"pageSize=5&" + "country=us&" + "apiKey=" + apiKey;
const urlHeadline2 = baseUrl + "everything?" + "q=night&"+"pageSize=5&"+ "apiKey=" + apiKey;

export const store = createStore(initialState)
export const actions = store => ({
    setField: (state, event) => {
        return { [event.target.name]: event.target.value };
    },
    postLogout: state => {
        return { isLogin: false };
    },
    postLogin: async state => {
        const data = { username: state.username, password: state.password };
        await axios
            .post("https://login.free.beeceptor.com/login", data)
            .then(response => {
                console.log(response.data);
                if (response.data.hasOwnProperty("full_name")) {
                    store.setState({
                        isLogin: true,
                        full_name: response.data.full_name,
                        email: response.data.email
                    });
                }
            })
    },
    newsLists: async state => {
        const self = this;
        await axios 
        .get(urlHeadline)
        .then(function(response){
            store.setState({topNews: response.data.articles});
            // console.log(response.data);
        })
        .catch(function(error){
            console.log(error);
        })

        axios 
        .get(urlHeadline2)
        .then(function(response){
            store.setState({listNews: response.data.articles});
            // console.log(response.data);
        })
        .catch(function(error){
            console.log(error);
        })
    },
    newsKategori: async (state, keyword) =>{
        let kategori = keyword;
        const urlEndPoint = baseUrl + "everything?q="+kategori+"&apiKey=" + apiKey;        
        axios.get(urlEndPoint).then(function(response){
            store.setState({
                listNews : response.data.articles
            })
        })
        .catch(function(error){
            console.log(error);
        })
    },

    searchNews : async (state, keyword) => {
        console.log("search News", keyword)

        if (keyword.length > 2) {
            try {
                const response = await axios.get(
                    baseUrl + "everything?q=" + keyword + "&apiKey=" + apiKey
                );
                // console.log(response);
                store.setState({listNews: response.data.articles})
            } catch (error) {
                console.error(error);
            }
        }
    }
})