'use strict';

var config = (function () {
    var DEFAULT_PAGE = 'index';
    var DEFAULT_ROOT = 'main';
    return {
// personnal settings
        SITE_NAME: 'Bright Marcel',
        SITE_DESCRIPTION: 'a little CMS in Javascript',
        SITE_TITLE: 'Bright Marcel: ',
        AUTHORS: 'Marcel Taude, Bernard Tatin',
        COPYRIGHT: '(c) 2012-2016',
        TOC_TITLE: 'chapitres',
        // be carefull with that assignment, Eugene!
        SITE_BASE: "pages",
// don't touch that!
        DEFAULT_PAGE: DEFAULT_PAGE,
        DEFAULT_ROOT: DEFAULT_ROOT,
        UNDEFINED: undefined,
        current_root: DEFAULT_ROOT,
        current_page: DEFAULT_PAGE
    };
})();