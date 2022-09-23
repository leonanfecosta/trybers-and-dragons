import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Necromancer extends Archetype {
  private _energyType: EnergyType;
  private static _countInstances = 0;

  constructor(_name: string) {
    super(_name);
    this._energyType = 'mana';
    Necromancer._countInstances += 1;
  }

  static createdArchetypeInstances() {
    return Necromancer._countInstances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}
