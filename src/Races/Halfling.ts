import Race from './Race';

export default class Halfling extends Race {
  private _maxLifePoints: number;
  private static _countInstances = 0;

  constructor(_name: string, _dexterity: number) {
    super(_name, _dexterity);
    this._maxLifePoints = 60;
    Halfling._countInstances += 1;
  }

  static createdRacesInstances() {
    return Halfling._countInstances;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}
