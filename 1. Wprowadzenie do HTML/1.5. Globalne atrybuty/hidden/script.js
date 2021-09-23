const btnStart = document.querySelector('button');

let elements;

btnStart.addEventListener('click', () => {

  if (btnStart.innerHTML === 'Pokaż więcej') {
    elements = document.querySelectorAll('tr[hidden]');

    for (const elem of elements) {
      elem.removeAttribute('hidden');
    }

    btnStart.innerHTML = 'Pokaż mniej';
  } else {

    for (const elem of elements) {
      elem.setAttribute('hidden', 'hidden');
    }

    btnStart.innerHTML = 'Pokaż więcej';
  }
})




