import Character from '../app';

test('Ошибка в name', () => {
  expect(() => new Character()).toThrow('Ошибка в name');
});
test('Ошибка в type', () => {
  expect(() => new Character('Name', 'Magician1')).toThrow('Ошибка в type');
});
