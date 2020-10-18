
    //color en los p de las cards
    $('.card-text').css('color','red')
    

    //ajax
    var y=0
            $.ajax({
                url: 'datos.json',
                dataType : 'json',
                success: function(data, status, jqXHR){
                    data.forEach(p => {
            $('.texto').append("<div class='slider'><br><p> Nombre:  "+p.nombre+" - Apellido : "+p.apellido+" - Que dijo?: "+p.frase+"</p></div>")
            $('.texto div').hide()
                    });
                    
                
                },
                error : function (jqXHR, status, error){
                    console.log('Error')
                }
            })

  
        function mostrar(){
        y++
        $('.texto div:nth-child('+y+')').fadeIn(3000)
      
    }
    //funcion para mostrar cliente por cliente, cuando llega al 12 , empieza de nuevo
    setInterval(function(){
            if(y==12){
                y=0
            }
        $('.texto div').hide()
         mostrar()
        }, 4000) 

    //para mostrar modal de contacto y guardar correo electronico en local Storage
    const comprarButton = document.querySelector('.nav-link');
    comprarButton.addEventListener('click', function guardarCorreo(){
    })


    
    var  p = 0
    function guardarCorreo (){
    
    correo = document.getElementById('correo').value
    if(correo == ''){
        alert ("No ingreso su correo")
    }
    localStorage.setItem(p+'correo', correo)
    p++
 }
    
    
    
        
            
           