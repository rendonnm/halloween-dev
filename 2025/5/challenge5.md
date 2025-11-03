# Jigsaw: “Hola, quiero jugar un juego…”

Tienes una cerradura de combinación con **4 ruedas**. Cada rueda muestra un dígito del **0 al 9**. La cerradura actualmente muestra un código, pero necesitas cambiarla a otro código.

> Puedes girar cada rueda hacia arriba **(+1)** o hacia abajo **(-1)**.
> Las ruedas son **circulares**: después del **9** viene el **0**, y antes del **0** está el **9**.

Debes cambiar la combinación con el **mínimo número de movimientos**. Si haces un paso en falso… estás muerto.

## 🧩 Tu misión

Implementa la función `changeLock(current, target)`.

### Entradas

* `current`: Código actual (**string** de 4 dígitos, ej.: `'0022'`)
* `target`: Código objetivo (**string** de 4 dígitos, ej.: `'0044'`)

### Salida

* El **número mínimo de movimientos** necesarios para llegar a la combinación objetivo.

## 📜 Reglas

* Cada rueda puede girar **+1** o **-1**.
* Las ruedas son **circulares**: `9 → 0` y `0 → 9`.
* Cada giro cuenta como **1 movimiento**.
* Las **4 ruedas son independientes**.

## 📝 Ejemplos

```js
changeLock('0022', '0044')
// → 4
// Rueda 2: 2→4 (2 movimientos hacia adelante)
// Rueda 3: 2→4 (2 movimientos hacia adelante)
// Total: 2+2 = 4
```

```js
changeLock('0000', '9999')
// → 4
// Cada rueda: 0→9 (1 movimiento hacia atrás es más rápido que 9 hacia adelante)
// Total: 1+1+1+1 = 4
```

```js
changeLock('1234', '5678')
// → 16
// Rueda 0: 1→5 (4 movimientos)
// Rueda 1: 2→6 (4 movimientos)
// Rueda 2: 3→7 (4 movimientos)
// Rueda 3: 4→8 (4 movimientos)
// Total: 4+4+4+4 = 16
```

```js
changeLock('0000', '0000')
// → 0
// Ya estamos en el código objetivo
```

```js
changeLock('1357', '2468')
// → 4
// Rueda 0: 1→2 (1 movimiento)
// Rueda 1: 3→4 (1 movimiento)
// Rueda 2: 5→6 (1 movimiento)
// Rueda 3: 7→8 (1 movimiento)
// Total: 1+1+1+1 = 4
```

> Recuerda… **tu vida está en juego**. ¡No te equivoques!
