

listaDeProductosHTML(productos)

let refresh = document.getElementById('refresh');
refresh.addEventListener('click', _ => {
    location.reload();
})

function listaDeProductosHTML(array) {
    const tabla = document.querySelector("tbody");
    tabla.innerHTML = ""
    //Foreach no retorna ningun resultado,solo itera
    array.forEach(producto => {
        tabla.innerHTML += `<tr>
        <td>${producto.id}</td>
        <td>${producto.nombre}</td>
        <td>${producto.importe.toLocaleString()}</td>
        </tr>`
    });
}


function buscarProducto() {
    let resultado = [];

    let prod = parseInt(prompt("Ingresa el Código del producto a buscar:"));
    let encontrado = productos.find((producto) => producto.id === prod)
    if (encontrado !== undefined) {
        resultado.push(encontrado)
        listaDeProductosHTML(resultado)
        alert("Si quiere seguir viendo los productos reincie la pagina")
    } else {
        alert("No se encontro el producto.")
    }
}

function filtrarProductos(){
    let prod = prompt("Ingresa parte del nombre").toUpperCase()
    let encontrados = productos.filter((producto) => producto.nombre.includes(prod))
    if (encontrados.length > 0){
        listaDeProductosHTML(encontrados)
        alert("Si quiere volver a ver los productos reinicie la pagina")
    } else {
        alert("No se encontraron productos que coincidan")
    }
}

function existeProducto() {   
    let resultado = [];
    
    let prod = parseInt(prompt("Ingresa el codigo del producto a buscar:"))
    let existe = productos.find((producto)=> producto.id === prod)
    if(existe){
        alert("El codigo del producto que introdujo aun esta disponible")
        resultado.push(existe)
        listaDeProductosHTML(resultado)
    } else {
        alert("El codigo no existe.")
    }
}

function ordenarProductos(){
    let productosOrdenados = prompt("Ingresa como quieres que se organice la lista, A o Z:").toLowerCase().trim()
    if (productosOrdenados !== "a" && productosOrdenados !== "z"){
        alert("Por favor ponga 'A' o 'Z'")
    }   else {
           productos.sort((a, b)=>{ 
        if (productosOrdenados === "a"){
             if (a.nombre < b.nombre){
             return -1
         }
        }
        if(productosOrdenados === "z"){
            if (a.nombre > b.nombre){
            return -1
        }   
        }
    })
    }
 
    listaDeProductosHTML(productos)
}