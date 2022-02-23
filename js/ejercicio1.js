 var peliculas = {
    "Cartelera":[
        {
            "imagen": "img/alien.jpg",
            "nombre": "Alien",
            "Clasificación": "D",
            "Duración": "120min",
            "Formato": "2D",
            "butacas":"Tradicional",
            "Horarios":"13:30pm", 
            "Horarios2":"17:00pm"
        },
        {
            "imagen": "img/batman.jpg",
            "nombre": "Batman Dark Night",
            "Clasificación": "R",
            "Duración": "120min",
            "Formato": "2D",
            "butacas":"VIP",
            "Horarios":"8:45am",
            "Horarios2":"18:00pm",
            
            
        },
        {
            "imagen": "img/bloodsport.jpg",
            "nombre": "KickBoxer",
            "Clasificación": "R",
            "Duración": "100min",
            "Formato": "3D",
            "butacas":"Tradicional",
            "Horarios":"10:00am",
            "Horarios2":"17:40pm"
        },
        {
            "imagen": "img/clubdepelea.jpg",
            "nombre": "Club de La Pelea",
            "Clasificación": "A",
            "Duración": "90min",
            "Formato": "2D",
            "butacas":"VIP",
            "Horarios":"19:00pm", 
            "Horarios2":"9:00am",
           
        },
        {
            "imagen": "img/elorige.jpg",
            "nombre": "El Origen",
            "Clasificación": "R",
            "Duración": "140min",
            "Formato": "2D",
            "butacas":"Tradicional",
            "Horarios":"9:00am", 
            "Horarios2":"17:00pm"
            
        },
        {
            "imagen": "img/f9.jpg",
            "nombre": "Rapidos & Furiosos 9",
            "Clasificación": "A",
            "Duración": "130min",
            "Formato": "2D",
            "butacas":"Tradicional",
            "Horarios":"11:00am", 
            "Horarios2":"20:00pm",
            
        },
        {
            "imagen": "img/harrypotter.jpg",
            "nombre": "Harry Potter",
            "Clasificación": "A",
            "Duración": "120min",
            "Formato": "2D",
            "butacas":"Tradicional",
            "Horarios":"8:00am", 
            "Horarios2":"15:00pm",
            
        },
        {
            "imagen": "img/jhonwick.jpg",
            "nombre": "Jhon Wick",
            "Clasificación": "R",
            "Duración": "150min",
            "Formato": "3D",
            "butacas":"VIP",
            "Horarios":"11:00am",
            "Horarios2":"21:45pm" 
           
        },
        {
            "imagen": "img/killbill.jpg",
            "nombre": "Kill-Bill",
            "Clasificación": "A",
            "Duración": "120min",
            "Formato": "2D",
            "butacas":"Tradicional",
            "Horarios":"7:45am", 
            "Horarios2":"16:00pm",
        },
        {
            "imagen": "img/matrix.jpg",
            "nombre": "Matrix Recargado",
            "Clasificación": "A",
            "Duración": "120min",
            "Formato": "2D",
            "butacas":"Tradicional",
            "Horarios":"9:30am",
            "Horarios2":"19:40pm"
            
        },
        {
            "imagen": "img/predator.jpg",
            "nombre": "Predator",
            "Clasificación": "D",
            "Duración": "120min",
            "Formato": "2D",
            "butacas":"Tradicional",
            "Horarios":"11:00am", 
            "Horarios2":"14:00pm",
        
        },
        {
            "imagen": "img/Rocky.jpg",
            "nombre": "Rocky Balboa",
            "Clasificación": "A",
            "Duración": "120min",
            "Formato": "2D",
            "butacas":"Tradicional",
            "Horarios":"9:00am", 
            "Horarios2":"22:00pm",
            
        },
        {
            "imagen": "img/spacejam.jpg",
            "nombre": "Space Jam",
            "Clasificación": "A",
            "Duración": "90min",
            "Formato": "2D",
            "butacas":"VIP",
            "Horarios":"11:20am", 
            "Horarios2":"18:00pm"
        },
        {
            "imagen": "img/Tiburon.jpg",
            "nombre": "Megalodon",
            "Clasificación": "D",
            "Duración": "120min",
            "Formato": "2D",
            "butacas":"Tradicional",
            "Horarios":"9:50am",
            "Horarios2":"18:30pm"
            
        },
        {
            "imagen": "img/wallstreet.jpg",
            "nombre": "El Lobo de WallStreet",
            "Clasificación": "D",
            "Duración": "120min",
            "Formato": "2D",
            "butacas":"Tradicional",
            "Horarios":"10:15am", 
            "Horarios2":"13:00pm"
        },
        {
            "imagen": "img/volveralfuturo.jpg",
            "nombre": "Volver al Futuro",
            "Clasificación": "D",
            "Duración": "120min",
            "Formato": "2D",
            "butacas":"Tradicional",
            "Horarios":"8:00am", 
            "Horarios2":"19:00pm",
            
        },
    ]
};



var div = document.getElementById("info");
div.innerHTML=volcarDatos(peliculas.Cartelera);
function volcarDatos(datos){
    var total = datos.length;
    data = "<div class='row'>";
for(var i=0; i<total; i++){
data += "<div class='card col-4' >";
data += "<img class='img-thumbnail' src=" + datos[i].imagen + ">";
data +=   '</div>'
data += "<div class='card col-8'>";
data += "<div class='row'>";
data += "<div class='col-12 text-center'>";
data +=     '<h2 class="text-center card-title  mb-5 mt-3 badge bg-primary fs-1">' + datos[i].nombre + '</h2>';
data +=     '</div>'
data += "<div class='row'>";
data += "<div class='col-6'>";
data +=   '<h4> Clasificacion:' + datos[i].Clasificación +'</h4>';    
data +=     '</div>'
data += "<div class='col-6'>";
data +=   '<h4> Duracion:' + datos[i].Duración +'</h4>';    
data +=     '</div>'
data +=     '</div>'
data += "<div class='border border-3 border-secondary'>"
data += "<div class='row p-15 border-bottom border-secondary border-3 '>";
data += "<div class='col-6'>";
data +=   '<h4> Formato:' + datos[i].Formato +'</h4>';    
data +=     '</div>'
data += "<div class='col-6'>";
data +=   '<h4> Butacas:' + datos[i].butacas +'</h4>';    
data +=     '</div>'
data +=     '</div>'
data += "<div class='row p-15'>";
data += "<div class='col-12'>";
data +=   '<h3> Horarios'+'</h3>';    
data +=     '</div>'
data +=     '</div>'
data += "<div class='row mt-2'>";
data += "<div class='col-2'>";
data +=   "<h3 class='bg-info text-center'>" + datos[i].Horarios + '</h3>';
data +=     '</div>'
data += "<div class='col-2'>";
data +=   "<h3 class='bg-info text-center'>" + datos[i].Horarios2 + '</h3>';
data +=     '</div>'
data +=     '</div>'
data+=  '</div>'
data+=  '</div>'
data +=   '</div>' 
}

data +=   '</div>' 

return data;
}
