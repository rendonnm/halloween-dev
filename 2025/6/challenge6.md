# Art the Clown 🤡: Ruleta macabra

*Art the Clown* ha capturado a unas víctimas y las ha sentado en **círculo** 🎪, numeradas del **0** a **N-1**, siendo **N** el número de víctimas.

Art, metódico en su locura, propone un “juego”: empieza en la posición **0** y cuenta **K** víctimas en sentido horario (incluyendo a la persona actual). La víctima donde termina la cuenta es **eliminada** del círculo. Luego continúa contando **K** desde la **siguiente persona viva**. El proceso se repite hasta que solo quede **una**.

Tu misión es responder: **¿Quién será el último sobreviviente?**

## 🧩 Desafío

Implementa la función `surviveRoulette(victims, count)` que devuelve la **posición** de la última víctima que sobrevive.

### Parámetros

* `victims`: Número total de víctimas (sentadas en posiciones `0` a `victims - 1`).
* `count`: Número **K** a contar para eliminar a la siguiente víctima.

## 📝 Ejemplos

```js
surviveRoulette(4, 2)
// Resultado: 0

// Explicación:
// Inicio de 4 víctimas: [0, 1, 2, 3]
// Cuenta 2 desde posición 0: elimina 1 → [0, 2, 3]
// Cuenta 2 desde la última víctima: elimina 3 → [0, 2]
// Cuenta 2 desde la última víctima: elimina 2 → [0]
// Sobrevive: 0
```

```js
surviveRoulette(5, 3)
// Resultado: 3

// Explicación:
// Inicio de 5 víctimas: [0, 1, 2, 3, 4]
// Cuenta 3 desde 0: elimina 2 → [0, 1, 3, 4]
// Cuenta 3 desde 3: elimina 0 → [1, 3, 4]
// Cuenta 3 desde 1: elimina 4 → [1, 3]
// Cuenta 3 desde 1: elimina 1 → [3]
// Sobrevive: 3
```

```js
surviveRoulette(5, 10)
// Resultado: 3

// Explicación:
// Inicio de 5 víctimas: [0, 1, 2, 3, 4]
// Cuenta 10 desde 0: elimina 4 → [0, 1, 2, 3]
// Cuenta 10 desde 0: elimina 2 → [0, 1, 3]
// Cuenta 10 desde 0: elimina 0 → [1, 3]
// Cuenta 10 desde 1: elimina 1 → [3]
// Sobrevive: 3
```

> **Nota:** Este es un clásico conocido como el **Problema de Josefo**. Debes encontrar una solución eficiente, ya que `victims` puede ser **muy grande**.
