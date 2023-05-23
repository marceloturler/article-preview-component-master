const ICON_SHARE = document.getElementsByClassName('iconShare')[0];
const ICON_SHARE_MOBILE = document.getElementsByClassName('iconShare')[1]
const SHARE_BALLOON = document.getElementsByClassName('share')[0];

function toggleShareBalloon() {
  SHARE_BALLOON.classList.toggle('activeBalloon');
  ICON_SHARE.classList.toggle('activeIcon');
}

ICON_SHARE.addEventListener('click', toggleShareBalloon);
ICON_SHARE_MOBILE.addEventListener('click', toggleShareBalloon);