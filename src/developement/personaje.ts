import { Luchador } from './Luchador';

// Declaramos clase abstracta para crear clases hijas y para que esta clase no pueda implementarse. Es la global y nosotros queremos implementar las específicas
export abstract class Character {
  name: string;
  family: string;
  age: number;
  lifeStatus = true;
  emoji: string;
  protected dialogue: string; // => Protected (privada para afuera de la familia, el hijo la deja usar)
  category!: 'king' | 'fighter' | 'advisor' | 'squire'; // ==> No quiero inicializarla pero typescript enfada. Vamos a poner ! para que no nos diga nada ts.

  constructor(name: string, family: string, age: number, emoji: string) {
    this.name = name;
    this.family = family;
    this.age = age;
    this.lifeStatus = true;
    this.emoji = emoji;
    this.dialogue = '';
  }

  speak() {
    return this.dialogue;
  }

  death() {
    this.lifeStatus = false;
  }
}

// Estructura final de cualquir personaje

//Interfaz: define el conjunto de propiedades que puede tener un elemento:
export interface CharacterStructure {
  name: string;
  family: string;
  age: number;
  lifeStatus: boolean;
  emoji: string;
  dialogue: string;
  category: 'king' | 'fighter' | 'advisor' | 'squire';
  yearsOfLeading?: number;
  patron?: Luchador; // ==> El "?" me dice que es opcional.
  servility?: number;
  weapon?: string;
  charToAdvice: CharacterStructure;
  skillLevel: number;
}
