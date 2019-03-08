import axios from 'axios';

class UrlHelper {
    config = {
        headers: {
            "Content-Type": "application/json;text/html;charset=utf-8;application/x-www-form-urlencoded;",
            "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
            "Access-Control-Allow-Origin": "*",
        },
    };

    getWebPage = ( url ) => axios.get(url, this.config);
};

export default new UrlHelper();