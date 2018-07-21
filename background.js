'use strict';

chrome.runtime.onInstalled.addListener(function() {
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
      chrome.declarativeContent.onPageChanged.addRules([{
        conditions: [
        new chrome.declarativeContent.PageStateMatcher({
          pageUrl: {hostEquals: 'www.haaretz.co.il'},
       })],
        actions: [new chrome.declarativeContent.ShowPageAction()]
      }]);
    });
  });
