import { Asesor } from '../Asesor';
import { Luchador } from '../Luchador';
import { Squire } from '../Squire';
import { Character, CharacterStructure } from '../personaje';
import { King } from '../rey';

export const repoSerial = (): CharacterStructure => {
  //==> Lo que devuelve mi repo serán los elementos serializados de CharacterStructure. Me devuelve un flujo de datos que se usan en el front (Los datos se envías sin métodos ==> Datos puros)

  const characters: Character[] = [
    new King('Joffrey', 'Baratheon', 34, ':)', 19),
    new Luchador('Daenerys', 'Apellido', 26, ':)', 'dragones', 9),
  ];

  characters.push(new Asesor('', '', 34, 9, ':)', characters[1]));
  characters.push(new Squire('', '', 25, ':)', 8));

  // Serialización de datos(Hacer que su clase no se mencione en consola)

  return JSON.parse(JSON.stringify(characters)); // ==> del back al front

  // Ejecutamos node index.js y verificamos que las clases no se mencionen
};
