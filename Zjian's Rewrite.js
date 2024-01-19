# 彩云天气
hostname = *.cyapi.cn, *.caiyunapp.com, adx.sogaha.cn
^https?:\/\/(biz|wrapper|starplucker)\.(cyapi|caiyunapp)\.(cn|com)\/(.+\/(user\?app_name|activity\?app_name|visitors|operation\/banners)|p\/v\d\/(vip_info|user_info)) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/caiyuntianqi.js
^https?:\/\/(api|wrapper)\.(cyapi|caiyunapp)\.(cn|com)\/v\d\/(satellite|nafp\/origin_images) url script-request-header https://raw.githubusercontent.com/chxm1023/Rewrite/main/caiyuntianqi.js

# 百度网盘，一刻相册 解锁部分功能
hostname = pan.baidu.com
^https?:\/\/pan\.baidu\.com\/(youai\/(user\/.+\/getminfo|membership\/.+\/adswitch)|(rest\/.+\/membership\/user|act\/.+\/(bchannel|welfare)\/list|api\/usercfg)) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/bdcloud.js

# 阿里云盘 净化/解锁SVIP
hostname = *.aliyundrive.com, *.alipan.com
^https?:\/\/(api|member)\.(aliyundrive|alipan)\.com\/(.+\/(users|activity|user\/get)|((business|apps)\/.+\/users|adrive\/.+\/user)) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/alidrive.js

# 美图秀秀
hostname = *.xiuxiu.meitu.com, api.posters.meitu.com, api-*.meitu.com
^https?:\/\/((h5|api)\.xiuxiu|api-sub|api\.posters)\.meitu\.com\/.+\/(vip|user|h\d|center|home) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/mtxx.js

# Fimo_复古胶片相机
hostname = server.*.com
^https?:\/\/server\.(yoyiapp|zbisq)\.com url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/fimo.js

# Documents
^https:\/\/license\.pdfexpert\.com\/api\/2\.0\/documents\/subscription\/refresh url script-request-body https://raw.githubusercontent.com/Yu9191/Rewrite/main/Documents.js
hostname = license.pdfexpert.com

# Relens
^https?:\/\/buy\.itunes\.apple\.com\/verifyReceipt$ url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/ReLens.js
hostname = buy.itunes.apple.com

# PS Express
^https://lcs-mobile-cops.adobe.io/mobiles/access_profile/v3 url script-response-body https://raw.githubusercontent.com/Yu9191/Rewrite/main/PSExpress.js
hostname = lcs-mobile-cops.adobe.io

# 印章全能王
^https?:\/\/buy\.itunes\.apple\.com\/verifyReceipt$ url script-response-body https://raw.githubusercontent.com/Yu9191/Rewrite/main/itunes/yzqnw.js
hostname = buy.itunes.apple.com
