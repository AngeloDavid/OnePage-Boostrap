(function() {
    'use strict';

    var app = angular.module('index', [ ]);
    app.value('empresa',
    {
        'nombre':'Tireman Center',
        'email':'info@tireman-center.com',
        'dirreccion':'La floresta',
        'lat':'000',
        'lng':'00',
        'logo':'./assets/img/logo.png',
        'telefono':'+1(310)230-5140',
        'link':[
            {
                'title':'facebook',
                'url':'https://www.facebook.com/Tireman-Center',
                'img':'icon-facebook'
            },
            {
                'title':'instagram',
                'url':'https://www.instagram.com/Tireman-Center/',
                'img':'icon-instagram'
            },
        ],
        'Servicios':[
            {
                'title':'Venta de llantas',
                'descp':'La seguridad es nuestro principal objetivo Tireman Center',
                'img':'./assets/img/prueba.png',
                'url':'',
                'ord':'1',
                'status':true,
            },
            {
                'title':'Venta de aros',
                'descp':'Aros en variedad de materiales para su vehículo Tireman Center',
                'img':'./assets/img/prueba.png',
                'url':'',
                'ord':'2',
                'status':true,
                
            },
            {
                'title':'Alineación 4D',
                'descp':'Sabemos que necesitas seguridad al viajar, por eso es importante no perder ningún detalle en tu vehículo.',
                'img':'./assets/img/prueba.png',
                'url':'',
                'ord':'3',
                'status':true,
            },
            {
                'title':'Balanceo 4D',
                'descp':'La alineación 4D evitará el desgaste irregular de las llantas, no será la excusa del por qué no puedes acompañar a tus amigos o familia en ese viaje que tanto han esperado Tireman Center',
                'img':'./assets/img/prueba.png',
                'url':'',
                'ord':'4',
                'status':true,
            },
            {
                'title':'Revisión con Scaner',
                'descp':'El servicio scanner establece una comunicación con la unidad de control y ‘preguntarle’ si ha detectado algún código de falla, con esta información vital nuestros técnicos ubican el problema.',
                'img':'./assets/img/prueba.png',
                'url':'',
                'ord':'5',
                'status':true,
            },
            {
                'title':'Cambio de aceite',
                'descp':'En Tireman Center sabemos lo importante que es el cambio de aceite. Tener bien lubricadas todas las piezas del motor permite evitar su desgaste y preservar el motor.',
                'img':'./assets/img/servicios/cambio_aceite.png',
                'url':'',
                'ord':'6',
                'status':true,

            },
            {
                'title':'ABC de Motor',
                'descp':'El ABC garantiza una conducción segura tanto para nosotros así como para todos los que formamos parte de la movilidad de la ciudad.',
                'img':'./assets/img/servicios/ABC_Motor.png',
                'url':'',
                'ord':'7',
                'status':false,
            },
            {
                'title':'ABC de Frenos',
                'descp':'Es indiscutible que los frenos son uno de los sistemas de seguridad más importantes, estamos comprometidos con tu seguridad Tireman Center',
                'img':'./assets/img/servicios/ABC _Frenos.png',
                'url':'',
                'ord':'8',
                'status':false,
            },
            {
                'title':'Limpieza de inyectores',
                'descp':'Los inyectores de combustible gasolina deben de estar limpios para un buen funcionamiento del motor, darles mantenimiento es importante para que no se obstruyan. Sabemos como hacerlo Tireman Center',
                'img':'./assets/img/servicios/limpieza_inyectores.png',
                'url':'',
                'ord':'9',
                'status':false,
            },
            {
                'title':'Suspensión',
                'descp':'El sistema de suspensión de un vehículo es una de las partes más fundamentales para tener un control adecuado de este, y tener una experiencia de manejo cómoda. Sabemos como hacerlo Tireman Center',
                'img':'./assets/img/prueba.png',
                'url':'',
                'ord':'10',
                'status':false,

            },
            {
                'title':'Inflado con nitrógeno',
                'descp':'El inflado con nitrógeno es un servicio lleno de ventajas que, entre otras cosas, nos ayuda a preservar los neumáticos y las llantas mejor que el inflado con aire convencional.',
                'img':'./assets/img/prueba.png',
                'url':'',
                'ord':'11',
                'status':false,
            }                      
        ],
        'videoUrl':"https://www.youtube.com/embed/yckK3hDKVZg",
        'marcas':[
            {
                'titulo':'GoodYear',
                'url':'./assets/img/marcas/goodYear.png'
            },
            {
                'titulo':'GoodRide',
                'url':'./assets/img/marcas/goodride.png'
            },
            {
                'titulo':'Hankook',
                'url':'./assets/img/marcas/hankook.png'
            },
            {
                'titulo':'Dunlop',
                'url':'./assets/img/marcas/dunlop.png'
            },
            {
                'titulo':'Bridgestone',
                'url':'./assets/img/marcas/bridgestone.png'
            },
            {
                'titulo':'Toyo',
                'url':'./assets/img/marcas/toyo.png'
            },
            {
                'titulo':'westlake',
                'url':'./assets/img/marcas/westlake.png'
            },
            {
                'titulo':'Valvoline',
                'url':'./assets/img/marcas/valvoline.png'
            },
            {
                'titulo':'Kendall',
                'url':'./assets/img/marcas/kendall.png'
            }
        ]
    });
    app.controller('menu',['empresa',function (empresa) {
      
        var menu = this;
        menu.title= empresa.nombre;
        menu.redes=empresa.link;        
        menu.menu=[{
            'id':1,
            'titulo':'Inicio',
            'url':'#home',
        },
        {
            'id':2,
            'titulo':'Quines Somos ',
            'url':'#about',
        },
        
        {
            'id':3,
            'titulo':'Nuestros Servicios',
            'url':'#portfolio',
        },
        
        {
            'id':4,
            'titulo':'Contactenos',
            'url':'#contact',
        }      
          
     ];
     console.log(menu.lista,menu.redes);
    }]);
    app.controller('home',['empresa',function (empresa) {
        var home = this;
        home.title= empresa.nombre;
        home.subtitle="Todas las llantas para todo auto";
        home.logo= empresa.logo;
    }]);
    app.controller('marcas',['empresa',function (empresa) {
        var secction =this;
        secction.marcas = empresa.marcas;
       
    }]);
    app.controller('quienes_somos',['empresa',function (empresa) {
        var quienes = this;
        quienes.title="Quienes Somos";
        quienes.parrafo="Somos una empresa automotriz multimarca que ofrece a nuestros clientes un servicio integral de calidad con mantenimientos preventivos y correctivos que incrementan la seguridad de su vehículo, contamos con profesionales especializados en el exterior y con maquinaria de última tecnología que nos permiten realizar nuestro trabajo con un solo objetivo que es la de solucionar las necesidades técnicas de reparación y mantenimiento de su automóvil.";
        quienes.boton={
            'title':'Ver más',
            'Url':''
        }
    }]);
    app.controller('servicios',['empresa',function (empresa) {
        var servicios = this;
        servicios.title="Nuestros servicios";
        servicios.parrafo="Ofrecemos los siguientes servicios.";
        servicios.list=empresa.Servicios;
        console.log(servicios.list);
        servicios.viewmore= function () {
            console.log("hola");
        }
    }]);
    app.controller('contacto',['empresa',function (empresa) {
        var servicios = this;
        servicios.title="Contáctanos";
        servicios.parrafo="Ofrecemos los siguientes servicios.";
        servicios.email=empresa.email;
        servicios.telefono= empresa.telefono;
        servicios.dirreccion=empresa.dirreccion;
        servicios.redes=empresa.link;        
    }])
    app.directive("owlCarousel", function() {
        return {
            restrict: 'E',
            transclude: false,
            link: function (scope) {
                scope.initCarousel = function(element) {
                  // provide any default options you want
                    var defaultOptions = {
                        lazyLoad:true,
                        loop:true,
                        nav:false,
                        dots:false,  
                        autoplayTimeout:2000,  
                        responsive:{
                            0:{
                                items:1,
                                nav:false
                            },
                            600:{
                                items:2,
                                nav:false
                            },
                            1000:{
                                items:4,
                                nav:false,
                                loop:true
                            }
                        }
                    };
                    var customOptions = scope.$eval($(element).attr('data-options'));
                    // combine the two options objects
                    for(var key in customOptions) {
                        defaultOptions[key] = customOptions[key];
                    }
                    // init carousel
                    $(element).owlCarousel(defaultOptions);
                };
            }
        };
    })
    .directive('owlCarouselItem', [function() {
        return {
            restrict: 'A',
            transclude: false,
            link: function(scope, element) {
              // wait for the last item in the ng-repeat then call init
                if(scope.$last) {
                    scope.initCarousel(element.parent());
                }
            }
        };
    }]);

    app.directive('scrollToBookmark', function() {  
        return {
            link: function(scope, element, attrs) {
                var value = attrs.href;
                
                element.click(function() {
                  scope.$apply(function() {
                    var element = $(value);                   
                    if(element.length) {
                        $('html,body').animate({scrollTop: element.offset().top }, "slow");                        
                    }
                  });
                });
              } 
        };
      });
})();

