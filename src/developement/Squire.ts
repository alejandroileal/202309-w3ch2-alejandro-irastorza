import { Luchador } from './Luchador';
import { Character } from './personaje';

export class Squire extends Character {
  patron: Luchador;
  servility: number;

  constructor(
    name: string,
    family: string,
    age: number,
    emoji: string,
    servilityGrade: number
  ) {
    super(name, family, age, emoji);
    this.dialogue = 'Vais a morir todos';
    this.patron = Luchador;
    this.servility = servilityGrade;
    this.dialogue = 'soy un looser';
    this.category = 'squire';
  }
}
