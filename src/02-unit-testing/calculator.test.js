import { Calculator } from './Calculator.js';

it('variables a and b must be numbers', () => {
  const calculator1 = new Calculator(true);
  const calculator2 = new Calculator(false);

  expect(calculator1.sum(4.6, 6.7)).toBe(11);
  expect(calculator2.sum(4.6, 6.7)).toBe(12);
});

it('variable shouldRoundFloor must be boolean', () => {
  const calculator1 = new Calculator(3);

  expect(calculator1.sum(4.6, 7.8)).not.toEqual(13);
});

it('result must be a number', () => {
  const calculator1 = new Calculator(false);

  expect(typeof calculator1.sum(2.3, 4.6)).toBe('number');
});

it('expect correct answer', () => {
  const calculator1 = new Calculator(false);

  expect(calculator1.sum(4, '')).toBe(4);
  expect(calculator1.sum(null, undefined)).toBe(NaN);
});

it('showResult must be called', () => {
  const calculator1 = new Calculator(true);

  expect(calculator1.sumAndShowResult(4, 5)).toBe(9);
});
