# Ring, ring… 📞

**Ghostface**: “Hola, Sidney… Tengo una lista de 1000 víctimas potenciales con sus números de teléfono. Tu amigo está en algún lugar de esta lista. ¿Puedes encontrarlo antes de que sea demasiado tarde?”

Te da un array **ORDENADO** de números de teléfono (de menor a mayor) y necesitas encontrar uno específico **lo más rápido posible**.

El problema: con 1000 números, buscar uno por uno sería demasiado lento. Necesitas un algoritmo más inteligente…

---

## 💻 El Desafío

Implementa la función `searchPhone(phones, target)` usando **BÚSQUEDA BINARIA**.

### Entradas

* `phones`: Array de números **ordenados de menor a mayor** (ej.: `[1001, 1002, 1005, 1008, ...]`)
* `target`: Número de teléfono que buscas

### Salida

* El **índice (posición)** donde se encuentra el número
* `-1` si **no existe** en la lista

---

## 📝 Ejemplos

```js
const phones = [1001, 1002, 1005, 1008, 1010, 1015, 1020];

searchPhone(phones, 1008);
// → 3 (está en el índice 3)

searchPhone(phones, 1001);
// → 0 (está en el índice 0)

searchPhone(phones, 1020);
// → 6 (está en el índice 6)

searchPhone(phones, 9999);
// → -1 (no existe)
```

---

## 💡 El consejo…

No tienes tiempo que perder. Necesitas buscar el número **lo más rápido posible** para que Ghostface no acabe con su víctima. Por eso, lo mejor es usar un **Algoritmo de Búsqueda Binaria**:

1. Mira el **elemento del medio** del array.
2. Si es el número que buscas → **¡lo encontraste!**
3. Si el objetivo es **menor** → busca en la **mitad izquierda**.
4. Si el objetivo es **mayor** → busca en la **mitad derecha**.
5. Repite hasta encontrarlo o quedarte sin elementos.

---

## 🧠 Visualización del Algoritmo

Busquemos el número `1008` en `[1001, 1002, 1005, 1008, 1010, 1015, 1020]`:

```txt
Paso 1: Revisar el medio
[1001, 1002, 1005, |1008|, 1010, 1015, 1020]
                     ↑
Medio = índice 3 → ¡Encontrado! Retorna 3
```

Busquemos el número `1015`:

```txt
Paso 1: Revisar el medio
[1001, 1002, 1005, |1008|, 1010, 1015, 1020]
                     ↑
1015 > 1008 → Buscar en la mitad DERECHA

Paso 2: Nuevo rango [1010, 1015, 1020]
[1010, |1015|, 1020]
        ↑
Medio = índice 5 → ¡Encontrado! Retorna 5
```

> Ten en cuenta que la lista de números puede ser **muy larga** como para hacer una búsqueda lineal—por eso la **búsqueda binaria** es clave aquí.
