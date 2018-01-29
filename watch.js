//Electronic watch script
const time = document.querySelector('.time');
function watch() {
      const date = new Date();
      const hours = date.getHours();
      const mins = date.getMinutes();
      const secs = date.getSeconds();
      time.innerHTML = `${hours < 10 ? '0' : ''}${hours}:${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;
      setTimeout("watch()", 1000);
  }
watch();