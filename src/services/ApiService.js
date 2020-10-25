const BASE_URL = 'https://newsapi.org/v2';
const API_KEY = '59190f37d9f241a28a044c7042722e6d';

let get = (url) => {
    return fetch(url);
}

export default {
    getTopNews(lang) {
        return get(`${BASE_URL}/top-headlines?country=${lang}&apiKey=${API_KEY}`);
    },
    getAllTopNewsByCat(lang, cat) {
        return get(`${BASE_URL}/top-headlines?country=${lang}&category=${cat}&apiKey=${API_KEY}`);
    },
    getSomeNewsByCat(lang, cat, amount) {
        return get(`${BASE_URL}/top-headlines?country=${lang}&category=${cat}&pageSize=${amount}&apiKey=${API_KEY}`);
    },
    getTopNewsByTerm(lang, term) {
        return get(`${BASE_URL}/top-headlines?country=${lang}&q=${term}&apiKey=${API_KEY}`);
    }
}