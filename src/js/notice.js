class Notice {  constructor(player) {    this.player = player;    this.noticeDom = player.tel.notice;    this.noticeTimer = null;  }  notice(txt = "", time = 1800, op = 0.6) {    this.noticeDom.innerHTML = txt;    this.noticeDom.style.opacity = op;    if (this.noticeTimer) {      clearTimeout(this.noticeTimer);      this.noticeTimer = null;    }    if (time && time > 0) {      this.noticeTimer = setTimeout(() => {        this.noticeDom.style.opacity = 0;        clearTimeout(this.noticeTimer);      }, time);    }  }}export default Notice;