import Character from '../app';
import Bowman from '../bowman';
import Swordsman from '../swordsman';
import Magician from '../magician';
import Daemon from '../daemon';
import Undead from '../undead';
import Zombie from '../zombie';

test('should error', () => {
  expect(() => new Character()).toThrow('...');
});

test('should Bowman', () => {
  const expected = 25;
  const res = new Bowman('Иван');
  const response = res.defence;
  expect(response).toBe(expected);
});

test('should Swordsman', () => {
  const expected = 10;
  const res = new Swordsman('Иван');
  const response = res.defence;
  expect(response).toBe(expected);
});

test('should Magician', () => {
  const expected = 40;
  const res = new Magician('Иван');
  const response = res.defence;
  expect(response).toBe(expected);
});

test('should Daemon', () => {
  const expected = 40;
  const res = new Daemon('Иван');
  const response = res.defence;
  expect(response).toBe(expected);
});

test('should Undead', () => {
  const expected = 25;
  const res = new Undead('Иван');
  const response = res.defence;
  expect(response).toBe(expected);
});

test('should Zombie', () => {
  const expected = 10;
  const res = new Zombie('Иван');
  const response = res.defence;
  expect(response).toBe(expected);
});
