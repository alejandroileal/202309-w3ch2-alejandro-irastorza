import { Character, CharacterStructure } from './personaje';

export class King extends Character implements CharacterStructure {
  // ==> Pusicmos de ejemplo el implements como ejemplo de cómo agrupar todas las propiedades y heredarselas a las clases, por lo tanto, si quiero en un duturo agregar más, no tengo que ir personaje a personaje.
  yearsOfLeading: number;

  constructor(
    name: string,
    family: string,
    age: number,
    emoji: string,
    yearsOfLeading: number
  ) {
    super(name, family, age, emoji);
    this.dialogue = 'Vais a morir todos';
    this.yearsOfLeading = yearsOfLeading;
    this.category = 'king';
  }
}
