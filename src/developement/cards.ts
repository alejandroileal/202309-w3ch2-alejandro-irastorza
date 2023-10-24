import { type Asesor } from './Asesor';
import { type Luchador } from './Luchador';
import { type Squire } from './Squire';
import { type King } from './rey';

export type AnyCharacter = King | Luchador | Asesor | Squire;

export function card(item: AnyCharacter) {
  const template = `
  <li class="character col">
    <div class="card character__card">
      <img src="/img/${item.name.toLowerCase()}.jpg" alt="${item.name} ${
    item.family
  }" class="character__picture card-img-top" />
      <div class="card-body">
        <h2 class="character__name card-title h4">${item.name} ${
    item.family
  }</h2>
        <div class="character__info">
          <ul class="list-unstyled">
            <li>Edad: ${item.age} años</li>
            <li>
              Estado: ${
                item.isAlive
                  ? '<i class="fas fa-thumbs-up">'
                  : '<i class="fas fa-thumbs-down">'
              }
              </i>
              </i>
            </li>
          </ul>
        </div>
        <div class="character__overlay">
          <ul class="list-unstyled">
              ${makeExtraData(item)}
          </ul>
          <div class="character__actions">
            <button class="character__action btn" id="${
              item.name
            }">habla</button>
            <button class="character__action btn">muere</button>
          </div>
        </div>
      </div>
      <i class="emoji">${makEmoji(item.category)}</i>
    </div>
  </li>
`;

  return template;
}
