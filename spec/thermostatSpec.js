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
});
