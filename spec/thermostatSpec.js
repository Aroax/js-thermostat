'use strict';

describe('Thermostat', () => {
  let thermostat;
  beforeEach( () => {
    thermostat = new Thermostat();
  });

  it('it starts with a default temperature of 20', () => {
    expect(thermostat.tempDisplay()).toEqual(20)
  });
});
