import axios from 'axios';
import { API } from './../constants';

class UrlHelper {
    config = {
        headers: {
            "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
            "Access-Control-Allow-Origin": "*",
        },
    };

    getWebPage = ( url ) => axios.post(API.TEST_URL, { url },/* this.config*/);
};

export default new UrlHelper();