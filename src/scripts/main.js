'use strict';

const decorRectLeftPos = [ [ 82, 248 ],
  [ 131, 72 ],
  [ 233, 527 ],
  [ 269, 254 ],
  [ 446, 565 ],
  [ 481, 177 ] ];

const decorRectRightPos = [ [570, 128],
  [ 351, 213 ],
  [ 271, 406 ],
  [ 199, 112 ],
  [ 148, 523 ],
  [ 95, 321 ] ];

const decorLeftRects = document.querySelector('.mottos__decor--left-side')
  .querySelectorAll('.decor__rect');
const decorRightRects = document.querySelector('.mottos__decor--right-side')
  .querySelectorAll('.decor__rect');

decorLeftRects.forEach((rect, i) => {
  rect.style.left = decorRectLeftPos[i][0] + 'px';
  rect.style.bottom = decorRectLeftPos[i][1] + 'px';
});

decorRightRects.forEach((rect, i) => {
  rect.style.right = decorRectRightPos[i][0] + 'px';
  rect.style.bottom = decorRectRightPos[i][1] + 'px';
});
