# egg-passport-work-wechat

work wechat passport plugin for egg

## Install

```bash
$ npm i egg-passport-wechat-work --save
```

## Usage

```js
// config/plugin.js
exports.passportWorkWechat = {
    enable: true,
    package: 'egg-passport-wechat-work',
};
```

## Configuration

```js
// config/config.default.js
exports.passportWorkWechat = {
    key: 'your oauth key',
    secret: 'your oauth secret',
    agentId: 0,
    callbackURL: '/passport/wechatwork/callback',

    // 从缓存中获取accessToken对象
    getAccessToken: (app) => {

    },
    // 将accessToken对象设置到缓存中
    saveAccessToken: (app, accessToken) => {

    },
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Questions & Suggestions

Please open an issue [here](https://github.com/zkboys/egg-passport-work-wechat/issues).

## License

[Apache 2.0](LICENSE)
