export type Fuente = { medio: string; url: string };

export type Pieza = {
  slug: string;
  titulo: string;
  /** Título breve para encabezados: cabe en dos líneas en cualquier ancho. */
  corto: string;
  sala: string;
  tipo: string;
  autoria?: string;
  fecha?: string;
  resumen: string;
  contexto: string;
  /** Número del objeto en el catálogo en línea del Museo Nacional, si tiene registro. */
  catalogo?: number;
  /** Fuente externa, para piezas que no constan en el catálogo del Museo. */
  fuenteExterna?: { texto: string; url: string };
  /** Fotografía de la pieza, si existe. */
  imagen?: {
    archivo: string;
    alt: string;
    credito?: string;
    /** ancho / alto de la foto, para que el marco la acompañe */
    ratio?: number;
    /** El catálogo del Museo marca esta imagen con restricción de derechos. */
    restringida?: boolean;
  };
};

export const TOTAL_REPORTADO = 30;

export const FUENTES: Fuente[] = [
  {
    medio: "La Silla Vacía",
    url: "https://www.lasillavacia.com/silla-nacional/gobierno-ordeno-desmontar-mas-de-30-obras-del-museo-nacional/",
  },
  {
    medio: "El Espectador",
    url: "https://www.elespectador.com/el-magazin-cultural/gobierno-retira-30-piezas-del-museo-nacional-de-colombia-sobre-paz-diversidad-y-memoria/",
  },
  {
    medio: "Infobae",
    url: "https://www.infobae.com/colombia/2026/10/16/ministra-de-cultura-paola-holguin-justifico-el-desmonte-de-30-obras-que-estaban-expuesta-en-el-museo-nacional-adoctrinamiento-politico/",
  },
  {
    medio: "El País (Cali)",
    url: "https://www.elpais.com.co/cultura/ministerio-de-cultura-habria-desmontado-mas-de-30-obras-del-museo-nacional-de-colombia-denuncian-censura-1613.html",
  },
];

export const PIEZAS: Pieza[] = [
  {
    slug: "bandera-elizabeth-castillo",
    corto: "Bandera de Elizabeth Castillo",
    titulo: "Bandera del orgullo gay perteneciente a Elizabeth Castillo",
    sala: "Hacer sociedad",
    tipo: "Objeto textil — tela cosida a máquina, 30 × 66 cm",
    autoria: "Fabricante desconocido",
    fecha: "Ca. 2010",
    catalogo: 26225,
    imagen: { archivo: "/prensa/bandera-orgullo.jpg", alt: "Bandera de seis franjas (violeta, azul, verde, amarillo, naranja y rojo) tendida sobre una mesa.", credito: "", ratio: 1.333, restringida: true },
    resumen: "Bandera del orgullo gay que perteneció a la activista Elizabeth Castillo, fabricada hacia 2010 por un fabricante desconocido. Mide 30 × 66 cm.",
    contexto: "Según la prensa, hacía parte de cerca de diez piezas sobre la historia LGBTIQ+ y los movimientos feministas en la sala «Hacer sociedad», segundo piso. Se cuenta entre las piezas que el equipo señala como retiradas; el Museo no ha publicado el inventario.",
  },
  {
    slug: "campana-marcha-lgbt-2006",
    corto: "Campaña de la marcha LGBT, pieza lésbica",
    titulo: "Campaña publicitaria de la marcha LGBT 2006. Pieza Lésbica",
    sala: "Hacer sociedad",
    tipo: "Material gráfico — papel adherido a madera aglomerada, 66 × 30 × 3 cm",
    autoria: "Alcaldía Mayor de Bogotá",
    fecha: "2006",
    catalogo: 26222,
    imagen: { archivo: "/prensa/campana-lgbt-2006-lesbica.jpg", alt: "Plegable negro con el texto «LGBT 28:06:06», dos símbolos femeninos entrelazados con dos rostros en blanco y negro, y el lema «Bogotá sin indiferencia».", credito: "Museo Nacional de Colombia", ratio: 0.75, restringida: true },
    resumen: "Pieza lésbica de la campaña publicitaria de la marcha LGBT de 2006, impulsada por la Alcaldía Mayor de Bogotá con el lema «Bogotá sin indiferencia».",
    contexto: "La prensa la señaló entre las piezas retiradas de «Hacer sociedad». Se cuenta entre las piezas que el equipo señala como retiradas; el Museo no ha publicado el inventario.",
  },
  {
    slug: "impreso-si-mujer-derechos-reproductivos",
    corto: "Derechos reproductivos de la mujer",
    titulo: "Derechos reproductivos de la mujer",
    sala: "Hacer sociedad",
    tipo: "Impreso — tinta sobre papel, 48 × 33,2 cm",
    autoria: "Fundación Si Mujer",
    fecha: "1993",
    catalogo: 16470,
    imagen: { archivo: "/prensa/derechos-reproductivos-si-mujer.jpg", alt: "Plegable con ilustraciones de rostros de mujeres entre plantas y flores, y un texto en el centro.", credito: "", ratio: 0.773, restringida: true },
    resumen: "Impreso ilustrado de la Fundación Si Mujer sobre los derechos reproductivos de las mujeres, de 1993.",
    contexto: "Hacía parte del recorrido sobre movimientos feministas en «Hacer sociedad». Se cuenta entre las piezas que el equipo señala como retiradas; el Museo no ha publicado el inventario.",
  },
  {
    slug: "fotografia-por-una-colombia-incluyente",
    corto: "«Por una Colombia incluyente»",
    titulo: "Marcha de la ciudadanía plena LGBT: Por una Colombia incluyente. El cuerpo: primer territorio de paz",
    sala: "Hacer sociedad",
    tipo: "Fotografía en color",
    autoria: "Germán Humberto Rincón Perfetti",
    fecha: "2004",
    fuenteExterna: { texto: "Secretaría Distrital de la Mujer de Bogotá, sobre la Marcha por la Ciudadanía Plena LGBT (contexto de la marcha)", url: "https://antiguo.sdmujer.gov.co/print/243" },
    imagen: { archivo: "/prensa/marcha-por-una-colombia-incluyente.jpg", alt: "Fotografía aérea de una avenida de Bogotá llena de gente marchando, con letras que forman las siglas LGBT y banderas de colores.", ratio: 1.596 },
    resumen: "Fotografía en color de Germán Humberto Rincón Perfetti de la marcha de la ciudadanía plena LGBT de 2004, bajo el lema «Por una Colombia incluyente. El cuerpo: primer territorio de paz».",
    contexto: "No consta en el catálogo en línea del Museo Nacional. Los datos (autor, año 2004, fotografía en color y el lema de la marcha) salen de la cédula de la pieza que circuló con la imagen; no encontré otra fuente que confirme el lema ni el año. Según la Secretaría Distrital de la Mujer, la marcha se realiza en Bogotá de manera anual desde 1996. Se cuenta entre las piezas que el equipo señala como retiradas; el Museo no ha publicado el inventario.",
  },
  {
    slug: "la-ventana-gay-no-1",
    corto: "Ventana Gay, n.º 1",
    titulo: "Revista Ventana Gay, n.º 1",
    sala: "Hacer sociedad",
    tipo: "Publicación periódica — tinta sobre papel, 21 × 20 cm",
    autoria: "Manuel Antonio Velandia Mora y León Zuleta",
    fecha: "1980",
    fuenteExterna: { texto: "Guerrero Bautista, «Saltemos por la ventana»: surgimiento de la revista «Ventana Gay» desde el punto de vista de Manuel Antonio Velandia Mora, uno de sus fundadores (entrevista, 2018)", url: "http://dx.doi.org/10.5007/1984-8412.2018v15n3p3263" },
    imagen: { archivo: "/prensa/ventana-gay-1.jpg", alt: "Portada de Ventana Gay n.º 1: el título sobre una gran mano abierta, dibujada encima de una fachada de ventanas.", ratio: 0.73 },
    resumen: "Primer número de Ventana Gay, de 1980: una mano abierta dibujada sobre una fachada de ventanas, bajo el título de la revista.",
    contexto: "No consta en el catálogo en línea del Museo Nacional. Los datos salen de la propia revista y de una entrevista a Manuel Velandia, uno de sus fundadores: Ventana Gay se considera la primera revista colombiana de distribución masiva y continuada sobre temática homosexual, gestada en 1980. Velandia recuerda que llegaron a sacar 23 o 24 números, y se imprimía con una roto offset, con la composición hecha a mano. Los datos de técnica y medidas (tinta sobre papel, 21 × 20 cm) vienen de la ficha que acompañó la imagen. Se cuenta entre las piezas que el equipo señala como retiradas; el Museo no ha publicado el inventario.",
  },
  {
    slug: "la-ventana-gay-no-2",
    corto: "Ventana Gay, n.º 2",
    titulo: "Revista Ventana Gay, n.º 2",
    sala: "Hacer sociedad",
    tipo: "Publicación periódica — revista impresa",
    autoria: "Colectivo de Ventana Gay (Manuel Antonio Velandia Mora, León Zuleta y otros)",
    fecha: "Octubre",
    fuenteExterna: { texto: "Guerrero Bautista, «Saltemos por la ventana»: surgimiento de la revista «Ventana Gay» desde el punto de vista de Manuel Antonio Velandia Mora, uno de sus fundadores (entrevista, 2018)", url: "http://dx.doi.org/10.5007/1984-8412.2018v15n3p3263" },
    imagen: { archivo: "/prensa/ventana-gay-2.jpg", alt: "Portada de Ventana Gay n.º 2, Bogotá, valor $30: «Técnicas del amor gay», «La ley y la homosexualidad», «Lesbianismo / feminismo: liberación ¿para qué?».", ratio: 0.725 },
    resumen: "Segundo número de Ventana Gay, Bogotá, a $30. En portada anuncia «Técnicas del amor gay», «La ley y la homosexualidad» y «Lesbianismo / feminismo: liberación ¿para qué?».",
    contexto: "No consta en el catálogo en línea del Museo Nacional. Los datos salen de la propia revista y de una entrevista a Manuel Velandia, uno de sus fundadores: Ventana Gay se considera la primera revista colombiana de distribución masiva y continuada sobre temática homosexual, gestada en 1980. Velandia recuerda que llegaron a sacar 23 o 24 números, y se imprimía con una roto offset, con la composición hecha a mano. La portada indica «Octubre», sin año visible. Se cuenta entre las piezas que el equipo señala como retiradas; el Museo no ha publicado el inventario.",
  },
  {
    slug: "periodico-jano-2001",
    corto: "Periódico «Jano», n.º 1",
    titulo: "Jano Periódico, n.° 1",
    sala: "Hacer sociedad",
    tipo: "Publicación periódica — impreso y encuadernado, 20,8 × 16,4 cm",
    autoria: "Andrés Eduardo Suárez y Diego Álvarez",
    fecha: "Diciembre de 2001",
    catalogo: 26187,
    imagen: { archivo: "/prensa/periodico-jano-2001.jpg", alt: "Portada del periódico «Jano», n.º 1, con dos brazos entrelazados en blanco y negro y el texto «La homosexualidad, una forma digna de vivir».", credito: "", ratio: 0.75, restringida: true },
    resumen: "Primer número del periódico «Jano», de diciembre de 2001. En su portada, dos brazos entrelazados y la frase «La homosexualidad, una forma digna de vivir».",
    contexto: "Es una de las publicaciones del movimiento LGBT colombiano que figuran entre las piezas señaladas. Se cuenta entre las piezas que el equipo señala como retiradas; el Museo no ha publicado el inventario.",
  },
  {
    slug: "impreso-jaime-pardo-leal-1986",
    corto: "Impreso de la UP: Jaime Pardo Leal",
    titulo: "Impreso Unión Patriótica ¡Vote el 25 de mayo por Jaime Pardo Leal y las reformas políticas que propone la UP!",
    sala: "Hacer sociedad",
    tipo: "Impreso — tinta sobre papel, 26,5 × 13,6 cm",
    autoria: "Editorial Colombia Nueva Ltda.",
    fecha: "1986",
    catalogo: 15530,
    imagen: { archivo: "/prensa/impreso-pardo-leal-1986.jpg", alt: "Plegable verde y amarillo de la Unión Patriótica con el retrato de Jaime Pardo Leal y el texto «¡Vote el 25 de mayo por Jaime Pardo Leal y las reformas políticas que propone la UP!».", ratio: 1.467 },
    resumen: "Plegable de 1986 de la Unión Patriótica que presenta a Jaime Pardo Leal y pide votar por él el 25 de mayo y por las reformas políticas que propone la UP.",
    contexto: "Es un impreso de campaña de la Unión Patriótica, el movimiento político de los afiches de Jaramillo Ossa y de otros objetos sobre la violencia política de los años 80 y 90. El catálogo del Museo lo registra en la «Reserva Bóveda de Documentos». Se cuenta entre las piezas que el equipo señala como retiradas; el Museo no ha publicado el inventario.",
  },
  {
    slug: "afiche-bernardo-jaramillo-ossa",
    corto: "Afiche de Jaramillo Ossa",
    titulo: "Afiche en homenaje a la candidatura presidencial de Bernardo Jaramillo",
    sala: "Hacer sociedad",
    tipo: "Afiche — impreso, 69 × 49 cm",
    autoria: "Centro de Memoria, Paz y Reconciliación",
    fecha: "Abril de 2010",
    catalogo: 18443,
    imagen: { archivo: "/prensa/afiche-jaramillo.jpg", alt: "Afiche verde de Bernardo Jaramillo con la mano levantada y el lema «¡Venga esa mano, país!».", credito: "Museo Nacional de Colombia, fotografía de Samuel Monsalve Parra", ratio: 0.702, restringida: true },
    resumen: "Afiche del Centro de Memoria, Paz y Reconciliación en homenaje a la candidatura presidencial de Bernardo Jaramillo Ossa, candidato de la Unión Patriótica.",
    contexto: "Jaramillo Ossa fue asesinado el 22 de marzo de 1990. El afiche formaba parte de los objetos sobre la violencia política de los años 80 y 90. Se cuenta entre las piezas que el equipo señala como retiradas; el Museo no ha publicado el inventario.",
  },
  {
    slug: "afiche-carlos-pizarro",
    corto: "Afiche de Carlos Pizarro",
    titulo: "Afiche en homenaje a la candidatura presidencial de Carlos Pizarro",
    sala: "Hacer sociedad",
    tipo: "Afiche — impreso, 69,4 × 49 cm",
    autoria: "Centro de Memoria, Paz y Reconciliación",
    fecha: "Abril de 2010",
    catalogo: 18442,
    imagen: { archivo: "/prensa/afiche-pizarro.jpg", alt: "Afiche de Carlos Pizarro con sombrero y micrófono, y el lema «entre todos cambiaremos la historia de Colombia».", credito: "Museo Nacional de Colombia", ratio: 0.729 },
    resumen: "Afiche del Centro de Memoria, Paz y Reconciliación en homenaje a la candidatura presidencial de Carlos Pizarro Leongómez, excomandante del M-19.",
    contexto: "Pizarro fue asesinado el 26 de abril de 1990, siendo candidato presidencial. La pieza fue retirada junto a otros objetos de ese periodo. Se cuenta entre las piezas que el equipo señala como retiradas; el Museo no ha publicado el inventario.",
  },
  {
    slug: "brazalete-alianza-democratica-m19",
    corto: "Brazalete de la AD M-19",
    titulo: "Brazalete del partido Alianza Democrática M-19",
    sala: "Hacer sociedad",
    tipo: "Objeto — cuero cosido y pintado, 10,7 × 25,7 cm",
    autoria: "Alianza Democrática M-19",
    catalogo: 15002,
    imagen: { archivo: "/prensa/brazalete-m19.jpg", alt: "Brazalete azul, blanco y rojo con las letras AD-M19.", credito: "Museo Nacional de Colombia", ratio: 1.229 },
    resumen: "Brazalete de cuero cosido y pintado de la Alianza Democrática M-19, movimiento político surgido del proceso de paz con esa guerrilla.",
    contexto: "Objeto asociado a la violencia política de los años 80 y 90, reportado entre las piezas desmontadas. Se cuenta entre las piezas que el equipo señala como retiradas; el Museo no ha publicado el inventario.",
  },
  {
    slug: "el-baligrafo",
    corto: "Bolígrafo de la paz",
    titulo: "Bolígrafo con el que se firmó el primer Acuerdo de Paz con las FARC",
    sala: "Hacer sociedad",
    tipo: "Objeto — metal y tinta, fabricación industrial, 13,6 cm",
    autoria: "Parker",
    fecha: "Ca. 2016",
    catalogo: 24873,
    imagen: { archivo: "/prensa/boligrafo-paz.jpg", alt: "Bolígrafo plateado y dorado de la marca Parker.", credito: "Museo Nacional de Colombia, fotografía de Samuel Monsalve Parra", ratio: 0.267 },
    resumen: "Bolígrafo Parker con el que se firmó el primer Acuerdo de Paz con las FARC, hacia 2016. En la prensa se le conoce como el «Balígrafo».",
    contexto: "Estaba en el muro «Reivindicación de Nación – De la Constitución de 1991 al Proceso de Paz de 2016». Según los reportes, ese muro quedó casi vacío. Se cuenta entre las piezas que el equipo señala como retiradas; el Museo no ha publicado el inventario.",
  },
  {
    slug: "tarjeton-septima-papeleta",
    corto: "Tarjetón de la Séptima Papeleta",
    titulo: "Tarjetón de la Séptima Papeleta",
    sala: "Hacer sociedad",
    tipo: "Documento electoral",
    fecha: "1990",
    imagen: { archivo: "/prensa/tarjeton-asamblea-constituyente.jpg", alt: "Papeleta color papel kraft con el texto «Voto por Colombia, sí a una Asamblea Nacional Constituyente».", credito: "", ratio: 1.571 },
    resumen: "Tarjetón vinculado al movimiento ciudadano de la Séptima Papeleta, que condujo a la Asamblea Nacional Constituyente: «Voto por Colombia. Sí a una Asamblea Nacional Constituyente».",
    contexto: "Hacía parte del muro sobre la Constitución de 1991 y el proceso de paz. No encontré su registro en el catálogo del Museo. Se cuenta entre las piezas que el equipo señala como retiradas; el Museo no ha publicado el inventario.",
  },
  {
    slug: "afiche-violencia-contra-la-mujer-1989",
    corto: "Afiche contra la violencia hacia la mujer",
    titulo: "Afiche de la Jornada internacional «No a la violencia contra la mujer. Por un día sin violencia ni en la casa ni en el país»",
    sala: "Hacer sociedad",
    tipo: "Afiche — impreso, 49 × 33,7 cm",
    autoria: "Casa de la Mujer; ilustración de Diana Castellanos Aranguren",
    fecha: "25 de noviembre de 1989",
    catalogo: 16492,
    imagen: { archivo: "/prensa/afiche-violencia-mujer-1989.jpg", alt: "Afiche negro y amarillo: una mujer de perfil mira un sol blanco desde una ventana, con el texto «Por un día sin violencia ni en la casa ni en el país».", credito: "Museo Nacional de Colombia", ratio: 0.693 },
    resumen: "Afiche de la Jornada Internacional No a la Violencia contra la Mujer, convocada para el 25 de noviembre de 1989.",
    contexto: "Lo firma la Casa de la Mujer, con ilustración de Diana Castellanos Aranguren. Se cuenta entre las piezas que el equipo señala como retiradas; el Museo no ha publicado el inventario.",
  },
  {
    slug: "afiche-ciclo-rosa-2017",
    corto: "Afiche del Ciclo Rosa 2017",
    titulo: "Afiche promocional del Ciclo Rosa en la Cinemateca Distrital",
    sala: "Hacer sociedad",
    tipo: "Afiche — impreso, 49,3 × 32,4 cm",
    autoria: "Cinemateca Distrital, IDARTES y Jonathan Cárdenas Suárez",
    fecha: "Septiembre de 2017",
    catalogo: 26409,
    imagen: { archivo: "/prensa/afiche-ciclo-rosa-2017.jpg", alt: "Afiche rosa y púrpura: una figura de máscara negra sostiene una taza y su falda es una tetera, con el texto «Ciclo rosa, celebra la diversidad».", credito: "Museo Nacional de Colombia, fotografía de Samuel Monsalve Parra", ratio: 0.661 },
    resumen: "Afiche del Ciclo Rosa, muestra de cine de la diversidad sexual que La Cinemateca Distrital presentó del 15 al 24 de septiembre de 2017, al cumplir 16 años.",
    contexto: "En el afiche figuran la Alcaldía Mayor de Bogotá y varias entidades aliadas. Se cuenta entre las piezas que el equipo señala como retiradas; el Museo no ha publicado el inventario.",
  },
  {
    slug: "manifiesto-internacional-1978",
    corto: "Manifiesto internacional de 1978",
    titulo: "Manifiesto Internacional de la campaña contracepción, aborto y no a la esterilización forzada elaborado en el Encuentro Nacional de Mujeres (Cali)",
    sala: "Hacer sociedad",
    tipo: "Documento — fotocopiado, 33 × 21,9 cm",
    autoria: "Autoría desconocida",
    fecha: "Diciembre de 1978",
    catalogo: 16491,
    imagen: { archivo: "/prensa/documento-mecanografiado.jpg", alt: "Dos hojas fotocopiadas con texto a máquina, una junto a la otra.", credito: "", ratio: 1.354, restringida: true },
    resumen: "Manifiesto internacional de la campaña por la contracepción, el aborto y contra la esterilización forzada, elaborado en el Encuentro Nacional de Mujeres, en Cali, en diciembre de 1978.",
    contexto: "Es un documento del movimiento feminista colombiano que figura entre las piezas señaladas. Se cuenta entre las piezas que el equipo señala como retiradas; el Museo no ha publicado el inventario.",
  },
  {
    slug: "cartilla-cuerpos-en-prision",
    corto: "Cartilla «Cuerpos en prisión»",
    titulo: "Cuerpos en prisión. Mentes en acción. Cartilla para la Defensa de los Derechos de las Mujeres Trans y Hombres Gais Privados de la Libertad",
    sala: "Hacer sociedad",
    tipo: "Impreso — cartilla encuadernada, 21 × 13,5 cm",
    autoria: "Red Comunitaria Trans (RCT), con Estefanía Méndez Ortiz y Natalia Espitia Pachón",
    fecha: "2015",
    catalogo: 26376,
    imagen: { archivo: "/prensa/cartilla-cuerpos-en-prision.jpg", alt: "Portada de la cartilla «Cuerpos en prisión, mentes en acción», con ilustraciones de cuatro rostros de mujeres trans sobre franjas verticales grises.", credito: "", ratio: 0.654, restringida: true },
    resumen: "Cartilla de 2015 de la Red Comunitaria Trans para la defensa de los derechos de las mujeres trans y los hombres gais privados de la libertad. Su portada reúne cuatro rostros ilustrados.",
    contexto: "Es una de las publicaciones del activismo trans que figuran entre las piezas señaladas. Se cuenta entre las piezas que el equipo señala como retiradas; el Museo no ha publicado el inventario.",
  },
  {
    slug: "zapatos-morados",
    corto: "Zapatos del Proyecto Lafarota",
    titulo: "Par de zapatos – Proyecto Lafarota",
    sala: "Hacer sociedad",
    tipo: "Objeto testimonial — indumentaria, cuero sintético y PVC cosido a máquina, 13 × 29 × 10 cm",
    autoria: "Red Comunitaria Trans (RCT)",
    fecha: "2015",
    catalogo: 25719,
    imagen: { archivo: "/prensa/zapatos.jpg", alt: "Par de zapatos de cuero morado con tiras azul turquesa, bordes de encaje verde y cordones rosados.", credito: "Museo Nacional de Colombia, fotografía de Cristian Camilo Mosquera Mora", ratio: 1.501 },
    resumen: "Par de zapatos del Proyecto Lafarota, de la Red Comunitaria Trans, de 2015: cuero sintético morado con tiras azul turquesa, bordes de encaje verde y cordones rosados.",
    contexto: "Según el catálogo del Museo, es un objeto testimonial de la colección de Etnografía y estaba en la sala «Sala 11: Hacer sociedad». Se cuenta entre las piezas que el equipo señala como retiradas; el Museo no ha publicado el inventario.",
  },
  {
    slug: "periodico-nuestras-mujeres-1954",
    corto: "Periódico «Nuestras Mujeres»",
    titulo: "Periódico «Nuestras Mujeres», octubre de 1954",
    sala: "Hacer sociedad",
    tipo: "Publicación periódica — impreso, 34,8 × 25,2 cm",
    autoria: "Asociación Democrática de Mujeres Colombianas",
    fecha: "Octubre de 1954",
    catalogo: 23387,
    imagen: { archivo: "/prensa/nuestras-mujeres-1954.jpg", alt: "Portada del periódico «Nuestras Mujeres», octubre de 1954, con el artículo «La tercera fuerza» y una moción de saludo.", credito: "", ratio: 0.725, restringida: true },
    resumen: "Ejemplar de octubre de 1954 de «Nuestras Mujeres», órgano de la Asociación Democrática de Mujeres Colombianas, con el artículo «La tercera fuerza» en portada.",
    contexto: "Es una de las publicaciones del movimiento de mujeres que figuran entre las piezas señaladas. Se cuenta entre las piezas que el equipo señala como retiradas; el Museo no ha publicado el inventario.",
  },
  {
    slug: "yembe-toque-lesbico",
    corto: "Yembé de Toque Lésbico",
    titulo: "Yembé de la batucada Toque Lésbico",
    sala: "Hacer sociedad",
    tipo: "Instrumento musical — piel de venado y cuero, 31,5 cm de diámetro × 60 cm de alto",
    autoria: "Fabricante desconocido",
    fecha: "2009",
    fuenteExterna: { texto: "Elizabeth Castillo, «De la máscara al tambor», El Tiempo, 8 de julio de 2022", url: "https://www.eltiempo.com/opinion/columnistas/elizabeth-castillo/de-la-mascara-al-tambor-columna-de-elizabeth-castillo-685819" },
    imagen: { archivo: "/prensa/yembe-toque-lesbico.jpg", alt: "Yembé con una cinta naranja, y debajo la cédula que describe la batucada Toque Lésbico.", credito: "captura de @cuestionp", ratio: 0.749 },
    resumen: "Yembé de la batucada Toque Lésbico, formada en Bogotá en 2009.",
    contexto: "No consta en el catálogo en línea del Museo Nacional. Los datos de la pieza (fabricante desconocido, 2009, piel de venado y cuero, 31,5 cm de diámetro × 60 cm de alto) salen de la cédula que circuló en redes (captura de @cuestionp). Sobre la batucada, Elizabeth Castillo, activista y columnista, cuenta que tocaba el bombo en «El toque lésbico»: «La iniciamos mujeres lesbianas.» Según la cédula, el movimiento lésbico en Colombia surgió a finales del siglo XX dentro del feminismo y se articuló después con los colectivos LGBT, y la batucada salía a las calles contra la violencia de género. Se cuenta entre las piezas que el equipo señala como retiradas; el Museo no ha publicado el inventario.",
  },
  {
    slug: "libertinaje-y-desorden",
    corto: "Libertinaje y desorden",
    titulo: "Libertinaje y desorden",
    sala: "Memoria y Nación",
    tipo: "Estampa — aguafuerte, punta seca y buril sobre papel, 38 × 56 cm",
    autoria: "Carlos Correa y Taller de grabado La Estampa",
    fecha: "Ca. 1960",
    catalogo: 11659,
    imagen: { archivo: "/prensa/libertinaje-y-desorden.jpg", alt: "Grabado en blanco y negro: dos esqueletos sentados a los lados de un escudo, bajo una cinta con las palabras «Libertinaje y desorden».", ratio: 1.389 },
    resumen: "Grabado de Carlos Correa, hacia 1960, con dos esqueletos que flanquean un escudo bajo la leyenda «Libertinaje y desorden».",
    contexto: "Según el catálogo del Museo, estaba en la «Sala 7: Memoria y Nación», en exhibición. Hace parte del muro de grabado y fotografía colombiana que, según los reportes, quedó casi vacío. Se cuenta entre las piezas que el equipo señala como retiradas; el Museo no ha publicado el inventario.",
  },
  {
    slug: "la-cosecha-de-los-violentos",
    corto: "La cosecha de los violentos",
    titulo: "La cosecha de los violentos",
    sala: "Memoria y Nación",
    tipo: "Estampa — xilografía iluminada sobre papel, 65 × 93,5 cm",
    autoria: "Alfonso Quijano Acero",
    fecha: "1968",
    catalogo: 15654,
    imagen: { archivo: "/prensa/la-cosecha-de-los-violentos.jpg", alt: "Xilografía a color: cuerpos tendidos sobre mesas bajo un gran árbol retorcido, en un campo abierto.", ratio: 1.613 },
    resumen: "Xilografía iluminada de Alfonso Quijano Acero, de 1968: cuerpos cubiertos con telas de colores, tendidos sobre mesas bajo un árbol retorcido.",
    contexto: "Según el catálogo del Museo, estaba en la «Sala 7: Memoria y Nación», en exhibición, junto al muro de grabado y fotografía colombiana. Se cuenta entre las piezas que el equipo señala como retiradas; el Museo no ha publicado el inventario.",
  },
  {
    slug: "la-muerte-de-un-desconocido",
    corto: "La muerte de un desconocido",
    titulo: "La muerte de un desconocido",
    sala: "Memoria y Nación",
    tipo: "Dibujo — grafito sobre papel, 73,3 × 51,8 cm",
    autoria: "Pedro Alcántara Herrán Martínez",
    fecha: "1973",
    catalogo: 15250,
    imagen: { archivo: "/prensa/la-muerte-de-un-desconocido.jpg", alt: "Dibujo a grafito de un hombre dormido o sin vida, con la cabeza apoyada sobre el brazo, bajo un amplio fondo de papel claro y la firma «Alcántara 1973».", ratio: 0.713 },
    resumen: "Dibujo a grafito de Pedro Alcántara Herrán, de 1973: el rostro de un hombre con los ojos cerrados, recostado sobre su brazo.",
    contexto: "Según el catálogo del Museo, estaba en la «Sala 7: Memoria y Nación», en exhibición. Se cuenta entre las piezas que el equipo señala como retiradas; el Museo no ha publicado el inventario.",
  },
  {
    slug: "fotografias-muro-grabado-fotografia",
    corto: "Muro de grabado y fotografía",
    titulo: "Fotografías del muro de grabado y fotografía colombiana",
    sala: "Memoria y Nación",
    tipo: "Fotografía y grabado (conjunto)",
    fecha: "1950–1970",
    resumen: "Conjunto de imágenes sobre fenómenos sociales y políticos del país entre 1950 y 1970.",
    contexto: "Según los reportes, «casi todas» las fotografías de este muro fueron retiradas. No hay lista pública de cada imagen.",
  },
];

export type Foto = {
  /** Texto tras el autor en los créditos; por defecto, el de Wikimedia Commons o Flickr. */
  via?: string;
  archivo: string;
  alt: string;
  pie: string;
  credito?: string;
  autor: string;
  licencia: string;
  url: string;
};

/** Imágenes de contexto (no son las piezas retiradas). Todas con licencia abierta. */
export const FOTOS: Record<string, Foto> = {
  entrada: {
    archivo: "/archivo/museo-entrada.jpg",
    alt: "Fachada de piedra del Museo Nacional de Colombia, con pendones de exposiciones y un busto en primer plano.",
    pie: "Museo Nacional de Colombia, Bogotá",
    credito: "Entrada del Museo Nacional de Colombia",
    autor: "Peter Angritt",
    licencia: "CC BY-SA 3.0",
    url: "https://commons.wikimedia.org/w/index.php?curid=12624783",
  },
  sala: {
    archivo: "/archivo/museo-sala.jpg",
    alt: "Sala del Museo Nacional vista a través de varios umbrales, con retratos en las paredes y una figura frente a una gran naranja pintada.",
    pie: "Una sala del Museo Nacional",
    credito: "Museo Nacional sala «Ser y Hacer»",
    autor: "Vanesa Gonzalez",
    licencia: "CC BY-SA 4.0",
    url: "https://commons.wikimedia.org/w/index.php?curid=138633437",
  },
  bandera: {
    archivo: "/archivo/bandera.jpg",
    alt: "Bandera del arcoíris ondeando contra un cielo azul.",
    pie: "Bandera en una marcha LGBT, Bogotá, 2021",
    credito: "MARCHA-LGBT-2021-BOGOTA3.5 (recorte)",
    autor: "Canal Trece Colombia",
    licencia: "CC BY 4.0",
    url: "https://commons.wikimedia.org/w/index.php?curid=149806335",
  },
  corazon: {
    archivo: "/archivo/tejido-corazon.jpg",
    alt: "Tela bordada con un corazón rojo, palomas blancas y la frase «la paz sin positivos».",
    pie: "Tela bordada en una marcha por la paz, Bogotá",
    credito: "Marcha por la Paz con el Costurero de la Memoria 05 (recorte)",
    autor: "Sofía913",
    licencia: "CC0",
    url: "https://commons.wikimedia.org/w/index.php?curid=170150160",
  },
  colcha: {
    archivo: "/archivo/tejido-colcha.jpg",
    alt: "Colcha de retazos con casas, soldados, mariposas y palmeras, cosida en tela.",
    pie: "Colcha cosida en una marcha por la paz, Bogotá, 2016",
    credito: "Marcha por la paz 2016 (8) (recorte)",
    autor: "MAFAPO – Madres de falsos positivos de Soacha y Bogotá",
    licencia: "CC BY-SA 4.0",
    url: "https://commons.wikimedia.org/w/index.php?curid=188866735",
  },
  antes: {
    archivo: "/prensa/pared-antes.jpg",
    alt: "Pared gris con vitrinas, un retrato, unos zapatos de colores y una bandera del arcoíris, antes del retiro.",
    pie: "Sala «Hacer sociedad», antes del retiro",
    credito: "Fotografía publicada con la nota sobre el retiro de las obras",
    autor: "El Colombiano",
    licencia: "© El Colombiano",
    via: "tomada de su artículo",
    url: "https://www.elcolombiano.com/cultura/historia-de-piezas-retiradas-del-museo-nacional-KA42357940",
  },
  muro: {
    archivo: "/prensa/muro-reivindicacion.jpg",
    alt: "Pared blanca con marcas de soportes, una pantalla apagada y una placa que dice «Reivindicación de Nación».",
    pie: "Muro «Reivindicación de Nación», ya sin sus piezas",
    credito: "Muro «Reivindicación de Nación», 15 de octubre de 2026",
    autor: "La Silla Vacía",
    licencia: "© La Silla Vacía",
    via: "tomada de su artículo",
    url: "https://www.lasillavacia.com/silla-nacional/gobierno-ordeno-desmontar-mas-de-30-obras-del-museo-nacional/",
  },
  esquina: {
    archivo: "/prensa/esquina-vacia.jpg",
    alt: "Esquina de una sala gris con huecos rectangulares y ganchos blancos donde colgaban piezas, y el piso de madera.",
    pie: "Una esquina de sala, con los huecos de las piezas",
    credito: "Sala vacía, 15 de octubre de 2026",
    autor: "La Silla Vacía",
    licencia: "© La Silla Vacía",
    via: "tomada de su artículo",
    url: "https://www.lasillavacia.com/silla-nacional/gobierno-ordeno-desmontar-mas-de-30-obras-del-museo-nacional/",
  },
  constituyente: {
    archivo: "/archivo/constituyente-1991.jpg",
    alt: "Recorte de prensa con dos delegados sentados ante un micrófono en la Asamblea Nacional Constituyente.",
    pie: "Asamblea Nacional Constituyente, 1991",
    credito: "Asamblea Nacional Constituyente 1991",
    autor: "IvanMarulanda",
    licencia: "CC BY 2.0",
    url: "https://www.flickr.com/photos/38926182@N04/3576574821",
  },
};

export const SALAS = Array.from(new Set(PIEZAS.map((p) => p.sala)));


/**
 * La foto de la pieza. Las que el catálogo del Museo marca como restringidas pueden ocultarse
 * al publicar con NEXT_PUBLIC_OCULTAR_RESTRINGIDAS=1.
 */
export function imagenDe(p: Pieza) {
  if (p.imagen?.restringida && process.env.NEXT_PUBLIC_OCULTAR_RESTRINGIDAS === "1") return undefined;
  return p.imagen;
}

export const urlCatalogo = (id: number) => `https://colecciones.museonacional.gov.co/objeto/${id}`;
