'use strict';

describe('Thermostat', () => {
  let thermostat;
  beforeEach( () => {
    thermostat = new Thermostat();
  });

  it('it starts with a default temperature of 20', () => {
    expect(thermostat.tempDisplay()).toEqual(20);
  });

  it('increases the temperature incrementally', () => {
    thermostat.tempUp();
    expect(thermostat.tempDisplay()).toEqual(21);
  });

  it('decreases the temperature incrementally', () => {
    thermostat.tempDown();
    expect(thermostat.tempDisplay()).toEqual(19);
  });

  it('has a minimum temp of 10', () => {
    thermostat.tempDown(10);
    expect(thermostat.tempDisplay()).toEqual(10);
    thermostat.tempDown();
    expect(thermostat.tempDisplay()).toEqual(10);
  });

  it('can switch off default power saving mode', () => {
    expect(thermostat.isPowerSaving()).toEqual(true);
    thermostat.powerSavingOff();
    expect(thermostat.isPowerSaving()).toEqual(false);
  });

  it('has a max temp of 25 when power saving is ON', () => {
    thermostat.powerSavingOn();
    expect(thermostat.isPowerSaving()).toEqual(true);
    thermostat.resetTemp(25);
    thermostat.tempUp();
    expect(thermostat.tempDisplay()).toEqual(25);
  });

  it('has a max temp of 32 when power saving is OFF', () => {
    thermostat.powerSavingOn();
    expect(thermostat.isPowerSaving()).toEqual(true);
    thermostat.resetTemp(32);
    thermostat.tempUp();
    expect(thermostat.tempDisplay()).toEqual(32);
  });

  it('can reset the temperature to default with a reset function', () => {
    thermostat.tempUp();
    thermostat.tempUp();
    expect(thermostat.tempDisplay()).toEqual(22);
    thermostat.resetTemp();
    expect(thermostat.tempDisplay()).toEqual(20);
  });



});
