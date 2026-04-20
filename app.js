/* ============================================================
   ESCUDO — El Juego del Guerrero Interior
   App.js — All game logic, card data, audio, and PWA features
   ============================================================ */

// ==================== CARD DATA (120 cards) ====================
const CARTAS = [
  // ===== ESCUDO (30) =====
  {id:'ES-01',type:'escudo',icon:'🦁',name:'Soy valiente',stars:3,reto:'Haz algo que te dé un poco de miedo esta semana: levantar la mano en clase, hablar con alguien nuevo, o intentar algo que nunca has hecho.',recuerda:'Valiente no es el que no siente miedo; es el que actúa aunque lo sienta.',points:3},
  {id:'ES-02',type:'escudo',icon:'🎨',name:'Soy creativo',stars:2,reto:'Inventa una historia corta donde tú eres el héroe o heroína. Puede ser en dibujo, escrita o contada en voz alta.',recuerda:'No hay una sola forma correcta. Tu creatividad es única.',points:2},
  {id:'ES-03',type:'escudo',icon:'🌟',name:'Soy único',stars:1,reto:'Escribe 3 cosas que te hacen diferente de los demás y que te gustan de ti.',recuerda:'No hay nadie igual a ti en todo el mundo. Eso es tu superpoder.',points:1},
  {id:'ES-04',type:'escudo',icon:'👑',name:'Merezco respeto',stars:2,reto:'Hoy, cuando alguien te hable con respeto, dilo en voz alta: "Gracias por tratarme con respeto." Reconocer lo bueno también es autoestima.',recuerda:'No tienes que ganarte el respeto. Lo mereces por existir.',points:2},
  {id:'ES-05',type:'escudo',icon:'💪',name:'Soy capaz',stars:2,reto:'Elige una tarea que creas que no puedes hacer. Inténtalo. Si no sale perfecto, cuéntalo de todos modos.',recuerda:'Capaz no significa perfecto. Significa que lo intentas.',points:2},
  {id:'ES-06',type:'escudo',icon:'💖',name:'Mis emociones importan',stars:2,reto:'Esta semana, nombra lo que sientes al menos 3 veces al día: "Estoy nervioso", "Estoy contento", "Estoy frustrado."',recuerda:'Sentir no es debilidad. Es información valiosa.',points:2},
  {id:'ES-07',type:'escudo',icon:'🌱',name:'Soy resiliente',stars:3,reto:'Recuerda un momento difícil que ya pasaste. Escribe qué aprendiste de esa experiencia.',recuerda:'Caer no es fracasar. Levantarte es tu mayor victoria.',points:3},
  {id:'ES-08',type:'escudo',icon:'🗣️',name:'Tengo voz',stars:3,reto:'En una conversación hoy, exprime tu opinión aunque sea diferente a la del grupo. Di: "Yo pienso diferente y eso está bien."',recuerda:'Tu voz importa. Lo que dices tiene valor.',points:3},
  {id:'ES-09',type:'escudo',icon:'🔄',name:'Puedo equivocarme y aprender',stars:2,reto:'Haz algo nuevo y acepta que puede salir mal. Si te equivocas, di: "Me equivoqué, y estoy aprendiendo."',recuerda:'Los errores no te definen. Te enseñan.',points:2},
  {id:'ES-10',type:'escudo',icon:'🛡️',name:'Mi cuerpo es mío',stars:3,reto:'Practica decir: "No quiero que me toquen" frente al espejo. Di tu nombre y tu frase con voz firme.',recuerda:'Tú decides quién te toca, cuándo y cómo. Siempre.',points:3},
  {id:'ES-11',type:'escudo',icon:'🤝',name:'Soy leal',stars:2,reto:'Hoy, defiende a un amigo o amiga si alguien habla mal de esa persona cuando no está.',recuerda:'La lealtad es elegir a tus personas incluso cuando es difícil.',points:2},
  {id:'ES-12',type:'escudo',icon:'🙋',name:'Puedo pedir ayuda',stars:3,reto:'Pide ayuda a alguien esta semana en algo que normalmente harías solo/a.',recuerda:'Pedir ayuda no es debilidad. Es inteligencia emocional.',points:3},
  {id:'ES-13',type:'escudo',icon:'🚫',name:'Tengo derecho a decir NO',stars:3,reto:'Practica decir "No, gracias" sin dar explicaciones. Hazlo al menos una vez hoy en algo pequeño.',recuerda:'No es una palabra completa. No necesita excusas.',points:3},
  {id:'ES-14',type:'escudo',icon:'🏋️',name:'Soy fuerte',stars:2,reto:'Haz algo físico que te desafíe: correr un poco más, hacer una postura de guerrero, cargar algo pesado. Siente tu fuerza.',recuerda:'La fuerza no es solo del cuerpo. Es la decisión de seguir adelante.',points:2},
  {id:'ES-15',type:'escudo',icon:'🧭',name:'Puedo cambiar mi mente',stars:2,reto:'Piensa en algo que antes te gustaba y ahora no, o viceversa. Cuéntalo sin vergüenza.',recuerda:'Cambiar de opinión no es ser incoherente. Es crecer.',points:2},
  {id:'ES-16',type:'escudo',icon:'✨',name:'Mis sueños importan',stars:2,reto:'Escribe 3 cosas que quieres lograr en tu vida. No importa qué tan grandes o pequeñas sean.',recuerda:'Todo gran logro empezó como un sueño que alguien se atrevió a tener.',points:2},
  {id:'ES-17',type:'escudo',icon:'📋',name:'Soy responsable',stars:2,reto:'Elige una responsabilidad en casa (regar una planta, ordenar tu cuarto, alimentar a tu mascota) y cúmplela toda la semana.',recuerda:'Ser responsable es demostrarte que puedes confiar en ti.',points:2},
  {id:'ES-18',type:'escudo',icon:'🕊️',name:'Puedo perdonar',stars:3,reto:'Piensa en alguien que te molestó. No tienes que olvidar, pero intenta soltar el enojo. Escribe: "Elijo soltar esto por mi paz."',recuerda:'Perdonar no es justificar. Es soltar lo que te hace daño.',points:3},
  {id:'ES-19',type:'escudo',icon:'🦅',name:'No necesito agradar a todos',stars:3,reto:'Hoy, no hagas algo solo para que alguien te acepte. Di lo que realmente piensas con respeto.',recuerda:'Tu valor no depende de cuánta gente te aplaude.',points:3},
  {id:'ES-20',type:'escudo',icon:'🚧',name:'Mis límites son sanos',stars:2,reto:'Define un límite hoy: "No quiero hablar de esto", "Necesito tiempo solo", "Prefiero hacer otra cosa."',recuerda:'Poner límites es cuidarte, no egoísmo.',points:2},
  {id:'ES-21',type:'escudo',icon:'🔍',name:'Soy curioso',stars:1,reto:'Hazle una pregunta a alguien mayor que tú sobre algo que no sepas. Escucha la respuesta completa.',recuerda:'La curiosidad es el motor del aprendizaje. Nunca dejes de preguntar.',points:1},
  {id:'ES-22',type:'escudo',icon:'🧘',name:'Puedo estar solo y estar bien',stars:2,reto:'Pasa 10 minutos hoy sin pantalla, sin compañía. Solo tú: piensa, dibuja, o simplemente respira.',recuerda:'Estar solo es diferente a sentirse solo. Aprender a disfrutar tu compañía es un regalo.',points:2},
  {id:'ES-23',type:'escudo',icon:'📝',name:'Mis palabras tienen poder',stars:2,reto:'Escribe 5 frases que te digas a ti mismo cada mañana: "Hoy voy a intentar algo nuevo", "Soy suficiente", etc. Léelas al despertar.',recuerda:'Lo que te dices a ti mismo se convierte en lo que crees.',points:2},
  {id:'ES-24',type:'escudo',icon:'👀',name:'Aprendo de los demás',stars:1,reto:'Observa a alguien que admiras. Escribe una cualidad suya que quieras desarrollar en ti.',recuerda:'No se trata de copiar, sino de inspirarte y encontrar tu propia versión.',points:1},
  {id:'ES-25',type:'escudo',icon:'😢',name:'Puedo llorar y ser fuerte',stars:2,reto:'Si sientes ganas de llorar hoy, permítetelo. Llorar no te hace débil, te hace humano.',recuerda:'Las lágrimas limpian el alma. Llorar es valentía disfrazada.',points:2},
  {id:'ES-26',type:'escudo',icon:'🎉',name:'Celebro mis logros',stars:1,reto:'Escribe 3 cosas que has logrado este mes, por pequeñas que parezcan. Celebra cada una.',recuerda:'No esperes los grandes momentos. Las pequeñas victorias construyen tu fuerza.',points:1},
  {id:'ES-27',type:'escudo',icon:'⏳',name:'Soy paciente conmigo',stars:2,reto:'Cuando algo no te salga hoy, en lugar de enojarte, di: "Todavía estoy aprendiendo."',recuerda:'Nadie nació sabiendo. Sé tan paciente contigo como lo serías con un buen amigo.',points:2},
  {id:'ES-28',type:'escudo',icon:'🎯',name:'Puedo elegir',stars:2,reto:'Hoy, toma una decisión pequeña pero consciente: qué comer, qué leer, con quién hablar. Siéntete dueño de tu elección.',recuerda:'Elegir es poder. Aunque elijas pequeño, estás practicando tu libertad.',points:2},
  {id:'ES-29',type:'escudo',icon:'📖',name:'Mi historia me hace más fuerte',stars:3,reto:'Escribe un momento difícil que ya pasaste. Ahora escribe qué aprendiste o cómo te hizo más fuerte.',recuerda:'Tu pasado no te define, pero tu historia te prepara.',points:3},
  {id:'ES-30',type:'escudo',icon:'😊',name:'Merezco ser feliz',stars:1,reto:'Haz algo hoy solo porque te hace feliz: cantar, jugar, abrazar a tu mascota, ver las nubes. Sin culpa.',recuerda:'La felicidad no es un premio. Es tu derecho de nacimiento.',points:1},

  // ===== ESPADA (30) =====
  {id:'ESp-01',type:'espada',icon:'🚶',name:'Compañero te quita tu lugar en la fila',situacion:'Un compañero se mete frente a ti en la fila del comedor y dice: "Ábrete, no seas exagerado."',respuesta:'"Estaba aquí antes. Te pido que te formes donde te toca."',tip:'Mantén la voz calmada. No necesitas gritar ni pedir permiso para pedir lo justo.',points:2},
  {id:'ESp-02',type:'espada',icon:'👕',name:'Alguien se burla de tu ropa',situacion:'Un compañero dice en voz alta: "¡Qué fea playera traes!" y otros se ríen.',respuesta:'"Tu opinión sobre mi ropa no me define. Me gusta cómo me visto."',tip:'No te disculpes por ser tú. Lo que alguien dice sobre ti habla de esa persona, no de ti.',points:2},
  {id:'ESp-03',type:'espada',icon:'📝',name:'Te presionan para que copies en un examen',situacion:'Un amigo te susurra: "Pásame las respuestas, somos amigos."',respuesta:'"No voy a hacer trampa. Si necesitas ayuda, podemos estudiar juntos."',tip:'Un verdadero amigo no te pide que arriesgues algo por él.',points:2},
  {id:'ESp-04',type:'espada',icon:'📱',name:'Un hermano menor te quita tus cosas',situacion:'Tu hermano pequeño toma tu celular sin permiso y dice: "Solo lo voy a usar un ratito."',respuesta:'"Entiendo que quieres usarlo, pero necesito que me lo pidas primero. Es mi espacio y mis cosas."',tip:'Poner límites con familiares es tan importante como con cualquier otra persona.',points:2},
  {id:'ESp-05',type:'espada',icon:'🎮',name:'Te excluyen del juego',situacion:'Un grupo está jugando y alguien dice: "Ya estamos todos, no hay lugar para ti."',respuesta:'"Me gustaría jugar. Si no hay espacio ahora, puedo unirme en la próxima ronda."',tip:'Si te excluyen repetidamente, busca personas que sí quieran jugar contigo. No mendigues espacio.',points:2},
  {id:'ESp-06',type:'espada',icon:'🔐',name:'Un amigo te pide tu contraseña',situacion:'Un amigo dice: "Pásame tu contraseña de Instagram, no seas desconfiado."',respuesta:'"Mis cuentas son privadas. No comparto contraseñas con nadie, no es personal."',tip:'Tu información personal es tuya. "No" es una respuesta completa.',points:2},
  {id:'ESp-07',type:'espada',icon:'⚖️',name:'Alguien te obliga a elegir bando',situacion:'Un compañero dice: "O estás conmigo o estás contra mí. Elige."',respuesta:'"No tengo que elegir. Puedo ser amigo de ambos sin tomar lados."',tip:'Nadie tiene derecho a ponerte entre la espada y la pared. Las amistades sanas no exigen lealtad excluyente.',points:2},
  {id:'ESp-08',type:'espada',icon:'🏫',name:'Un maestro te regaña frente a todos',situacion:'El maestro te dice delante de la clase: "Siempre llegas tarde, eres irresponsable."',respuesta:'"Maestro, entiendo su preocupación. ¿Podríamos hablar de esto en privado?"',tip:'Pedir privacidad no es falta de respeto. Es defender tu dignidad.',points:2},
  {id:'ESp-09',type:'espada',icon:'😤',name:'Te dicen que "no es para tanto"',situacion:'Cuentas que algo te molestó y alguien responde: "No exageres, no es para tanto."',respuesta:'"Para mí sí es importante. Mis sentimientos no se miden por los tuyos."',tip:'Nadie tiene derecho a minimizar lo que sientes. Tu experiencia es válida.',points:2},
  {id:'ESp-10',type:'espada',icon:'✋',name:'Alguien te toca sin permiso',situacion:'Un compañero te abraza o toca el cabello y dice: "Es un juego, ¿por qué te enojas?"',respuesta:'"No me gusta que me toquen sin preguntar. Te pido que lo respetes."',tip:'Tu cuerpo es tuyo. No tienes que explicar por qué no quieres contacto físico.',points:2},
  {id:'ESp-11',type:'espada',icon:'🙅',name:'Te presionan para faltar el respeto',situacion:'El grupo dice: "Vamos a molestar a ese niño, ¿te unes o qué?"',respuesta:'"No me gusta hacer sentir mal a otros. Yo paso."',tip:'Decir "yo paso" es poderoso. No necesitas dar explicaciones ni disculpas.',points:2},
  {id:'ESp-12',type:'espada',icon:'🚨',name:'Un adulto te pide un favor indebido',situacion:'Un vecino dice: "Ayúdame a cargar esto, y no se lo cuentes a tus papás."',respuesta:'"Necesito decírselo a mis papás. Si es un favor normal, no hay problema que lo sepan."',tip:'Si alguien te pide guardar un secreto que te incomoda, eso es una señal de alerta.',points:2},
  {id:'ESp-13',type:'espada',icon:'📣',name:'Rumores sobre ti',situacion:'Alguien te dice: "Todos están diciendo que hiciste algo feo, pero yo no creo nada."',respuesta:'"No es cierto, y me molesta que se digan cosas que no son. Si tienes duda, pregúntame a mí."',tip:'Los rumores pierden poder cuando los confrontas con verdad y calma.',points:2},
  {id:'ESp-14',type:'espada',icon:'🎵',name:'Te critican por gustos diferentes',situacion:'Alguien dice: "¿Cómo te puede gustar eso? Es de niños pequeños."',respuesta:'"A cada quien le gusta lo suyo. No necesito tu aprobación para disfrutar mis cosas."',tip:'Tus gustos son tuyos. Nadie tiene que entenderlos para que sean válidos.',points:2},
  {id:'ESp-15',type:'espada',icon:'🗣️',name:'Alguien te interrumpe constantemente',situacion:'Cada vez que hablas, un compañero te interrumpe: "Sí, sí, pero lo importante es…"',respuesta:'"Déjame terminar, por favor. Después te toca a ti."',tip:'Tu palabra vale tanto como la de cualquier otra persona. Insiste con respeto.',points:2},
  {id:'ESp-16',type:'espada',icon:'📸',name:'Presión para enviar fotos personales',situacion:'Alguien te escribe: "Mándame una foto, si no lo haces es que no confías en mí."',respuesta:'"La confianza no se demuestra enviando fotos. No voy a hacerlo."',tip:'La confianza se construye con respeto, no con pruebas. Bloquea si insiste.',points:2},
  {id:'ESp-17',type:'espada',icon:'😔',name:'Te hacen sentir culpable por decir no',situacion:'Alguien dice: "Si fueras buen amigo, me acompañarías."',respuesta:'"Ser buen amigo no significa hacer todo lo que me piden. Puedo quererte y decir que no."',tip:'La culpa es una herramienta de manipulación. Decir no no te hace mala persona.',points:2},
  {id:'ESp-18',type:'espada',icon:'📖',name:'Compañero copia tu trabajo',situacion:'Un compañero copia tu tarea y dice: "Tranquilo, total tú ya la hiciste."',respuesta:'"Escribí mi tarea con esfuerzo. Necesitas hacer la tuya. No quiero que copien mi trabajo."',tip:'Tu esfuerzo tiene valor. Permitir que lo copien no es generosidad, es permitir que te usen.',points:2},
  {id:'ESp-19',type:'espada',icon:'🌐',name:'Alguien se burla de tu acento o idioma',situacion:'Un compañero imita cómo hablas y dice: "¡Suena gracioso!"',respuesta:'"Mi forma de hablar es parte de quién soy. No es gracioso, es mi identidad."',tip:'Tu idioma, acento y cultura son tesoros. Nadie tiene derecho a burlarse de ellos.',points:2},
  {id:'ESp-20',type:'espada',icon:'💰',name:'Te presionan para gastar dinero',situacion:'Amigos dicen: "Todos van a comprar algo, ¿qué eres, codo?"',respuesta:'"Cada quien administra su dinero como quiere. Yo decido en qué lo gasto."',tip:'Decidir cómo usar tu dinero es un acto de autonomía, no de mezquindad.',points:2},
  {id:'ESp-21',type:'espada',icon:'😐',name:'Un compañero te molesta por tu peso o apariencia',situacion:'Alguien dice: "¿Por qué comes tanto?" o "Pareces palillo."',respuesta:'"Mi cuerpo es mi negocio. Comentarios sobre mi apariencia no son bienvenidos."',tip:'Nadie tiene derecho a evaluar tu cuerpo. Es tuyo y es perfecto como es.',points:2},
  {id:'ESp-22',type:'espada',icon:'🍹',name:'Te quieren obligar a beber o probar algo',situacion:'Alguien dice: "Todos lo intentamos, ¿eres miedoso o qué?"',respuesta:'"No lo necesito para divertirme. Mi decisión es no y no va a cambiar."',tip:'La presión de grupo es fuerte, pero tu decisión sobre tu cuerpo es más fuerte.',points:2},
  {id:'ESp-23',type:'espada',icon:'🤫',name:'Un amigo revela tus secretos',situacion:'Un amigo cuenta algo personal que le confiaste y dice: "No era tan secreto."',respuesta:'"Te lo conté en confianza y elegiste no respetarlo. Necesito saber si puedo confiar en ti."',tip:'La confianza se reconstruye con acciones, no con palabras. Es válido tomar distancia.',points:2},
  {id:'ESp-24',type:'espada',icon:'🤥',name:'Te piden que mientas por alguien',situacion:'Un amigo dice: "Dile a mi mamá que estoy contigo, aunque no sea verdad."',respuesta:'"No me gusta mentir. Si necesitas ayuda con algo, hablemos de otra forma."',tip:'Un amigo que te pide mentir no está pensando en las consecuencias para ti.',points:2},
  {id:'ESp-25',type:'espada',icon:'😠',name:'Un adulto te grita',situacion:'Un adulto levanta la voz y te dice cosas hirientes.',respuesta:'"Entiendo que está enojado/a, pero le pido que me hable sin gritar. Así puedo escucharle mejor."',tip:'Pedir respeto no es irrespetuoso. Mereces ser escuchado sin gritos.',points:2},
  {id:'ESp-26',type:'espada',icon:'🙈',name:'Compañero te ignora a propósito',situacion:'Un compañero habla con todos excepto contigo, como si no existieras.',respuesta:'"Si hay un problema entre nosotros, prefiero hablarlo. Si no, me gustaría que me incluyas."',tip:'Si la exclusión continúa, recuerda que el problema no eres tú. Busca personas que te valoren.',points:2},
  {id:'ESp-27',type:'espada',icon:'💧',name:'Te llaman "sensible" para invalidarte',situacion:'Alguien dice: "Eres muy sensible, no aguantas nada."',respuesta:'"Sentir no es debilidad. Es estar conectado conmigo mismo. Y mis emociones son reales."',tip:'Ser sensible es una fortaleza. Quien te lo dice como insulto es quien no sabe manejar sus propias emociones.',points:2},
  {id:'ESp-28',type:'espada',icon:'🏠',name:'Alguien invade tu espacio personal',situacion:'Un compañero se sienta en tu lugar, toma tus cosas o entra a tu espacio sin permiso.',respuesta:'"Este es mi espacio y te pido que lo respetes. Si necesitas algo, pídeme permiso."',tip:'Tu espacio personal es una extensión de ti. Tienes derecho a protegerlo.',points:2},
  {id:'ESp-29',type:'espada',icon:'🔪',name:'Te piden que traiciones a otro amigo',situacion:'Alguien dice: "Si no le cuentas lo que hizo, no eres mi amigo."',respuesta:'"No voy a elegir entre amigos. Y no voy a lastimar a nadie para quedar bien."',tip:'La verdadera lealtad no exige que dañes a otros. Es una trampa, no una prueba de amistad.',points:2},
  {id:'ESp-30',type:'espada',icon:'👥',name:'Un compañero se niega a trabajar en equipo',situacion:'Alguien en tu equipo dice: "Hagan ustedes, yo no hago nada."',respuesta:'"Este es un equipo y cada quien aporta. Si no participas, hablamos con el maestro para buscar una solución justa."',tip:'Trabajar en equipo significa responsabilidad compartida. Pedir que todos aporten es justo.',points:2},

  // ===== BARRERA (30) =====
  {id:'BL-01',type:'barrera',icon:'📛',name:'Apodo constante',subtipo:'Bullying verbal',escenario:'Un compañero te llama por un apodo que no te gusta, todos los días. Cuando te molestas, dice: "Es broma."',frase:'"No es broma si no me gusta. Deja de llamarme así."',accion:'Dilo con voz firme. Si continúa, reporta a un adulto de confianza y anota cada vez que pasa.',points:2},
  {id:'BL-02',type:'barrera',icon:'🚫',name:'Exclusión del grupo',subtipo:'Bullying social',escenario:'Un grupo se organiza para dejarte fuera: "No puedes jugar con nosotros."',frase:'"Si no quieren jugar conmigo, buscaré personas que sí. No necesito permiso para existir."',accion:'Aléjate con dignidad. Busca otros compañeros o actividades donde te incluyan. No insistas donde no te quieren.',points:2},
  {id:'BL-03',type:'barrera',icon:'📱',name:'Mensajes crueles en redes',subtipo:'Ciberbullying',escenario:'Alguien te manda mensajes hirientes por WhatsApp o redes sociales.',frase:'"No responderé a mensajes que buscan lastimarme."',accion:'NO respondas. Toma captura de pantalla. Bloquea. Muéstraselo a un adulto de confianza.',points:2},
  {id:'BL-04',type:'barrera',icon:'👊',name:'Empujones en el recreo',subtipo:'Bullying físico',escenario:'Alguien te empuja o te pega cuando nadie del personal está viendo.',frase:'"No te permito ponerme las manos encima."',accion:'Aléjate de inmediato. Busca a un adulto. Nunca respondas con violencia física. Tu seguridad va primero.',points:2},
  {id:'BL-05',type:'barrera',icon:'💔',name:'Chantaje emocional',subtipo:'Bullying psicológico',escenario:'Alguien te dice: "Si no haces lo que digo, ya no seré tu amigo."',frase:'"Una amistad real no se basa en amenazas. Si me quieres como amigo, respétame."',accion:'No cedas al chantaje. Habla con un adulto si la presión continúa. Las amistades sanas no amenazan.',points:2},
  {id:'BL-06',type:'barrera',icon:'📣',name:'Rumores falsos',subtipo:'Bullying social',escenario:'Alguien inventa un rumor sobre ti y lo comparte con toda la clase.',frase:'"Eso que están diciendo no es cierto. Si quieren saber algo sobre mí, me preguntan a mí."',accion:'Confronta el rumor con verdad. No intentes defenderlo con más rumores. Habla con un adulto si se extiende.',points:2},
  {id:'BL-07',type:'barrera',icon:'🐝',name:'Microagresiones repetidas',subtipo:'Bullying psicológico',escenario:'Pequeños comentarios como: "Estás gordito", "¿Otra vez con esa mochila?", "Qué cara de tonto." Cada uno por separado parece poco, pero juntos pesan.',frase:'"Puede parecerle un comentario pequeño, pero suma. Le pido que pare."',accion:'Documenta cada comentario. Cuando se repiten, ya no son bromas: son un patrón. Reporta el patrón completo.',points:2},
  {id:'BL-08',type:'barrera',icon:'👨‍🏫',name:'Intimidación por un maestro',subtipo:'Bullying por autoridad',escenario:'Un maestro te humilla frente a la clase: "Si no entiendes, es porque no estudias."',frase:'"Maestro/a, me gustaría que me corrigiera en privado. Me cuesta aprender cuando me siento expuesto/a."',accion:'Habla con otro adulto de confianza (otro maestro, orientador, tus papás). Los maestros también pueden equivocarse y tú mereces respeto.',points:2},
  {id:'BL-09',type:'barrera',icon:'📷',name:'Fotos compartidas sin permiso',subtipo:'Ciberbullying',escenario:'Alguien toma una foto tuya sin permiso y la comparte en un grupo con comentarios burlones.',frase:'"No diste permiso para tomar ni compartir esa foto. Exige que la borren."',accion:'Toma captura. Pide por escrito que la borren. Reporta a la plataforma. Informa a un adulto. En muchos lugares es un delito.',points:2},
  {id:'BL-10',type:'barrera',icon:'😈',name:'Presión para hacer algo malo',subtipo:'Bullying psicológico',escenario:'El grupo te dice: "Si no le hacemos esa broma, eres un cobarde."',frase:'"No necesito hacerle daño a nadie para demostrar valentía. Valentía es decir que no."',accion:'Aléjate del grupo en ese momento. Busca amigos que no necesiten hacer daño para divertirse.',points:2},
  {id:'BL-11',type:'barrera',icon:'📚',name:'Burlas por calificaciones',subtipo:'Bullying verbal',escenario:'Te dicen: "Eres un nerd" si sacas buenas notas, o "Eres burro" si te cuesta.',frase:'"Mi esfuerzo académico no define todo lo que soy. Y no se merece burlas."',accion:'No compares tus notas con las de otros. Tu progreso es personal. Si te molestan, dilo y reporta.',points:2},
  {id:'BL-12',type:'barrera',icon:'⚠️',name:'Amenazas de daño',subtipo:'Bullying físico',escenario:'Alguien te dice: "Si no me das tu dinero, te voy a pegar."',frase:'"Las amenazas son cobardes. No voy a dejarme intimidar."',accion:'NO enfrentes físicamente. Ve a un lugar seguro. Reporta INMEDIATAMENTE a un adulto. Esto es grave y requiere ayuda de adultos.',points:2},
  {id:'BL-13',type:'barrera',icon:'💬',name:'Aislamiento digital',subtipo:'Ciberbullying',escenario:'Te sacan del grupo de WhatsApp de la clase y crean otro sin ti.',frase:'"Si necesitan excluir a alguien para sentirse unidos, eso no es amistad."',accion:'No pidas ser incluido donde no te valoran. Crea tus propios grupos con personas que te respeten.',points:2},
  {id:'BL-14',type:'barrera',icon:'🪞',name:'Comentarios sobre tu cuerpo',subtipo:'Bullying verbal',escenario:'Compañeros hacen comentarios constantes sobre tu cuerpo: muy flaco, muy gordo, muy alto, muy bajo.',frase:'"Mi cuerpo no es tema de conversación. Ni el tuyo ni el de nadie lo son."',accion:'Di la frase y retírate. Si persiste, reporta. Tu cuerpo no es un debate público.',points:2},
  {id:'BL-15',type:'barrera',icon:'🎒',name:'Robo de pertenencias',subtipo:'Bullying físico',escenario:'Alguien te quita tus cosas y las pasa a otros: "Atrápalo si puedes."',frase:'"Esas son mis cosas. Devuélvelas ahora."',accion:'No persigas la cosa. Dilo con firmeza. Si no la devuelven, busca a un adulto. Tu propiedad merece respeto.',points:2},
  {id:'BL-16',type:'barrera',icon:'🌈',name:'Bullying por identidad de género',subtipo:'Bullying social/verbal',escenario:'Alguien te molesta por cómo te vistes, hablas o te expresas, diciendo: "Eso es de niñas" o "Eso es de niños."',frase:'"No hay formas correctas de ser. Yo soy como soy y no necesito permiso."',accion:'La expresión personal es un derecho. Si alguien te molesta, reporta. Busca espacios seguros donde te acepten.',points:2},
  {id:'BL-17',type:'barrera',icon:'🚫',name:'Acoso sexual verbal',subtipo:'Bullying verbal/psicológico',escenario:'Comentarios sexuales no deseados, chistes sobre tu cuerpo, silbidos o apodos sexuales.',frase:'"Eso es acoso y no lo tolero. Si continúas, lo reportaré."',accion:'Esto NUNCA es una broma. Reporta a un adulto de inmediato. No estás solo/a. Es grave y se debe actuar.',points:2},
  {id:'BL-18',type:'barrera',icon:'✏️',name:'Daño a tus cosas',subtipo:'Bullying físico',escenario:'Rompen tu cuaderno, rayan tu mesa, rompen tu mochila.',frase:'"Mis cosas merecen respeto igual que yo. Esto tiene consecuencias."',accion:'Documenta el daño (fotos, testigos). Reporta. En muchos lugares, dañar bienes ajenos tiene consecuencias legales.',points:2},
  {id:'BL-19',type:'barrera',icon:'🦽',name:'Exclusión por discapacidad o condición',subtipo:'Bullying social',escenario:'No te incluyen porque "no puedes correr rápido" o "hablas diferente."',frase:'"Todos merecemos participar. Si no pueden adaptar el juego, buscaré uno donde sí pueda."',accion:'Busca actividades inclusivas. Reporta la exclusión. Las diferencias no son razones para dejar fuera a alguien.',points:2},
  {id:'BL-20',type:'barrera',icon:'👻',name:'Amenazas anónimas en línea',subtipo:'Ciberbullying',escenario:'Recibes mensajes anónimos: "Nadie te quiere", "Deberías desaparecer."',frase:'"No conozco a personas cobardes que se esconden. Sus palabras no me definen."',accion:'NO respondas. Toma capturas. Reporta a la plataforma Y a un adulto. Si hay amenazas de daño, es una emergencia.',points:2},
  {id:'BL-21',type:'barrera',icon:'👨‍👩‍👧',name:'Burlas por tu familia',subtipo:'Bullying verbal',escenario:'Alguien se burla de tu familia: "Tu mamá trabaja en...", "Tu casa es fea."',frase:'"Mi familia no es tema de discusión. Háblame de mí, no de ellos."',accion:'Tu familia es sagrada para ti. No tienes que defenderla con insultos. Di tu frase y aléjate. Reporta si persiste.',points:2},
  {id:'BL-22',type:'barrera',icon:'🎭',name:'Imitación burlona',subtipo:'Bullying verbal/social',escenario:'Alguien imita cómo caminas, cómo hablas o cómo te mueves para que otros se rían.',frase:'"Imitarme no te hace gracioso. Te hace cruel."',accion:'No respondas imitando. La mejor respuesta es mostrar que no te afecta, y si te afecta, reportar. Ambas son válidas.',points:2},
  {id:'BL-23',type:'barrera',icon:'🤫',name:'Chantaje con secretos',subtipo:'Bullying psicológico',escenario:'Alguien amenaza con contar tu secreto si no haces lo que quiere: "Si no me ayudas, todos van a saber lo que hiciste."',frase:'"Un secreto no es un arma. Si lo cuentas, eso habla de ti, no de mí."',accion:'No cedas. El chantajista perderá poder si no le temes. Informa a un adulto de confianza. Tú controlas tu historia.',points:2},
  {id:'BL-24',type:'barrera',icon:'🚌',name:'Bullying en transporte escolar',subtipo:'Bullying físico/verbal',escenario:'En el camión escolar, alguien te quita tu asiento, te empuja o te molesta y dice: "¿Qué vas a hacer?"',frase:'"Este asiento es para todos. No necesito pelear por un lugar que me corresponde."',accion:'Siéntate en otro lugar disponible. Si es recurrente, reporta al conductor y a tus papás. Tu seguridad en el transporte importa.',points:2},
  {id:'BL-25',type:'barrera',icon:'👤',name:'Cuenta falsa a tu nombre',subtipo:'Ciberbullying',escenario:'Alguien crea un perfil falso con tu nombre y publica cosas que no dijiste.',frase:'"Esa cuenta no soy yo. Quien la creó está cometiendo una falta grave."',accion:'Reporta la cuenta falsa a la plataforma INMEDIATAMENTE. Informa a tus padres. Guarda evidencia. Esto es suplantación de identidad.',points:2},
  {id:'BL-26',type:'barrera',icon:'🤕',name:'"Juego" que lastima',subtipo:'Bullying físico',escenario:'Alguien te pega y dice: "Es un juego, no seas llorón."',frase:'"Si duele, no es un juego. Y no voy a participar."',accion:'Aléjate. Si te siguen, busca a un adulto. Un juego es algo en lo que TODOS quieren participar. Si no, es agresión.',points:2},
  {id:'BL-27',type:'barrera',icon:'🍱',name:'Burlas por tu comida',subtipo:'Bullying verbal/social',escenario:'Alguien dice: "Eso huele feo", "¿Por qué comes eso?" sobre tu lunch.',frase:'"Mi comida es parte de mi cultura y mi hogar. No necesito que te guste para disfrutarla."',accion:'Come con orgullo. Si los comentarios persisten, son discriminación. Reporta.',points:2},
  {id:'BL-28',type:'barrera',icon:'🎮',name:'Acoso en juegos en línea',subtipo:'Ciberbullying',escenario:'En un videojuego, alguien te insulta, amenaza o acosa por chat de voz.',frase:'"No juego con personas que no respetan."',accion:'Silencia, bloquea, reporta dentro del juego. Sal de la partida si es necesario. Tu diversión no debe costarte tu paz.',points:2},
  {id:'BL-29',type:'barrera',icon:'😫',name:'Humillación pública deliberada',subtipo:'Bullying social',escenario:'Alguien organiza una "broma" donde tú eres el blanco frente a muchos: tropezarte, pantalonearte, exponerte.',frase:'"Esto no es una broma. Es humillación y no lo permito."',accion:'Aléjate de inmediato. Esto es grave. Reporta a un adulto. No tienes que soportar ser el "chiste" de nadie.',points:2},
  {id:'BL-30',type:'barrera',icon:'🌍',name:'Bullying por raza o nacionalidad',subtipo:'Bullying verbal/social',escenario:'Te discriminan por tu piel, acento, país de origen o cultura: "Vete a tu país", "No perteneces aquí."',frase:'"Pertenezco donde yo decido estar. Mi origen es mi orgullo, no tu arma."',accion:'Esto es discriminación y es grave. Reporta. Busca comunidad. Nadie tiene derecho a decirte dónde perteneces.',points:2},

  // ===== PODER (20) =====
  {id:'PO-01',type:'poder',icon:'🪞',name:'Espejo',efecto:'Refleja la última carta jugada por otro jugador. Copias su efecto y puntos.',leccion:'Lo que otros hacen puede enseñarte. Observa, aprende y hazlo tuyo.',points:1},
  {id:'PO-02',type:'poder',icon:'🤝',name:'Aliado',efecto:'Elige a otro jugador. Ambos ganan +1 punto de poder este turno.',leccion:'La verdadera fuerza está en la alianza. Cuando nos apoyamos, los dos ganamos.',points:1},
  {id:'PO-03',type:'poder',icon:'🌬️',name:'Respiración',efecto:'Todos los jugadores hacen 3 respiraciones profundas juntos. Ganas +2 puntos.',leccion:'Antes de reaccionar, respira. La pausa es tu mayor poder.',points:2},
  {id:'PO-04',type:'poder',icon:'📻',name:'Frecuencia',efecto:'Roba 1 carta del mazo de Frecuencia y aplícala inmediatamente.',leccion:'Hay sonidos que nos calman y nos fortalecen. Aprende a sintonizarlos.',points:1},
  {id:'PO-05',type:'poder',icon:'🛡️',name:'Escudo Dorado',efecto:'Este turno, ningún jugador puede afectar tus puntos negativamente.',leccion:'A veces necesitas protegerte. No es cobardía, es cuidado inteligente.',points:1},
  {id:'PO-06',type:'poder',icon:'🌀',name:'Hipnosis',efecto:'Cambia el orden de turno. Tú decides quién juega después.',leccion:'Puedes cambiar la dirección de las cosas. Tienes más control del que crees.',points:1},
  {id:'PO-07',type:'poder',icon:'💪',name:'Fuerza Interior',efecto:'Duplica los puntos de tu próxima carta ESCUDO o ESPADA.',leccion:'Cuando confías en ti, tu impacto se multiplica.',points:2},
  {id:'PO-08',type:'poder',icon:'🔍',name:'Verdad',efecto:'Revela las 3 primeras cartas del mazo. Elige una para ti.',leccion:'La verdad siempre es mejor que la suposición. Busca la información antes de actuar.',points:1},
  {id:'PO-09',type:'poder',icon:'🦋',name:'Transformación',efecto:'Cambia una carta de tu mano por otra del mazo del mismo tipo.',leccion:'Puedes cambiar lo que no te sirve. No estás atrapado en una sola opción.',points:1},
  {id:'PO-10',type:'poder',icon:'🗣️',name:'Voz',efecto:'Lee en voz alta una de tus cartas y todos ganan +1 punto.',leccion:'Tu voz tiene poder para inspirar a otros. Úsala.',points:1},
  {id:'PO-11',type:'poder',icon:'🌈',name:'Arcoíris',efecto:'Reta a todos a decir algo positivo sobre la persona a su derecha. Cada quien gana +1.',leccion:'Ver lo bueno en otros fortalece a todos, incluyéndote a ti.',points:1},
  {id:'PO-12',type:'poder',icon:'⏸️',name:'Pausa',efecto:'Detén el juego por 30 segundos. Todos cierran los ojos y respiran. Ganas +1.',leccion:'Puedes pedir una pausa cuando lo necesites. En el juego y en la vida.',points:1},
  {id:'PO-13',type:'poder',icon:'🔄',name:'Intercambio',efecto:'Intercambia una carta con otro jugador que acepte. Ambos deben estar de acuerdo.',leccion:'Negociar es una habilidad. Cuando ambos están de acuerdo, todos ganan.',points:1},
  {id:'PO-14',type:'poder',icon:'🎯',name:'Enfoque',efecto:'En tu próximo turno, puedes jugar 2 cartas en vez de 1.',leccion:'Cuando te concentras, puedes hacer más de lo que crees posible.',points:1},
  {id:'PO-15',type:'poder',icon:'🌟',name:'Estrella',efecto:'Todos los jugadores ganan +1 punto este turno.',leccion:'La generosidad no te quita nada. Hacer brillar a otros no apaga tu luz.',points:1},
  {id:'PO-16',type:'poder',icon:'🧠',name:'Memoria',efecto:'Recita de memoria una carta que ya jugaste. Si lo haces, ganas +2 puntos.',leccion:'Lo que practicas se queda. Repetir lo bueno lo convierte en hábito.',points:2},
  {id:'PO-17',type:'poder',icon:'💜',name:'Corazón',efecto:'Elige a un jugador. Esa persona gana +3 puntos.',leccion:'A veces, el acto más poderoso es hacer fuerte a alguien más.',points:3},
  {id:'PO-18',type:'poder',icon:'🚧',name:'Barrera Extra',efecto:'Juega esta carta para bloquear un efecto negativo dirigido a ti este turno.',leccion:'Puedes poner límites cuando algo te hace daño. Es tu derecho.',points:1},
  {id:'PO-19',type:'poder',icon:'📣',name:'Grito de Guerra',efecto:'Todos los jugadores gritan juntos: "¡SOY UN GUERRERO INTERIOR!" Ganas +2.',leccion:'A veces necesitas declarar quién eres en voz alta. Tu declaración tiene fuerza.',points:2},
  {id:'PO-20',type:'poder',icon:'🎭',name:'Espejo Emocional',efecto:'Nombra una emoción que sientas ahora. Todos los que sienten lo mismo ganan +1.',leccion:'Tus emociones te conectan con otros. No estás solo/a en lo que sientes.',points:1},

  // ===== FRECUENCIA (10) =====
  {id:'FR-01',type:'frecuencia',icon:'🧘',name:'Theta 4Hz — Calma Profunda',stars:3,hz:4,freq:'Theta (4 Hz)',ejercicio:'Cierra los ojos. Inhala contando 4 segundos. Exhala contando 6. Repite 3 veces. Imagina que estás en un lugar seguro y tranquilo. Siente cómo tu cuerpo se relaja.',efecto:'Ganas +3 puntos. Tu próximo turno, ganas +1 extra.',leccion:'La frecuencia Theta se asocia con estados de calma profunda. Puedes acceder a ella con respiración lenta.',points:3},
  {id:'FR-02',type:'frecuencia',icon:'🌊',name:'Alfa 10Hz — Enfoque y Confianza',stars:2,hz:10,freq:'Alfa (10 Hz)',ejercicio:'Cierra los ojos. Imagina una luz dorada que entra por tu cabeza y baja hasta tus pies. Con cada respiración, esa luz se hace más brillante. Eres fuerte. Eres capaz.',efecto:'Ganas +2 puntos. Puedes robar 1 carta extra del mazo.',leccion:'La frecuencia Alfa se relaciona con estados de relajación alerta. Es tu estado natural de confianza.',points:2},
  {id:'FR-03',type:'frecuencia',icon:'🎵',name:'528Hz — Reparación',stars:3,hz:528,freq:'Solfeggio 528 Hz',ejercicio:'Pon tus manos sobre tu pecho. Siente tu corazón. Repite en voz baja: "Me reparo. Me curo. Estoy sanando." Respira profundamente 3 veces mientras sostienes esa intención.',efecto:'Ganas +3 puntos. Además, un jugador que tú elijas gana +1.',leccion:'La frecuencia 528 Hz se conoce como la frecuencia de reparación. Se usa para intención de sanación.',points:3},
  {id:'FR-04',type:'frecuencia',icon:'🔥',name:'396Hz — Liberación del Miedo',stars:3,hz:396,freq:'Solfeggio 396 Hz',ejercicio:'Piensa en algo que te da miedo. Inhala profundo. Al exhalar, imagina que sueltas ese miedo como humo oscuro que sale de tu cuerpo. Repite: "Libero lo que me detiene." Hazlo 3 veces.',efecto:'Ganas +3 puntos. Puedes descartar 1 carta que no te sirva y robar 1 nueva.',leccion:'La frecuencia 396 Hz se asocia con liberar emociones que pesan. Soltar no es olvidar, es dejar de cargar.',points:3},
  {id:'FR-05',type:'frecuencia',icon:'💜',name:'639Hz — Conexión',stars:2,hz:639,freq:'Solfeggio 639 Hz',ejercicio:'Piensa en alguien que quieres. Imagina un hilo de luz que conecta tu corazón con el de esa persona. Respira y di: "Estoy conectado/a. No estoy solo/a."',efecto:'Ganas +2 puntos. Un aliado que tú elijas también gana +2.',leccion:'La frecuencia 639 Hz se vincula con conectar con otros. Las relaciones sanas nos hacen más fuertes.',points:2},
  {id:'FR-06',type:'frecuencia',icon:'⚡',name:'741Hz — Despertar',stars:2,hz:741,freq:'Solfeggio 741 Hz',ejercicio:'Abre bien los ojos. Mira a tu alrededor y nombra 5 cosas que puedes ver, 4 que puedes tocar, 3 que puedes escuchar. Regresa al presente.',efecto:'Ganas +2 puntos. Este turno, tus cartas no pueden ser canceladas por otros efectos.',leccion:'La frecuencia 741 Hz se conecta con despertar la intuición. Estar presente es el primer paso de todo cambio.',points:2},
  {id:'FR-07',type:'frecuencia',icon:'🌟',name:'852Hz — Intuición',stars:2,hz:852,freq:'Solfeggio 852 Hz',ejercicio:'Cierra los ojos. Haz una pregunta en silencio: "¿Qué necesito escuchar hoy?" Espera. La primera idea que llegue es tu intuición hablando. No la juzgues.',efecto:'Ganas +2 puntos. Puedes ver la primera carta del mazo y decidir si la juegas o la devuelves.',leccion:'La frecuencia 852 Hz se relaciona con abrir la percepción. Tu intuición es una voz que siempre habla, solo necesitas escuchar.',points:2},
  {id:'FR-08',type:'frecuencia',icon:'🌙',name:'Binaural Delta — Sueño Reparador',stars:1,hz:2,freq:'Binaural Delta (1-3 Hz)',ejercicio:'Siéntate cómodo/a. Cierra los ojos. Relaja cada parte de tu cuerpo desde los pies hasta la cabeza, como si cada parte se durmiera. Bosteza si quieres.',efecto:'Ganas +1 punto. Además, en tu próximo turno, ganas +1 extra.',leccion:'Las frecuencias Delta se asocian con el descanso profundo. Un guerrero también sabe descansar.',points:1},
  {id:'FR-09',type:'frecuencia',icon:'☀️',name:'Binaural Beta — Energía y Acción',stars:2,hz:20,freq:'Binaural Beta (14-30 Hz)',ejercicio:'Pon los pies en el suelo. Aprieta los puños y suéltalos 3 veces. Di en voz alta: "Estoy listo/a. Puedo actuar." Respira rápido y con energía 5 veces.',efecto:'Ganas +2 puntos. Este turno puedes jugar 2 cartas en vez de 1.',leccion:'Las frecuencias Beta se conectan con estados de alerta y acción. A veces necesitas activarte para moverte.',points:2},
  {id:'FR-10',type:'frecuencia',icon:'🎶',name:'432Hz — Armonía',stars:3,hz:432,freq:'Solfeggio 432 Hz',ejercicio:'Canta o tararea una nota durante 10 segundos. Siente la vibración en tu pecho. Di: "Estoy en armonía conmigo mismo/a." Respira y siente cómo todo se ajusta.',efecto:'Ganas +3 puntos. TODOS los jugadores ganan +1.',leccion:'La frecuencia 432 Hz se asocia con armonía y equilibrio. Cuando tú estás en armonía, todo a tu alrededor se ajusta.',points:3}
];


// ==================== ANTI-BULLYING SCENARIOS ====================
const AB_SCENARIOS = [
  {title:'Apodos en la escuela',situation:'Un compañero te llama "gordo" todos los días. Los demás se ríen. Él dice que es broma.',options:[
    {label:'Pasiva',text:'Te quedas callado y aguantas para no hacer escena.',cls:'passive'},
    {label:'Agresiva',text:'Lo insultas de vuelta y le dices un apodo peor.',cls:'aggressive'},
    {label:'Asertiva',text:'"No es broma si no me gusta. Deja de llamarme así."',cls:'assertive'}
  ],explanation:'La respuesta pasiva permite que el abuso continúe. La agresiva escala el conflicto y te pone en riesgo. La asertiva establece un límite claro sin violencia, protegiendo tu dignidad.'},
  {title:'Exclusión del grupo',situation:'Tus "amigos" organizaron una salida y no te invitaron. Cuando les preguntas, dicen: "Se nos olvidó."',options:[
    {label:'Pasiva',text:'No dices nada y te quedas con la tristeza.',cls:'passive'},
    {label:'Agresiva',text:'Los insultas y les dices que nunca fueron tus amigos.',cls:'aggressive'},
    {label:'Asertiva',text:'"Me duele que no me incluyan. Si son mis amigos, me gustaría que me consideren."',cls:'assertive'}
  ],explanation:'Sufrir en silencio no cambia la situación. Atacar cierra puertas. Hablar con honestidad sobre cómo te sientes abre la posibilidad de cambio y te mantiene firme.'},
  {title:'Ciberbullying',situation:'Alguien creó un grupo de WhatsApp donde se burlan de ti. Un amigo te muestra las capturas.',options:[
    {label:'Pasiva',text:'Haces como si no supieras y esperas que se les pase.',cls:'passive'},
    {label:'Agresiva',text:'Creas otro grupo para burlarte de ellos.',cls:'aggressive'},
    {label:'Asertiva',text:'Tomas capturas, te sales del grupo, bloqueas a los responsables y se lo muestras a un adulto.',cls:'assertive'}
  ],explanation:'Ignorar el ciberbullying no lo hace desaparecer. Responder con más bullying alimenta el ciclo. Documentar, bloquear y reportar es la vía que te protege y puede detener el acoso.'},
  {title:'Presión grupal',situation:'El grupo te dice: "Si no le hacemos esa broma al niño nuevo, eres un cobarde."',options:[
    {label:'Pasiva',text:'Participas en la broma para no quedar mal con el grupo.',cls:'passive'},
    {label:'Agresiva',text:'Les dices que son unos cobardes y los insultas.',cls:'aggressive'},
    {label:'Asertiva',text:'"No me gusta hacer sentir mal a otros. Yo paso."',cls:'assertive'}
  ],explanation:'Ceder por presión te hace cómplice. Atacar al grupo te aísla. Decir "yo paso" es poderoso: mantienes tus valores sin necesidad de confrontar a nadie.'},
  {title:'Intimidación física',situation:'Un compañero más grande te empuja en el pasillo cuando no hay maestros cerca.',options:[
    {label:'Pasiva',text:'Te quedas quieto y no haces nada para no empeorar.',cls:'passive'},
    {label:'Agresiva',text:'Lo empujas de vuelta y te preparas para pelear.',cls:'aggressive'},
    {label:'Asertiva',text:'Te alejas inmediatamente, buscas a un adulto y reportas lo que pasó.',cls:'assertive'}
  ],explanation:'Quedarte expone tu seguridad. Responder con violencia puede escalarte lesiones. Irse y buscar ayuda protege tu integridad y activa a quienes pueden intervenir.'},
  {title:'Chantaje emocional',situation:'Tu "mejor amigo" dice: "Si no me prestas tu tarea, ya no soy tu amigo."',options:[
    {label:'Pasiva',text:'Le prestas la tarea porque no quieres perder su amistad.',cls:'passive'},
    {label:'Agresiva',text:'Le gritas que es un abusivo y lo amenazas.',cls:'aggressive'},
    {label:'Asertiva',text:'"Si eres mi amigo, no me pondrías en esa posición. No voy a prestarte la tarea, pero puedo ayudarte a hacer la tuya."',cls:'assertive'}
  ],explanation:'Ceder al chantaje enseña que amenazarte funciona. Responder con agresión rompe la relación sin resolver nada. La asertiva ofrece ayuda sin sacrificar tus valores.'},
  {title:'Mensajes hirientes',situation:'Recibes mensajes anónimos diciendo: "Nadie te quiere" y "Deberías desaparecer."',options:[
    {label:'Pasiva',text:'Los lees una y otra vez, sintiéndote cada vez peor.',cls:'passive'},
    {label:'Agresiva',text:'Respondes con insultos e intentas descubrir quién es.',cls:'aggressive'},
    {label:'Asertiva',text:'No respondes. Toma capturas. Reportas a la plataforma y a un adulto de confianza.',cls:'assertive'}
  ],explanation:'Leer mensajes dañinos te lastima más. Responder alimenta al agresor. No responder, documentar y reportar corta el ciclo y activa la protección que necesitas.'},
  {title:'Burlas por apariencia',situation:'Alguien te dice frente a otros: "¿Por qué comes tanto? Pareces un globo."',options:[
    {label:'Pasiva',text:'Te ríes nerviosamente y cambias de tema.',cls:'passive'},
    {label:'Agresiva',text:'Le dices algo cruel sobre su apariencia.',cls:'aggressive'},
    {label:'Asertiva',text:'"Mi cuerpo no es tema de conversación. Comentarios sobre mi apariencia no son bienvenidos."',cls:'assertive'}
  ],explanation:'Reírte normaliza el comentario. Contraatacar te pone al mismo nivel. Marcar el límite con firmeza protege tu dignidad sin lastimar a nadie.'},
  {title:'Rumores falsos',situation:'Alguien inventó un rumor sobre ti y toda la escuela lo sabe. Te lo cuenta un compañero.',options:[
    {label:'Pasiva',text:'No haces nada y esperas que se olvide.',cls:'passive'},
    {label:'Agresiva',text:'Buscas al culpable y lo confrontas gritando.',cls:'aggressive'},
    {label:'Asertiva',text:'"Eso no es cierto. Si quieren saber algo sobre mí, me preguntan a mí." Si persiste, reportas.',cls:'assertive'}
  ],explanation:'Los rumores crecen en el silencio. La confrontación agresiva puede empeorar las cosas. Decir la verdad con calma y reportar si continua es la respuesta que protege tu reputación.'},
  {title:'Acoso por un adulto',situation:'Un maestro te humilla frente a la clase: "Si no entiendes, es porque no estudias."',options:[
    {label:'Pasiva',text:'Bajas la mirada y no dices nada.',cls:'passive'},
    {label:'Agresiva',text:'Le respondes con gritos y lo insultas.',cls:'aggressive'},
    {label:'Asertiva',text:'"Maestro/a, me gustaría que me corrigiera en privado. Me cuesta aprender cuando me siento expuesto/a."',cls:'assertive'}
  ],explanation:'El silencio acepta la humillación. La agresión a un adulto te pone en riesgo disciplinario. Pedir privacidad con respeto defiende tu dignidad y es tu derecho.'}
];

// ==================== ACHIEVEMENTS ====================
const ACHIEVEMENTS = [
  {id:'first_game',icon:'🎮',name:'Primera Partida',desc:'Juega tu primera partida'},
  {id:'5_games',icon:'🏅',name:'Veterano',desc:'Juega 5 partidas'},
  {id:'10_games',icon:'🏆',name:'Maestro del Juego',desc:'Juega 10 partidas'},
  {id:'streak_3',icon:'🔥',name:'En Llamas',desc:'3 días de racha'},
  {id:'streak_7',icon:'🌟',name:'Semana Completa',desc:'7 días de racha'},
  {id:'streak_30',icon:'👑',name:'Leyenda',desc:'30 días de racha'},
  {id:'ab_3',icon:'🛑',name:'Defensor',desc:'Completa 3 escenarios Anti-Bullying'},
  {id:'ab_all',icon:'🦸',name:'Héroe Interior',desc:'Completa todos los escenarios'},
  {id:'freq_5',icon:'🎴',name:'Sintonizado',desc:'Escucha 5 frecuencias'},
  {id:'cards_50',icon:'🃏',name:'Coleccionista',desc:'Ve 50 cartas'},
  {id:'warrior',icon:'⚔️',name:'Guerrero',desc:'Alcanza nivel Guerrero'},
  {id:'master',icon:'🧙',name:'Maestro',desc:'Alcanza nivel Maestro'}
];

// ==================== FRASES DEL DÍA ====================
const FRASES_DIA = [
  '"Cada carta que juegas es un escudo que construyes dentro de ti."',
  '"Valiente no es el que no siente miedo; es el que actúa aunque lo sienta."',
  '"Tu voz importa. Lo que dices tiene valor."',
  '"No es una palabra completa. No necesita excusas."',
  '"Poner límites es cuidarte, no egoísmo."',
  '"Pedir ayuda no es debilidad. Es inteligencia emocional."',
  '"La felicidad no es un premio. Es tu derecho de nacimiento."',
  '"Sentir no es debilidad. Es información valiosa."',
  '"Lo que te dices a ti mismo se convierte en lo que crees."',
  '"Los errores no te definen. Te enseñan."',
  '"Caer no es fracasar. Levantarte es tu mayor victoria."',
  '"Mi cuerpo es mío. Tú decides quién te toca."',
  '"Imitarme no te hace gracioso. Te hace cruel."',
  '"La generosidad no te quita nada. Hacer brillar a otros no apaga tu luz."',
  '"Cuando confías en ti, tu impacto se multiplica."',
  '"Puedes pedir una pausa cuando lo necesites."',
  '"Tu intuición es una voz que siempre habla, solo necesitas escuchar."',
  '"Un guerrero también sabe descansar."',
  '"Pertenezco donde yo decido estar. Mi origen es mi orgullo."',
  '"Si duele, no es un juego."'
];

// ==================== LEVELS ====================
const LEVELS = [
  {name:'Novato',min:0,icon:'🔰'},
  {name:'Aprendiz',min:10,icon:'📖'},
  {name:'Guerrero',min:30,icon:'⚔️'},
  {name:'Maestro',min:60,icon:'🧙'},
  {name:'Leyenda',min:100,icon:'👑'}
];

// ==================== APP OBJECT ====================
const App = {
  state: {
    screen: 'splash',
    game: null,
    cardFilter: 'all',
    currentDetail: null,
    abIndex: 0,
    abCompleted: [],
    freqHz: null,
    freqPlaying: false,
    freqTimer: 10,
    freqTimerInterval: null,
    freqAnimFrame: null,
    audioCtx: null,
    oscillator: null,
    gainNode: null,
    panner: null,
  },

  // ---- INIT ----
  init() {
    this.loadUserData();
    this.setupPlayerSelect();
    this.setupModeSelect();
    setTimeout(() => this.showScreen('home'), 2200);
    this.updateFraseDia();
    this.registerSW();
    this.loadSettings();
    this.updateABProgress();
    this.renderCardsList();
    this.updateProfile();
    this.updateDaily();
  },

  registerSW() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('sw.js').catch(() => {});
    }
  },

  // ---- DATA PERSISTENCE ----
  loadUserData() {
    try {
      const d = JSON.parse(localStorage.getItem('escudo_data') || '{}');
      this.data = {
        games: d.games || 0,
        cardsWon: d.cardsWon || 0,
        streak: d.streak || 0,
        lastDaily: d.lastDaily || '',
        dailyCompleted: d.dailyCompleted || [],
        abCompleted: d.abCompleted || [],
        favs: d.favs || [],
        cardsViewed: d.cardsViewed || [],
        freqListened: d.freqListened || 0,
        achievements: d.achievements || [],
        settings: d.settings || {sound:true,notif:false,dark:true},
        ...d
      };
    } catch(e) {
      this.data = {games:0,cardsWon:0,streak:0,lastDaily:'',dailyCompleted:[],abCompleted:[],favs:[],cardsViewed:[],freqListened:0,achievements:[],settings:{sound:true,notif:false,dark:true}};
    }
  },
  saveData() {
    localStorage.setItem('escudo_data', JSON.stringify(this.data));
  },

  // ---- SCREENS ----
  showScreen(id) {
    document.querySelectorAll('.screen.active').forEach(s => s.classList.remove('active'));
    const el = document.getElementById(id);
    if (el) {
      el.classList.add('active','fade-in');
      setTimeout(() => el.classList.remove('fade-in'), 400);
    }
    this.state.screen = id;
    if (id === 'cards') this.renderCardsList();
    if (id === 'profile') this.updateProfile();
    if (id === 'daily') this.updateDaily();
    if (id === 'antibullying') this.renderABScenario();
  },

  // ---- HOME ----
  updateFraseDia() {
    const i = Math.floor(Date.now() / 86400000) % FRASES_DIA.length;
    document.getElementById('frase-del-dia').textContent = FRASES_DIA[i];
  },

  // ---- GAME SETUP ----
  setupPlayerSelect() {
    document.querySelectorAll('.player-num').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.player-num').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.renderPlayerNames(parseInt(btn.dataset.n));
      });
    });
    this.renderPlayerNames(2);
  },
  setupModeSelect() {
    document.querySelectorAll('.mode-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      });
    });
  },
  renderPlayerNames(n) {
    const c = document.getElementById('player-names');
    c.innerHTML = '';
    for (let i = 0; i < n; i++) {
      const inp = document.createElement('input');
      inp.type = 'text';
      inp.className = 'player-name-input';
      inp.placeholder = `Jugador ${i+1}`;
      inp.id = `pname-${i}`;
      c.appendChild(inp);
    }
  },

  // ---- GAME LOGIC ----
  startGame() {
    const n = parseInt(document.querySelector('.player-num.active')?.dataset.n || '2');
    const mode = document.querySelector('.mode-btn.active')?.dataset.mode || 'guerrero';
    const players = [];
    for (let i = 0; i < n; i++) {
      const inp = document.getElementById(`pname-${i}`);
      const name = inp?.value?.trim() || `Jugador ${i+1}`;
      players.push({name, score: 0, hand: []});
    }
    // Build deck based on mode
    let deck = [...CARTAS];
    if (mode === 'explorador') {
      deck = deck.filter(c => c.type === 'escudo' || c.type === 'espada' || (c.type === 'poder' && !['PO-06','PO-13'].includes(c.id)));
    }
    // Shuffle
    for (let i = deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    this.state.game = {
      players, deck, mode, round: 1, currentPlayer: 0,
      turnsPlayed: 0, totalTurns: players.length * 5, // 5 rounds
      currentCard: null, phase: 'draw'
    };
    this.showScreen('game-play');
    this.updateGameUI();
  },

  updateGameUI() {
    const g = this.state.game;
    if (!g) return;
    document.getElementById('game-round').textContent = `Ronda ${g.round}`;
    // Scoreboard
    const sb = document.getElementById('game-scoreboard');
    sb.innerHTML = g.players.map((p, i) => `
      <div class="score-player ${i === g.currentPlayer ? 'active' : ''}">
        <div class="sp-name">${p.name}</div>
        <div class="sp-score">${p.score}</div>
        <div class="shield-bar"><div class="shield-bar-fill" style="width:${Math.min(100, p.score * 5)}%"></div></div>
      </div>
    `).join('');
    // Current player indicator
    document.getElementById('current-player-indicator').textContent =
      `⚔️ Turno de: ${g.players[g.currentPlayer].name}`;
    // Reset card
    const inner = document.getElementById('card-inner');
    inner.classList.remove('flipped');
    // Show draw button
    document.getElementById('btn-draw').classList.remove('hidden');
    document.getElementById('vote-area').classList.add('hidden');
    document.getElementById('power-effect').classList.add('hidden');
  },

  drawCard() {
    const g = this.state.game;
    if (!g || g.deck.length === 0) { this.endGame(); return; }
    const card = g.deck.pop();
    g.currentCard = card;
    // Flip animation
    const inner = document.getElementById('card-inner');
    const front = document.getElementById('card-front-face');
    front.className = `card-front-face type-${card.type}`;
    front.innerHTML = this.renderCardContent(card);
    inner.classList.add('flipped');
    document.getElementById('btn-draw').classList.add('hidden');
    // Track viewed
    if (!this.data.cardsViewed.includes(card.id)) {
      this.data.cardsViewed.push(card.id);
      this.saveData();
      this.checkAchievements();
    }
    // After flip, show actions
    setTimeout(() => {
      if (card.type === 'poder' || card.type === 'frecuencia') {
        // Auto-apply effect
        document.getElementById('power-effect').classList.remove('hidden');
        let effectText = card.efecto || card.ejercicio || '';
        if (card.type === 'poder') effectText = `✨ Efecto: ${card.efecto}`;
        if (card.type === 'frecuencia') effectText = `🎴 ${card.ejercicio}\n\nEfecto: ${card.efecto}`;
        document.getElementById('power-effect-text').textContent = effectText;
        // Auto award points
        const pts = card.points || 1;
        g.players[g.currentPlayer].score += pts;
        this.spawnParticles();
      } else {
        // Vote area
        document.getElementById('vote-area').classList.remove('hidden');
      }
    }, 700);
  },

  renderCardContent(card) {
    let html = `<div class="cf-header"><span class="cf-type">${this.typeLabel(card.type)}</span><span class="cf-id">${card.id}</span></div>`;
    html += `<div class="cf-icon">${card.icon}</div>`;
    html += `<div class="cf-name">${card.name}</div>`;
    if (card.stars) html += `<div class="cf-stars">${'⭐'.repeat(card.stars)}</div>`;
    if (card.type === 'escudo') {
      html += `<div class="cf-label">Reto</div><div class="cf-text">${card.reto}</div>`;
      html += `<div class="cf-label">Recuerda</div><div class="cf-tip">💭 ${card.recuerda}</div>`;
    } else if (card.type === 'espada') {
      html += `<div class="cf-label">Situación</div><div class="cf-text">${card.situacion}</div>`;
      html += `<div class="cf-label">Respuesta asertiva</div><div class="cf-tip">💬 ${card.respuesta}</div>`;
      html += `<div class="cf-label">Tip</div><div class="cf-tip">💡 ${card.tip}</div>`;
    } else if (card.type === 'barrera') {
      if (card.subtipo) html += `<div class="cf-type">${card.subtipo}</div>`;
      html += `<div class="cf-label">Escenario</div><div class="cf-text">${card.escenario}</div>`;
      html += `<div class="cf-label">Frase poderosa</div><div class="cf-tip">💬 ${card.frase}</div>`;
      html += `<div class="cf-label">Acción</div><div class="cf-effect">🛡️ ${card.accion}</div>`;
    } else if (card.type === 'poder') {
      html += `<div class="cf-label">Efecto</div><div class="cf-effect">✨ ${card.efecto}</div>`;
      html += `<div class="cf-label">Lección</div><div class="cf-lesson">📖 ${card.leccion}</div>`;
    } else if (card.type === 'frecuencia') {
      html += `<div class="cf-text" style="color:var(--violet-l)">🎶 ${card.freq}</div>`;
      html += `<div class="cf-label">Ejercicio</div><div class="cf-text">${card.ejercicio}</div>`;
      html += `<div class="cf-label">Efecto</div><div class="cf-effect">✨ ${card.efecto}</div>`;
      html += `<div class="cf-label">Lección</div><div class="cf-lesson">📖 ${card.leccion}</div>`;
    }
    return html;
  },

  typeLabel(t) {
    return {escudo:'🛡️ ESCUDO',espada:'⚔️ ESPADA',barrera:'🛑 BARRERA',poder:'✨ PODER',frecuencia:'🎴 FRECUENCIA'}[t]||t;
  },

  vote(completed) {
    const g = this.state.game;
    if (!g || !g.currentCard) return;
    const card = g.currentCard;
    let pts = 0;
    if (completed) {
      pts = card.points || (card.type === 'barrera' ? 2 : card.type === 'espada' ? 2 : 1);
      g.players[g.currentPlayer].score += pts;
      this.data.cardsWon++;
      this.spawnParticles();
    }
    // Next turn
    this.nextTurn();
  },

  acceptPowerEffect() {
    this.nextTurn();
  },

  nextTurn() {
    const g = this.state.game;
    g.turnsPlayed++;
    g.currentPlayer = (g.currentPlayer + 1) % g.players.length;
    if (g.turnsPlayed % g.players.length === 0) g.round++;
    if (g.turnsPlayed >= g.totalTurns || g.deck.length === 0) {
      this.endGame();
      return;
    }
    this.updateGameUI();
  },

  endGame() {
    const g = this.state.game;
    this.data.games++;
    this.saveData();
    this.checkAchievements();
    this.showScreen('game-end');
    const results = document.getElementById('game-end-results');
    const sorted = [...g.players].sort((a, b) => b.score - a.score);
    const winner = sorted[0];
    results.innerHTML = sorted.map((p, i) => `
      <div class="end-player ${i === 0 ? 'winner' : ''}">
        <div>
          <div class="ep-name">${p.name}</div>
          ${i === 0 ? '<div class="ep-title">🏆 ¡Guerrero Interior!</div>' : ''}
          ${i === 1 && sorted.length > 1 ? '<div class="ep-title">🥈 Guerrero Aliado</div>' : ''}
        </div>
        <div class="ep-score">${p.score} pts</div>
      </div>
    `).join('');
  },

  confirmExitGame() {
    if (confirm('¿Seguro que quieres salir de la partida?')) {
      this.state.game = null;
      this.showScreen('home');
    }
  },

  // ---- CARDS BROWSER ----
  renderCardsList() {
    const list = document.getElementById('cards-list');
    if (!list) return;
    let cards = [...CARTAS];
    const filter = this.state.cardFilter;
    const search = (document.getElementById('card-search')?.value || '').toLowerCase();
    if (filter !== 'all' && filter !== 'fav') {
      cards = cards.filter(c => c.type === filter);
    }
    if (filter === 'fav') {
      cards = cards.filter(c => this.data.favs.includes(c.id));
    }
    if (search) {
      cards = cards.filter(c =>
        c.name.toLowerCase().includes(search) ||
        (c.reto||c.situacion||c.escenario||c.efecto||'').toLowerCase().includes(search)
      );
    }
    list.innerHTML = cards.map(c => `
      <div class="card-item type-${c.type}" onclick="App.showCardDetail('${c.id}')">
        <span class="ci-icon">${c.icon}</span>
        <div class="ci-info">
          <div class="ci-name">${c.name}</div>
          <div class="ci-type">${this.typeLabel(c.type)}</div>
        </div>
        <span class="ci-fav ${this.data.favs.includes(c.id)?'is-fav':''}">❤️</span>
      </div>
    `).join('');
  },

  setCardFilter(filter, btn) {
    this.state.cardFilter = filter;
    document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
    btn.classList.add('active');
    this.renderCardsList();
  },

  filterCards() {
    this.renderCardsList();
  },

  showCardDetail(id) {
    const card = CARTAS.find(c => c.id === id);
    if (!card) return;
    this.state.currentDetail = card;
    document.getElementById('detail-title').textContent = card.name;
    document.getElementById('detail-fav-btn').textContent = this.data.favs.includes(id) ? '❤️' : '🤍';
    const content = document.getElementById('card-detail-content');
    content.innerHTML = `<div class="detail-card type-${card.type}">${this.renderCardContent(card)}</div>`;
    this.showScreen('card-detail');
  },

  toggleFav() {
    const card = this.state.currentDetail;
    if (!card) return;
    const idx = this.data.favs.indexOf(card.id);
    if (idx >= 0) this.data.favs.splice(idx, 1);
    else this.data.favs.push(card.id);
    this.saveData();
    document.getElementById('detail-fav-btn').textContent = this.data.favs.includes(card.id) ? '❤️' : '🤍';
  },

  // ---- DAILY CHALLENGE ----
  updateDaily() {
    const today = new Date().toISOString().split('T')[0];
    const dayIndex = Math.floor(Date.now() / 86400000) % CARTAS.length;
    const card = CARTAS[dayIndex];
    const dc = document.getElementById('daily-card');
    if (dc) {
      dc.innerHTML = `<div class="detail-card type-${card.type}">${this.renderCardContent(card)}</div>`;
    }
    // Streak calendar
    const cal = document.getElementById('streak-calendar');
    const count = document.getElementById('streak-count');
    if (cal) {
      const now = new Date();
      const startOfWeek = new Date(now);
      startOfWeek.setDate(now.getDate() - now.getDay());
      let html = '';
      const days = ['D','L','M','X','J','V','S'];
      days.forEach(d => html += `<div class="streak-day" style="font-weight:700;color:var(--text3)">${d}</div>`);
      for (let i = 0; i < 28; i++) {
        const d = new Date(startOfWeek);
        d.setDate(startOfWeek.getDate() - startOfWeek.getDay() + i);
        const key = d.toISOString().split('T')[0];
        const done = this.data.dailyCompleted.includes(key);
        const isToday = key === today;
        html += `<div class="streak-day ${done?'done':''} ${isToday?'today':''}">${d.getDate()}</div>`;
      }
      cal.innerHTML = html;
      count.textContent = `🔥 ${this.data.streak} días consecutivos`;
    }
  },

  completeDailyChallenge() {
    const today = new Date().toISOString().split('T')[0];
    if (!this.data.dailyCompleted.includes(today)) {
      this.data.dailyCompleted.push(today);
      // Update streak
      const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
      if (this.data.lastDaily === yesterday || this.data.streak === 0) {
        this.data.streak++;
      } else if (this.data.lastDaily !== today) {
        this.data.streak = 1;
      }
      this.data.lastDaily = today;
      this.data.cardsWon++;
      this.saveData();
      this.checkAchievements();
      this.updateDaily();
      this.spawnParticles();
      alert('🎉 ¡Reto completado! +1 punto. ¡Sigue así, guerrero!');
    } else {
      alert('Ya completaste el reto de hoy. ¡Vuelve mañana!');
    }
  },

  // ---- ANTI-BULLYING ----
  updateABProgress() {
    const prog = document.getElementById('ab-progress');
    if (!prog) return;
    prog.innerHTML = AB_SCENARIOS.map((_, i) => {
      let cls = '';
      if (this.data.abCompleted.includes(i)) cls = 'done';
      else if (i === this.state.abIndex) cls = 'current';
      return `<div class="ab-dot ${cls}"></div>`;
    }).join('');
  },

  renderABScenario() {
    const i = this.state.abIndex;
    if (i >= AB_SCENARIOS.length) {
      document.getElementById('ab-scenario').innerHTML = '<h3>🎉 ¡Completaste todos los escenarios!</h3><p>Eres un verdadero Héroe Interior.</p>';
      document.getElementById('ab-explanation').classList.add('hidden');
      return;
    }
    const s = AB_SCENARIOS[i];
    document.getElementById('ab-title').textContent = s.title;
    document.getElementById('ab-situation').textContent = s.situation;
    document.getElementById('ab-explanation').classList.add('hidden');
    const opts = document.getElementById('ab-options');
    opts.innerHTML = s.options.map(o => `
      <button class="ab-option" onclick="App.chooseAB(this,'${o.cls}')">
        <div class="ab-option-label ${o.cls}">${o.label}</div>
        <div>${o.text}</div>
      </button>
    `).join('');
    this.updateABProgress();
  },

  chooseAB(btn, cls) {
    document.querySelectorAll('.ab-option').forEach(b => b.classList.remove('selected-passive','selected-aggressive','selected-assertive'));
    btn.classList.add(`selected-${cls}`);
    const s = AB_SCENARIOS[this.state.abIndex];
    const isAssertive = cls === 'assertive';
    const expDiv = document.getElementById('ab-explanation');
    const expContent = document.getElementById('ab-explanation-content');
    expContent.innerHTML = isAssertive
      ? `<h4>✅ ¡Excelente elección!</h4><p>${s.explanation}</p>`
      : `<h4>${cls==='passive'?'⚠️ Respuesta pasiva':'❌ Respuesta agresiva'}</h4><p>${s.explanation}</p>`;
    expDiv.classList.remove('hidden');
    if (isAssertive && !this.data.abCompleted.includes(this.state.abIndex)) {
      this.data.abCompleted.push(this.state.abIndex);
      this.data.cardsWon++;
      this.saveData();
      this.checkAchievements();
      this.updateABProgress();
    }
  },

  nextABScenario() {
    this.state.abIndex = (this.state.abIndex + 1) % AB_SCENARIOS.length;
    this.renderABScenario();
  },

  // ---- FRECUENCIAS ----
  selectFreq(hz) {
    this.state.freqHz = hz;
    document.querySelectorAll('.freq-btn').forEach(b => b.classList.remove('active'));
    document.querySelector(`.freq-btn[data-hz="${hz}"]`)?.classList.add('active');
    document.getElementById('freq-player').classList.remove('hidden');
    const names = {396:'Liberación del Miedo',432:'Armonía',528:'Reparación',639:'Conexión',741:'Despertar',852:'Intuición'};
    document.getElementById('freq-hz-display').textContent = `${hz}Hz`;
    document.getElementById('freq-name-display').textContent = names[hz] || '';
    this.stopFreq();
  },

  toggleFreq() {
    if (this.state.freqPlaying) {
      this.pauseFreq();
    } else {
      this.playFreq();
    }
  },

  playFreq() {
    if (!this.state.freqHz) return;
    try {
      if (!this.state.audioCtx) {
        this.state.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      }
      const ctx = this.state.audioCtx;
      if (ctx.state === 'suspended') ctx.resume();
      const hz = this.state.freqHz;
      // Binaural: slightly different freq to each ear (stereo)
      const oscL = ctx.createOscillator();
      const oscR = ctx.createOscillator();
      const gain = ctx.createGain();
      const merger = ctx.createChannelMerger(2);
      oscL.type = 'sine';
      oscR.type = 'sine';
      oscL.frequency.value = hz;
      oscR.frequency.value = hz + 4; // 4Hz binaural beat
      gain.gain.value = 0.3;
      oscL.connect(merger, 0, 0);
      oscR.connect(merger, 0, 1);
      merger.connect(gain);
      gain.connect(ctx.destination);
      oscL.start();
      oscR.start();
      this.state.oscillators = [oscL, oscR];
      this.state.gainNode = gain;
      this.state.freqPlaying = true;
      document.getElementById('freq-play-btn').textContent = '⏸️ Pausar';
      this.startFreqTimer();
      this.startFreqVisualization();
      // Track
      this.data.freqListened = (this.data.freqListened || 0) + 1;
      this.saveData();
      this.checkAchievements();
    } catch(e) {
      alert('No se pudo iniciar el audio. Intenta de nuevo.');
    }
  },

  pauseFreq() {
    if (this.state.gainNode) {
      this.state.gainNode.gain.value = 0;
    }
    this.state.freqPlaying = false;
    document.getElementById('freq-play-btn').textContent = '▶️ Reanudar';
    clearInterval(this.state.freqTimerInterval);
    cancelAnimationFrame(this.state.freqAnimFrame);
  },

  stopFreq() {
    if (this.state.oscillators) {
      this.state.oscillators.forEach(o => { try { o.stop(); } catch(e) {} });
      this.state.oscillators = null;
    }
    this.state.gainNode = null;
    this.state.freqPlaying = false;
    document.getElementById('freq-play-btn').textContent = '▶️ Reproducir';
    clearInterval(this.state.freqTimerInterval);
    cancelAnimationFrame(this.state.freqAnimFrame);
    const canvas = document.getElementById('freq-canvas');
    if (canvas) {
      const ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    document.getElementById('freq-timer-display').textContent = `${this.state.freqTimer}:00`;
  },

  setFreqTimer(min) {
    this.state.freqTimer = min;
    document.querySelectorAll('.timer-btn').forEach(b => b.classList.remove('active'));
    document.querySelector(`.timer-btn[data-min="${min}"]`)?.classList.add('active');
    document.getElementById('freq-timer-display').textContent = `${min}:00`;
    if (this.state.freqPlaying) {
      this.stopFreq();
    }
  },

  startFreqTimer() {
    let seconds = this.state.freqTimer * 60;
    clearInterval(this.state.freqTimerInterval);
    const display = document.getElementById('freq-timer-display');
    this.state.freqTimerInterval = setInterval(() => {
      seconds--;
      if (seconds <= 0) {
        this.stopFreq();
        alert('⏰ ¡Tiempo completado! Bien hecho, guerrero.');
        return;
      }
      const m = Math.floor(seconds / 60);
      const s = seconds % 60;
      display.textContent = `${m}:${s.toString().padStart(2, '0')}`;
    }, 1000);
  },

  startFreqVisualization() {
    const canvas = document.getElementById('freq-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const W = canvas.width, H = canvas.height;
    const hz = this.state.freqHz || 432;
    let phase = 0;
    const draw = () => {
      if (!this.state.freqPlaying) return;
      ctx.clearRect(0, 0, W, H);
      ctx.strokeStyle = '#a78bfa';
      ctx.lineWidth = 2;
      ctx.beginPath();
      for (let x = 0; x < W; x++) {
        const y = H / 2 + Math.sin((x / W) * Math.PI * 4 + phase) * (H / 3) * Math.sin(x / W * Math.PI);
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
      // Second wave
      ctx.strokeStyle = 'rgba(167,139,250,0.4)';
      ctx.beginPath();
      for (let x = 0; x < W; x++) {
        const y = H / 2 + Math.sin((x / W) * Math.PI * 4 + phase + 0.5) * (H / 3) * Math.sin(x / W * Math.PI);
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
      phase += 0.05;
      this.state.freqAnimFrame = requestAnimationFrame(draw);
    };
    draw();
    // Breathing guide
    const breathText = document.getElementById('breath-text');
    let breathPhase = 0;
    setInterval(() => {
      if (!this.state.freqPlaying) return;
      breathPhase = (breathPhase + 1) % 8;
      breathText.textContent = breathPhase < 4 ? 'Inhala' : 'Exhala';
    }, 2000);
  },

  // ---- PROFILE ----
  updateProfile() {
    const total = this.data.cardsWon || 0;
    let level = LEVELS[0];
    let nextLevel = LEVELS[1];
    for (let i = LEVELS.length - 1; i >= 0; i--) {
      if (total >= LEVELS[i].min) { level = LEVELS[i]; nextLevel = LEVELS[i + 1]; break; }
    }
    document.getElementById('profile-level-name').textContent = `${level.icon} ${level.name}`;
    const pct = nextLevel ? ((total - level.min) / (nextLevel.min - level.min)) * 100 : 100;
    document.querySelector('.level-fill').style.width = `${Math.min(100, pct)}%`;
    document.getElementById('profile-level-info').textContent =
      nextLevel ? `${total} / ${nextLevel.min} pts para ${nextLevel.name}` : `${total} pts — ¡Nivel máximo!`;
    document.getElementById('stat-games').textContent = this.data.games || 0;
    document.getElementById('stat-cards-won').textContent = this.data.cardsWon || 0;
    document.getElementById('stat-streak').textContent = this.data.streak || 0;
    document.getElementById('stat-scenarios').textContent = (this.data.abCompleted || []).length;
    // Achievements
    const achList = document.getElementById('achievements-list');
    if (achList) {
      achList.innerHTML = ACHIEVEMENTS.map(a => {
        const unlocked = this.data.achievements.includes(a.id);
        return `<div class="achievement ${unlocked?'':'locked'}"><div class="ach-icon">${a.icon}</div><span class="ach-name">${a.name}</span></div>`;
      }).join('');
    }
  },

  checkAchievements() {
    const d = this.data;
    const checks = {
      'first_game': d.games >= 1,
      '5_games': d.games >= 5,
      '10_games': d.games >= 10,
      'streak_3': d.streak >= 3,
      'streak_7': d.streak >= 7,
      'streak_30': d.streak >= 30,
      'ab_3': (d.abCompleted||[]).length >= 3,
      'ab_all': (d.abCompleted||[]).length >= AB_SCENARIOS.length,
      'freq_5': (d.freqListened||0) >= 5,
      'cards_50': (d.cardsViewed||[]).length >= 50,
      'warrior': d.cardsWon >= 30,
      'master': d.cardsWon >= 60
    };
    let newAch = false;
    for (const [id, ok] of Object.entries(checks)) {
      if (ok && !d.achievements.includes(id)) {
        d.achievements.push(id);
        newAch = true;
      }
    }
    if (newAch) this.saveData();
  },

  // ---- SETTINGS ----
  loadSettings() {
    const s = this.data.settings;
    document.getElementById('set-sound').checked = s.sound;
    document.getElementById('set-notif').checked = s.notif;
    document.getElementById('set-dark').checked = s.dark;
    if (!s.dark) document.body.classList.add('light');
  },
  saveSetting(key, val) {
    this.data.settings[key] = val;
    this.saveData();
  },
  toggleTheme(dark) {
    document.body.classList.toggle('light', !dark);
    this.data.settings.dark = dark;
    this.saveData();
  },
  resetAllData() {
    if (confirm('¿Borrar TODOS tus datos? Esto no se puede deshacer.')) {
      localStorage.removeItem('escudo_data');
      this.loadUserData();
      this.updateProfile();
      alert('Datos borrados. La app se reiniciará.');
      location.reload();
    }
  },

  // ---- PARTICLES ----
  spawnParticles() {
    const colors = ['#d4a017','#22c55e','#60a5fa','#a78bfa','#ef4444','#fb923c'];
    for (let i = 0; i < 12; i++) {
      const p = document.createElement('div');
      p.className = 'particle';
      p.style.left = (Math.random() * 100) + 'vw';
      p.style.top = (50 + Math.random() * 30) + 'vh';
      p.style.width = p.style.height = (4 + Math.random() * 8) + 'px';
      p.style.background = colors[Math.floor(Math.random() * colors.length)];
      p.style.animationDuration = (0.6 + Math.random() * 0.8) + 's';
      document.body.appendChild(p);
      setTimeout(() => p.remove(), 1500);
    }
  }
};

// ---- BOOT ----
document.addEventListener('DOMContentLoaded', () => App.init());