$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:/C:/Users/sajit/workspce%20new/CucumberPOM/src/main/java/com/qa/feature/crm.feature");
formatter.feature({
  "name": "Free CRM test functionality",
  "description": "  I want to use this template for my feature file",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Verify User Login",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user launches the browser",
  "keyword": "Given "
});
formatter.step({
  "name": "user lands on the Login Page and finds the CRM LOGO",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on Login button after entering the \"\u003cUsername\u003e\" and \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user lands on the HomePage",
  "keyword": "Then "
});
formatter.step({
  "name": "user finds the username displayed on left top section of the page.",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ]
    },
    {
      "cells": [
        "sajita0506",
        "Ransom4522"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify User Login",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user launches the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageSteps.user_launches_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user lands on the Login Page and finds the CRM LOGO",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSteps.user_lands_on_the_Login_Page_and_finds_the_CRM_LOGO()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Login button after entering the \"sajita0506\" and \"Ransom4522\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSteps.user_clicks_on_Login_button_after_entering_the_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user lands on the HomePage",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageSteps.user_lands_on_the_HomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user finds the username displayed on left top section of the page.",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSteps.user_finds_the_username_displayed_on_left_top_section_of_the_page()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//td[contains(text(),\u0027User: Sajita Renoy\u0027)]\"}\n  (Session info: chrome\u003d79.0.3945.88)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-E6KO2J86\u0027, ip: \u0027192.168.43.72\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 79.0.3945.88, chrome: {chromedriverVersion: 78.0.3904.105 (60e2d8774a81..., userDataDir: C:\\Users\\sajit\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:65249}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 73fb971c255be4794a4d165df75df731\n*** Element info: {Using\u003dxpath, value\u003d//td[contains(text(),\u0027User: Sajita Renoy\u0027)]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy13.isDisplayed(Unknown Source)\r\n\tat com.qa.pages.HomePage.verifyUserLogin(HomePage.java:29)\r\n\tat com.qa.StepDefinitions.LoginPageSteps.user_finds_the_username_displayed_on_left_top_section_of_the_page(LoginPageSteps.java:61)\r\n\tat ✽.user finds the username displayed on left top section of the page.(file:/C:/Users/sajit/workspce%20new/CucumberPOM/src/main/java/com/qa/feature/crm.feature:29)\r\n",
  "status": "failed"
});
});