#!name = GG6

[MITM]
hostname = %APPEND% api.revenuecat.com, isi.csan.goodnotes.com
[Header Rewrite]
#Anticache
.+ header-del if-modified-since
.+ header-del if-none-match
.+ header-del X-RevenueCat-ETag
.+ header-del x-revenuecat-etag

[URL Rewrite]
^https:\/\/(api\.revenuecat|isi.csan.goodnotes)\.com\/.+\/(receipts$|subscribers\/[^/]+$|offers$) https://api.langkhach89.workers.dev header
