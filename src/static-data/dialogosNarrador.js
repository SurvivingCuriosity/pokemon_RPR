export function obtenerDialogo(
  infoCombate,
  nombreDialogo,
  ataque = "ataque desconocido",
  objeto = "objeto desconocido"
) {
  let dialogoReturn;
  let pokemonCausante;
  if (infoCombate.turno === 1) {
    pokemonCausante = infoCombate.jugador1;
  } else if (infoCombate.turno === 2) {
    pokemonCausante = infoCombate.jugador2;
  }
  switch (nombreDialogo) {
    case "inicioCombate":
      dialogoReturn = [
        {
          texto: "CHAN...CHAN....CHANNN",
          duracion: "corto",
          animacion: "typying",
        },
        {
          texto: "Bienvenidos al combate",
          duracion: "medio",
          animacion: "fade-in",
        },
        {
          texto: "PREPARADOS?????????????",
          duracion: "medio",
          animacion: "typying",
        },
        { texto: "YAAAA!!!!", duracion: "medio", animacion: "typying" },
      ];
      break;
    case "ataque":
      dialogoReturn = [
        {
          texto: `${pokemonCausante.nombre} usó ${ataque}`,
          duracion: "corto",
          animacion: "typying",
        },
      ];
      break;
    case "objeto":
      dialogoReturn = [
        {
          texto: `${pokemonCausante.nombre} usó ${objeto}`,
          duracion: "corto",
          animacion: "typying",
        },
        {
          texto: `No es muy efectivo`,
          duracion: "corto",
          animacion: "typying",
        },
      ];
      break;
    case "turno":
      dialogoReturn = [
        {
          texto: `Turno del jugador ${infoCombate.turno} (${pokemonCausante.nombre}).`,
          duracion: "corto",
          animacion: "typying",
        },
      ];
      break;
    case "victoria":
      dialogoReturn = [
        {
          texto: `${pokemonCausante.nombre} aplastó a su oponente`,
          duracion: "corto",
          animacion: "typying",
        },
      ];
      break;
    case "sin usos":
      dialogoReturn = [
        {
          texto: `No te quedan más...`,
          duracion: "corto",
          animacion: "typying",
        },
      ];
      break;
    case "finNarracion":
      dialogoReturn = [
        { texto: `(...)`, duracion: "corto", animacion: "typying" },
      ];
      break;
    default:
      break;
  }
  return dialogoReturn;
}

export function obtenerDialogoObjeto(infoCombate, objeto) {
  console.log(objeto);

  let dialogoReturn = [];
  let pokemonCausante;
  if (infoCombate.turno === 1) {
    pokemonCausante = infoCombate.jugador1;
  } else if (infoCombate.turno === 2) {
    pokemonCausante = infoCombate.jugador2;
  }

  switch (objeto.nombre) {
    //comió su ****
    case "magdalena":
    case "seta":
    case "limon":
      dialogoReturn.push({
        texto: `${pokemonCausante.nombre} comió su(s) ${objeto.nombreCombate}.`,
        duracion: "corto",
        animacion: "typying",
      });
      break;
    //bebió su ****
    case "pocion":
    case "monster":
    case "litrona":
    case "vino":
      dialogoReturn.push({
        texto: `${pokemonCausante.nombre} bebió de su ${objeto.nombreCombate}.`,
        duracion: "corto",
        animacion: "typying",
      });
      break;
    //usó su ****
    case "pistola":
    case "boli":
    case "carroCompra":
    case "shuriken":
    case "altavoz":
    case "hoja":
    case "nintendo":
      dialogoReturn.push({
        texto: `${pokemonCausante.nombre} usó su ${objeto.nombreCombate}.`,
        duracion: "corto",
        animacion: "typying",
      });
      break;
    case "pajaro":
    case "paloma":
      dialogoReturn.push({
        texto: `${pokemonCausante.nombre} invocó su ${objeto.nombreCombate}.`,
        duracion: "corto",
        animacion: "typying",
      });
      break;
    default:
  }

  switch (objeto.efecto[0].nombre) {
    //comió su ****
    case "cura":
      dialogoReturn.push({
        texto: `${pokemonCausante.nombre} regenera ${objeto.efecto[0].cantidad} HP.`,
        duracion: "corto",
        animacion: "typying",
      });
      break;
    case "ataque":
      dialogoReturn.push({
        texto: `${pokemonCausante.nombre} quitó ${objeto.efecto[0].cantidad} HP.`,
        duracion: "corto",
        animacion: "typying",
      });
      break;
    case "alteraStats":
      dialogoReturn.push({
        texto: `${pokemonCausante.nombre} comió su(s) ${objeto.nombreCombate}.`,
        duracion: "corto",
        animacion: "typying",
      });
      break;
    case "eleccion":
      dialogoReturn.push({
        texto: `${pokemonCausante.nombre} elige ${objeto.nombreCombate}.`,
        duracion: "corto",
        animacion: "typying",
      });
      break;
    default:
  }

  return dialogoReturn;
}
