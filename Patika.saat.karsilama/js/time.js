function yourName() {
    let name = prompt("Adınız nedir", "lütfen sadece adınızı giriniz")
    document.getElementById("perName").innerText= name.toUpperCase()
    
}

function showTime() {
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var day = date.getDay();
  
    if (day == 1) {
      day = "Pazartesi";
    } else if (day == 2) {
      day = "Salı";
    } else if (day == 3) {
      day = "Çarşamba";
    } else if (day == 4) {
      day = "Perşembe";
    } else if (day == 5) {
      day = "Cuma";
    } else if (day == 6) {
      day = "Cumartesi";
    } else if (day == 7) {
      day = "Pazar";
    }
  
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
  
    var time = h + ":" + m + ":" + s + " " + day;
    document.getElementById("myClock").innerText = time;
    document.getElementById("myClock").textContent = time;
  
    setTimeout(showTime, 1000);
  }

  yourName()
  showTime()
