import "./styles/index.scss";import Player from "./player";const palys = new Player({  container: document.querySelector(".player-mp4"),  mode: "html5",  autoplay: false,  loop: false,  video: {    //https://cdn.ishunmi.net/output.mp4    //  src: "/superstart.flv",    src: "https://video-dev.github.io/streams/x36xhzz/x36xhzz.m3u8",    type: "hls",    pic: "https://i.loli.net/2019/06/06/5cf8c5d9c57b510947.png"  }});// const palys2 = new Player({//   container: document.querySelector(".player-flv"),//   mode: "flash",//   autoplay:false,//   loop:false,//   video: {//     //https://cdn.ishunmi.net/output.mp4//     src: "/superstart.flv",//     type: "flv"//   }// });export default Player;