# Descripción
---

Una lista con elementos animados según el scroll. Cada elemento se mueve de manera relativa a elementos que se pueden asignar.

# ¿Cómo usar?
---

Realmente son 2 componentes: `AnimateWrapper` y `AnimatedItem`. El wrapper solo es un contenedor con los estilos necesarios para que todo funcione, mientras que el item recibe por props los datos que necesites que muestre.

En este caso tendrás que mapearlos usando los datos que necesites, todo dentro de `AnimatedWrapper`

# Las Props
---

## AnimatedItem: 

* **value**: *string*
* **src**: *string* (ruta a una imagen)
* **ref**: *React ref*

**NOTA**: Siempre procurar que las refs se hayan renderizado antes de pasarlas como props, sino esto puede dar errores.
Como ejemplo en este proyecto se guardan en un estado que se inicializa cuando el componente `App` es renderizado

##AnimateWrapper

* **children**: *React components*

**Ejemplo**: Acá se ve como se usan los componentes en conjunto. Solo hay que mapear cada objeto con el `AnimatedItem` y 
el se encargará del resto

```
        <AnimatedWrapper>
          {list.map((item, index) => {
            return (
              <Fragment key={generateKey(item.value)}>
                <AnimatedItem
                  value={item.value}
                  src={item.src}
                  ref={item.ref}
                />
              </Fragment>
            );
          })}
        </AnimatedWrapper>

```

# Proximos cambios
---

Añadir props para definir las transiciones, colores y el area en el cual se ejecutarán los eventos
