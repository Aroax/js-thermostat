'use strict';

class Thermostat {
  constructor(defaultTemp = 20) {
    this._DEFAULT_TEMP = defaultTemp;
    this._temp = this._DEFAULT_TEMP;
    this._TEMP_MINIMUM = 10;
    this._TEMP_MAXIMUM = 32;
    this._powerSaving = true;
    this._POWER_SAVING_TEMP = 25;
    this._LOW_ENERGY_BOUNDARY = 18;
    this._MEDIUM_ENERGY_BOUNDARY = 25;
  };

  tempDisplay() {
    return this._temp;
  };

  tempUp(increment = 1) {
    if ((this._temp + increment) <= this._checkMaxTemp()) {
    this._temp += increment;
    };
  };

  tempDown(decrement = 1) {
    if ((this._temp - decrement) >= this._TEMP_MINIMUM) {
      this._temp -= decrement;
    };
  };

  isPowerSaving() {
    return this._powerSaving;
  };

  powerSavingOn() {
    this._powerSaving = true;
  };

  powerSavingOff() {
    this._powerSaving = false;
  };

  resetTemp(degrees = this._DEFAULT_TEMP) {
    this._temp = degrees;
  };

  energyUsage() {
    if (this._isLowEnergy()) {
      return 'low-usage';
    } else if (this._isMediumEnergy()) {
      return 'medium-usage';
    } else {
      return 'high-usage';
    };
  };

  _checkMaxTemp() {
    if (this.isPowerSaving) {
      return this._POWER_SAVING_TEMP;
    } else {
      return this._TEMP_MAXIMUM;
    }
  };

  _isLowEnergy() {
    return (this._temp < this._LOW_ENERGY_BOUNDARY)
  };

  _isMediumEnergy() {
    return (this._LOW_ENERGY_BOUNDARY < this._temp && this._temp <= this._MEDIUM_ENERGY_BOUNDARY)
  };

};
