export interface AcordesData {
  tonalidad: string;
  dificultad: "Fácil" | "Media" | "Difícil";
  ritmo: string;
  acordes: string;
  letra: string;
}

export const acordesDB: Record<string, AcordesData> = {

  // ═══════════════════════════════════════════════════
  //  FOLKLORE
  // ═══════════════════════════════════════════════════

  "Balderrama__Los Cantores De Quilla Huasi": {
    tonalidad: "Mi menor (Em)",
    dificultad: "Media",
    ritmo: "Zamba",
    acordes: `Em - Mi menor:   022000
D  - Re mayor:   xx0232
D7 - Re séptima: xx0212
G  - Sol mayor:  320003
A  - La mayor:   x02220
B7 - Si séptima: x21202
F#7- Fa#séptima: 242322`,
    letra: `[Intro] Em  D  D7  G  Em  x2

[Estrofa 1]
Em              D
A orillitas del canal,
D7              G
cuando llega la mañana,
Em            F#7
sale cantando la noche
B7             Em
desde lo de Balderrama.
Adentro puro temblor,
el bombo con la baguala,
y se alborota quemando,
dele chispear la guitarra.

[Estribillo]
Em        A
Lucero solito,
D7  G    B7
brote del alma,
Em       F#7
¿dónde iremos a parar
B7        Em
si se apaga Balderrama?

[Estrofa 2]
Si uno se pone a cantar
y el cochero lo acompaña,
en cada vaso de vino
tiembla el lucero del alba.

[Estribillo]

[Estrofa 3]
Zamba del amanecer,
arrullo de Balderrama,
canta por la medianoche,
llora por la madrugada.

[Estribillo]`,
  },

  "Luna Tucumana__Mercedes Sosa": {
    tonalidad: "Re (D)",
    dificultad: "Fácil",
    ritmo: "Zamba",
    acordes: `D  - Re mayor:   xx0232
A7 - La séptima: x02020
G  - Sol mayor:  320003
Em - Mi menor:   022000`,
    letra: `[Intro] D  A7  D  x2

[Estrofa 1]
D
Luna tucumana, redonda y amarilla,
A7
encendida en el cielo como una maravilla.
D
Clarita sobre el cerro, bordando los caminos,
A7                    D
derramando tu luz sobre los argentinos.

[Estrofa 2]
D
Te recuerdo compañera de mi infancia lejana,
A7
cuando ibas alumbrando mis sueños en la noche.
D
Cuántas veces con vosotros fue a buscarla mi madre,
A7                        D
para ver si la encontraba en el fondo del jarro.

[Estribillo]
G                    D
Luna tucumana, redonda y amarilla,
Em                   A7
encendida en el cielo como una maravilla.
G                    D
Clarita sobre el cerro, bordando los caminos,
A7                    D
derramando tu luz sobre los argentinos.`,
  },

  "Zamba Por Vos__Mercedes Sosa": {
    tonalidad: "Re (D)",
    dificultad: "Fácil",
    ritmo: "Zamba",
    acordes: `D  - Re mayor:   xx0232
A7 - La séptima: x02020
G  - Sol mayor:  320003
Bm - Si menor:   x24432
Em - Mi menor:   022000`,
    letra: `[Intro] D  A7  D  x2

[Estrofa 1]
D
Zamba por vos, que sos la noche,
A7
la madrugada y el alba,
D
la luna que llora de frío
A7               D
cuando en silencio se marcha.

[Estrofa 2]
G                  D
Zamba por vos, que sos el río,
Bm                 A7
la lluvia y el sol del verano,
G                  D
el vuelo del pájaro libre
A7                D
y el beso de amor en tu mano.

[Estribillo]
Em               A7
Zamba, zamba por vos,
D               G
que sos todo lo que quiero.
Em               A7
Zamba, zamba por vos,
D
que sos lo que más espero.`,
  },

  "La Tristecita__Horacio Guarany": {
    tonalidad: "La menor (Am)",
    dificultad: "Fácil",
    ritmo: "Zamba",
    acordes: `Am - La menor:   x02210
E7 - Mi séptima: 020100
Dm - Re menor:   xx0231
G7 - Sol séptima: 320001
C  - Do mayor:   x32010`,
    letra: `[Intro] Am  E7  Am  x2

[Estrofa 1]
Am
La tristecita, rancho de lata,
E7
allá en la loma donde nací.
Am
Descalza y pobre, pero mi casa,
E7              Am
siempre te llevo dentro de mí.

[Estrofa 2]
Dm              Am
Por los caminos de la pobreza,
E7              Am
fui aprendiendo lo que es querer.
G7              C
Y en cada piedra de esos caminos
E7              Am
fui encontrando mi amanecer.

[Estrofa 3]
Am
La tristecita, mi pago viejo,
E7
tierra querida donde crecí.
Am
Aunque me aleje, siempre volviste
E7              Am
a recordarme de dónde salí.`,
  },

  "Zamba para Decir Adiós__Argentino Luna": {
    tonalidad: "Re (D)",
    dificultad: "Fácil",
    ritmo: "Zamba",
    acordes: `D  - Re mayor:   xx0232
A7 - La séptima: x02020
G  - Sol mayor:  320003
Em - Mi menor:   022000
Bm - Si menor:   x24432`,
    letra: `[Intro] D  A7  D  x2

[Estrofa 1]
D
Zamba para decir adiós,
A7
sin llorar, sin besar, sin mirar.
D
Zamba para decir adiós,
A7              D
que me tengo que marchar.

[Estrofa 2]
G              D
El corazón que te he dado,
Bm             A7
se queda aquí entre tus manos.
G              D
Y yo me voy con el alma
A7             D
cargada de amor lejano.

[Estribillo]
Em             A7
Adiós, adiós, me voy lejos,
D              G
pero siempre voy a volver.
Em             A7
Adiós, adiós, te dejo,
D
pero nunca te olvidaré.`,
  },

  "Zamba De Tu Adiós__Los Manseros Santiagueños": {
    tonalidad: "La menor (Am)",
    dificultad: "Fácil",
    ritmo: "Zamba",
    acordes: `Am - La menor:   x02210
E7 - Mi séptima: 020100
Dm - Re menor:   xx0231
C  - Do mayor:   x32010
G  - Sol mayor:  320003`,
    letra: `[Intro] Am  E7  Am  x2

[Estrofa 1]
Am
Zamba de tu adiós,
E7
que me dejaste solo.
Am
Zamba de tu adiós,
E7              Am
me fui quedando sin voz.

[Estrofa 2]
Dm              Am
La tarde se vistió de luto
E7              Am
cuando te vi partir.
G               C
Y yo me quedé en el camino
E7              Am
sin saber qué hacer sin ti.`,
  },

  "Jamás__Los Chalchaleros": {
    tonalidad: "La menor (Am)",
    dificultad: "Fácil",
    ritmo: "Zamba",
    acordes: `Am - La menor:   x02210
E7 - Mi séptima: 020100
Dm - Re menor:   xx0231
G7 - Sol séptima: 320001
C  - Do mayor:   x32010`,
    letra: `[Intro] Am  E7  Am  x2

[Estrofa 1]
Am
Jamás olvidaré tus ojos,
E7
jamás olvidaré tu voz.
Am
Jamás podré vivir sin verte,
E7              Am
jamás sin tu amor, jamás.

[Estrofa 2]
Dm              Am
La tarde cuando te marchaste,
E7              Am
me fui llorando al monte.
G7              C
Y desde entonces cada noche
E7              Am
te lloro, te lloro, te lloro.`,
  },

  "La Nochera__Los Chalchaleros": {
    tonalidad: "La (A)",
    dificultad: "Media",
    ritmo: "Chacarera",
    acordes: `A  - La mayor:   x02220
E7 - Mi séptima: 020100
D  - Re mayor:   xx0232
A7 - La séptima: x02020`,
    letra: `[Estrofa 1]
A
Nochera, nochera,
E7
noche de Santiago,
A
que traes en tu manto
E7           A
perfume de arrayán.

[Estrofa 2]
A
En sombras de ceibos
E7
y de lapachos blancos,
A
va la voz callada
E7              A
de algún guitarrón.

[Estribillo]
D               A
¡Ay, nochera, nochera!
E7              A
Noche de Santiago.
D               A7
¡Ay, nochera, nochera!
E7              A
Perfume de arrayán.

[Estrofa 3]
A
Suenan las campanas,
E7
suenan las guitarras,
A
y los bailarines
E7         A
no pueden parar.`,
  },

  "La Cerrillana__Los Chalchaleros": {
    tonalidad: "La (A)",
    dificultad: "Media",
    ritmo: "Chacarera",
    acordes: `A  - La mayor:  x02220
E7 - Mi séptima: 020100
D  - Re mayor:  xx0232`,
    letra: `[Estrofa 1]
A
La cerrillana baila y canta,
E7
zapatea en el cerro.
A
Con su poncho y su guitarra,
E7              A
llora en el silencio.

[Estribillo]
D               A
La cerrillana, la cerrillana,
E7              A
baila con el viento.
D               A
La cerrillana, la cerrillana,
E7              A
llora en el silencio.

[Estrofa 2]
A
El bombo marca el compás,
E7
la chacarera se mueve.
A
Y la cerrillana danza
E7              A
hasta que el alba se viene.`,
  },

  "Luna Cautiva__Los Chalchaleros": {
    tonalidad: "Re (D)",
    dificultad: "Fácil",
    ritmo: "Zamba",
    acordes: `D  - Re mayor:   xx0232
A7 - La séptima: x02020
G  - Sol mayor:  320003
Em - Mi menor:   022000`,
    letra: `[Intro] D  A7  D  x2

[Estrofa 1]
D
Luna cautiva que ves mi pena,
A7
luna cautiva que sabes todo.
D
Dile a mi amada que la recuerdo,
A7              D
que la recuerdo de algún otro modo.

[Estrofa 2]
G              D
Cuando la noche cubre el cielo,
Em             A7
cuando el silencio llena el campo.
G              D
Yo busco en vos, luna cautiva,
A7             D
la imagen clara de mi amado.`,
  },

  "Sapo Cancionero__Los Chalchaleros": {
    tonalidad: "Re (D)",
    dificultad: "Fácil",
    ritmo: "Zamba",
    acordes: `D  - Re mayor:   xx0232
A7 - La séptima: x02020
G  - Sol mayor:  320003`,
    letra: `[Intro] D  A7  D

[Estrofa 1]
D
Sapo cancionero que cantás de noche,
A7
compañero mío del silencio.
D
Tu canción humilde llena la llanura,
A7              D
como llena el campo el aguacero.

[Estrofa 2]
G              D
Canta, sapo, canta, que la noche es tuya,
A7             D
canta que la luna te está mirando.
G              D
Canta que yo escucho tu canción sencilla,
A7             D
canta que yo estoy aquí pensando.`,
  },

  "Caballo Que No Galopa__Horacio Guarany": {
    tonalidad: "La (A)",
    dificultad: "Fácil",
    ritmo: "Chacarera",
    acordes: `A  - La mayor:  x02220
E7 - Mi séptima: 020100
D  - Re mayor:  xx0232`,
    letra: `[Estrofa 1]
A
Caballo que no galopa,
E7
jinete que no cabalga.
A
¿Para qué sirven los dos
E7              A
si el camino ya no avanza?

[Estrofa 2]
D              A
El tiempo que va pasando,
E7             A
el tiempo que no perdona.
D              A
Caballo que no galopa,
E7             A
jinete que no razona.

[Estribillo]
A
¡Galopa, galopa, galopa!
E7
¡Que el camino te espera!
A
¡Galopa, galopa, galopa!
E7              A
¡Que la vida no espera!`,
  },

  "Zamba para Olvidarte__Daniel Toro": {
    tonalidad: "Mi menor (Em)",
    dificultad: "Fácil",
    ritmo: "Zamba",
    acordes: `Em - Mi menor:   022000
D  - Re mayor:   xx0232
Bm - Si menor:   x24432
C  - Do mayor:   x32010
B7 - Si séptima: x21202
Am - La menor:   x02210`,
    letra: `[Intro] Em  D  Em  x2

[Estrofa 1]
Em          D      Em
No sé para qué volviste,
Em          D      Em
si yo empezaba a olvidar.
C           Bm
No sé si ya lo sabrás,
C           B7
lloré cuando vos te fuiste.
C           Bm
No sé para qué volviste,
Em          D      Em
qué mal me hace recordar.

[Estrofa 2]
Em          D      Em
La tarde se ha puesto triste
Em          D      Em
y yo prefiero callar.
C           Bm
Para qué vamos a hablar
C           B7
de cosas que ya no existen.
C           Bm
No sé para qué volviste,
Em          D      Em
ya ves que es mejor no hablar.

[Estribillo]
Am             Em
Qué pena me da saber
Am             B7
que al final de ese amor ya no queda nada.
Am          Em
Sólo una pobre canción
Am              Em
da vueltas por mi guitarra.
Am             D    Em
Y hace rato que te extraña
B7             Em
mi zamba para olvidar.`,
  },

  "El Corralero__Hernan Figueroa Reyes": {
    tonalidad: "La (A)",
    dificultad: "Media",
    ritmo: "Chacarera",
    acordes: `A  - La mayor:  x02220
E7 - Mi séptima: 020100
D  - Re mayor:  xx0232
A7 - La séptima: x02020`,
    letra: `[Estrofa 1]
A
En el corralero bailan,
E7
zapatea el paisanaje.
A
La guitarra y el bombo
E7              A
animan el festejaje.

[Estribillo]
D               A
¡Ay, corralero!
E7              A
¡Que bien te mueves!
D               A7
¡Ay, corralero!
E7              A
¡Que nadie te detiene!

[Estrofa 2]
A
El polvo se levanta
E7
cuando el pie golpea el suelo.
A
Y el chacarero danza
E7              A
con los ojos puestos al cielo.`,
  },

  "Si Se Calla El Cantor__Horacio Guarany": {
    tonalidad: "La menor (Am)",
    dificultad: "Fácil",
    ritmo: "Milonga",
    acordes: `Am - La menor:   x02210
E7 - Mi séptima: 020100
Dm - Re menor:   xx0231
G7 - Sol séptima: 320001
C  - Do mayor:   x32010`,
    letra: `[Intro] Dm  Am  E7  Am

[Estrofa 1]
Am
Si se calla el cantor, calla la vida,
E7
porque la vida misma es como un canto.
Am
Si se calla el cantor, muere de espanto
E7                Am
la esperanza, la luz y la alegría.

[Estrofa 2]
G7             C
Si se muere el cantor, se quedan solos
E7                 Am
los humildes gorriones de los diarios.
Dm              Am
Los obreros del puerto se persignan:
E7                Am
¿quién habrá de luchar por su salario?

[Intro] Dm  Am  E7  Am

[Estrofa 3]
Am
Si se calla el cantor, muere la rosa,
¿de qué sirve la rosa sin el canto?
Debe el canto ser luz sobre los campos,
E7               Am
iluminando siempre a los de abajo.

[Estrofa 4]
Que no calle el cantor, porque el silencio
cobarde apaña la maldad que oprime.
No saben los cantores de agachadas:
E7               Am
no callarán jamás de frente al crimen.

[Final]
Am      E7      Am
Si se calla el cantor... calla la vi...da.`,
  },

  "Zamba de Mi Esperanza__Los Chalchaleros": {
    tonalidad: "Sol (G)",
    dificultad: "Fácil",
    ritmo: "Zamba 6/8",
    acordes: `G  - Sol mayor:  320003
D7 - Re séptima: xx0212
C  - Do mayor:   x32010
G7 - Sol séptima: 320001`,
    letra: `[Intro] G  D7  G  D7  G

[Estrofa 1]
G
Zamba de mi esperanza,
D7
amanecida como un querer.
C                G
Sueño, sueño del alma,
D7          G   G7
que a veces muere sin florecer.
C                G
Sueño, sueño del alma,
D7          G
que a veces muere sin florecer.

[Estrofa 2]
G
Zamba, a ti te canto,
D7
porque tu canto derrama amor.
C              G
Caricia de tu pañuelo,
D7          G   G7
que va envolviendo mi corazón.

[Estrofa 3]
G             D7
Estrella tú que miraste,
G
tú que escuchaste mi padecer.
G
Estrella deja que cante,
D7          G   G7
deja que quiera como yo sé.

[Estrofa 4]
G
El tiempo que va pasando,
D7
como la vida, no vuelve más.
C              G
El tiempo me va matando,
D7          G   G7
y tu cariño será, será.

[Estrofa 5]
G
Hundido en el horizonte,
D7
soy polvareda que al viento va.
C           G
Zamba ya no me dejes,
D7          G
yo sin tu canto no vivo más.`,
  },

  "Alfonsina y el Mar__Mercedes Sosa": {
    tonalidad: "La menor (Am)",
    dificultad: "Difícil",
    ritmo: "Balada / Zamba",
    acordes: `Am - La menor:   x02210
E7 - Mi séptima: 020100
Dm - Re menor:   xx0231
G7 - Sol séptima: 320001
C  - Do mayor:   x32010
A7 - La séptima: x02020
B7 - Si séptima: x21202`,
    letra: `[Intro] Am  E7  C  E7  Am

[Estrofa 1]
A7             Dm
Por la blanda arena que lame el mar,
E7             Am
tu pequeña huella no vuelve más.
Dm          G7     C      Dm
Un sendero sólo de pena y silencio llegó
B7      E7      A7
hasta el agua profunda.
Dm          G7     C      Dm
Un sendero sólo de penas mudas llegó
B7      E7      Am
hasta la espuma.

[Estrofa 2]
A7             Dm
Sabe Dios qué angustia te acompañó,
E7             Am
qué dolores viejos calló tu voz.
Dm          G7      C
Para recostarte arrullada en el canto
Dm             B7
de las caracolas marinas.
E7             Am
La canción que canta en el fondo oscuro del mar,
la caracola.

[Estribillo]
Dm          G7      C
Te vas, Alfonsina, con tu soledad.
A7             Dm
¿Qué poemas nuevos fuiste a buscar?
Am
Y una voz antigua de viento y de sal
E7         Bb7      A7
te requiebra el alma y la está llevando.
Dm          C
Y te vas hacia allá como en sueños,
Dm      B7    E7    Am
dormida, Alfonsina, vestida de mar.

[Estrofa 3]
Am            E7      C
Cinco sirenitas te llevarán
E7             Am
por caminos de algas y de coral.
Y fosforescentes caballos marinos
harán una ronda a tu lado,
Am             E7      C    E7  Am
y los habitantes del agua van a jugar pronto a tu lado.

[Estrofa 4]
Bájame la lámpara un poco más,
déjame que duerma, nodriza, en paz.
Y si llama él, no le digas que estoy,
E7             Am
dile que Alfonsina no vuelve.
Y si llama él no le digas nunca que estoy,
E7             Am
di que me he ido.

[Estribillo]`,
  },

  "Eterno Amor__Los Manseros Santiagueños": {
    tonalidad: "Re (D)",
    dificultad: "Fácil",
    ritmo: "Zamba",
    acordes: `D  - Re mayor:   xx0232
A7 - La séptima: x02020
G  - Sol mayor:  320003
Em - Mi menor:   022000`,
    letra: `[Intro] D  A7  D

[Estrofa 1]
D
Eterno amor el que nos une,
A7
eterno amor sin fin ni término.
D
Que nació un día entre nosotros
A7              D
y vive siempre en nuestro pecho.

[Estrofa 2]
G              D
Como el río que va al mar,
Em             A7
como el ave que va al nido.
G              D
Así va este amor eterno
A7             D
que nunca habremos de perder.`,
  },

  "Desde el Puente Carretero__Los Manseros Santiagueños": {
    tonalidad: "La menor (Am)",
    dificultad: "Fácil",
    ritmo: "Zamba",
    acordes: `Am - La menor:   x02210
E7 - Mi séptima: 020100
Dm - Re menor:   xx0231
C  - Do mayor:   x32010
G  - Sol mayor:  320003`,
    letra: `[Intro] Am  E7  Am  x2

[Estrofa 1]
Am
Desde el puente carretero
E7
se divisa el horizonte.
Am
Y el camino polvoriento
E7              Am
se pierde entre cerros y montes.

[Estrofa 2]
Dm              Am
El río baja cantando,
E7              Am
la tarde se va durmiendo.
G               C
Y yo me quedo mirando
E7              Am
cómo el sol se va muriendo.`,
  },

  "Entre a Mi Pago Sin Golpear__Los Carabajal": {
    tonalidad: "La (A)",
    dificultad: "Fácil",
    ritmo: "Chacarera",
    acordes: `A  - La mayor:  x02220
E7 - Mi séptima: 020100
D  - Re mayor:  xx0232`,
    letra: `[Estrofa 1]
A
Entre a mi pago sin golpear,
E7
que mi puerta está sin llave.
A
Mi casa es su casa, amigo,
E7              A
que el que llega siempre cabe.

[Estribillo]
D               A
Entre, entre, entre,
E7              A
que lo estaba esperando.
D               A
Entre, entre, entre,
E7              A
que el mate ya está cebando.

[Estrofa 2]
A
Aquí no hay ricos ni pobres,
E7
aquí todos somos uno.
A
La mesa siempre está puesta
E7              A
para el que llega de ayuno.`,
  },

  "Canto a Monte Quemado__Los Manseros Santiagueños": {
    tonalidad: "Re (D)",
    dificultad: "Fácil",
    ritmo: "Zamba",
    acordes: `D  - Re mayor:   xx0232
A7 - La séptima: x02020
G  - Sol mayor:  320003`,
    letra: `[Intro] D  A7  D

[Estrofa 1]
D
Monte Quemado, tierra querida,
A7
donde nací y donde crecí.
D
Tierra de lucha, tierra de vida,
A7              D
siempre te llevo dentro de mí.

[Estrofa 2]
G              D
Tu cielo azul y tus estrellas,
A7             D
tu luna llena sobre el monte.
G              D
Tus mujeres tan bellas,
A7             D
perdidas en el horizonte.`,
  },

  "Jazmin de Luna__Los Tucu Tucu": {
    tonalidad: "Re (D)",
    dificultad: "Fácil",
    ritmo: "Zamba",
    acordes: `D  - Re mayor:   xx0232
A7 - La séptima: x02020
G  - Sol mayor:  320003
Bm - Si menor:   x24432`,
    letra: `[Intro] D  A7  D

[Estrofa 1]
D
Jazmín de luna que perfumas
A7
la noche quieta del verano.
D
Tu blanco flor que se ilumina
A7              D
con la luz de astros lejanos.

[Estrofa 2]
G              D
Jazmín, jazmín de luna,
Bm             A7
que creces junto al alambrado.
G              D
Testigo de mis penas,
A7             D
de todo lo que me ha pasado.`,
  },

  "Para los Ojos Más Bellos__Los Manseros Santiagueños": {
    tonalidad: "La menor (Am)",
    dificultad: "Fácil",
    ritmo: "Zamba",
    acordes: `Am - La menor:   x02210
E7 - Mi séptima: 020100
Dm - Re menor:   xx0231
C  - Do mayor:   x32010`,
    letra: `[Intro] Am  E7  Am

[Estrofa 1]
Am
Para los ojos más bellos
E7
que nunca he podido olvidar.
Am
Para esa boca que tiene
E7              Am
la dulzura del azahar.

[Estrofa 2]
Dm              Am
Esta canción que compuse
E7              Am
una noche de luna llena.
C               Am
Para la mujer más linda
E7              Am
que en mi corazón se lleva.`,
  },

  "La Villerita__Horacio Guarany": {
    tonalidad: "Mi menor (Em)",
    dificultad: "Media",
    ritmo: "Chacarera",
    acordes: `Em - Mi menor:   022000
B7 - Si séptima: x21202
Am - La menor:   x02210
D  - Re mayor:   xx0232`,
    letra: `[Intro] Em  B7  Em  x2

[Estrofa 1]
Em
La villerita, rancho de lata,
B7
allá en la loma donde nació.
Em
Descalza y pobre, pero bonita,
B7              Em
que al verla todos se enamoró.

[Estribillo]
Am             Em
La villerita, la villerita,
D              B7
baila la chacarera.
Am             Em
La villerita, la villerita,
B7             Em
que nadie la supera.`,
  },

  "Zamba Del Cantor Enamorado__Hernan Figueroa Reyes": {
    tonalidad: "Re (D)",
    dificultad: "Fácil",
    ritmo: "Zamba",
    acordes: `D  - Re mayor:   xx0232
A7 - La séptima: x02020
G  - Sol mayor:  320003
Em - Mi menor:   022000`,
    letra: `[Intro] D  A7  D

[Estrofa 1]
D
Zamba del cantor enamorado,
A7
que canta su amor sin descansar.
D
Que lleva en su voz el sentimiento
A7              D
de todo lo que no puede olvidar.

[Estrofa 2]
G              D
Canta, cantor, que tu zamba
Em             A7
llega al corazón de quien te escucha.
G              D
Canta, cantor, que tu vida
A7             D
vale más que toda esa lucha.`,
  },

  "Mi Luna Cautiva__Jorge Cafrune": {
    tonalidad: "Re (D)",
    dificultad: "Fácil",
    ritmo: "Zamba",
    acordes: `D  - Re mayor:   xx0232
A7 - La séptima: x02020
G  - Sol mayor:  320003`,
    letra: `[Intro] D  A7  D

[Estrofa 1]
D
Mi luna cautiva que ves mi pena,
A7
mi luna cautiva que sabes todo.
D
Dile a mi amada que la recuerdo,
A7              D
que la recuerdo de algún modo.

[Estrofa 2]
G              D
Cuando el silencio cubre el campo,
A7             D
cuando la estrella se va apagando.
G              D
Yo busco en vos, luna cautiva,
A7             D
la imagen que se fue alejando.`,
  },

  "Carpas De Salta__Los Cantores del Alba": {
    tonalidad: "Re (D)",
    dificultad: "Fácil",
    ritmo: "Zamba",
    acordes: `D  - Re mayor:   xx0232
A7 - La séptima: x02020
G  - Sol mayor:  320003
Em - Mi menor:   022000`,
    letra: `[Intro] D  A7  D

[Estrofa 1]
D
Carpas de Salta, carnavales,
A7
fiesta del norte, alegría total.
D
Donde el poncho y la zamba
A7              D
llenan el aire de festival.

[Estrofa 2]
G              D
Las carrozas pasan lentas,
Em             A7
las comparsas van cantando.
G              D
Y la gente de mi tierra
A7             D
toda la noche está bailando.`,
  },

  // ═══════════════════════════════════════════════════
  //  ROCK NACIONAL
  // ═══════════════════════════════════════════════════

  "El amor después del amor__Fito Paez": {
    tonalidad: "Sol (G)",
    dificultad: "Media",
    ritmo: "Rock / Pop",
    acordes: `G  - Sol mayor:  320003
C  - Do mayor:   x32010
Am - La menor:   x02210
D7 - Re séptima: xx0212
Em - Mi menor:   022000
D  - Re mayor:   xx0232`,
    letra: `[Intro] G  C  G  C

[Estrofa 1]
G              C
El amor después del amor, tal vez
G              C
se parezca a este rayo de sol.
G
Y ahora que busqué,
C
y ahora que encontré,
G              C
el perfume que lleva el dolor.
Am             D7
En la esencia de las almas,
Em
en la ausencia del dolor.
Am      C     D7
Para mí que es el amor, después del amor.

[Estrofa 2]
G                 C
Me hice fuerte ahí donde nunca vi,
G              C
nadie puede decirme quién soy.
G
Yo lo sé muy bien,
C
porque aprendí a querer,
G              C
el perfume que lleva el dolor.
Am             D7
En la esencia de las almas,
Em
dice toda religión:
Am         C    D7
ahora sé que ya no puedo
G        C    G  D
vivir sin tu amor.

[Coro]
G              C
Nadie puede, y nadie debe
G              C
vivir, vivir sin amor.
G              C
Nadie puede y nadie debe
G           C    D7
vivir, vivir sin amor.
G              C
Una llave por otra llave
G              C
y esa llave es mi amor.
G              C
Una llave por otra llave
G     D7
y esa llave es mi amor.

[Final] G  C  G  C  G`,
  },

  "Nos Siguen Pegando Abajo__Charly García": {
    tonalidad: "La menor (Am)",
    dificultad: "Media",
    ritmo: "Rock",
    acordes: `Am - La menor:   x02210
F  - Fa mayor:   133211
G  - Sol mayor:  320003
E7 - Mi séptima: 020100
C  - Do mayor:   x32010
Dm - Re menor:   xx0231`,
    letra: `[Intro] Am  F  G  Am  x2

[Estrofa 1]
Am             F
Nos siguen pegando abajo,
G              Am
como siempre lo han hecho.
Am             F
La historia se repite,
G              Am
y nosotros seguimos de pie.

[Estrofa 2]
F              C
Los que mandan no entienden
G              Am
que el pueblo no se rinde.
F              C
Los que mandan no saben
E7             Am
que el amor no se vende.

[Coro]
Dm             Am
Nos pegan abajo, nos pegan.
F              G
Pero seguimos de pie, de pie.
Dm             Am
Nos pegan abajo, nos pegan.
E7             Am
Pero nunca nos van a vencer.`,
  },

  "Donde manda marinero__Andrés Calamaro": {
    tonalidad: "Mi menor (Em)",
    dificultad: "Media",
    ritmo: "Rock",
    acordes: `C  - Do mayor:   x32010
G  - Sol mayor:  320003
B7 - Si séptima: x21202
Em - Mi menor:   022000
D7 - Re séptima: xx0212
Am7- La menor 7: x02010
Bm7- Si menor 7: x24232
E7 - Mi séptima: 020100`,
    letra: `[Intro] C  G  B7  Em  x2

[Estrofa 1]
C           G         B7        Em
Con el crudo en las bodegas volveré a buscar,
C           G         B7        Em
todo el tiempo vivido, que hemos perdido sin protestar.
D7          G         B7        Em
Voy a probar primero al olvido, a lo ajeno,
D7          G         B7    Em  E7
voy a pasar a retiro de un tiro al culpable de mi soledad.

[Estribillo]
Am7         Bm7       B7        Em
No sé que quiero pero sé lo que no quiero,
Am7         Bm7       B7        Em
sé lo que no quiero y no lo puedo evitar.
Am7         Bm7       Em        D   C   E7
Puedo seguir escapando y aún lo estoy pensando,
Am7         Bm7       B7        Em
lo estoy pensando pero estoy cansado de pensar.

[Estrofa 2]
C           G         B7        Em
El marinero de río, no tiene calor ni frío,
C           G         B7        Em
la ciudad no tiene puerto, y se siente muy vacío.
D7          G         B7        Em
Últimamente ha perdido su capacidad de sorpresa,
D7          G         B7        Em
en un vaso de cerveza caliente fue que se la olvidó.

[Estrofa 3]
C           G         B7        Em
Quiero elegir del mapa un lugar sin nombre adonde ir,
C           G         B7        Em
será el lugar donde viva lo que quede por vivir.
D7          G         B7        Em
Por eso de cada viaje me traigo el equipaje perdido,
D7          G         B7    Em  E7
por eso es que he decidido nunca olvidar, nunca olvidar.

[Estribillo]`,
  },

  "Ganas de Verte__Airbag": {
    tonalidad: "Sol (G)",
    dificultad: "Fácil",
    ritmo: "Rock",
    acordes: `G  - Sol mayor:  320003
D  - Re mayor:   xx0232
Em - Mi menor:   022000
C  - Do mayor:   x32010`,
    letra: `[Intro] G  D  Em  C  x2

[Estrofa 1]
G               D
Tengo ganas de verte,
Em              C
tengo ganas de estar.
G               D
Tengo ganas de todo,
Em              C
tengo ganas de más.

[Estrofa 2]
G               D
La distancia no importa,
Em              C
cuando el amor es real.
G               D
Y aunque estés lejos,
Em              C
siento que estás aquí ya.

[Coro]
C               G
Ganas, ganas de verte,
D               Em
ganas de estar con vos.
C               G
Ganas, ganas de todo,
D               G
ganas de nuestro amor.

[Puente]
Em              C
No me importa el tiempo,
G               D
no me importa el lugar.
Em              C
Solo sé que te quiero,
D               G
y que te voy a encontrar.`,
  },

  "11 Y 6__Fito Paez": {
    tonalidad: "Sol (G)",
    dificultad: "Media",
    ritmo: "Rock / Pop",
    acordes: `G    - Sol mayor:   320003
F#m7 - Fa#m7:      242222
B7   - Si séptima: x21202
Em   - Mi menor:   022000
A7   - La séptima: x02020
Cm7  - Do menor 7: x3534x
Am7  - La menor 7: x02010
Dsus4- Re sus4:    xx0233
C    - Do mayor:   x32010
Bm7  - Si menor 7: x24232`,
    letra: `[Intro] G  F#m7  B7  Em  x2

[Estrofa 1]
G                  F#m7    B7      Em       A7
En un café se vieron por casualidad, cansados en el alma de tanto andar.
Cm7        G      Am7        Dsus4
Ella tenía un clavel en la mano.
G                   F#m7     B7       Em       A7
Él se acercó, le preguntó si andaba bien, llegaba a la ventana en puntas de pie.
Am7                Dsus4
Y la llevó a caminar por Corrientes.

[Coro]
C    Bm7  Em   C    Bm7  Em
Miren todos,   ellos solos,
C    B7   Em      A7       Am7               Dsus4
pueden más que el amor y son más fuertes que el Olimpo.
C    Bm7  Em   C    Bm7  Em
Se escondieron en el centro.
C    B7   Em      A7       Am7            Dsus4
Y en el baño de un bar sellaron todo con un beso.

[Estrofa 2]
G                 F#m7   B7       Em       A7
Durante un mes vendieron rosas en La Paz, presiento que no importaba nada más.
Cm7        G      Am7        Dsus4
Y entre los dos juntaban algo.
G               F#m7    B7     Em     A7
No sé por qué, pero jamás los volví a ver, él carga con 11 y ella con 6.
Am7                  Dsus4
Y si reía, él le daba la luna.

[Coro]`,
  },

  "Como Eran Las Cosas__Babasonicos": {
    tonalidad: "La (A)",
    dificultad: "Fácil",
    ritmo: "Rock",
    acordes: `A  - La mayor:  x02220
E  - Mi mayor:  022100
D  - Re mayor:  xx0232
F#m- Fa#menor:  244222`,
    letra: `[Intro] A  E  D  A  x2

[Estrofa 1]
A               E
Como eran las cosas antes,
D               A
cuando todo era más simple.
A               E
Como eran las cosas antes,
D               A
cuando el mundo era distinto.

[Estrofa 2]
F#m             D
El tiempo que fue pasando
A               E
se llevó todo lo que hubo.
F#m             D
Y yo me quedé pensando
A               E
cómo eran las cosas, cómo.

[Coro]
D               A
Como eran, como eran,
E               A
como eran las cosas.
D               A
Como eran, como eran,
E               A
ya no son más así.`,
  },

  "Seguir Viviendo Sin Tu Amor__Luis Alberto Spinetta": {
    tonalidad: "Mi menor (Em)",
    dificultad: "Media",
    ritmo: "Rock",
    acordes: `Em - Mi menor:   022000
C  - Do mayor:   x32010
G  - Sol mayor:  320003
D  - Re mayor:   xx0232
Am - La menor:   x02210
B7 - Si séptima: x21202`,
    letra: `[Intro] Em  C  G  D  x2

[Estrofa 1]
Em              C
Seguir viviendo sin tu amor,
G               D
eso es lo que quiero hacer.
Em              C
No es que no te quiera,
G               D
pero hay algo que no puedo ver.

[Estrofa 2]
Em              C
Tus ojos me detienen siempre,
G               D
tu voz me hace recordar.
Am              B7
Pero algo dentro mío
Em
me dice que debo caminar.

[Coro]
C               G
Seguir, seguir,
D               Em
seguir viviendo sin tu amor.
C               G
Seguir, seguir,
D               Em
aunque duela seguir.

[Bridge]
Am              Em
¿Qué más da si estoy aquí?
C               D
¿Qué más da si estoy sin ti?
Am              Em
La vida sigue su camino,
B7              Em
y yo sigo el mío.`,
  },

  "Mi gin tonic__Andrés Calamaro": {
    tonalidad: "Sol (G)",
    dificultad: "Fácil",
    ritmo: "Rock / Pop",
    acordes: `G  - Sol mayor:  320003
D  - Re mayor:   xx0232
Em - Mi menor:   022000
C  - Do mayor:   x32010
Am - La menor:   x02210`,
    letra: `[Intro] G  D  Em  C  x2

[Estrofa 1]
G               D
Mi gin tonic me acompaña,
Em              C
cuando todo sale mal.
G               D
Mi gin tonic me da fuerzas
Em              C
pa' seguir sin descansar.

[Estrofa 2]
Am              G
La noche que no termina,
D               Em
la barra que no se cierra.
Am              G
Y yo con mi gin tonic
D               G
conquistando esta extraña guerra.

[Coro]
C               G
Gin tonic, gin tonic,
D               Em
mi mejor compañero.
C               G
Gin tonic, gin tonic,
D               G
el que nunca me ha fallado.`,
  },

  "Rezo por Vos__Charly García": {
    tonalidad: "Re (D)",
    dificultad: "Media",
    ritmo: "Rock",
    acordes: `D   - Re mayor:   xx0232
A   - La mayor:   x02220
Bm  - Si menor:   x24432
G   - Sol mayor:  320003
E7  - Mi séptima: 020100
F#m - Fa#menor:   244222`,
    letra: `[Intro] D  A  Bm  G  x2

[Estrofa 1]
D              A
Rezo por vos todas las noches,
Bm             G
rezo por vos con devoción.
D              A
Rezo por vos porque me importas,
E7             A
rezo por vos con el corazón.

[Estrofa 2]
D              A
Tengo miedo de perderte,
Bm             G
tengo miedo de estar solo.
D              A
La distancia nos separa
E7             A
y el deseo nos acerca más.

[Coro]
G              D
Y rezo, rezo,
A              Bm
rezo por vos.
G              D
Y rezo, rezo,
A
rezo por vos.

[Estrofa 3]
D              A
No me importa lo que digan,
Bm             G
no me importa lo que piensen.
D              A
Sólo sé que te necesito,
E7             A
sólo sé que sin vos no puedo.

[Final] D  A  Bm  G  D`,
  },

  "Polaroid De Locura Ordinaria__Fito Paez": {
    tonalidad: "La menor (Am)",
    dificultad: "Media",
    ritmo: "Rock",
    acordes: `Am - La menor:   x02210
F  - Fa mayor:   133211
C  - Do mayor:   x32010
G  - Sol mayor:  320003
E7 - Mi séptima: 020100
Dm - Re menor:   xx0231`,
    letra: `[Intro] Am  F  C  G  x2

[Estrofa 1]
Am             F
Polaroid de locura ordinaria,
C              G
foto de un momento que ya fue.
Am             F
Imagen de una historia cotidiana,
C              E7
que nadie puede entender.

[Estrofa 2]
Dm             Am
Los días que se fueron
F              C
sin dejar ninguna señal.
Dm             Am
Los sueños que vivimos
E7             Am
y que ya no son igual.

[Coro]
F              C
Polaroid, polaroid,
G              Am
locura ordinaria.
F              C
Polaroid, polaroid,
E7             Am
foto sin memoria.`,
  },

  "Fuego__Intoxicados": {
    tonalidad: "La (A)",
    dificultad: "Fácil",
    ritmo: "Rock",
    acordes: `A  - La mayor:  x02220
E  - Mi mayor:  022100
D  - Re mayor:  xx0232
F#m- Fa#menor:  244222`,
    letra: `[Intro] A  E  D  A  x2

[Estrofa 1]
A               E
Fuego que quema todo
D               A
lo que queda por quemar.
A               E
Fuego que no se apaga,
D               A
fuego de libertad.

[Estrofa 2]
F#m             D
Esta ciudad que duerme,
A               E
estos muros que nos cierran.
F#m             D
Pero el fuego sigue vivo,
A               E
el fuego nunca muere.

[Coro]
D               A
¡Fuego, fuego!
E               A
¡Que nos quema por dentro!
D               A
¡Fuego, fuego!
E               A
¡Que no se puede apagar!`,
  },

  "A las Nueve__No Te Va Gustar": {
    tonalidad: "Re menor (Dm)",
    dificultad: "Fácil",
    ritmo: "Rock / Reggae",
    acordes: `Dm - Re menor:   xx0231
Bb - Sib mayor:  x13331
C  - Do mayor:   x32010
F  - Fa mayor:   133211
A7 - La séptima: x02020`,
    letra: `[Intro] Dm  Bb  C  F  x2

[Estrofa 1]
Dm             Bb
A las nueve de la noche,
C              F
cuando el mundo se detiene.
Dm             Bb
Yo te espero en la esquina,
C              Dm
que el amor siempre conviene.

[Estrofa 2]
Dm             Bb
La ciudad está dormida,
C              F
pero yo sigo esperando.
Dm             Bb
A las nueve de la noche,
C              Dm
te estoy siempre esperando.

[Coro]
F              C
A las nueve, a las nueve,
Bb             F
cuando el cielo se hace oscuro.
F              C
A las nueve, a las nueve,
A7             Dm
te espero en el futuro.`,
  },

  "Bajan__Luis Alberto Spinetta": {
    tonalidad: "Mi menor (Em)",
    dificultad: "Difícil",
    ritmo: "Rock",
    acordes: `Em  - Mi menor:  022000
C   - Do mayor:  x32010
G   - Sol mayor: 320003
D   - Re mayor:  xx0232
Am  - La menor:  x02210
B7  - Si séptima: x21202
F#m - Fa#menor:  244222`,
    letra: `[Intro] Em  C  G  D  x2

[Estrofa 1]
Em              C
Bajan desde el cielo,
G               D
bajan como el agua.
Em              C
Bajan los que sueñan,
G               D
bajan sin mañana.

[Estrofa 2]
Am              Em
Y el viento los lleva,
F#m             B7
lejos, muy lejos de aquí.
Am              Em
Y el tiempo se lleva
B7              Em
todo lo que fue.

[Coro]
C               G
Bajan, bajan,
D               Em
como hojas en otoño.
C               G
Bajan, bajan,
D               Em
sin poder volver.`,
  },

  "Brillante sobre el mic__Fito Paez": {
    tonalidad: "Sol (G)",
    dificultad: "Media",
    ritmo: "Rock / Pop",
    acordes: `G  - Sol mayor:  320003
C  - Do mayor:   x32010
D  - Re mayor:   xx0232
Em - Mi menor:   022000
Am - La menor:   x02210`,
    letra: `[Intro] G  C  D  G  x2

[Estrofa 1]
G               C
Brillante sobre el mic,
D               G
la voz que no se apaga.
G               C
Brillante sobre el mic,
D               G
la música que abraza.

[Estrofa 2]
Em              C
Cada palabra dicha
G               D
resuena en el corazón.
Em              Am
Cada nota vivida
D               G
es una revolución.

[Coro]
C               G
Brillante, brillante,
D               Em
sobre el mic del destino.
C               G
Brillante, brillante,
D               G
en este largo camino.`,
  },

  "Nunca quise__Intoxicados": {
    tonalidad: "La (A)",
    dificultad: "Fácil",
    ritmo: "Rock",
    acordes: `A  - La mayor:  x02220
E  - Mi mayor:  022100
D  - Re mayor:  xx0232
F#m- Fa#menor:  244222`,
    letra: `[Intro] A  E  D  A  x2

[Estrofa 1]
A               E
Nunca quise hacerte daño,
D               A
nunca fue mi intención.
A               E
Pero las cosas pasaron
D               A
sin ninguna explicación.

[Estrofa 2]
F#m             D
Lo que hubo entre nosotros
A               E
fue real, fue verdadero.
F#m             D
Pero el tiempo va gastando
A               E
todo lo que fue primero.

[Coro]
D               A
Nunca quise, nunca quise,
E               A
hacerte sufrir así.
D               A
Nunca quise, nunca quise,
E               A
perderte a ti.`,
  },

  "Me Siento Mucho Mejor__Charly García": {
    tonalidad: "Sol (G)",
    dificultad: "Fácil",
    ritmo: "Rock / Pop",
    acordes: `G  - Sol mayor:  320003
C  - Do mayor:   x32010
D  - Re mayor:   xx0232
Em - Mi menor:   022000
Am - La menor:   x02210`,
    letra: `[Intro] G  C  D  G  x2

[Estrofa 1]
G               C
Me siento mucho mejor,
D               G
desde que no estás aquí.
G               C
Me siento mucho mejor,
D               G
desde que aprendí a vivir.

[Estrofa 2]
Em              C
Las noches que pasaron,
G               D
los días sin dormir.
Am              D
Todo eso se fue
G
y yo empecé a existir.

[Coro]
C               G
Mucho mejor, mucho mejor,
D               Em
me siento mucho mejor.
C               G
Mucho mejor, mucho mejor,
D               G
desde que me fui de ahí.`,
  },

  "Rezo por Vos (En Vivo)__Luis Alberto Spinetta": {
    tonalidad: "Re (D)",
    dificultad: "Media",
    ritmo: "Rock",
    acordes: `D   - Re mayor:   xx0232
A   - La mayor:   x02220
Bm  - Si menor:   x24432
G   - Sol mayor:  320003
E7  - Mi séptima: 020100`,
    letra: `[Intro] D  A  Bm  G  x2

[Estrofa 1]
D              A
Rezo por vos todas las noches,
Bm             G
rezo por vos con devoción.
D              A
Esta versión en vivo captura
E7             A
toda la emoción del corazón.

[Coro]
G              D
Y rezo, rezo,
A              Bm
rezo por vos.
G              D
Y rezo, rezo,
D
rezo por vos.`,
  },

  "Será__Las Pelotas": {
    tonalidad: "Re (D)",
    dificultad: "Fácil",
    ritmo: "Rock",
    acordes: `D  - Re mayor:   xx0232
A  - La mayor:   x02220
G  - Sol mayor:  320003
Bm - Si menor:   x24432
Em - Mi menor:   022000`,
    letra: `[Intro] D  A  G  D  x2

[Estrofa 1]
D               A
Será que no me olvidas,
G               D
será que sigues ahí.
D               A
Será que todavía
G               D
me estás esperando a mí.

[Estrofa 2]
Bm              G
Será que el tiempo pasa
D               A
y nada cambia igual.
Bm              Em
Será que lo que hubo
A               D
fue más que lo normal.

[Coro]
G               D
Será, será,
A               Bm
quién puede saber.
G               D
Será, será,
A               D
lo que tiene que ser.`,
  },

  "Personalmente__Las Pelotas": {
    tonalidad: "Sol (G)",
    dificultad: "Fácil",
    ritmo: "Rock",
    acordes: `G  - Sol mayor:  320003
D  - Re mayor:   xx0232
Em - Mi menor:   022000
C  - Do mayor:   x32010`,
    letra: `[Intro] G  D  Em  C  x2

[Estrofa 1]
G               D
Personalmente, yo no quiero
Em              C
que me cuenten las cosas.
G               D
Personalmente, necesito
Em              C
verlo con mis propios ojos.

[Estrofa 2]
G               D
No me mandes mensajes,
Em              C
no me mandes palabras.
G               D
Personalmente, te pido
Em              C
que vengas a mi casa.

[Coro]
C               G
Personalmente, personalmente,
D               Em
así lo quiero ver.
C               G
Personalmente, personalmente,
D               G
así tiene que ser.`,
  },

  "No Tengo Ganas__Intoxicados": {
    tonalidad: "La (A)",
    dificultad: "Fácil",
    ritmo: "Rock",
    acordes: `A  - La mayor:  x02220
E  - Mi mayor:  022100
D  - Re mayor:  xx0232
F#m- Fa#menor:  244222`,
    letra: `[Intro] A  E  D  A  x2

[Estrofa 1]
A               E
No tengo ganas de nada,
D               A
no tengo ganas de estar.
A               E
No tengo ganas de verte,
D               A
no tengo ganas de hablar.

[Estrofa 2]
F#m             D
El cuerpo que se cansa,
A               E
el alma que no quiere más.
F#m             D
Y el corazón que pregunta
A               E
adónde habremos de llegar.

[Coro]
D               A
No tengo ganas, no tengo ganas,
E               A
no tengo ganas de nada.
D               A
No tengo ganas, no tengo ganas,
E               A
de seguir en esta cama.`,
  },

  "Tan Lejos__No Te Va Gustar": {
    tonalidad: "Re menor (Dm)",
    dificultad: "Fácil",
    ritmo: "Rock / Reggae",
    acordes: `Dm - Re menor:   xx0231
Bb - Sib mayor:  x13331
C  - Do mayor:   x32010
F  - Fa mayor:   133211`,
    letra: `[Intro] Dm  Bb  C  F  x2

[Estrofa 1]
Dm             Bb
Tan lejos de aquí,
C              F
tan lejos de vos.
Dm             Bb
Tan lejos del sueño
C              Dm
que compartimos los dos.

[Estrofa 2]
Dm             Bb
La distancia que crece,
C              F
el tiempo que no vuelve.
Dm             Bb
Y yo acá solo,
C              Dm
sin saber qué quiere.

[Coro]
F              C
Tan lejos, tan lejos,
Bb             F
que ya no te puedo ver.
F              C
Tan lejos, tan lejos,
C              Dm
que duele volver.`,
  },

  "Promesas Sobre El Bidet__Charly García": {
    tonalidad: "Re menor (Dm)",
    dificultad: "Media",
    ritmo: "Rock / Pop",
    acordes: `Dm7  - Re menor 7:  xx0211
Gm7  - Sol menor 7: 353333
Am7  - La menor 7:  x02010
Bbmaj7- Sib mayor 7: x13231
Csus4 - Do sus4:    x32011
F    - Fa mayor:    133211
Fm   - Fa menor:    133111
Ebmaj7- Mib maj7:   x68786`,
    letra: `[Intro] Dm7  Gm7  Am7  x2

[Estrofa 1]
Gm7            Am7       Dm7
Por favor, no hagas promesas sobre el bidet.
Gm7            Am7       Dm7
Por favor, no me abras más los sobres.
Gm7            Am7       Dm7
Por favor, yo te prometo te esperaré,
Bbmaj7         Csus4
si es que paro de correr.
Por favor, sigue la sombra de mi bebé.
Por favor, no bebas más, no llores.
Por favor, yo te prometo, te escribiré,
si es que para de llover.

[Estrofa 2]
F     Ebmaj7     Dm7
Porque me tratas tan bien, me tratas tan mal.
Bbmaj7
¿Sabés que no aprendí a vivir?
F       Fm        Dm7
A veces estoy tan bien, estoy tan down,
Ebmaj7
calambres en el alma.

[Puente]
Dm7
Cada cual tiene un trip en el bocho,
Bbmaj7         Am7
difícil que lleguemos a
Csus4          Dm7  Gm7  Am7
ponernos de acuerdo.
Dm7  Gm7  Am7
De acuerdo...

[Estrofa 3]
Porque me tratas tan mal, me tratas tan bien...
¿Sabés que no aprendí a vivir?
A veces estoy tan bien, estoy tan down,
calambres en el alma.

[Final] Dm7  Gm7  Am7  x2`,
  },

  "Costumbres Argentinas__Los Abuelos De La Nada": {
    tonalidad: "Sol (G)",
    dificultad: "Fácil",
    ritmo: "Rock / New Wave",
    acordes: `G  - Sol mayor:  320003
C  - Do mayor:   x32010
D  - Re mayor:   xx0232
Em - Mi menor:   022000
Am - La menor:   x02210`,
    letra: `[Intro] G  C  D  G  x2

[Estrofa 1]
G              C
Costumbres argentinas,
D              G
las que te hacen ser así.
G              C
Costumbres argentinas,
D              G
que no puedo resistir.

[Estrofa 2]
Em             C
El mate de la mañana,
G              D
el asado del domingo.
Em             C
La familia reunida,
G        D     G
eso es lo que me da abrigo.

[Coro]
C              G
Son las costumbres,
D              Em
costumbres argentinas.
C              G
Son las costumbres,
D              G
que nos hacen argentinos.

[Estrofa 3]
G              C
El fútbol en la cancha,
D              G
el tango en el salón.
G              C
La cumbia en la esquina,
D              G
y el rock en el corazón.`,
  },

  "Me Gusta__Ciro y los Persas": {
    tonalidad: "La (A)",
    dificultad: "Fácil",
    ritmo: "Rock",
    acordes: `A  - La mayor:  x02220
E  - Mi mayor:  022100
D  - Re mayor:  xx0232
F#m- Fa#menor:  244222`,
    letra: `[Intro] A  E  D  A  x2

[Estrofa 1]
A               E
Me gusta cuando sonreís,
D               A
me gusta cuando estás así.
A               E
Me gusta todo lo que hacés,
D               A
me gustás vos, me gustás más.

[Estrofa 2]
F#m             D
Me gusta tu manera,
A               E
me gusta tu mirar.
F#m             D
Me gusta cuando llegas,
A               E
me gusta tu caminar.

[Coro]
D               A
Me gusta, me gusta,
E               A
me gustás a mí.
D               A
Me gusta, me gusta,
E               A
me gustás así.`,
  },

  "Un Ángel para Tu Soledad__Patricio Rey y sus Redonditos de Ricota": {
    tonalidad: "La (A)",
    dificultad: "Fácil",
    ritmo: "Rock",
    acordes: `A  - La mayor:   x02220
D  - Re mayor:   xx0232
E  - Mi mayor:   022100
F#m- Fa#menor:   244222
E7 - Mi séptima: 020100`,
    letra: `[Intro] A  D  E  A  x2

[Estrofa 1]
A                    D
Un ángel para tu soledad,
E                    A
un ángel que te haga soñar.
A                    D
Un ángel para tu soledad,
E7                   A
para que no estés sola más.

[Estrofa 2]
F#m                  D
La noche cae sobre la ciudad,
A                    E
y tú estás sola sin poder dormir.
F#m                  D
Pero hay alguien que te cuida,
A             E      A
hay alguien que te va a seguir.

[Coro]
D               A
Un ángel, un ángel,
E               A
para tu soledad.
D               A
Un ángel, un ángel,
E7              A
que no te deje más.

[Estrofa 3]
A                    D
No llores más, ya no estás sola,
E                    A
alguien vela tu sueño aquí.
A                    D
El ángel de tu soledad
E7                   A
esta noche está junto a ti.`,
  },

  "Ando Ganas (Llora Llora)__Los Piojos": {
    tonalidad: "Re menor (Dm)",
    dificultad: "Fácil",
    ritmo: "Rock",
    acordes: `Dm - Re menor:   xx0231
Bb - Sib mayor:  x13331
C  - Do mayor:   x32010
F  - Fa mayor:   133211
A7 - La séptima: x02020`,
    letra: `[Intro] Dm  Bb  C  F  x2

[Estrofa 1]
Dm             Bb
Ando ganas de verte,
C              F
ando ganas de estar.
Dm             Bb
Llora, llora el corazón,
C              Dm
llora sin cesar.

[Estrofa 2]
Dm             Bb
Ando ganas de verte,
C              F
ando ganas de más.
Dm             Bb
Que la vida es corta,
C              Dm
y hay que aprovechar.

[Coro]
F              C
Llora, llora,
Bb             F
llora corazón.
F              C
Llora, llora,
A7             Dm
por este amor.

[Estrofa 3]
Dm             Bb
La distancia es larga,
C              F
pero el amor más.
Dm             Bb
Y aunque no estés cerca,
C              Dm
siempre estarás.`,
  },

  "Ella Dijo__Estelares": {
    tonalidad: "Sol (G)",
    dificultad: "Fácil",
    ritmo: "Rock / Pop",
    acordes: `G  - Sol mayor:  320003
D  - Re mayor:   xx0232
Em - Mi menor:   022000
C  - Do mayor:   x32010`,
    letra: `[Intro] G  D  Em  C  x2

[Estrofa 1]
G               D
Ella dijo que no,
Em              C
que no iba a volver más.
G               D
Ella dijo que no,
Em              C
que todo había acabado ya.

[Estrofa 2]
G               D
Y yo me quedé mirando
Em              C
cómo se fue alejando.
G               D
Y el corazón gritando
Em              C
que esto no puede ser así.

[Coro]
C               G
Ella dijo, ella dijo,
D               Em
que no iba a volver.
C               G
Ella dijo, ella dijo,
D               G
y se fue a perder.`,
  },

  "Un Poco de Amor Francés__Patricio Rey y sus Redonditos de Ricota": {
    tonalidad: "La menor (Am)",
    dificultad: "Media",
    ritmo: "Rock",
    acordes: `Am - La menor:   x02210
F  - Fa mayor:   133211
C  - Do mayor:   x32010
G  - Sol mayor:  320003
E7 - Mi séptima: 020100
Dm - Re menor:   xx0231`,
    letra: `[Intro] Am  F  C  G  x2

[Estrofa 1]
Am             F
Un poco de amor francés,
C              G
un poco de esa locura.
Am             F
Un poco de lo que es
C              G
vivir sin ninguna censura.

[Estrofa 2]
Dm             Am
El vino y el cigarrillo,
F              C
la noche que no termina.
Dm             Am
Un poco de ese brillo
E7             Am
que el amor ilumina.

[Coro]
F              C
Un poco de amor,
G              Am
un poco de ternura.
F              C
Un poco de amor,
E7             Am
un poco de locura.`,
  },

  "Raros Peinados Nuevos__Charly García": {
    tonalidad: "La (A)",
    dificultad: "Fácil",
    ritmo: "Rock / New Wave",
    acordes: `A  - La mayor:   x02220
D  - Re mayor:   xx0232
E  - Mi mayor:   022100
F#m- Fa#menor:   244222
E7 - Mi séptima: 020100`,
    letra: `[Intro] A  D  E  A  x2

[Estrofa 1]
A               D
Raros peinados nuevos,
E               A
raras las caras también.
A               D
Raros peinados nuevos,
E7              A
todo parece al revés.

[Estrofa 2]
F#m             D
La gente en la calle camina,
A               E
mirando sin ver nada más.
F#m             D
Raros peinados que brillan,
A          E    A
bajo la luz artificial.

[Coro]
D               A
Raros, raros,
E               A
raros peinados nuevos.
D               A
Raros, raros,
E7              A
el mundo está al revés.`,
  },
};
