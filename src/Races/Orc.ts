import Race from './Race';

export default class Orc extends Race {
  private _maxLifePoints: number;
  private static _countInstances = 0;

  constructor(_name: string, _dexterity: number) {
    super(_name, _dexterity);
    this._maxLifePoints = 74;
    Orc._countInstances += 1;
  }

  static createdRacesInstances() {
    return Orc._countInstances;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}
