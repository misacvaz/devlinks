function toggleMode() {
    const html = document.documentElement
    html.classList.toggle("light")
  
    const img = document.querySelector("#profile img")
  
    if (html.classList.contains("light")) {
      img.setAttribute("src", "./assets/may1.png")
      img.setAttribute("alt", "Imagem para modo claro") // Atualiza o alt se necessário
    } else {
      img.setAttribute("src", "./assets/may2.png")
      img.setAttribute("alt", "Imagem para modo escuro")
    }
  }
  