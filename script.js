const config ={
    'greeting':{
        'slogan':'las mejores guitarras',
        'imagen':'guitarra.jpg',
        'text_button':'Comprar'
        }
}


const init=(config)=>{
    $('#eslogan').html(config.greeting.slogan);
    $('#contenedor-saludo').css('background-image', `url(${config.greeting.imagen})`)
    $('#contenedor-saludo >button').html(config.greeting.text_button);


  //  $('#contenedor-saludo').css('background-image',`url(${config.greeting.image})`)

}

init (config);