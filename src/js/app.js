import '../css/main.scss';
import { RandomGenerator } from './random-generator';

const outPutParagraph = document.querySelector('#outputParagraph');

const outputRandomInt = () => {
  return outPutParagraph.textContent = RandomGenerator.randomInterger();
}

const outputRandomRange = () => {
  return outPutParagraph.textContent = RandomGenerator.randomRange(1, 500);
}

const buttonRndInt = document.querySelector('#randomInt');
const buttonRndRange = document.querySelector('#randomRange');

buttonRndInt.addEventListener('click', outputRandomInt);
buttonRndRange.addEventListener('click', outputRandomRange);
