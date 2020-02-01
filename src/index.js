import 'normalize.css';
import './styles/style.scss';

let homepage = document.getElementById('homepage');
let examplePage = document.getElementById('example-page');
import mags from '../src/img/mags.png';


document.addEventListener("DOMContentLoaded", () => {


  if (homepage) {
    console.log('homepage');
    var magsBlock = document.getElementById('mags');
    magsBlock.src = mags;
  }

  if (examplePage) {
    console.log('example page. dont forget to add page name and template to webpack dev and production.');
  }

});
