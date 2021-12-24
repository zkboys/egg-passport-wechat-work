'use strict';

const debug = require('debug')('egg-passport-wechat-work');
const assert = require('assert');
const Strategy = require('passport-wechat-work').Strategy;

module.exports = app => {

    const {
        key,
        secret,
        agentId,
        callbackURL = '/passport/wechatwork/callback',
        href,
        state,
        scope,
    } = app.config.passportWechatWork;

    assert(key, '[egg-passport-wechat-work] config.passportWechatWork.key required');
    assert(secret, '[egg-passport-wechat-work] config.passportWechatWork.secret required');

    const config = {
        corpId: key,
        corpSecret: secret,
        agentId,
        callbackURL,
        href,
        state,
        scope,
        passReqToCallback: true,
    };

    // 校验获取到的用户
    function doVerify(req, profile, done) {
        const user = {
            provider: 'wechatWork',
            id: profile.id,
            profile,
        };

        debug('%s %s get user: %j', req.method, req.url, user);

        app.passport.doVerify(req, user, done);
    }

    function getAccessToken(cb) {
    }


    function saveAccessToken(accessToken, cb) {
    }

    /**
     * 获取用户的回调
     */
    app.passport.use('wechatWork', new Strategy(config, doVerify, getAccessToken, saveAccessToken));
};
