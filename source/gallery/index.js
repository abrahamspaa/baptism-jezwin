import Viewer from 'viewerjs';
import 'viewerjs/dist/viewer.min.css';
import './index.css';

export function initViewer ( log ) {

  const pictures = document.querySelector('.viewer-pictures-element');

  const options = {
    // inline: true,
    url: 'data-original',
    ready: (e) => {
      log(e.type);
    },
    show: (e) => {
      log(e.type);
    },
    shown: (e) => {
      log(e.type);
    },
    hide: (e) => {
      log(e.type);
    },
    hidden: function (e) {
      log(e.type);
    },
    view: function (e) {
      log(e.type);
    },
    viewed: function (e) {
      log(e.type);
    },
    movable: false,
    rotatable: true,
    scalable: false,
    fullscreen: false,
    interval: 1000
  };

  new Viewer(pictures, options);
}
