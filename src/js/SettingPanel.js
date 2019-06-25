import utils from './utils'class SettingPanel {  constructor(player){    this.player=player;    this.dom=player.tel;    this.init()  }  init(){    this.flash=this.dom.changeFlash;    this.html5=this.dom.changeHtml5;    this.dom.changeFlash.addEventListener('click',()=>{      const mode=this.player.option.mode;      if (mode=='flash'){        return false      }      this.changePlayer('flash')    },false)    this.dom.changeHtml5.addEventListener('click',()=>{      const mode=this.player.option.mode;      if (mode=='html5'){        return false      }      this.changePlayer('html5')    },false)  }  changePlayer(mode){    const lastPlay=this.player.paused;    this.player.option.mode=mode;    this.player.pause();    utils.sleep(200).then(()=>{      this.player.players.destroy();    })    utils.sleep(500).then(()=>{      this.player.init(true);      if (!lastPlay){        utils.sleep(500).then(()=>this.player.play())      }    })  }  changeActive(mode){    this.flash.classList.remove('active');    this.html5.classList.remove('active');    this[mode].classList.add('active');    this.dom.loading.style.display='block';  }}export default SettingPanel