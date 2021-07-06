'use strict';

describe('Feature Test:', () => {
  let thermostat;

  beforeEach(() => {
    thermostat = new Thermostat();
  });

  it('thermostat starts with a default temperature of 20', () => {
    expect(thermostat.tempDisplay()).toEqual(20);
  });
});
