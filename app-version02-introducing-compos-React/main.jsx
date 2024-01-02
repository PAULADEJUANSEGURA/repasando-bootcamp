/* Con la instalacion de BABEL StandAlone */

const root = document.querySelector('#root');

const virtualRoot = ReactDOM.createRoot(root);

const title = <h1>Hola mundo desde REACT con BABEL</h1>

const color1 = <li>Color ROJO</li>
const color2 = <li>Color AZUL</li>
const color3 = <li>Color NARANJA</li>

const colors = <ul> {color1} {color2} {color3} </ul>

virtualRoot.render([title, colors]);