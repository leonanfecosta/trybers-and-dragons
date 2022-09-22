import Race from './Race';

export default class Dwarf extends Race {
  private _maxLifePoints: number;
  private static _countInstances = 0;

  constructor(_name: string, _dexterity: number) {
    super(_name, _dexterity);
    this._maxLifePoints = 80;
    Dwarf._countInstances += 1;
  }

  static createdRacesInstances() {
    return Dwarf._countInstances;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}