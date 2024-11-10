const examArray = ['exam01.html', 'exam02.html', 'exam03.html', 'exam04.html'];
const PREV = -1;
const NEXT = 1;

// let currentPath = window.location.pathname.slice(8);
let currentPath = window.location.pathname.split('/');
let currentFile = currentPath.pop();
let currentIndex = examArray.findIndex((value) => {
  // console.log(value);
  if (value === currentFile) {
    return value;
  }
});
createNavLink(currentIndex);

function createNavLink(index) {
  const linkWrapper = document.querySelector('.link-wrapper');
  let ulElm = document.createElement('ul');
  ulElm.classList.add('row', 'justify-content-end');
  linkWrapper.append(ulElm);

  let indexArray = [index + PREV, index + NEXT];

  indexArray.forEach((targetIndex) => {
    if (examArray[targetIndex]) {
      let liElm = document.createElement('li');
      liElm.classList.add('col-auto');
      let anchorElm = document.createElement('a');
      anchorElm.href = examArray[targetIndex];
      if (targetIndex < index) {
        anchorElm.innerText = '前の問題へ戻る';
      } else {
        anchorElm.innerText = '次の問題へ進む';
      }
      liElm.append(anchorElm);
      ulElm.append(liElm);
    }
  });
}
