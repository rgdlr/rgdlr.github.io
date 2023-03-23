import style from './index.module.css';
import './index.css';

document.querySelector('#app').innerHTML = `
  <div>
		<div class="inline-block">
			<a href="https://vitejs.dev" target="_blank">
			<img src="vite.svg" class="logo" alt="Vite logo" />
			</a>
			<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
			<img src="javascript.svg" class="logo vanilla" alt="JavaScript logo" />
			</a>
		</div>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`;

function setupCounter(element) {
	let counter = 0;
	const setCounter = (count) => {
		counter = count;
		element.innerHTML = `count is ${counter}`;
	};
	element.addEventListener('click', () => setCounter(counter + 1));
	setCounter(0);
}

setupCounter(document.querySelector('#counter'));

function server() {
	if (import.meta.env.DEV) {
		console.log('DEV Server');
	}

	if (import.meta.env.PROD) {
		console.log('PROD Server');
	}

	console.log(import.meta.env);
}

server();

const h1 = document.querySelector('h1');
h1.classList.add(style.h1);
