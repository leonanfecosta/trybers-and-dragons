import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Ranger extends Archetype {
  private _energyType: EnergyType;
  private static _countInstances = 0;

  constructor(_name: string) {
    super(_name);
    this._energyType = 'stamina';
    Ranger._countInstances += 1;
  }

  static createdArchetypeInstances() {
    return Ranger._countInstances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}
