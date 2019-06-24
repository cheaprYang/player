import Icons from "./icon";export default class Fullscreen {  constructor(player) {    this.player = player;    this.openfull=false  }  isFull() {    return (      document.fullscreenEnable ||      document.webkitFullscreenEnabled ||      document.mozFullScreenEnabled ||      document.msFullscreenEnabled    );  }  enterFullscreen() {    if (!this.isFull()) return false;    const i = this.player.tel.container;    if (i.requestFullscreen) {      i.requestFullscreen();    } else if (i.webkitRequestFullscreen) {      i.webkitRequestFullscreen();    } else if (i.mozRequestFullScreen) {      i.mozRequestFullScreen();    } else if (i.msRequestFullscreen) {      i.msRequestFullscreen();    }    this.openfull = true;  }  exitFullscreen() {    if (document.exitFullscreen) {      document.exitFullscreen();    } else if (document.webkitExitFullscreen) {      document.webkitExitFullscreen();    } else if (document.mozCancelFullScreen) {      document.mozCancelFullScreen();    } else if (document.msExitFullscreen) {      document.msExitFullscreen();    }    this.openfull = false;  }  switch() {    if (this.openfull) {      this.openfull = false;      this.exitFullscreen();      this.player.tel.Full.innerHTML = Icons.FullScreen;    } else {      this.openfull = true;      this.enterFullscreen();      this.player.tel.Full.innerHTML = Icons.ExitFullScreen;    }  }}