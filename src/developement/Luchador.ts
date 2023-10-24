import { Character } from './personaje';

export class Luchador extends Character {
  weapon: string;
  charToAdvice = 'rey, luchador, asesor o escudero';
  skillLevel: number;

  constructor(
    name: string,
    family: string,
    age: number,
    emoji: string,
    weapon: string,
    skillLevel: number
  ) {
    super(name, family, age, emoji); //==> El super me ahorra escribir proiedad por propiedad que puse en mi objeto base en Character
    this.weapon = weapon;
    this.skillLevel = skillLevel;
    this.lifeStatus = true;
    this.dialogue = 'Primero pego, luego pregunto';
    this.category = 'fighter';
  }
}
