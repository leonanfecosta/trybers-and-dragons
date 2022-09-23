import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Mage extends Archetype {
  private _energyType: EnergyType;
  private static _countInstances = 0;

  constructor(_name: string) {
    super(_name);
    this._energyType = 'mana';
    Mage._countInstances += 1;
  }

  static createdArchetypeInstances() {
    return Mage._countInstances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}