import _ from 'lodash';
import * as q from  './util.js';

function component() {
  return q.helloPb();
}

document.body.appendChild(component());