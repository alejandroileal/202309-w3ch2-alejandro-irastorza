import { Character } from './personaje';

export class Asesor extends Character {
  charToAdvice: Character; // ==> Relación inter objetos. Este personaje asesora a todos los demás
  skillLevel: number;

  constructor(
    name: string,
    family: string,
    age: number,
    skillLevel: number,
    emoji: string,
    charToAdvice: Character
  ) {
    super(name, family, age, emoji);
    this.skillLevel = skillLevel;
    this.dialogue = 'No sé por qué, pero creo que voy a morir pronto';
    this.charToAdvice = charToAdvice;
    this.category = 'advisor';
  }
}
