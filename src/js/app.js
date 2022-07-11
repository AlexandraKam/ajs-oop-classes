export default class Character {
  constructor(name, type) {
    if (typeof name === 'string' && name.length > 1 && name.length < 11
      && typeof type === 'string' && (type === 'Bowman' || type === 'Swordsman' || type === 'Magician' || type === 'Daemon' || type === 'Undead' || type === 'Zombie')) {
      this.name = name;
      this.type = type;
    } else {
      throw new Error('...');
    }
    this.health = 100;
    this.level = 1;
  }
}
