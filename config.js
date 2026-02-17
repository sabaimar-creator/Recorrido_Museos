var config = {
     style: 'mapbox://styles/saroolish/cmlm82pgo000m01scc9ju0xhq',
    // leave commented to use Mapbox Standard Style
    accessToken: 'pk.eyJ1Ijoic2Fyb29saXNoIiwiYSI6ImNtbGd4Y2VtdDAzNmEzZHNpMTE3YXQ1Z2sifQ.iuvN-cW4N6CGSrSOZX7gPQ',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Museos de Cáceres',
    subtitle: 'Un mapa guiado de los museos de Cáceres',
    byline: 'Por Sara Bailén',
    footer: 'Fuente: Open Data Cáceres <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'right',
            hidden: false,
            title: 'Museo de Historia y Cultura. Casa Pedrilla',
            image: 'https://cultura.dip-caceres.es/wp-content/uploads/2025/08/1-1024x576.jpeg',
            description: 'En pleno corazón de Cáceres, rodeado por un jardín que respira calma y memoria, se alza el Museo de Historia y Cultura Casa Pedrilla, un espacio concebido para acercarnos a la vida cultural y artística de la provincia durante los siglos XIX y XX.royectado en la década de 1940 por el arquitecto cacereño José M.ª López Montenegro  conserva la impronta portuguesa  en honor a sus propietarios: el catedrático Francisco Martín Pedrilla y la aristócrata portuguesa Ana de Lancastre Laboreiro.',
            location: {
                center: [
                    -6.369185135690157,
                    39.46980529404196
                ],
                zoom: 18.5,
                pitch: 70.30,
                bearing: 23.22
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Museo de Armas',
            image: 'https://www.extremadura.com/uploads/pg_models/media/photo/derivative/image/18195/museo-de-armas-de-caceres-2_xs.jpg',
            description: 'En el Museo de Armas de Cáceres destaca principalmente su gran torre, mucho más elevada que el resto de los palacios que componen el cojunto monumental. Esto se debe a que cuando la Reina Isabel la Católica mandó desmochar las torres cacereñas, hizo una excepción con este que entonces se estaba construyendo por orden del capitán Diego de Ovando, vasallo y miembro de su Real Consejo.',
            location: {
                center: [
                    -6.37060244598034,
                    39.47315227139156
                ],
                zoom: 18.5,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'easeTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Museo de la Historia de la Computacion',
            image: 'https://upload.wikimedia.org/wikipedia/commons/4/4f/MuseoHC_planta_superior.jpg',
            description: 'Fue inaugurado el 1 de Junio de 2017 en la céntrica plaza de San Juan de Cáceres y en la actualidad se encuentra en la localidad cacereña de Majadas de Tiétar. El objetivo del museoHC es el de divulgar la historia de la computación; documentar, recopilar, referenciar, restaurar y exponer hardware y software, tanto analógico como digital, para que los visitantes conozcan el origen de la revolución de la información',
            location: {
                center: [
                    -6.372853797605763,
                    39.47388069852539
                ],
                zoom: 19,
                pitch: 8.01,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Museo de la Concatedral',
            image: 'https://turismo.caceres.es/sites/default/files/multimedia/IGLESIA%20CONCATEDRAL%20DE%20SANTA%20MAR%C3%8DA%203.jpg',
            description: 'El origen de esta iglesia se remonta al siglo XIII dentro de las características del románico. Sufrirá una reforma que ocupará desde finales del siglo XV hasta mediados del siglo XVI en estilo tardogótico. Serán conservados de su etapa románica canecillos tardorrománicos, las cabezas de la viga que asoma al exterior, sobre las puertas góticas occidental y meridional. El templo está construido en sillería, destacando al sobriedad del exterior, típica de la arquitectura medieval española. Debido a su reconstrucción entre los siglos XV y XVI se impregna de elementos de transición hacia el gótico y renacentistas, que son visibles en la torre y el coro. Entre los espacios más destacables de la Concatedral de Santa María de Cáceres están las dos portadas del templo. La principal, y más característica que da acceso desde la Plaza Mayor, se sitúa en el lado del Evangelio y es singular su arco apuntado gótico, correspondiente a finales del siglo XIII y principios del XIV.',
            location: {
                center: [
                    -6.370409016757505,
                    39.474965154172494
                ],
                zoom: 19,
                pitch: 80,
                bearing: -21
            },
            mapAnimation: 'easeTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fifth-chapter',
            alignment: 'right',
            hidden: false,
            title: 'Casa-Museo Yusuf Al Burch',
            image: 'https://casamuseoarabe.com/wp-content/uploads/2025/09/mu6.png',
            description: 'Situada en la cuesta del Marqués, junto a la plaza de San Jorge, es una casa original que data del siglo XII. Adquirida y restaurada por el señor José De La Torre, descubrió en su interior vestigios árabes y romanos y decidió mantenerla y habilitarla para que los turistas pudieran ver como se vivía en aquella época, se inaguró como museo en el año 1976 con la presencia del embajador de Irak y desde entonces está abierta al público para quien quiera visitarla.',
            location: {
                center: [
                    -6.369586683775588,
                    39.4737142699793
                ],
                zoom: 19,
                pitch: 0,
                bearing: 60
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'sixth-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Museo Casa de los Caballos',
            image: 'https://s1.ppllstatics.com/hoy/www/multimedia/2025/07/15/casadeloscaballos-caceres-RHCviNFwBCdi6kqkfJBvexO-1200x840@Hoy.jpg',
            description: 'Su nombre hace referencia a su función original, ya que, en principio, el edificio era una caballeriza que se transformó para alojar la Sección de Bellas Artes del Museo de Cáceres. Está dividida en tres salas: la primera está dedicada al arte español del s. XX y podemos encontrar obras de distintos movimientos: surrealismo, arte pop, crítica social, etc., destacando obras de Picasso, Miró, Tapies o Juan Barjola.',
            location: {
                center: [
                    -6.3697997444146965,
                    39.4727424413403
                ],
                zoom: 18,
                pitch: 50,
                bearing: 28
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'seventh-chapter',
            alignment: 'right',
            hidden: false,
            title: 'Museo de Caceres y Aljibe',
            image: 'https://cadenaser.com/resizer/v2/C4OYE2XKE5A65BPIARPP5UCASE.jpg?auth=51bc72c6751fca560f43595c88f62f9fa7650ec122ab4563a4acdc1092f650c7',
            description: 'Inaugurado en febrero de 1933, el Museo de Cáceres ocupa dos casas-palacio de la Ciudad Monumental: el Palacio de las Veletas, que acoge las secciones de arqueología y etnografía, y la Casa de los Caballos, que alberga la colección de Bellas Artes desde 1992.Bajo el claustro renacentista del Palacio de la Veletas se encuentra el aljibe hispanomusulmán mejor conservado de España y uno de los mejores del mundo. Este magnífico aljibe es uno de los restos que ha pervivido de la alcazaba militar almohade, ya que el edificio que lo alberga fue reestructurado en el siglo XVI y remodelado en los siglos XVII y XVIII.',
            location: {
                center: [
                    -6.370338422129111,
                    39.47274966719534
                ],
                zoom: 19,
                pitch: 75,
                bearing: -140
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'eighth-chapter',
            alignment: 'fully',
            hidden: false,
            title: ' Museo de Arte Contemporáneo Helga de Alvear',
            image: 'https://turismo.caceres.es/sites/default/files/styles/simplecrop__16_9_/public/recurso_poi/MUSEO%20DE%20ARTE%20CONTEMPOR%C3%81NEO%20HELGA%20DE%20ALVEAR.jpg?itok=RcMKSLIf&sc=482d4ba492dbd6c40e834d812cfae2ad',
            description: 'El Museo Helga de Alvear alberga una de las colecciones de arte contemporáneo internacionales más importantes de Europa: la Colección Helga de Alvear, compuesta por más de 3.000 obras de artistas de la talla de Goya, Olafur Eliasson Picasso, Louise Bourgeois, Kandinsky, Helena Almeida o Ai Weiwei. En febrero de 2021 se inauguró el edificio de nueva planta diseñado por Emilio Tuñón y su equipo, un proyecto que ha cosechado premios internacionales de arquitectura y que ofrece al visitante un oasis de contrastes y modernidad en respetuoso equilibrio con el casco histórico de la ciudad. Además, el Museo cuenta con un segundo edificio donde es posible disfrutar de exposiciones temporales, que cambian cada pocos meses. La institución ofrece acceso gratuito y una programación de actividades, visitas y talleres creativos para todos los públicos.',
            location: {
                center: [
                    -6.37458, 39.47132
                ],
                zoom: 18,
                pitch: 34,
                bearing: 75
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
