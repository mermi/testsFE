'use strict';

const By = require('selenium-webdriver').By;
const Accessors = require('../accessors');


function MapAccessors() {
  Accessors.apply(this, arguments);
}

MapAccessors.prototype = Object.assign({

  get favoritesButton() {
    return this.waitForElement(By.xpath('//*[@id="root"]/div/div/div[2]/div[1]/span'));
  },

  get searchButton() {
    return this.waitForElement(By.xpath('/html/body/div/div/div/div[2]/div[3]/span'));
  },
/*
  get starIcon() {
    return this.waitForElement(By.xpath('//*[@id="root"]/div/div/div[1]/div[2]/div/div[3]/div[2]/img[2]'));
  },
  
  get enterLabel() {
    return this.waitForElement(By.css('#root > div > div.jdnNXn.loaded > div > div.hjxrdF > p:nth-child(2) > input[type="text"]'))
  },

  get saveButton() {
    return this.waitForElement(By.css('#root > div > div.jdnNXn.loaded > div > div.hjxrdF > p:nth-child(3) > button'))
  }*/

}, Accessors.prototype);

module.exports = MapAccessors;