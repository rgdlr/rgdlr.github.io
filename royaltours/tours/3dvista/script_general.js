(function(){
var translateObjs = {};
function trans(a, b) {
    var c = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    translateObjs[c[0x0]] = c;
    return '';
}
function regTextVar(a, b) {
    var c = ![];
    b = b['toLowerCase']();
    return d(b);
    function d(k, l) {
        switch (k) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var n = function () {
                switch (k) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }();
            if (n) {
                return function () {
                    var s, t;
                    var u = (l && l['viewerName'] ? this['getComponentByName'](l['viewerName']) : undefined) || this['getMainViewer']();
                    if (k['startsWith']('photo'))
                        s = this['getByClassName']('PhotoPlayList');
                    else {
                        s = this['_getPlayListsWithViewer'](u);
                        t = j['bind'](this, u);
                    }
                    if (!c) {
                        for (var v = 0x0; v < s['length']; ++v) {
                            s[v]['bind']('changing', f, this);
                        }
                        c = !![];
                    }
                    return i['call'](this, s, n, t);
                };
            }
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](k);
            };
        default:
            if (k['startsWith']('viewer.')) {
                var o = k['split']('.');
                var p = o[0x1];
                if (p) {
                    var q = o['slice'](0x2)['join']('.');
                    return d(q, { 'viewerName': p });
                }
            } else if (k['startsWith']('quiz.') && 'Quiz' in TDV) {
                var r = undefined;
                var n = function () {
                    switch (k) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var s = /quiz\.([\w_]+)\.(.+)/['exec'](k);
                        if (s) {
                            r = s[0x1];
                            switch ('quiz.' + s[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (n) {
                    return function () {
                        var s = this['get']('data')['quiz'];
                        if (s) {
                            if (!c) {
                                if (r != undefined)
                                    if (r == 'global') {
                                        var u = this['get']('data')['quizConfig'];
                                        var w = u['objectives'];
                                        for (var y = 0x0, A = w['length']; y < A; ++y) {
                                            s['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, w[y]['id'], n), this);
                                        }
                                    } else {
                                        s['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, r, n), this);
                                    }
                                else
                                    s['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], g['call'](this, n), this);
                                c = !![];
                            }
                            try {
                                var B = 0x0;
                                if (r != undefined) {
                                    if (r == 'global') {
                                        var u = this['get']('data')['quizConfig'];
                                        var w = u['objectives'];
                                        for (var y = 0x0, A = w['length']; y < A; ++y) {
                                            B += s['getObjective'](w[y]['id'], n);
                                        }
                                    } else {
                                        B = s['getObjective'](r, n);
                                    }
                                } else {
                                    B = s['get'](n);
                                    if (n == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        B += 0x1;
                                }
                                return B;
                            } catch (C) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function e() {
        var k = this['get']('data');
        k['updateText'](k['translateObjs'][a]);
    }
    function f(k) {
        var l = k['data']['nextSelectedIndex'];
        if (l >= 0x0) {
            var m = k['source']['get']('items')[l];
            var n = function () {
                m['unbind']('begin', n, this);
                e['call'](this);
            };
            m['bind']('begin', n, this);
        }
    }
    function g(k) {
        return function (l) {
            if (k in l) {
                e['call'](this);
            }
        }['bind'](this);
    }
    function h(k, l) {
        return function (m, n) {
            if (k == m && l in n) {
                e['call'](this);
            }
        }['bind'](this);
    }
    function i(k, l, m) {
        for (var n = 0x0; n < k['length']; ++n) {
            var o = k[n];
            var p = o['get']('selectedIndex');
            if (p >= 0x0) {
                var q = l['split']('.');
                var r = o['get']('items')[p];
                if (m !== undefined && !m['call'](this, r))
                    continue;
                for (var s = 0x0; s < q['length']; ++s) {
                    if (r == undefined)
                        return '';
                    r = 'get' in r ? r['get'](q[s]) : r[q[s]];
                }
                return r;
            }
        }
        return '';
    }
    function j(k, l) {
        var m = l['get']('player');
        return m !== undefined && m['get']('viewerArea') == k;
    }
}
var script = {"layout":"absolute","height":"100%","start":"this.init()","data":{"textToSpeechConfig":{"speechOnQuizQuestion":false,"volume":1,"speechOnInfoWindow":false,"speechOnTooltip":false,"stopBackgroundAudio":false,"rate":1,"pitch":1},"history":{},"locales":{"en":"locale/en.txt"},"name":"Player423","defaultLocale":"en"},"children":["this.MainViewer","this.Container_260FF5B8_2CE2_88E3_41C1_7729307209E4"],"scripts":{"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"setValue":TDV.Tour.Script.setValue,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"getPixels":TDV.Tour.Script.getPixels,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"playAudioList":TDV.Tour.Script.playAudioList,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"textToSpeech":TDV.Tour.Script.textToSpeech,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"executeJS":TDV.Tour.Script.executeJS,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"showPopupImage":TDV.Tour.Script.showPopupImage,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"downloadFile":TDV.Tour.Script.downloadFile,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"shareSocial":TDV.Tour.Script.shareSocial,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"showWindow":TDV.Tour.Script.showWindow,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"init":TDV.Tour.Script.init,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"cloneBindings":TDV.Tour.Script.cloneBindings,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"getMainViewer":TDV.Tour.Script.getMainViewer,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"startMeasurement":TDV.Tour.Script.startMeasurement,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"setLocale":TDV.Tour.Script.setLocale,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"translate":TDV.Tour.Script.translate,"resumePlayers":TDV.Tour.Script.resumePlayers,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"createTween":TDV.Tour.Script.createTween,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"getMediaByName":TDV.Tour.Script.getMediaByName,"setMapLocation":TDV.Tour.Script.setMapLocation,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"historyGoBack":TDV.Tour.Script.historyGoBack,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"historyGoForward":TDV.Tour.Script.historyGoForward,"mixObject":TDV.Tour.Script.mixObject,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"clone":TDV.Tour.Script.clone,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"initAnalytics":TDV.Tour.Script.initAnalytics,"getOverlays":TDV.Tour.Script.getOverlays,"getComponentByName":TDV.Tour.Script.getComponentByName,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"initQuiz":TDV.Tour.Script.initQuiz,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"quizShowScore":TDV.Tour.Script.quizShowScore,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"existsKey":TDV.Tour.Script.existsKey,"unregisterKey":TDV.Tour.Script.unregisterKey,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"getKey":TDV.Tour.Script.getKey,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"openLink":TDV.Tour.Script.openLink,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"isPanorama":TDV.Tour.Script.isPanorama,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"registerKey":TDV.Tour.Script.registerKey,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"quizStart":TDV.Tour.Script.quizStart,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"quizFinish":TDV.Tour.Script.quizFinish,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex},"minHeight":0,"backgroundColor":["#000000"],"minWidth":0,"gap":10,"scrollBarMargin":2,"hash": "8d67c96c987a5ff8b32fdc2db03d8ee5ca1c66a9f8e40d705a03a0b6daf73a53", "definitions": [{"id":"mainPlayList","items":[{"class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_26BBB24C_2CE3_8BA3_4172_050C13C242E0_camera","media":"this.panorama_26BBB24C_2CE3_8BA3_4172_050C13C242E0","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)"},{"class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_2680C694_2CE3_88A3_4172_AFB2798C2F32_camera","media":"this.panorama_2680C694_2CE3_88A3_4172_AFB2798C2F32","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 2)"},{"class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","end":"this.trigger('tourEnded')","camera":"this.panorama_2713E561_2CE3_8865_41B4_30A4521CA658_camera","media":"this.panorama_2713E561_2CE3_8865_41B4_30A4521CA658","begin":"this.setEndToItemIndex(this.mainPlayList, 2, 0)"}],"class":"PlayList"},{"playbackBarHeadShadowBlurRadius":3,"subtitlesFontSize":"3vmin","progressBarBackgroundColor":["#3399FF"],"progressBarBackgroundColorDirection":"horizontal","data":{"name":"Main Viewer"},"progressBorderColor":"#000000","subtitlesBackgroundOpacity":0.2,"playbackBarHeadShadowOpacity":0.7,"translationTransitionDuration":500,"progressHeight":2,"playbackBarBackgroundOpacity":1,"id":"MainViewer","playbackBarBottom":5,"playbackBarLeft":0,"subtitlesBorderColor":"#FFFFFF","playbackBarHeadHeight":15,"playbackBarHeadShadowColor":"#000000","subtitlesTextShadowHorizontalLength":1,"progressBackgroundColor":["#000000"],"toolTipPaddingTop":4,"subtitlesFontFamily":"Arial","toolTipFontColor":"#606060","progressBarBorderColor":"#000000","playbackBarProgressBackgroundColorRatios":[0],"playbackBarBackgroundColor":["#FFFFFF"],"progressBorderSize":0,"progressBarBackgroundColorRatios":[0],"playbackBarHeight":10,"subtitlesGap":0,"toolTipFontFamily":"Arial","playbackBarHeadBackgroundColorRatios":[0,1],"class":"ViewerArea","subtitlesBackgroundColor":"#000000","playbackBarHeadWidth":6,"playbackBarProgressBorderSize":0,"toolTipFontSize":"1.11vmin","playbackBarBorderColor":"#FFFFFF","playbackBarHeadBorderSize":0,"toolTipBackgroundColor":"#F6F6F6","subtitlesTextShadowOpacity":1,"playbackBarBorderRadius":0,"toolTipBorderColor":"#767676","subtitlesFontColor":"#FFFFFF","playbackBarProgressBorderColor":"#000000","playbackBarBackgroundColorDirection":"vertical","playbackBarHeadShadow":true,"height":"100%","progressBarBorderRadius":2,"width":"100%","toolTipPaddingRight":6,"subtitlesTextShadowVerticalLength":1,"vrPointerColor":"#FFFFFF","playbackBarRight":0,"progressBottom":10,"minHeight":50,"playbackBarProgressBorderRadius":0,"playbackBarHeadBorderRadius":0,"minWidth":100,"progressLeft":"33%","toolTipPaddingBottom":4,"playbackBarHeadBorderColor":"#000000","subtitlesBottom":50,"progressBackgroundColorRatios":[0],"playbackBarBorderSize":0,"toolTipDisplayTime":500,"progressBorderRadius":2,"vrPointerSelectionColor":"#FF6600","propagateClick":false,"progressBarBorderSize":0,"firstTransitionDuration":0,"surfaceReticleColor":"#FFFFFF","toolTipPaddingLeft":6,"toolTipShadowColor":"#333138","surfaceReticleSelectionColor":"#FFFFFF","playbackBarProgressBackgroundColor":["#3399FF"],"playbackBarHeadBackgroundColor":["#111111","#666666"],"toolTipTextShadowColor":"#000000","progressRight":"33%","progressOpacity":0.7,"subtitlesTop":0,"subtitlesTextShadowColor":"#000000","vrPointerSelectionTime":2000},{"layout":"horizontal","height":200,"right":0,"data":{"name":"Container425"},"minWidth":0,"minHeight":0,"gap":10,"scrollBarMargin":2,"bottom":0,"horizontalAlign":"center","propagateClick":false,"scrollBarColor":"#000000","class":"Container","backgroundOpacity":0,"verticalAlign":"bottom","left":0,"id":"Container_260FF5B8_2CE2_88E3_41C1_7729307209E4"},{"aaEnabled":true,"class":"PanoramaPlayer","arrowKeysAction":"translate","mouseControlMode":"drag_rotation","mode":"quality","viewerArea":"this.MainViewer","touchControlMode":"drag_rotation","id":"MainViewerPanoramaPlayer"},{"hfovMax":130,"vfov":180,"id":"panorama_2680C694_2CE3_88A3_4172_AFB2798C2F32","label":trans('panorama_2680C694_2CE3_88A3_4172_AFB2798C2F32.label'),"frames":[{"class":"CubicPanoramaFrame","cube":{"class":"ImageResource","levels":[{"height":4096,"colCount":48,"width":24576,"tags":"ondemand","url":"media/panorama_2680C694_2CE3_88A3_4172_AFB2798C2F32_0/{face}/0/{row}_{column}.jpg","class":"TiledImageResourceLevel","rowCount":8},{"height":2048,"colCount":24,"width":12288,"tags":"ondemand","url":"media/panorama_2680C694_2CE3_88A3_4172_AFB2798C2F32_0/{face}/1/{row}_{column}.jpg","class":"TiledImageResourceLevel","rowCount":4},{"height":1024,"colCount":12,"width":6144,"tags":"ondemand","url":"media/panorama_2680C694_2CE3_88A3_4172_AFB2798C2F32_0/{face}/2/{row}_{column}.jpg","class":"TiledImageResourceLevel","rowCount":2},{"height":512,"colCount":6,"width":3072,"tags":["ondemand","preload"],"url":"media/panorama_2680C694_2CE3_88A3_4172_AFB2798C2F32_0/{face}/3/{row}_{column}.jpg","class":"TiledImageResourceLevel","rowCount":1},{"height":2048,"colCount":6,"width":12288,"tags":"mobilevr2gen","url":"media/panorama_2680C694_2CE3_88A3_4172_AFB2798C2F32_0/{face}/vr2gen/0.jpg","class":"TiledImageResourceLevel","rowCount":1}]},"thumbnailUrl":"media/panorama_2680C694_2CE3_88A3_4172_AFB2798C2F32_t.jpg"}],"data":{"label":"03-hall-1"},"thumbnailUrl":"media/panorama_2680C694_2CE3_88A3_4172_AFB2798C2F32_t.jpg","class":"Panorama","adjacentPanoramas":[{"select":"this.overlay_3883B4E4_2CE2_8863_417B_1C1E53BE1596.get('areas').forEach(function(a){ a.trigger('click') })","panorama":"this.panorama_2713E561_2CE3_8865_41B4_30A4521CA658","class":"AdjacentPanorama","distance":1.83,"yaw":102.52,"data":{"overlayID":"overlay_3883B4E4_2CE2_8863_417B_1C1E53BE1596"}},{"select":"this.overlay_39E575C1_2D1D_88A5_41C1_B33A92BCA1DC.get('areas').forEach(function(a){ a.trigger('click') })","panorama":"this.panorama_26BBB24C_2CE3_8BA3_4172_050C13C242E0","class":"AdjacentPanorama","distance":5.34,"yaw":-174.11,"data":{"overlayID":"overlay_39E575C1_2D1D_88A5_41C1_B33A92BCA1DC"}}],"hfov":360,"overlays":["this.overlay_3883B4E4_2CE2_8863_417B_1C1E53BE1596","this.overlay_39E575C1_2D1D_88A5_41C1_B33A92BCA1DC","this.overlay_383B2FDF_2D22_F85D_41C4_D7B54C151563"]},{"titleFontSize":"1.29vmin","headerPaddingBottom":5,"closeButtonRollOverIconLineWidth":2,"headerBackgroundOpacity":0,"headerVerticalAlign":"middle","data":{"name":"Window24957"},"bodyPaddingTop":0,"shadowOpacity":0.5,"closeButtonPressedBorderColor":"#000000","headerPaddingLeft":10,"bodyBackgroundColor":["#FFFFFF","#DDDDDD","#FFFFFF"],"closeButtonPressedBackgroundColorRatios":[],"id":"window_34B3CEED_2D22_F87D_41C6_198C819429C0","closeButtonIconWidth":20,"modal":true,"backgroundColor":[],"closeButtonRollOverBackgroundColorRatios":[],"closeButtonBorderSize":0,"closeButtonPressedBorderSize":0,"bodyPaddingRight":0,"gap":10,"closeButtonPressedBackgroundOpacity":0,"shadow":true,"footerBackgroundColorDirection":"vertical","hideEffect":{"duration":500,"class":"FadeOutEffect","easing":"cubic_in_out"},"closeButtonPaddingBottom":0,"headerPaddingTop":10,"footerHeight":5,"headerBackgroundColorDirection":"vertical","closeButtonPressedBackgroundColor":[],"footerBackgroundColorRatios":[0,0.8980392156862745,1],"showEffect":{"duration":500,"class":"FadeInEffect","easing":"cubic_in_out"},"closeButtonRollOverBorderSize":0,"titleFontColor":"#000000","veilColorRatios":[0,1],"closeButtonIconColor":"#B2B2B2","veilShowEffect":{"duration":500,"class":"FadeInEffect","easing":"cubic_in_out"},"horizontalAlign":"center","scrollBarColor":"#000000","closeButtonBackgroundColor":[],"closeButtonIconHeight":20,"closeButtonRollOverBackgroundOpacity":0,"bodyPaddingLeft":0,"overflow":"scroll","class":"Window","closeButtonBackgroundOpacity":0,"closeButtonPressedIconColor":"#FFFFFF","closeButtonRollOverIconColor":"#FFFFFF","verticalAlign":"middle","closeButtonPaddingLeft":0,"bodyBorderSize":0,"veilOpacity":0.4,"shadowSpread":1,"width":"90%","layout":"vertical","shadowHorizontalLength":3,"closeButtonPaddingRight":0,"footerBackgroundOpacity":0,"shadowColor":"#000000","veilColorDirection":"horizontal","headerBorderColor":"#000000","footerBorderSize":0,"bodyBackgroundOpacity":0,"closeButtonIconLineWidth":2,"closeButtonRollOverBorderColor":"#000000","titlePaddingTop":5,"closeButtonPaddingTop":0,"shadowVerticalLength":0,"minHeight":0,"height":"90%","bodyBorderColor":"#000000","minWidth":0,"closeButtonBorderColor":"#000000","scrollBarMargin":2,"headerPaddingRight":0,"titlePaddingBottom":5,"titleFontFamily":"Arial","closeButtonPressedIconLineWidth":3,"closeButtonBackgroundColorRatios":[],"headerBorderSize":0,"titleHorizontalAlign":"left","bodyBackgroundColorRatios":[0,0.5019607843137255,1],"propagateClick":false,"titlePaddingLeft":5,"headerBackgroundColorRatios":[0,0.09803921568627451,1],"backgroundColorRatios":[],"closeButtonBorderRadius":11,"bodyPaddingBottom":0,"veilColor":["#000000","#000000"],"bodyBackgroundColorDirection":"vertical","titlePaddingRight":5,"borderRadius":5,"children":["this.WebFrame_346A6D6F_2D62_987D_41C3_39664E7F38D4"],"headerBackgroundColor":["#DDDDDD","#EEEEEE","#FFFFFF"],"veilHideEffect":{"duration":500,"class":"FadeOutEffect","easing":"cubic_in_out"},"footerBackgroundColor":["#FFFFFF","#EEEEEE","#DDDDDD"],"footerBorderColor":"#000000","closeButtonRollOverBackgroundColor":[]},{"class":"PanoramaCamera","id":"panorama_26BBB24C_2CE3_8BA3_4172_050C13C242E0_camera","initialPosition":{"hfov":125,"yaw":1.33,"class":"PanoramaCameraPosition","pitch":-19.13},"enterPointingToHorizon":true},{"hfovMax":130,"vfov":180,"id":"panorama_2713E561_2CE3_8865_41B4_30A4521CA658","label":trans('panorama_2713E561_2CE3_8865_41B4_30A4521CA658.label'),"frames":[{"class":"CubicPanoramaFrame","cube":{"class":"ImageResource","levels":[{"height":4096,"colCount":48,"width":24576,"tags":"ondemand","url":"media/panorama_2713E561_2CE3_8865_41B4_30A4521CA658_0/{face}/0/{row}_{column}.jpg","class":"TiledImageResourceLevel","rowCount":8},{"height":2048,"colCount":24,"width":12288,"tags":"ondemand","url":"media/panorama_2713E561_2CE3_8865_41B4_30A4521CA658_0/{face}/1/{row}_{column}.jpg","class":"TiledImageResourceLevel","rowCount":4},{"height":1024,"colCount":12,"width":6144,"tags":"ondemand","url":"media/panorama_2713E561_2CE3_8865_41B4_30A4521CA658_0/{face}/2/{row}_{column}.jpg","class":"TiledImageResourceLevel","rowCount":2},{"height":512,"colCount":6,"width":3072,"tags":["ondemand","preload"],"url":"media/panorama_2713E561_2CE3_8865_41B4_30A4521CA658_0/{face}/3/{row}_{column}.jpg","class":"TiledImageResourceLevel","rowCount":1},{"height":2048,"colCount":6,"width":12288,"tags":"mobilevr2gen","url":"media/panorama_2713E561_2CE3_8865_41B4_30A4521CA658_0/{face}/vr2gen/0.jpg","class":"TiledImageResourceLevel","rowCount":1}]},"thumbnailUrl":"media/panorama_2713E561_2CE3_8865_41B4_30A4521CA658_t.jpg"}],"data":{"label":"04-bedrom-double-1"},"thumbnailUrl":"media/panorama_2713E561_2CE3_8865_41B4_30A4521CA658_t.jpg","class":"Panorama","adjacentPanoramas":[{"select":"this.overlay_389134E0_2CE2_8863_417B_B081FB5F0CF0.get('areas').forEach(function(a){ a.trigger('click') })","panorama":"this.panorama_2680C694_2CE3_88A3_4172_AFB2798C2F32","class":"AdjacentPanorama","distance":2.22,"yaw":137.65,"data":{"overlayID":"overlay_389134E0_2CE2_8863_417B_B081FB5F0CF0"}}],"hfov":360,"overlays":["this.overlay_389134E0_2CE2_8863_417B_B081FB5F0CF0","this.overlay_38B96B08_2D23_99A3_41BB_79B9FF2C622E"]},{"hfovMax":130,"vfov":180,"id":"panorama_26BBB24C_2CE3_8BA3_4172_050C13C242E0","label":trans('panorama_26BBB24C_2CE3_8BA3_4172_050C13C242E0.label'),"frames":[{"class":"CubicPanoramaFrame","cube":{"class":"ImageResource","levels":[{"height":4096,"colCount":48,"width":24576,"tags":"ondemand","url":"media/panorama_26BBB24C_2CE3_8BA3_4172_050C13C242E0_0/{face}/0/{row}_{column}.jpg","class":"TiledImageResourceLevel","rowCount":8},{"height":2048,"colCount":24,"width":12288,"tags":"ondemand","url":"media/panorama_26BBB24C_2CE3_8BA3_4172_050C13C242E0_0/{face}/1/{row}_{column}.jpg","class":"TiledImageResourceLevel","rowCount":4},{"height":1024,"colCount":12,"width":6144,"tags":"ondemand","url":"media/panorama_26BBB24C_2CE3_8BA3_4172_050C13C242E0_0/{face}/2/{row}_{column}.jpg","class":"TiledImageResourceLevel","rowCount":2},{"height":512,"colCount":6,"width":3072,"tags":["ondemand","preload"],"url":"media/panorama_26BBB24C_2CE3_8BA3_4172_050C13C242E0_0/{face}/3/{row}_{column}.jpg","class":"TiledImageResourceLevel","rowCount":1},{"height":2048,"colCount":6,"width":12288,"tags":"mobilevr2gen","url":"media/panorama_26BBB24C_2CE3_8BA3_4172_050C13C242E0_0/{face}/vr2gen/0.jpg","class":"TiledImageResourceLevel","rowCount":1}]},"thumbnailUrl":"media/panorama_26BBB24C_2CE3_8BA3_4172_050C13C242E0_t.jpg"}],"data":{"label":"01-outside-1"},"thumbnailUrl":"media/panorama_26BBB24C_2CE3_8BA3_4172_050C13C242E0_t.jpg","class":"Panorama","adjacentPanoramas":[{"select":"this.overlay_3AC1C422_2D26_8FE7_41A2_595AB0AB4BB9.get('areas').forEach(function(a){ a.trigger('click') })","panorama":"this.panorama_2680C694_2CE3_88A3_4172_AFB2798C2F32","class":"AdjacentPanorama","distance":5.18,"yaw":0.62,"data":{"overlayID":"overlay_3AC1C422_2D26_8FE7_41A2_595AB0AB4BB9"}}],"hfov":360,"overlays":["this.overlay_3AC1C422_2D26_8FE7_41A2_595AB0AB4BB9","this.Cap_3A4F1F65_2D22_786D_419F_8B3A760EB236","this.overlay_34D5A148_2D26_89A2_41C2_A0275DBEBD8A"]},{"initialSequence":{"movements":[{"targetYaw":8.91,"class":"TargetPanoramaCameraMovement","yawSpeed":33.25,"targetPitch":-9.84,"easing":"cubic_in_out","pitchSpeed":17.05},{"targetYaw":69.92,"class":"TargetPanoramaCameraMovement","yawSpeed":33.25,"targetPitch":-4.54,"easing":"cubic_in_out","pitchSpeed":17.05},{"targetYaw":-2.45,"class":"TargetPanoramaCameraMovement","yawSpeed":33.25,"targetPitch":40.74,"easing":"cubic_in_out","pitchSpeed":17.05}],"class":"PanoramaCameraSequence"},"class":"PanoramaCamera","id":"panorama_2713E561_2CE3_8865_41B4_30A4521CA658_camera","initialPosition":{"hfov":120,"yaw":-32.47,"class":"PanoramaCameraPosition","pitch":6.13},"enterPointingToHorizon":true},{"class":"PanoramaCamera","id":"panorama_2680C694_2CE3_88A3_4172_AFB2798C2F32_camera","initialPosition":{"hfov":115,"yaw":106.77,"class":"PanoramaCameraPosition","pitch":-8.61},"enterPointingToHorizon":true},{"enabledInCardboard":true,"id":"overlay_3883B4E4_2CE2_8863_417B_1C1E53BE1596","class":"HotspotPanoramaOverlay","data":{"hasPanoramaAction":true,"label":"GoTo04-bedrom-double-1"},"maps":[],"areas":["this.HotspotPanoramaOverlayArea_39CD580D_2CE6_87BD_41BF_46865EE0E787"],"useHandCursor":true,"items":[{"class":"HotspotPanoramaOverlayImage","distance":100,"pitch":-42.81,"hfov":12,"image":"this.AnimatedImageResource_34656CA8_2D62_98E3_41C4_49FA37D56486","yaw":102.52,"data":{"label":"GoTo04-bedrom-double-1"},"scaleMode":"fit_inside","vfov":6.55}]},{"enabledInCardboard":true,"id":"overlay_39E575C1_2D1D_88A5_41C1_B33A92BCA1DC","class":"HotspotPanoramaOverlay","data":{"hasPanoramaAction":true,"label":"GoTo01-outside-1"},"maps":[],"areas":["this.HotspotPanoramaOverlayArea_383135D8_2D1D_88A3_4172_1AF2F6E9B47B"],"useHandCursor":true,"items":[{"class":"HotspotPanoramaOverlayImage","distance":100,"pitch":-17.64,"hfov":11.5,"image":"this.AnimatedImageResource_34655CA9_2D62_98E5_41A4_0096F64B8EA5","yaw":-174.11,"data":{"label":"GoTo01-outside-1"},"scaleMode":"fit_inside","vfov":6.27}]},{"class":"DustPanoramaOverlay","color":"#FFFFFF","id":"overlay_383B2FDF_2D22_F85D_41C4_D7B54C151563"},{"width":"100%","height":"100%","data":{"name":"WebFrame27690"},"minHeight":0,"backgroundColor":[],"url":trans('WebFrame_346A6D6F_2D62_987D_41C3_39664E7F38D4.url'),"minWidth":0,"propagateClick":false,"backgroundColorRatios":[],"class":"WebFrame","id":"WebFrame_346A6D6F_2D62_987D_41C3_39664E7F38D4"},{"enabledInCardboard":true,"id":"overlay_389134E0_2CE2_8863_417B_B081FB5F0CF0","class":"HotspotPanoramaOverlay","data":{"hasPanoramaAction":true,"label":"GoTo03-hall-1"},"maps":[],"areas":["this.HotspotPanoramaOverlayArea_3823750F_2CE2_89BD_41C5_697011D58A8D"],"useHandCursor":true,"items":[{"class":"HotspotPanoramaOverlayImage","distance":100,"pitch":-37.37,"hfov":12.31,"image":"this.AnimatedImageResource_34648CA9_2D62_98E5_41C3_CB03E8FEF429","yaw":137.65,"data":{"label":"GoTo03-hall-1"},"scaleMode":"fit_inside","vfov":7.98}]},{"bleaching":0.7,"class":"LensFlarePanoramaOverlay","pitch":7.2,"yaw":-32.2,"id":"overlay_38B96B08_2D23_99A3_41BB_79B9FF2C622E"},{"enabledInCardboard":true,"id":"overlay_3AC1C422_2D26_8FE7_41A2_595AB0AB4BB9","class":"HotspotPanoramaOverlay","data":{"hasPanoramaAction":true,"label":"GoTo03-hall-1"},"maps":[],"areas":["this.HotspotPanoramaOverlayArea_3AC10423_2D26_8FE5_41C3_0F25D6E6C64F"],"useHandCursor":true,"items":[{"class":"HotspotPanoramaOverlayImage","distance":50,"pitch":-18.15,"hfov":11.5,"image":"this.AnimatedImageResource_34672CA8_2D62_98E3_41B2_3607F85FC18B","yaw":0.62,"data":{"label":"GoTo03-hall-1"},"scaleMode":"fit_inside","vfov":6.27}]},{"id":"Cap_3A4F1F65_2D22_786D_419F_8B3A760EB236","class":"TripodCapPanoramaOverlay","distance":50,"hfov":7.5,"image":"this.res_342ADF9D_2D23_F8DD_41C5_BE780489BD54"},{"id":"overlay_34D5A148_2D26_89A2_41C2_A0275DBEBD8A","class":"HotspotPanoramaOverlay","items":[{"class":"HotspotPanoramaOverlayImage","distance":50,"data":{"label":"Pol\u00edgono"},"pitch":15.39,"image":{"levels":[{"height":277,"width":262,"url":"media/panorama_26BBB24C_2CE3_8BA3_4172_050C13C242E0_HS_p2sexu5b.png","class":"ImageResourceLevel"}],"class":"ImageResource"},"yaw":19.91,"hfov":7.89,"vfov":8.34}],"maps":[],"useHandCursor":true,"areas":["this.HotspotPanoramaOverlayArea_34C3816F_2D26_887E_41C2_F5581674E5B5"],"data":{"label":"Polígono"}},{"class":"HotspotPanoramaOverlayArea","mapColor":"any","id":"HotspotPanoramaOverlayArea_39CD580D_2CE6_87BD_41BF_46865EE0E787","click":"this.setPlayListSelectedIndex(this.mainPlayList, 2)","displayTooltipInTouchScreens":true},{"colCount":3,"levels":[{"height":180,"width":330,"url":"media/res_38111FE7_2CE6_986D_41C3_175C1CDFCFE5_0.png","class":"ImageResourceLevel"}],"class":"AnimatedImageResource","rowCount":3,"frameCount":9,"frameDuration":62,"finalFrame":"first","id":"AnimatedImageResource_34656CA8_2D62_98E3_41C4_49FA37D56486"},{"class":"HotspotPanoramaOverlayArea","mapColor":"any","id":"HotspotPanoramaOverlayArea_383135D8_2D1D_88A3_4172_1AF2F6E9B47B","click":"this.setPlayListSelectedIndex(this.mainPlayList, 0)","displayTooltipInTouchScreens":true},{"colCount":3,"levels":[{"height":180,"width":330,"url":"media/res_38111FE7_2CE6_986D_41C3_175C1CDFCFE5_0.png","class":"ImageResourceLevel"}],"class":"AnimatedImageResource","rowCount":3,"frameCount":9,"frameDuration":62,"finalFrame":"first","id":"AnimatedImageResource_34655CA9_2D62_98E5_41A4_0096F64B8EA5"},{"class":"HotspotPanoramaOverlayArea","mapColor":"any","id":"HotspotPanoramaOverlayArea_3823750F_2CE2_89BD_41C5_697011D58A8D","click":"this.setPlayListSelectedIndex(this.mainPlayList, 1)","displayTooltipInTouchScreens":true},{"colCount":3,"levels":[{"height":180,"width":330,"url":"media/res_38111FE7_2CE6_986D_41C3_175C1CDFCFE5_0.png","class":"ImageResourceLevel"}],"class":"AnimatedImageResource","rowCount":3,"frameCount":9,"frameDuration":62,"finalFrame":"first","id":"AnimatedImageResource_34648CA9_2D62_98E5_41C3_CB03E8FEF429"},{"class":"HotspotPanoramaOverlayArea","mapColor":"any","rollOut":"this.AnimatedImageResource_34672CA8_2D62_98E3_41B2_3607F85FC18B.pause()","click":"this.setPlayListSelectedIndex(this.mainPlayList, 1)","id":"HotspotPanoramaOverlayArea_3AC10423_2D26_8FE5_41C3_0F25D6E6C64F","toolTip":trans('HotspotPanoramaOverlayArea_3AC10423_2D26_8FE5_41C3_0F25D6E6C64F.toolTip'),"displayTooltipInTouchScreens":true},{"colCount":3,"levels":[{"height":180,"width":330,"url":"media/res_38111FE7_2CE6_986D_41C3_175C1CDFCFE5_0.png","class":"ImageResourceLevel"}],"class":"AnimatedImageResource","rowCount":3,"frameCount":9,"frameDuration":100,"finalFrame":"first","id":"AnimatedImageResource_34672CA8_2D62_98E3_41B2_3607F85FC18B"},{"levels":[{"height":842,"width":842,"url":"media/res_342ADF9D_2D23_F8DD_41C5_BE780489BD54_0.png","class":"ImageResourceLevel"}],"id":"res_342ADF9D_2D23_F8DD_41C5_BE780489BD54","class":"ImageResource"},{"class":"HotspotPanoramaOverlayArea","mapColor":"image","id":"HotspotPanoramaOverlayArea_34C3816F_2D26_887E_41C2_F5581674E5B5","click":"this.WebFrame_346A6D6F_2D62_987D_41C3_39664E7F38D4.set('url', this.translate('PopupWebFrameBehaviour_34B05EEE_2D22_F87F_419A_728AD0A47A56.url')); this.showWindow(this.window_34B3CEED_2D22_F87D_41C6_198C819429C0, null, false)","displayTooltipInTouchScreens":true}],"defaultMenu":["fullscreen","mute","rotation"],"propagateClick":false,"scrollBarColor":"#000000","backgroundColorRatios":[0],"class":"Player","width":"100%","id":"rootPlayer"};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['createQuizConfig'] = function () {
    var a = {};
    this['get']('data')['translateObjs'] = translateObjs;
    return a;
};
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2022.2.20.js.map
})();
//Generated with v2022.2.20, Tue Feb 7 2023