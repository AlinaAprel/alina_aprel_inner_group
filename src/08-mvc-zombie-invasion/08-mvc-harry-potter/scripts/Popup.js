export class Popup {
  showPopup() {
    document.querySelector('#app').style.display = 'none';
    document.querySelector('.popup').style.display = 'block';
  }

  renderPopup(score) {
    const body = document.querySelector('body');
    const popup = document.createElement('div');
    popup.classList.add('popup');

    const popupCard = document.createElement('div');
    popupCard.classList.add('popup__card');

    const popupTitle = document.createElement('h1');
    popupTitle.classList.add('popup__title');
    popupTitle.textContent = `your score: ${score}`;

    const popupDescription = document.createElement('p');
    popupDescription.classList.add('popup__description');
    popupDescription.textContent = 'press ENTER to restart the game';

    popupCard.append(popupTitle);
    popupCard.append(popupDescription);
    popup.append(popupCard);
    body.append(popup);
  }
}
