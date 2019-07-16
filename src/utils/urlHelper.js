import axios from 'axios';
import { API } from './../constants';

class UrlHelper {
    testWebPage = url => axios.post(API.TEST_URL, { url });
    saveWebPage = url => axios.post(API.ADD_URL, { url });
    openUrlInNewTab = url => window.open(url, "_blank");

    markStatusesAsSaved = (list, url, server) => {
        return list.map( item => {
            if(server === item.serverName && url === item.url) {
                item.isSaved = true;
            }
            return item;
        });
    };
    markStatusesAsFailed = (list, url, server) => {
        return list.map( item => {
            if(server === item.serverName && url === item.url) {
                item.isFailed = true;
            }
            return item;
        });
    };
};

export default new UrlHelper();