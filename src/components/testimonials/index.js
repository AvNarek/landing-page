const item = document.querySelectorAll('.item');
const left = document.querySelector('.left');
const right = document.querySelector('.right');
let leftCounter = 1;
let rightCounter = item.length - 3;

right.addEventListener('click', () => {
  if (leftCounter >= item.length - 2) leftCounter = 0;
  item.forEach((el) => {
    el.style.transform = `translateX(-${100 * leftCounter}%)`;
  });
  rightCounter = leftCounter - 1;
  leftCounter++;
});

left.addEventListener('click', () => {
  if (rightCounter < 0) rightCounter = item.length - 3;
  item.forEach((el) => {
    el.style.transform = `translateX(-${100 * rightCounter}%)`;
  });
  leftCounter = rightCounter + 1;
  rightCounter--;
});
