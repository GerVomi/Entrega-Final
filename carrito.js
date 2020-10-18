const carrito = document.querySelector('.shopp-container')

const compraButton = document.querySelector('.comprarButton');

compraButton.addEventListener('click', botonComprar )

function botonComprar() {
    carrito.innerHTML = '';
    precioTotal();
  }
//funcion para enviar la info del prodcuto al carrito
        $( ".btn-primary" ).click(function() {
            const buton = event.target;
            const item = buton.closest('.col-lg-4')
             nombre = item.querySelector('#nombre-producto').textContent
             imagen = item.querySelector('#imagen-producto').src
             precio = Number(item.querySelector('#precio-producto').textContent.replace('$',' '))
             n = nombre
             i= imagen
             p = precio
             agregarAlCarrito(n,i,p)
             
             precioTotal(p)

              });
    /*  verifica que no se repita un producto en el carrito, de ser asi que solo aumente la cantidad, crea div cuando un producto nuevo es ingresado, llama a la funcion de remover un elemento cuando se apriete el boton correspondiente
      */
    function agregarAlCarrito (n,i,p){
       
        const elementsTitle = carrito.getElementsByClassName('shoppingCartItemTitle')
        
        
         for (let i = 0; i < elementsTitle.length; i++) {
            
            if (elementsTitle[i].textContent === n) {
                
             let cantidadComprar =  elementQuantity = elementsTitle[i].parentElement.parentElement.parentElement.querySelector('.cantidadProducto')
              cantidadComprar.value++;
              $('.toast').toast('show');
              precioTotal();
              return; 
            }
          }  

        const filaDelCarrito = document.createElement('div')
        const codigoCarrito = 
        `<div class="row itemCarrito">
        <div class="col-6">
            <div class="shopping-cart-item d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                <a class = "thumbnail">
                <img src=${i} id="imagen" class="shopping-cart-image">
                </a>
                <h6 class="shopping-cart-item-title shoppingCartItemTitle text-truncate ml-3 mb-0">${n}</h6>
            </div>
        </div>
        <div class="col-2">
            <div class="shopping-cart-price d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                <p class="item-price mb-0 shoppingCartItemPrice">$${p}</p>
            </div>
        </div>
        <div class="col-4">
            <div
                class="shopping-cart-quantity d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
                <input class="shopping-cart-quantity-input cantidadProducto" type="number"
                    value="1">
                <button class="btn btn-danger buttonDelete" type="button">X</button>
            </div>
        </div>
    </div>`;
   


   
    filaDelCarrito.innerHTML = codigoCarrito
    carrito.append(filaDelCarrito)
    filaDelCarrito.querySelector('.buttonDelete').addEventListener('click', removerItem)
    filaDelCarrito.querySelector('.cantidadProducto').addEventListener('change', cambiaCantidad )
    }
    
    //Suma y actualiza el precio total de la compra en el carrito
    function precioTotal(){
        let total = 0
        const totalCarrito = document.querySelector('.totalCarrito')
        const itemsDelCarrito = document.querySelectorAll('.itemCarrito')
        
        itemsDelCarrito.forEach(itemDelCarrito => {
            const  precioDelProducto = Number(itemDelCarrito.querySelector('.shoppingCartItemPrice').textContent.replace('$',' '))
            
            const cantidadElementos = itemDelCarrito.querySelector('.cantidadProducto')
    
            const cantidadElementosValue = Number(cantidadElementos.value)
            
            total = total + precioDelProducto * cantidadElementosValue
         })
         totalCarrito.innerHTML = `$${total}`
    }

    //para remover un item del carrito
    function removerItem(event){
        const botonClickeado = event.target
        botonClickeado.closest('.itemCarrito').remove()
        precioTotal()
    }
    

    //verifica que la cantidad de items a comprar sea como minimo 1
    function cambiaCantidad(event){
        const input = event.target
        if( input.value <=0){
            input.value = 1
        }
        precioTotal()
    }
          
         
        
    
