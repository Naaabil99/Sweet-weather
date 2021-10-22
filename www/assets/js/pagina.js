function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.getElementById("searchbycity").style.marginLeft = "250px";
    document.getElementById("searchbygeolocation").style.marginLeft = "250px";
  }

  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("searchbycity").style.marginLeft = "0";
    document.getElementById("searchbygeolocation").style.marginLeft = "0";
  }

  function setEnglish(){

      $("#result5days").empty();
      $("#resultcurrent").empty();
      $("#searchbygeolocation").empty();
      $(".header h1").text("Sweet weather yeah!")
      $("#main h1").text("Your weather app");
      $("#main h2").text("Know the weather all the time");
      $("#searchbycity h1").text("Search by city:");
      $("#searchbycity .buscar").text("City: ").append('<input type="text" id="cityName">');
      $("#searchbycity button").text("Search");
      $("#home").text("Home");
      $("#buscar").text("Search").prepend('&#x1F50D;');;
      $("#ubicacion").text("Location").prepend('&#x1f4cc;' );


  };

function setSpanish(){
    $("#result5days").empty();
    $("#resultcurrent").empty();
    $("#searchbygeolocation").empty();
    $(".header h1").text("¡Buen clima, sí!");
    $("#main h1").text("Tu aplicación meteorológica");
    $("#main h2").text("Conoce el clima todo el tiempo");
    $("#searchbycity h1").text("Buscar por ciudad:");
    $("#searchbycity .buscar").text("Ciudad: ").append('<input type="text" id="cityName">');
    $("#searchbycity button").text("Buscar");
    $("#home").text("Hogar");
    $("#buscar").text("Buscar").prepend('&#x1F50D;');
    $("#ubicacion").text("Ubicacion").prepend('&#x1f4cc;' );
}

  $(document).ready(function(){

    var main = $("#main")
   var buscar=  $("#searchbycity");
   var ubicacion = $("#searchbygeolocation");

   buscar.hide();

    $("#buscar").click(function(){
        $("#result5days").empty();
        $("#resultcurrent").empty();
      main.hide();
      buscar.show();
      ubicacion.hide();


    })

    $("#home").click(function(){

      main.show();
      buscar.hide();
      ubicacion.hide();

    });

    $("#ubicacion").click(function(){

      main.hide();
      buscar.hide();
      ubicacion.show();
      
    })
  });


 // document.getElementById("mySidebar").style.width = "250px";
  //document.getElementById("main").style.marginLeft = "250px";

  
