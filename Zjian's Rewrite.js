# 彩云天气
# hostname = *.cyapi.cn, *.caiyunapp.com, adx.sogaha.cn
^https?:\/\/(biz|wrapper|starplucker)\.(cyapi|caiyunapp)\.(cn|com)\/(.+\/(user\?app_name|activity\?app_name|visitors|operation\/banners)|p\/v\d\/(vip_info|user_info)) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/caiyuntianqi.js
^https?:\/\/(api|wrapper)\.(cyapi|caiyunapp)\.(cn|com)\/v\d\/(satellite|nafp\/origin_images) url script-request-header https://raw.githubusercontent.com/chxm1023/Rewrite/main/caiyuntianqi.js

# 墨迹天气
# hostname = *.api.moji.com
^http?:\/\/oss4bpc\.moji\.com\/.\d+\/.\d+\/.\d+\/.+\.jpg url reject
^https?:\/\/.*\.api\.moji\.com\/(sns\/json\/profile\/get_info_.+|json\/member_new\/homepage_info.+|user\/personal\/json\/profile_.+|flycard\/novice|shortvideo\/.+) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/mojitianqi.js

# 百度网盘，一刻相册 解锁部分功能
# hostname = pan.baidu.com
# ^https?:\/\/pan\.baidu\.com\/(youai\/(user\/.+\/getminfo|membership\/.+\/adswitch)|(rest\/.+\/membership\/user|act\/.+\/(bchannel|welfare)\/list|api\/usercfg)) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/bdcloud.js
[Script]
http-response ^https:\/\/pan\.baidu\.com\/rest\/\d\.\d\/membership\/user script-path = https://gitlab.com/isous/loonresource/-/raw/main/Script/BaiduNetDisk/BaiduNetDisk_crack.js, requires-body = true, tag = 解锁SVIP权益

# 阿里云盘 净化/解锁SVIP
# hostname = *.aliyundrive.com, *.alipan.com
^https?:\/\/(api|member)\.(aliyundrive|alipan)\.com\/(.+\/(users|activity|user\/get)|((business|apps)\/.+\/users|adrive\/.+\/user)) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/alidrive.js

# 美图秀秀
# hostname = *.xiuxiu.meitu.com, api.posters.meitu.com, api-*.meitu.com
^https?:\/\/((h5|api)\.xiuxiu|api-sub|api\.posters)\.meitu\.com\/.+\/(vip|user|h\d|center|home) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/mtxx.js

# Fimo_复古胶片相机
# hostname = server.*.com
^https?:\/\/server\.(yoyiapp|zbisq)\.com url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/fimo.js

# Documents
^https:\/\/license\.pdfexpert\.com\/api\/2\.0\/documents\/subscription\/refresh url script-request-body https://raw.githubusercontent.com/Yu9191/Rewrite/main/Documents.js
# hostname = license.pdfexpert.com

# Relens
^https?:\/\/buy\.itunes\.apple\.com\/verifyReceipt$ url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/ReLens.js
# hostname = buy.itunes.apple.com

# 印章全能王
^https?:\/\/buy\.itunes\.apple\.com\/verifyReceipt$ url script-response-body https://raw.githubusercontent.com/Yu9191/Rewrite/main/itunes/yzqnw.js
# hostname = buy.itunes.apple.com

# 网易云词典
^https:\/\/dict\.youdao\.com\/vip\/user\/status url script-response-body https://raw.githubusercontent.com/pxx917144686/ios/master/rewrite/QuantumultX/YD.js 
^https:\/\/dict\.youdao\.com\/course\/tab\/translateTab url reject-dict
^https:\/\/dict\.youdao\.com\/homepage\/tile url reject-dict
^https:\/\/api-overmind\.youdao\.com\/openapi\/get\/luna\/dict\/dict-mobile\/prod\/dictCommonConfig url reject-dict
^https:\/\/cdke\.youdao\.com\/course3\/recommend\/dict\/startup url reject-dict
^https:\/\/dict\.youdao\.com\/commonsearch url reject-dict
^https:\/\/dict\.youdao\.com\/vip\/activity\/couponinfo url reject-dict
^https:\/\/dict\.youdao\.com\/dictusertask\/system url reject-dict
^https:\/\/dictvip-business\.youdao\.com\/home\/ad url reject-dict
# hostname = dict.youdao.com, business.youdao.com, api-overmind.youdao.com, cdke.youdao.com

# 百度文库  
[Rewrite]
^https:\/\/appwk\.baidu\.com\/(naapi\/(recommend\/recommenddoc|wkcircle\/messagetab|search\/wkhotwords|api\/wmadopt)|appapi\/(search\/hot|donate\/detail)|xpage\/interface\/wknaad) reject
[Script]
http-response ^https:\/\/appwk\.baidu\.com\/naapi\/(user\/getinfo|doc\/getdocdownloadcopywriter) script-path = https://gitlab.com/isous/loonresource/-/raw/main/Script/BaiduWenku/BaiduWenku_crack.js, requires-body = true, tag = 百度文库解锁

# 灵敢提词器
^http[s]?:\/\/teleprompter-api.quthing.com url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/quthing.js
# hostname = teleprompter-api.quthing.com




hostname = *.cyapi.cn, *.caiyunapp.com, adx.sogaha.cn, pan.baidu.com, *.aliyundrive.com, *.alipan.com, *.xiuxiu.meitu.com, api.posters.meitu.com, api-*.meitu.com, server.*.com, license.pdfexpert.com, buy.itunes.apple.com, lcs-mobile-cops.adobe.io, dict.youdao.com, business.youdao.com, api-overmind.youdao.com, cdke.youdao.com, api.revenuecat.com, appwk.baidu.com, *.api.moji.com, teleprompter-api.quthing.com



