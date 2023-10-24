/* eslint-disable @typescript-eslint/object-curly-spacing */
/* eslint-disable @typescript-eslint/indent */
import { Asesor } from './Asesor';
import { Luchador } from './Luchador';
import { Squire } from './Squire';
import { type AnyCharacter } from './cards';
import { King } from './rey';

export const charactersArray: AnyCharacter[] = [
  new King('Joffrey', 'Baratheon', 39, '👑', 22),
  new Luchador('Jaime', 'Lannister', 33, '🗡', 'Espadas', 5),
  new Luchador('Daenerys', 'Targaryen', 34, '🗡', 'Espadas', 7),
  new Squire('Bronn', 'Bronn', 32, '🛡', 7),
];

charactersArray.push(
  new Asesor('Tyrion', 'Lannister', 45, 8, '🎓', charactersArray[2])
);
