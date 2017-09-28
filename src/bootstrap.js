import axios from 'axios';

const bootAxios = () => {
    window.axios = axios;

    const session = JSON.parse(localStorage.getItem('session'));

    if (!!session) {
        window.axios.defaults.headers.common['Authorization'] = `Bearer ${session.access_token}`
    }

    return true;
}

export default bootAxios;