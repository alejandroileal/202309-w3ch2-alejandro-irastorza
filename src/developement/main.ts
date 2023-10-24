import { Asesor } from '../Asesor';
import { Luchador } from '../Luchador';
import { Squire } from '../Squire';
import { King } from '../rey';

function main() {
  console.log('Loaded Main :)');
}

const domCardElement = document.querySelector('.characters-list');
if (domCardElement === null) {
  return;
}

card(King);

main();
