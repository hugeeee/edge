function initDom(){switch($(window).height()>600&&stickyHeader.init(),common.setBookieCellMap(),commonUtils.cacheBreaker(),navigation.init(),takeover.init(),betSlip.init(),myOddsChecker.init(),siteSettings.init(),tabs.init(),utilityBar.init(),popup.init(),imageSwitcher.init(),quickSwitch.init(),pastOrNextRace.init(),miniTableBet.init(),oc.view){case"cards/default":var t=$(".eurovision-splash").eq(0).attr("data-grand-national-url");$(".eurovision-splash li").click(function(){omniture.track("&lid=hm2Eurovision&lpos=country"),document.location.href=t+"?selectionName="+$(this).attr("data-horse-name")});case"cards/american":case"cards/formula1":case"cards/coupon":case"cards/match-bets":fixtures.init();case"cards/racing":findABet.init(),dataInclude.trebleInit(),$(".video-link").click(function(t){t.preventDefault(),$("html, body").animate({scrollTop:$("#rhc .video-container").offset().top-10},1e3),$("#rhc .video-container").attr("data-video-url",$(this).attr("data-url")).click()});break;case"cards/reports":cardReports.init();break;case"odds/all_odds":Chart.init();case"api/table":oddsTable.init();break;case"odds/all_odds_more":oddsMoreFilter.init();break;case"content/homepage":$(".bet-list li:nth-child(even)").css("background-color","#FFF");var e=$(".grand-national-splash").eq(0).attr("data-grand-national-url");$(".grand-national-splash li").click(function(){omniture.track("&lid=hm2GrandNational&lpos=horses"),document.location.href=e+"?selectionName="+$(this).attr("data-horse-name")}),$("#lucky-dip").click(function(t){t.preventDefault();var i=Math.floor(40*Math.random()),a=$("#horseInfoSection li[data-horse-name]").eq(i).attr("data-horse-name");document.location.href=e+"?selectionName="+a}),accaWinningOdds.init(),accumulatorOdds.init(),nextRacesWidget.init();break;case"content/tips":tips.init();break;case"content/sport_homepage":fixtures.init(),accaWinningOdds.init(),accumulatorOdds.init(),dataInclude.trebleInit(),findABet.init();break;case"content/racecourse-guide":dataInclude.trebleInit();break;case"content/content_html":case"content/content_html_empty":commonUtils.angularCompiler("#mc");break;case"content/page_LC0":oddsTable.init(),$("#lucky-dip-link").click(function(){window.location.reload()});break;case"stats/best-for":stats.bestFor();break;case"stats/bet-activity":stats.betActivity(),Chart.init();break;case"stats/market-reports":stats.marketReports();break;case"tipping/charity-betting-challenge":tipping.initCharityBettingChallenge();break;case"tipping/competition/tip_star_leaderboards":case"tipping/competition/tip_star_home":tipping.initCompetitions(),tipping.showHideTipInit();break;case"non-static/bet-basket":betBasket.init();break;case"non-static/find-a-bet":findABet.init();break;case"non-static/live-in-play":inPlay.init();case"content/welcome_centre":welcomeCentre.init();break;case"content/casino_offers":case"content/bookie_offers":case"content/bookie_offers_nav":bookieOffers.init();break;case"myoddschecker/bet-log":oc.showBetLog&&oc.capableBrowser&&betLog.init()}if("true"==oc.diffusion.on&&diffusion.init({topic:oc.diffusion.topic}),validation.init(),dataInclude.videoInit(),1==$("#ch-countdown").length){var i=new Date;i=new Date(2016,2,15,13,30,1),$("#ch-countdown").countdown({until:i})}footer.init(),omniture.init()}function initPage(){$(document).ready(function(){if(oc.capableBrowser){var t=document.getElementsByTagName("body");angular.bootstrap(t,["ocAngularApp"]),oc.isSkyBetApiOn&&loadSkybet(),oc.isCoralApiOn&&loadCoral()}initDom()})}function wait1SpecificJavaScriptFiles(){var t=[];return"true"==oc.diffusion.on&&t.push({src:oc.mainUrl+"diffusion/diffusion.js"}),t}function waitBetaSpecificJavaScriptFiles(){var t=[];return oc.isCoralApiOn&&t.push({src:oc.jsStaticServerBuildFolder+"MO/single/socket.io.js"}),t.push({src:oc.jsStaticServerBuildFolder+"default/oc.js"+oc.staticCacheBreaker}),t}function wait2SpecificJavaScriptFiles(){var t=[];switch(oc.view){case"content/homepage":t.push({src:"https://platform.twitter.com/widgets.js"});break;case"content/sport_homepage":case"cards/racing":case"content/tips":t.push({src:"https://platform.twitter.com/widgets.js"});break;case"odds/all_odds":t.push({src:oc.jsStaticServerBuildFolder+"third-party/highcharts.min.js"});case"api/table":t.push({src:oc.jsStaticServerBuildFolder+"default/all-odds-sort.js"+oc.staticCacheBreaker});break;case"stats/bet-activity":t.push({src:oc.jsStaticServerBuildFolder+"third-party/highcharts.min.js"});break;case"stats/market-reports":case"cards/reports":t.push({src:oc.jsStaticServerBuildFolder+"third-party/jquery.tablesorter.min.js"});break;case"data-services/default":t.push({src:oc.jsStaticServerBuildFolder+"default/data-services.js"+oc.staticCacheBreaker});break;case"myoddschecker/bet-log":oc.showBetLog&&oc.capableBrowser&&t.push({src:oc.jsStaticServerBuildFolder+"default/betlog.js"+oc.staticCacheBreaker})}return"true"==oc.diffusion.on&&(t.push({src:oc.jsStaticServerBuildFolder+"default/diffusion-ui.js"+oc.staticCacheBreaker}),"true"==oc.diffusion.fixtureExists&&t.push({src:oc.jsStaticServerBuildFolder+"default/diffusion-ui-score-card.js"+oc.staticCacheBreaker})),t.push({src:oc.jsStaticServerBuildFolder+"third-party/jquery.validate.js"}),(-1!=oc.urlPath.indexOf("/cheltenham-festival")||-1!=oc.urlPath.indexOf("/horse-racing/cheltenham")||-1!=oc.view.indexOf("content/page_RC0")||-1!=oc.view.indexOf("content/page_LC0"))&&t.push({src:oc.jsStaticServerBuildFolder+"third-party/jquery.countdown.min.js"}),!oc.isTouchable||-1==oc.view.indexOf("cards")&&-1==oc.view.indexOf("find-a-bet")||t.push({src:oc.jsStaticServerBuildFolder+"third-party/jquery.ui.touch-punch.min.js"}),t}window.LOG=function(t){"object"==typeof console&&console.log(t)};var $L=$LAB;$L=$L.script(oc.jsStaticServerBuildFolder+"third-party/jquery-ui-1.9.1.custom.min.js").script(wait1SpecificJavaScriptFiles()).script(waitBetaSpecificJavaScriptFiles()).wait().script(oc.jsStaticServerBuildFolder+"third-party/jquery.cookie.min.js").script(oc.jsStaticServerBuildFolder+"third-party/jquery.hover-intent.min.js").script(oc.jsStaticServerBuildFolder+"default/functions.js"+oc.staticCacheBreaker).script(wait2SpecificJavaScriptFiles()).wait(function(){initPage()});var loadSkybet=function(){$.cookie("__SBA_POLLTIME",null,{path:"/"}),setTimeout(function(){var t=angular.element(document.body).injector(),e=t.get("SkyBookieAccountsFactory");e.skyBetInit()},50)},loadCoral=function(){var t=angular.element(document.body).injector(),e=t.get("CoralBookieAccountsFactory");e.utils.connect()};