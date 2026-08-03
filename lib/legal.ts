/**
 * Textos legales portados de la web anterior (locuraburger.net).
 * Los datos identificativos son los que constan allí: si cambian el CIF,
 * el domicilio fiscal o el email, se tocan solo aquí.
 */

export const legalEntity = {
  denominacion: "Francisco Barroso Pavón",
  nombreComercial: "Locura Burger",
  cif: "20604219Z",
  domicilio: "C/ Pío Baroja, 2 — 11650",
  email: "currobarrosopavon@gmail.com",
  emailHref: "mailto:currobarrosopavon@gmail.com",
} as const;

export type LegalBlock =
  | { tipo: "parrafo"; texto: string }
  | { tipo: "lista"; items: readonly string[] }
  | { tipo: "datos"; items: readonly { clave: string; valor: string }[] };

export type LegalSection = {
  titulo: string;
  bloques: readonly LegalBlock[];
};

const datosIdentificativos: LegalBlock = {
  tipo: "datos",
  items: [
    { clave: "Denominación social", valor: legalEntity.denominacion },
    { clave: "Nombre comercial", valor: legalEntity.nombreComercial },
    { clave: "CIF", valor: legalEntity.cif },
    { clave: "Domicilio", valor: legalEntity.domicilio },
    { clave: "E-mail", valor: legalEntity.email },
  ],
};

export const avisoLegal = {
  titulo: "Aviso legal",
  subtitulo: "Ley de los Servicios de la Sociedad de la Información (LSSI)",
  intro: [
    `${legalEntity.denominacion}, responsable del sitio web, en adelante RESPONSABLE, pone a disposición de los usuarios el presente documento, con el que pretende dar cumplimiento a las obligaciones dispuestas en la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSICE), así como informar a todos los usuarios del sitio web respecto a cuáles son las condiciones de uso.`,
    "Toda persona que acceda a este sitio web asume el papel de usuario, comprometiéndose a la observancia y cumplimiento riguroso de las disposiciones aquí dispuestas, así como a cualquier otra disposición legal que fuera de aplicación.",
    `${legalEntity.denominacion} se reserva el derecho de modificar cualquier tipo de información que pudiera aparecer en el sitio web, sin que exista obligación de preavisar o poner en conocimiento de los usuarios dichas obligaciones, entendiéndose como suficiente con la publicación en el sitio web de ${legalEntity.denominacion}.`,
  ],
  secciones: [
    {
      titulo: "1. Datos identificativos",
      bloques: [datosIdentificativos],
    },
    {
      titulo: "2. Objeto",
      bloques: [
        {
          tipo: "parrafo",
          texto:
            "A través del Sitio Web, les ofrecemos a los Usuarios la posibilidad de acceder a la información sobre nuestros servicios.",
        },
      ],
    },
    {
      titulo: "3. Privacidad y tratamiento de datos",
      bloques: [
        {
          tipo: "parrafo",
          texto:
            "Cuando para el acceso a determinados contenidos o servicio sea necesario facilitar datos de carácter personal, los Usuarios garantizarán su veracidad, exactitud, autenticidad y vigencia. La empresa dará a dichos datos el tratamiento automatizado que corresponda en función de su naturaleza o finalidad, en los términos indicados en la sección de Política de Privacidad.",
        },
      ],
    },
    {
      titulo: "4. Propiedad industrial e intelectual",
      bloques: [
        {
          tipo: "parrafo",
          texto:
            "El Usuario reconoce y acepta que todos los contenidos que se muestran en el Espacio Web y en especial, diseños, textos, imágenes, logos, iconos, botones, software, nombres comerciales, marcas, o cualesquiera otros signos susceptibles de utilización industrial y/o comercial están sujetos a derechos de Propiedad Intelectual y todas las marcas, nombres comerciales o signos distintivos, todos los derechos de propiedad industrial e intelectual, sobre los contenidos y/o cualesquiera otros elementos insertados en la página, que son propiedad exclusiva de la empresa y/o de terceros, quienes tienen el derecho exclusivo de utilizarlos en el tráfico económico. Por todo ello el Usuario se compromete a no reproducir, copiar, distribuir, poner a disposición o de cualquier otra forma comunicar públicamente, transformar o modificar tales contenidos manteniendo indemne a la empresa de cualquier reclamación que se derive del incumplimiento de tales obligaciones. En ningún caso el acceso al Espacio Web implica ningún tipo de renuncia, transmisión, licencia o cesión total ni parcial de dichos derechos, salvo que se establezca expresamente lo contrario. Las presentes Condiciones Generales de Uso del Espacio Web no confieren a los Usuarios ningún otro derecho de utilización, alteración, explotación, reproducción, distribución o comunicación pública del Espacio Web y/o de sus Contenidos distintos de los aquí expresamente previstos. Cualquier otro uso o explotación de cualesquiera derechos estará sujeto a la previa y expresa autorización específicamente otorgada a tal efecto por la empresa o el tercero titular de los derechos afectados.",
        },
        {
          tipo: "parrafo",
          texto:
            "Los contenidos, textos, fotografías, diseños, logotipos, imágenes, programas de ordenador, códigos fuente y, en general, cualquier creación intelectual existente en este Espacio, así como el propio Espacio en su conjunto, como obra artística multimedia, están protegidos como derechos de autor por la legislación en materia de propiedad intelectual. La empresa es titular de los elementos que integran el diseño gráfico del Espacio Web, los menús, botones de navegación, el código HTML, los textos, imágenes, texturas, gráficos y cualquier otro contenido del Espacio Web o, en cualquier caso dispone de la correspondiente autorización para la utilización de dichos elementos. El contenido dispuesto en el Espacio Web no podrá ser reproducido ni en todo, ni en parte, ni transmitido, ni registrado por ningún sistema de recuperación de información, en ninguna forma ni en ningún medio, a menos que se cuente con la autorización previa, por escrito, de la citada Entidad.",
        },
        {
          tipo: "parrafo",
          texto:
            "Asimismo, queda prohibido suprimir, eludir y/o manipular el «copyright» así como los dispositivos técnicos de protección, o cualesquiera mecanismos de información que pudieren contener los contenidos. El Usuario de este Espacio Web se compromete a respetar los derechos enunciados y a evitar cualquier actuación que pudiera perjudicarlos, reservándose en todo caso la empresa el ejercicio de cuantos medios o acciones legales le correspondan en defensa de sus legítimos derechos de propiedad intelectual e industrial.",
        },
      ],
    },
    {
      titulo: "5. Obligaciones y responsabilidades del usuario",
      bloques: [
        { tipo: "parrafo", texto: "El Usuario se compromete a:" },
        {
          tipo: "lista",
          items: [
            "Hacer un uso adecuado y lícito del Espacio Web, así como de los contenidos y servicios, de conformidad con: (i) la legislación aplicable en cada momento; (ii) las Condiciones Generales de Uso del Espacio Web; (iii) la moral y buenas costumbres generalmente aceptadas y (iv) el orden público.",
            "Proveerse de todos los medios y requerimientos técnicos que se precisen para acceder al Espacio Web.",
            "Facilitar información veraz al cumplimentar con sus datos de carácter personal los formularios contenidos en el Espacio Web y a mantenerlos actualizados en todo momento, de forma que responda, en cada momento, a la situación real del Usuario. El Usuario será el único responsable de las manifestaciones falsas o inexactas que realice y de los perjuicios que cause a la empresa o a terceros por la información que facilite.",
          ],
        },
        {
          tipo: "parrafo",
          texto: "No obstante lo anterior, el Usuario se compromete a abstenerse de:",
        },
        {
          tipo: "lista",
          items: [
            "Intentar acceder, utilizar y/o manipular los datos de la empresa, terceros proveedores y otros Usuarios.",
            "Reproducir o copiar, distribuir, permitir el acceso del público a través de cualquier modalidad de comunicación pública, transformar o modificar los contenidos, a menos que se cuente con la autorización del titular de los correspondientes derechos o ello resulte legalmente permitido.",
            "Suprimir, ocultar o manipular las notas sobre derechos de propiedad intelectual o industrial y demás datos identificativos de los derechos de la empresa o de terceros incorporados a los contenidos, así como los dispositivos técnicos de protección o cualesquiera mecanismos de información que puedan insertarse en los contenidos.",
            "Obtener e intentar obtener los contenidos empleando para ello medios o procedimientos distintos de los que, según los casos, se hayan puesto a su disposición a este efecto o se hayan indicado expresamente en las páginas web donde se encuentren los contenidos o, en general, de los que se empleen habitualmente en Internet por no entrañar un riesgo de daño o inutilización del Espacio Web y/o de los contenidos.",
          ],
        },
        {
          tipo: "parrafo",
          texto:
            "En particular, y a título meramente indicativo y no exhaustivo, el Usuario se compromete a no transmitir, difundir o poner a disposición de terceros informaciones, datos, contenidos, mensajes, gráficos, dibujos, archivos de sonido y/o imagen, fotografías, grabaciones, software y, en general, cualquier clase de material que:",
        },
        {
          tipo: "lista",
          items: [
            "De cualquier forma sea contrario, menosprecie o atente contra los derechos fundamentales y las libertades públicas reconocidas constitucionalmente, en los Tratados Internacionales y en el resto de la legislación vigente.",
            "Induzca, incite o promueva actuaciones delictivas, denigratorias, difamatorias, violentas o, en general, contrarias a la ley, a la moral, a las buenas costumbres generalmente aceptadas o al orden público.",
            "Induzca, incite o promueva actuaciones, actitudes o pensamientos discriminatorios por razón de sexo, raza, religión, creencias, edad o condición.",
            "Incorpore, ponga a disposición o permita acceder a productos, elementos, mensajes y/o servicios delictivos, violentos, ofensivos, nocivos, degradantes o, en general, contrarios a la ley, a la moral y a las buenas costumbres generalmente aceptadas o al orden público, o induzca o pueda inducir a un estado inaceptable de ansiedad o temor.",
            "Induzca o incite a involucrarse en prácticas peligrosas, de riesgo o nocivas para la salud y el equilibrio psíquico.",
            "Se encuentre protegido por la legislación en materia de propiedad intelectual o industrial perteneciente a la sociedad o a terceros sin que haya sido autorizado el uso que se pretenda realizar.",
            "Sea contrario al honor, a la intimidad personal y familiar o a la propia imagen de las personas.",
            "Constituya cualquier tipo de publicidad.",
            "Incluya cualquier tipo de virus o programa que impida el normal funcionamiento del Espacio Web.",
          ],
        },
        {
          tipo: "parrafo",
          texto:
            "Si para acceder a algunos de los servicios y/o contenidos del Espacio Web se le proporcionara una contraseña, se obliga a usarla de manera diligente, manteniéndola en todo momento en secreto. En consecuencia, será responsable de su adecuada custodia y confidencialidad, comprometiéndose a no cederla a terceros, de manera temporal o permanente, ni a permitir el acceso a los mencionados servicios y/o contenidos por parte de personas ajenas. Igualmente, se obliga a notificar a la sociedad cualquier hecho que pueda suponer un uso indebido de su contraseña, como, a título enunciativo, su robo, extravío o el acceso no autorizado, con el fin de proceder a su inmediata cancelación. En consecuencia, mientras no efectúe la notificación anterior, la empresa quedará eximida de cualquier responsabilidad que pudiera derivarse del uso indebido de su contraseña, siendo de su responsabilidad cualquier utilización ilícita de los contenidos y/o servicios del Espacio Web por cualquier tercero ilegítimo. Si de manera negligente o dolosa incumpliera cualquiera de las obligaciones establecidas en las presentes Condiciones Generales de Uso, responderá por todos los daños y perjuicios que de dicho incumplimiento pudieran derivarse para la empresa.",
        },
      ],
    },
    {
      titulo: "6. Responsabilidades",
      bloques: [
        {
          tipo: "parrafo",
          texto:
            "No se garantiza el acceso continuado, ni la correcta visualización, descarga o utilidad de los elementos e informaciones contenidas en la web que puedan verse impedidos, dificultados o interrumpidos por factores o circunstancias que están fuera de su control. No se hace responsable de las decisiones que pudieran adoptarse como consecuencia del acceso a los contenidos o informaciones ofrecidas.",
        },
        {
          tipo: "parrafo",
          texto:
            "Se podrá interrumpir el servicio, o resolver de modo inmediato la relación con el Usuario, si se detecta que un uso de su Espacio Web, o de cualquiera de los servicios ofertados en el mismo, es contrario a las presentes Condiciones Generales de Uso. No nos hacemos responsables por daños, perjuicios, pérdidas, reclamaciones o gastos derivados del uso del Espacio Web.",
        },
        {
          tipo: "parrafo",
          texto:
            "Únicamente será responsable de eliminar, lo antes posible, los contenidos que puedan generar tales perjuicios, siempre que así se notifique. En especial, no seremos responsables de los perjuicios que se pudieran derivar, entre otros, de:",
        },
        {
          tipo: "lista",
          items: [
            "Interferencias, interrupciones, fallos, omisiones, averías telefónicas, retrasos, bloqueos o desconexiones en el funcionamiento del sistema electrónico, motivadas por deficiencias, sobrecargas y errores en las líneas y redes de telecomunicaciones, o por cualquier otra causa ajena al control de la empresa.",
            "Intromisiones ilegítimas mediante el uso de programas malignos de cualquier tipo y a través de cualquier medio de comunicación, tales como virus informáticos o cualesquiera otros.",
            "Abuso indebido o inadecuado del Espacio Web.",
            "Errores de seguridad o navegación producidos por un mal funcionamiento del navegador o por el uso de versiones no actualizadas del mismo. El administrador del espacio web se reserva el derecho de retirar, total o parcialmente, cualquier contenido o información presente en el Espacio Web.",
          ],
        },
        {
          tipo: "parrafo",
          texto:
            "La empresa excluye cualquier responsabilidad por los daños y perjuicios de toda naturaleza que pudieran deberse a la mala utilización de los servicios de libre disposición y uso por parte de los Usuarios del Espacio Web. Asimismo, queda exonerado de cualquier responsabilidad por el contenido e informaciones que puedan ser recibidas como consecuencia de los formularios de recogida de datos, estando los mismos únicamente para la prestación de los servicios de consultas y dudas. Por otro lado, en caso de causar daños y perjuicios por un uso ilícito o incorrecto de dichos servicios, podrá ser el Usuario reclamado por los daños o perjuicios causados.",
        },
        {
          tipo: "parrafo",
          texto:
            "Usted mantendrá a la empresa indemne frente a cualesquiera daños y perjuicios que se deriven de reclamaciones, acciones o demandas de terceros como consecuencia de su acceso o uso del Espacio Web. Asimismo, usted se obliga a indemnizar frente a cualesquiera daños y perjuicios que se deriven del uso por su parte de «robots», «spiders», «crawlers» o herramientas similares empleadas con el fin de recabar o extraer datos o de cualquier otra actuación por su parte que imponga una carga irrazonable sobre el funcionamiento del Espacio Web.",
        },
      ],
    },
    {
      titulo: "7. Hipervínculos",
      bloques: [
        {
          tipo: "parrafo",
          texto:
            "El Usuario se obliga a no reproducir de ningún modo, ni siquiera mediante un hiperenlace o hipervínculo, el Espacio Web, así como ninguno de sus contenidos, salvo autorización expresa y por escrito del responsable del fichero.",
        },
        {
          tipo: "parrafo",
          texto:
            "El Espacio Web puede incluir enlaces a otros espacios web, gestionados por terceros, con objeto de facilitar el acceso del Usuario a la información de empresas colaboradoras y/o patrocinadoras. Conforme con ello, la sociedad no se responsabiliza del contenido de dichos Espacios Web, ni se sitúa en una posición de garante ni/o de parte ofertante de los servicios y/o información que se puedan ofrecer a terceros a través de los enlaces de terceros.",
        },
        {
          tipo: "parrafo",
          texto:
            "Se concede al Usuario un derecho limitado, revocable y no exclusivo a crear enlaces a la página principal del Espacio Web exclusivamente para uso privado y no comercial. Los Espacios Web que incluyan enlace a nuestro Espacio Web (i) no podrán falsear su relación ni afirmar que se ha autorizado tal enlace, ni incluir marcas, denominaciones, nombres comerciales, logotipos u otros signos distintivos de nuestra sociedad; (ii) no podrán incluir contenidos que puedan considerarse de mal gusto, obscenos, ofensivos, controvertidos, que inciten a la violencia o la discriminación por razón de sexo, raza o religión, contrarios al orden público o ilícitos; (iii) no podrán enlazar a ninguna página del Espacio Web distinta de la página principal; (iv) deberán enlazar con la propia dirección del Espacio Web, sin permitir que el Espacio Web que realice el enlace reproduzca el Espacio Web como parte de su web o dentro de uno de sus «frames» o crear un «browser» sobre cualquiera de las páginas del Espacio Web. La empresa podrá solicitar, en cualquier momento, que elimine cualquier enlace al Espacio Web, después de lo cual deberá proceder de inmediato a su eliminación.",
        },
        {
          tipo: "parrafo",
          texto:
            "La empresa no puede controlar la información, contenidos, productos o servicios facilitados por otros Espacios Web que tengan establecidos enlaces con destino al Espacio Web.",
        },
      ],
    },
    {
      titulo: "8. Protección de datos",
      bloques: [
        {
          tipo: "parrafo",
          texto:
            "Para utilizar algunos de los Servicios, el Usuario debe proporcionar previamente ciertos datos de carácter personal. La empresa tratará automatizadamente estos datos y aplicará las correspondientes medidas de seguridad, todo ello en cumplimiento del RGPD, LOPDGDD y LSSI. El Usuario puede acceder a la política seguida en el tratamiento de los datos personales, así como el establecimiento de las finalidades previamente establecidas, en las condiciones definidas en la Política de Privacidad.",
        },
      ],
    },
    {
      titulo: "9. Declaraciones y garantías",
      bloques: [
        {
          tipo: "parrafo",
          texto:
            "En general, los contenidos y servicios ofrecidos en el Espacio Web tienen carácter meramente informativo. Por consiguiente, al ofrecerlos, no se otorga garantía ni declaración alguna en relación con los contenidos y servicios ofrecidos en el Espacio Web, incluyendo, a título enunciativo, garantías de licitud, fiabilidad, utilidad, veracidad, exactitud o comerciabilidad, salvo en la medida en que por ley no puedan excluirse tales declaraciones y garantías.",
        },
      ],
    },
    {
      titulo: "10. Fuerza mayor",
      bloques: [
        {
          tipo: "parrafo",
          texto:
            "La empresa no será responsable en ningún caso de la imposibilidad de prestar servicio, si esta se debe a interrupciones prolongadas del suministro eléctrico, líneas de telecomunicaciones, conflictos sociales, huelgas, rebelión, explosiones, inundaciones, actos y omisiones del Gobierno, y en general todos los supuestos de fuerza mayor o de caso fortuito.",
        },
      ],
    },
    {
      titulo: "11. Resolución de controversias. Ley aplicable y jurisdicción",
      bloques: [
        {
          tipo: "parrafo",
          texto:
            "Las presentes Condiciones Generales de Uso, así como el uso del Espacio Web, se regirán por la legislación española. Para la resolución de cualquier controversia, las partes se someterán a los Juzgados y Tribunales del domicilio social del Responsable del sitio web.",
        },
        {
          tipo: "parrafo",
          texto:
            "En el supuesto de que cualquier estipulación de las presentes Condiciones Generales de Uso resultara inexigible o nula en virtud de la legislación aplicable o como consecuencia de una resolución judicial o administrativa, dicha inexigibilidad o nulidad no hará que las presentes Condiciones Generales de Uso resulten inexigibles o nulas en su conjunto. En dichos casos, la empresa procederá a la modificación o sustitución de dicha estipulación por otra que sea válida y exigible y que, en la medida de lo posible, consiga el objetivo y pretensión reflejados en la estipulación original.",
        },
      ],
    },
  ] as readonly LegalSection[],
} as const;

export const politicaPrivacidad = {
  titulo: "Política de privacidad",
  subtitulo: "RGPD (UE) 2016/679 y LOPDGDD 3/2018",
  intro: [
    `${legalEntity.denominacion}, como Responsable del Tratamiento, le informa que, según lo dispuesto en el Reglamento (UE) 2016/679, de 27 de abril (RGPD) y en la L.O. 3/2018, de 5 de diciembre, de protección de datos y garantía de los derechos digitales (LOPDGDD), trataremos sus datos tal y como reflejamos en la presente Política de Privacidad.`,
    "En esta Política de Privacidad describimos cómo recogemos sus datos personales y por qué los recogemos, qué hacemos con ellos, con quién los compartimos, cómo los protegemos y sus opciones en cuanto al tratamiento de sus datos personales.",
    "Esta Política se aplica al tratamiento de sus datos personales recogidos por la empresa para la prestación de sus servicios. Si acepta las medidas de esta Política, acepta que tratemos sus datos personales como se define en esta Política.",
  ],
  secciones: [
    {
      titulo: "1. Contacto",
      bloques: [datosIdentificativos],
    },
    {
      titulo: "2. Principios clave",
      bloques: [
        {
          tipo: "parrafo",
          texto:
            "Siempre hemos estado comprometidos con prestar nuestros servicios con el más alto grado de calidad, lo que incluye tratar sus datos con seguridad y transparencia. Nuestros principios son:",
        },
        {
          tipo: "lista",
          items: [
            "Legalidad: solo recopilaremos sus datos personales para fines específicos, explícitos y legítimos.",
            "Minimización de datos: limitamos la recogida de datos de carácter personal a lo que es estrictamente relevante y necesario para los fines para los que se han recopilado.",
            "Limitación de la finalidad: solo recogeremos sus datos personales para los fines declarados y solo según sus deseos.",
            "Precisión: mantendremos sus datos personales exactos y actualizados.",
            "Seguridad de los datos: aplicamos las medidas técnicas y organizativas adecuadas y proporcionales a los riesgos para garantizar que sus datos no sufran daños, tales como divulgación o acceso no autorizado, la destrucción accidental o ilícita o su pérdida accidental o alteración y cualquier otra forma de tratamiento ilícito.",
            "Acceso y rectificación: disponemos de medios para que acceda o rectifique sus datos cuando lo considere oportuno.",
            "Conservación: conservamos sus datos personales de manera legal y apropiada y solo mientras es necesario para los fines para los que se han recopilado.",
            "Transferencias internacionales: cuando se dé el caso de que sus datos vayan a ser transferidos fuera de la UE/EEE se protegerán adecuadamente.",
            "Terceros: el acceso y transferencia de datos personales a terceros se llevan a cabo de acuerdo con las leyes y reglamentos aplicables y con las garantías contractuales adecuadas.",
            "Marketing directo y cookies: cumplimos con la legislación aplicable en materia de publicidad y cookies.",
          ],
        },
      ],
    },
    {
      titulo: "3. Recogida y tratamiento de sus datos personales",
      bloques: [
        {
          tipo: "parrafo",
          texto:
            "Los tipos de datos que se pueden solicitar y tratar son datos de carácter identificativo y de contacto (nombre, teléfono y correo electrónico) facilitados voluntariamente al ponerse en contacto con nosotros.",
        },
        {
          tipo: "parrafo",
          texto:
            "Siempre que solicitemos sus datos personales, le informaremos con claridad de qué datos personales recogemos y con qué fin. En general, recogemos y tratamos sus datos personales con el propósito de:",
        },
        {
          tipo: "lista",
          items: [
            "Atender sus consultas, reservas y pedidos.",
            "Proporcionar información sobre nuestros servicios y novedades.",
            "Envío de comunicaciones cuando así lo haya solicitado.",
          ],
        },
      ],
    },
    {
      titulo: "4. Legitimidad",
      bloques: [
        {
          tipo: "parrafo",
          texto:
            "De acuerdo con la normativa de protección de datos aplicable, sus datos personales podrán tratarse siempre que:",
        },
        {
          tipo: "lista",
          items: [
            "Nos haya dado su consentimiento a los efectos del tratamiento. Por supuesto, podrá retirar su consentimiento en cualquier momento.",
            "Exista un requerimiento legal.",
            "Exista un interés legítimo que no se vea menoscabado por sus derechos de privacidad, como por ejemplo el envío de información comercial, bien por suscripción a nuestra newsletter o por su condición de cliente.",
            "Sea necesario para la prestación de alguno de nuestros servicios mediante relación contractual entre usted y nosotros.",
          ],
        },
      ],
    },
    {
      titulo: "5. Comunicación de datos personales",
      bloques: [
        {
          tipo: "parrafo",
          texto: `Los datos pueden ser comunicados a empresas relacionadas con ${legalEntity.denominacion} para la prestación de los diversos servicios en calidad de Encargados del Tratamiento. La empresa no realizará ninguna cesión, salvo por obligación legal.`,
        },
      ],
    },
    {
      titulo: "6. Sus derechos",
      bloques: [
        {
          tipo: "parrafo",
          texto:
            "En relación con la recogida y tratamiento de sus datos personales, puede ponerse en contacto con nosotros en cualquier momento para:",
        },
        {
          tipo: "lista",
          items: [
            "Acceder a sus datos personales y a cualquier otra información indicada en el artículo 15.1 del RGPD.",
            "Rectificar sus datos personales que sean inexactos o estén incompletos de acuerdo con el artículo 16 del RGPD.",
            "Suprimir sus datos personales de acuerdo con el artículo 17 del RGPD.",
            "Limitar el tratamiento de sus datos personales de acuerdo con el artículo 18 del RGPD.",
            "Solicitar la portabilidad de sus datos de acuerdo con el artículo 20 del RGPD.",
            "Oponerse al tratamiento de sus datos personales de acuerdo con el artículo 21 del RGPD.",
          ],
        },
        {
          tipo: "parrafo",
          texto:
            "Si ha otorgado su consentimiento para alguna finalidad concreta, tiene derecho a retirar el consentimiento otorgado en cualquier momento, sin que ello afecte a la licitud del tratamiento basado en el consentimiento previo a su retirada.",
        },
        {
          tipo: "parrafo",
          texto: `Puede ejercer estos derechos enviando comunicación, motivada y acreditada, a ${legalEntity.email}.`,
        },
        {
          tipo: "parrafo",
          texto:
            "También tiene derecho a presentar una reclamación ante la Autoridad de control competente (www.aepd.es) si considera que el tratamiento no se ajusta a la normativa vigente.",
        },
      ],
    },
    {
      titulo: "7. Cookies",
      bloques: [
        {
          tipo: "parrafo",
          texto:
            "Esta web no utiliza cookies de analítica, publicidad ni seguimiento de terceros. Únicamente se emplea el almacenamiento técnico estrictamente necesario para que la página funcione. Si en el futuro se incorporan cookies no esenciales, se solicitará su consentimiento previo y se actualizará esta política.",
        },
      ],
    },
    {
      titulo: "8. Información legal",
      bloques: [
        {
          tipo: "parrafo",
          texto:
            "Los requisitos de esta Política complementan, y no reemplazan, cualquier otro requisito existente bajo la ley de protección de datos aplicable, que será la que prevalezca en cualquier caso.",
        },
        {
          tipo: "parrafo",
          texto:
            "Esta Política está sujeta a revisiones periódicas y la empresa puede modificarla en cualquier momento. Cuando esto ocurra, le avisaremos de cualquier cambio y le pediremos que vuelva a leer la versión más reciente de nuestra Política y que confirme su aceptación.",
        },
      ],
    },
  ] as readonly LegalSection[],
} as const;
