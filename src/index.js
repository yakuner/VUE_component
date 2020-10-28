import logo from './assset/imgs/logo.png' 
import './assset/css/my.css'

const image = new Image();
image.src = logo;
document.body.appendChild(image);
document.getElementById('root').innerHTML = '<h3>今天天气真好</h3>'

