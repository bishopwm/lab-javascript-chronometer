class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
    setInterval(() => {
      this.currentTime++
    }, 1000)
  }
  getMinutes() {
    let currentMinutes = Math.floor(this.currentTime / 60);
    return currentMinutes;
  }
  getSeconds() {
    let currentSeconds = Math.floor(this.currentTime % 60);
    return currentSeconds;
  }
  twoDigitsNumber() {
    let formattedTime = Math.floor(this.currentTime / 60).toString().padStart(2, '0') + 
    ':' + Math.floor(this.currentTime % 60).toString().padStart(2, '0');

    //console.log(formattedTime);
    
    return formattedTime;
  }
  stopClick() {
    clearInterval(this.intervalId);
  }
  resetClick() {
    this.currentTime = 0;
  }
  splitClick() {
    let formattedTime = Math.floor(this.currentTime / 60).toString().padStart(2, '0') + 
    ':' + Math.floor(this.currentTime % 60).toString().padStart(2, '0');
    return formattedTime;
  }
}
