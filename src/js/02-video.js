'use strict';
import Player from '@vimeo/player';

import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
console.log(iframe);
const player = new Player(iframe);

const LOCALE_STORAGE_KEY = 'videoplayer-current-time';

// function savePlay(Data) {
//   localStorage.setItem('LOCALE_STORAGE_KEY', seconds);
//   console.log('played the video!');
// }
// player.on('play');

const onPlay = function ({ seconds }) {
  localStorage.setItem('LOCALE_STORAGE_KEY', seconds);
};
player.on('play', throttle(onPlay, 1000));

const localeSave = () => {
  let timeData = localStorage.getItem('LOCALE_STORAGE_KEY');
  if (timeData) {
    player.setCurrentTime(timeData);
  }
};
localeSave();
