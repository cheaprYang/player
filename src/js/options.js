export default option => {  const defaultOption = {    container: option.container || document.querySelector(".player"),    mode: "html5",    live: false,    autoplay: false,    loop: false,    hotkey: true,    volume: 1,    video: {}  };  for (const Key in defaultOption) {    if (defaultOption.hasOwnProperty(Key) && !option.hasOwnProperty(Key)) {      option[Key] = defaultOption[Key];    }  }  return option;};