# Custom Hook: useControls

## Detalles
En este custom hook se han definido los controles que se utilizaran en el juego y los métodos para cambiarlos.
También tienen definidos los booleanos que nos indican si se muestran los modal para cambiar los botones.

**Importante**
Durante los ejemplos que se utilizaran en esta documentación daremos por hecho que estamos en la raíz de la parte de front del proyecto  `/Tetris-Boilerplate/tetris-boilerplate/` y todas las rutas indicadas serán relativas a partir de este punto.
 

## Localización e importación

El archivo a importar se encuentra en `/src/js/hooks/useControls.js`

En este caso, para importar el archivo en las primeras lineas de nuestro documento deberíamos declarar :
`import useControls from '/src/js/hooks/useControls`

Una vez importado, debemos importar la información que necesitemos recoger para la lógica que necesitemos implementar :
`const {property, method} = useControls()`

##  Propiedades y métodos
### Propiedades
La lista de propiedades disponibles son las siguientes. Se especificara el formato mas adelante:
`const { buttonsMap , modalsShows } = useControls()`
 - buttonsMap = Contiene toda la informacion sobre el mapeo de controles para el juego
 - modalsShows = Contiene informacion sobre cual de los modales para el cambio de los controles debe mostrarse

### Métodos
La lista de metodos disponibles en este custom hook:
`const { handleOpenModal, handleCloseModal, handleChangeButton } = useControls()`


**handleOpenModal(modalName) :** Muestra el modal que se especifique. *modalName = Nombre de modal a mostrar, string*

**handleCloseModal(modalName) :** Cierra el modal que se especifique. *modalName = Nombre de modal a cerrar, string*

**handleChangeButton( button , mappedKey ) :** Cambia el boton indicado con la nueva asociacion de botones.
*button = Nombre del boton a cambiar. (Consultar informacion sobre la propiedad buttonsMap)*
*mappedKey = Objeto con informacion sobre el nuevo boton a asignar al control.*
 `mappedKey = {
"key":  "ArrowUp",
"keyCode":  38,
"code":  "ArrowUp",
} `


##  Propiedad buttonsMap
La propiedad buttonsMap es un objeto que contiene cinco propiedades, cada una de las propiedades tiene el nombre de la accion que deben realizar.

Lista de propiedades dentro de buttonsMap:
- rotateButton = Boton para rotar las piezas del tetris. *Por defecto flecha arriba*
- moveLeftButton = Boton para desplazar las piezas del tetris a la izquierda. *Por defecto flecha izquierda*
- moveRightButton = Boton para desplazar las piezas del tetris a la derecha. *Por defecto flecha derecha*
- moveDownButton = Boton para desplazar las piezas del tetris hacia abajo. *Por defecto flecha abajo*
- pauseButton = Boton para pausar la partida.  *Por defecto "P"*

### Propiedades de los botones.
Cada boton tiene las propiedades: *key, keyCode* y *code*
Cada una de las propiedades son los valores que se asignan al evento que dispara el pulsar una tecla.
Los valores iniciales han sido extraidos con informacion de esta pagina, que te muestra el evento de cada pulsacion de teclado que realizas: https://www.toptal.com/developers/keycode

## Ejemplo completo de como obtener los valores 

	   import useControls from '/src/js/hooks/useControls
		
		const MyComponent () =>{
			const { buttonsMap } = useControls()
			console.log(buttonsMap.rotateButton.keyCode) 
			// La linea superior nos haria un console log del keycode "rotateButton"

			return (Mycode)
			}