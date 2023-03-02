import { setupCounter } from './counter'
import './style.css'
import typescriptLogo from './typescript.svg'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)















// Bang
// const div = document.createElement('div');
// div.setAttribute('id', 'I-Dont-Exist-LOL');
// document.appendChild(div);
const someElement = document.getElementById('I-Dont-Exist-LOL');
someElement!.innerText = "UNSAFE";
if (someElement) {
  someElement.innerText = "SAFE";
}

// Optional Chaining - ?.
interface IAddress {
  streetNo: number;
  streetName: string;
  town: string;
  province: string;
}
interface IPerson {
  name: string;
  address?: IAddress;
}

const obj: IPerson = {
  name: 'tim',
  address: {
    streetNo: 234,
    streetName: 'Middle St',
    town: 'Centurion',
    province: 'GP'
  }
}

console.log(obj?.address?.province); // GP / undefined / null
obj?.address?.['province']

// myObject.myArray?.[0]

// Nullish Coalescing vs Logical Or

// Double pipe (logical or) looks for anything falsy on the left and then defaults
console.log(obj?.address?.province || 'DEFAULT'); // GP / 'DEFAULT'
console.log(obj?.address?.province ?? 'DEFAULT'); // GP / 'DEFAULT'

