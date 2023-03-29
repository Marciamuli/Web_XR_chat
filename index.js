  // Quando o botão é clicado, abre o AR
  arButton.addEventListener('click', () => {
    // Inicializa o ARCoreXR
    const xr = new ARCoreXR(canvas);
    xr.start({}).then(() => {
      // Adiciona o canvas ao corpo da página
      document.body.appendChild(canvas);
    });
  });

