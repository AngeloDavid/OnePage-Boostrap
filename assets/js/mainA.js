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
                'url':'https://www.facebook.com/tireman',
                'img':'icon-facebook'
            },
            {
                'title':'instagram',
                'url':'https://www.instagram.com/ezrose_ecuador/',
                'img':'icon-instagram'
            },
            {
                'title':'youtube',
                'url':'https://www.youtube.com/channel/UCW3g6hZxeTnqYyBUXU0vULQ/',
                'img':'icon-youtube'
            }
        ],
        'Servicios':[
            {
                'title':'Venta de llantas',
                'descp':'I have the simplest tastes, I am always satisfied with the best.',
                'img':'./assets/img/prueba.png',
                'url':''
            },
            {
                'title':'Venta de aros',
                'descp':'I have the simplest tastes, I am always satisfied with the best.',
                'img':'./assets/img/prueba.png',
                'url':''
            },
            {
                'title':'Alineación 4D',
                'descp':'I have the simplest tastes, I am always satisfied with the best.',
                'img':'./assets/img/prueba.png',
                'url':''
            },
            {
                'title':'Balanceo 4D',
                'descp':'I have the simplest tastes, I am always satisfied with the best.',
                'img':'./assets/img/prueba.png',
                'url':''
            },
            {
                'title':'Revisión con Scaner',
                'descp':'I have the simplest tastes, I am always satisfied with the best.',
                'img':'./assets/img/prueba.png',
                'url':''
            },
            {
                'title':'Cambio de aceite',
                'descp':'I have the simplest tastes, I am always satisfied with the best.',
                'img':'./assets/img/prueba.png',
                'url':''
            },
            {
                'title':'ABC de Motor',
                'descp':'I have the simplest tastes, I am always satisfied with the best.',
                'img':'./assets/img/prueba.png',
                'url':''
            },
            {
                'title':'ABC de Frenos',
                'descp':'I have the simplest tastes, I am always satisfied with the best.',
                'img':'./assets/img/prueba.png',
                'url':''
            },
            {
                'title':'Limpieza de inyectores',
                'descp':'I have the simplest tastes, I am always satisfied with the best.',
                'img':'./assets/img/prueba.png',
                'url':''
            },
            {
                'title':'Suspensión',
                'descp':'I have the simplest tastes, I am always satisfied with the best.',
                'img':'./assets/img/prueba.png',
                'url':''
            },
            {
                'title':'Inflado con nitrógeno',
                'descp':'I have the simplest tastes, I am always satisfied with the best.',
                'img':'./assets/img/prueba.png',
                'url':''
            },
            {
                'title':'Mas de 4000 clientes atendidos',
                'descp':'I have the simplest tastes, I am always satisfied with the best.',
                'img':'./assets/img/prueba.png',
                'url':''
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
})();

