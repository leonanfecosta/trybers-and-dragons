import Race from './Race';

export default class Elf extends Race {
  private _maxLifePoints: number;
  private static _countInstances = 0;

  constructor(_name: string, _dexterity: number) {
    super(_name, _dexterity);
    this._maxLifePoints = 99;
    Elf._countInstances += 1;
  }

  static createdRacesInstances() {
    return Elf._countInstances;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}
