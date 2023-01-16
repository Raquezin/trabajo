document.addEventListener("contextmenu", function(event){
      event.preventDefault();
  }, false);

  document.addEventListener("copy", function(event)
      event.clipboardData.setData("text/plain", "No se permite copiar en esta página web");
      event.preventDefault();
  }, false);
