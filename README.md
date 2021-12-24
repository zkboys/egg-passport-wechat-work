# egg-passport-work-wechat

work wechat passport plugin for egg

## Install

```bash
$ npm i egg-passport-wechat-work --save
```

## Usage

```js
// config/plugin.js
exports.passportWechatWork = {
    enable: true,
    package: 'egg-passport-wechat-work',
};
```

## Configuration

```js
// config/config.default.js
exports.passportWechatWork = {
    key: 'your oauth key',
    secret: 'your oauth secret',
    agentId: 0,
    callbackURL: '/passport/wechatwork/callback',
    skipUserProfile: true
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Questions & Suggestions

Please open an issue [here](https://github.com/zkboys/egg-passport-work-wechat/issues).

## License

[Apache 2.0](LICENSE)
