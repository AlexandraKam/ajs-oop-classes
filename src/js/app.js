export default class Character {
  constructor(name, type) {
    const types = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
    if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
      throw new Error('Ошибка в name');
    } else {
      this.name = name;
    }
    if (!types.includes(type)) {
      throw new Error('Ошибка в type');
    } else {
      this.type = type;
    }
    this.health = 100;
    this.level = 1;
  }
}
