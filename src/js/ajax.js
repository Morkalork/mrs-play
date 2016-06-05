var ajax = {
  /**
   * Create an Ajax call
   * @param url The URL to where you want to make your ajax call
   * @param callback The action you want to take when the call returns
   */
  call(url, callback){
    var xmlhttp;
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        callback(xmlhttp.responseText);
      }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
  },
  loadPage(pageName) {
    var url = 'pages/' + pageName + '.html';
    this.call(url, function(html){
      var page = document.getElementById('page');
      page.innerHTML = html;
    });
  }
};