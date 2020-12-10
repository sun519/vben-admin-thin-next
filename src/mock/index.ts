import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { Vpc } from './data/land';

const prefix = '/api/urm';

export default {
    init() {
        // 延时配置500毫秒
        const mock = new MockAdapter(axios, { delayResponse: 500 });
        mock.onGet(`${prefix}/captcha/graph`).reply(200, Vpc); // 获取图形验证码
        return mock;
    },
};
