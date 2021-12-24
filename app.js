'use strict';

const debug = require('debug')('egg-passport-work-wechat');
const assert = require('assert');
const Strategy = require('passport-work-wechat').Strategy;

module.exports = app => {
    const {
        key,
        secret,
        agentId,
        callbackURL = '/passport/workWechat/callback',
        href,
        state,
        scope,
    } = app.config.passportWorkWechat;

    assert(key, '[egg-passport-work-wechat] config.passportWorkWechat.key required');
    assert(secret, '[egg-passport-work-wechat] config.passportWorkWechat.secret required');

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
            provider: 'workWechat',
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
    app.passport.use('workWechat', new Strategy(config, doVerify, getAccessToken, saveAccessToken));
};
