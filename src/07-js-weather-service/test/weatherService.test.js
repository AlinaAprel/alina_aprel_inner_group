import { WeatherServer } from "../WeatherServer";
import { ClientApp } from "../ClientApp";
import { dataBase } from "../dataBase";

const weatherServer = new WeatherServer();
const clientApp = new ClientApp();

describe('Weather Server class test',  () => {
  test('getWeatherdata() must return dataBase', async () => {
    const data = await weatherServer.getWeatherData();

    expect(data).toEqual(dataBase);
  });

  test('getListOfCities() must return string', async () => {
    const data = await weatherServer.getListOfCities();

    expect(Array.isArray(data)).toBe(true);
  });

  test('getAverageTemp() must return a number', () => {
    const data = weatherServer.getAverageTemp(125, "London");

    expect(typeof data).toEqual('number');
  });

  test('getAverageTemp() must return right answer', () => {
    const data1 = weatherServer.getAverageTemp(0, 34);
    const data2 = weatherServer.getAverageTemp(25, 67);

    expect(data1).toBe(30);
    expect(data2).toBe(10.595238095238095);
  });

  test('getAverageTemp() must return number', () => {
    const data1 = weatherServer.getAverageTemp(0, 34);
    const data2 = weatherServer.getAverageTemp(25, 67);

    expect(typeof data1).toBe('number');
    expect(typeof data2).toBe('number');
  })
});
