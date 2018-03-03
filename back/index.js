var express = require('express');
var cors = require('cors')
var app = express();

app.use(cors())
 
app.get('/phones', (req, res) => {
    res.send({
        phones: [
            { 
                id: 1,
                title: 'iPhone X',
                company: 'Apple',
                description: 'El nuevo iPhone X tiene un diseño revolucionario que es todo pantalla y el chip A11 Bionic',
                price: '1159',
                capacity: ['64Gb', '128Gb', '256Gb'],
                popularity: 'high',
                photo: 'https://www.spainphone.com/images/productos/iphone-x-64gb-gris-espacial-5-12598.jpeg'
            },
            { 
                id: 2,
                title: 'iPhone 8',
                company: 'Apple',
                description: 'El iPhone 8 tiene un nuevo diseño de vidrio superresistente por ambos lados. Cámaras más avanzadas. El nuevo chip A11 Bionic. Y carga inalámbrica.',
                price: '879',
                capacity: ['64Gb', '128Gb', '256Gb'],
                popularity: 'high',
                photo: 'https://www.exclusiveshopperu.com/image/cache/data/iphone/iphone%208%20plus/6009663_sd-500x500.jpg'
            },
            { 
                id: 3,
                title: 'Galaxy S9',
                company: 'Samsung',
                description: 'El Samsung Galaxy S9 es una evolución clara del Galaxy S8',
                price: '800',
                capacity: ['64Gb', '128Gb', '256Gb'],
                popularity: 'high',
                photo: 'https://http2.mlstatic.com/para-estuche-samsung-D_NQ_NP_642837-MLV26907828816_022018-O.jpg'
            },
            { 
                id: 4,
                title: 'iPhone SE',
                company: 'Apple',
                description: 'Presentamos el iPhone SE, el teléfono de 4 pulgadas más potente hasta la fecha. Para crearlo, partimos de un diseño que es todo un éxito y lo reinventamos de arriba abajo.',
                price: '330',
                capacity: ['64Gb', '128Gb', '256Gb'],
                popularity: 'high',
                photo: 'http://rossellimac.es/wp-content/uploads/2018/02/iPhone-SE.jpg'
            },
            { 
                id: 5,
                title: 'Galaxy J1',
                company: 'Samsung',
                description: 'Samsung Galaxy J1, un smartphone con avanzadas funcionalidades en su cámara y gran rendimiento gracias a un procesador de doble núcleo.',
                price: '400',
                capacity: ['8Gb'],
                popularity: 'low',
                photo: 'https://http2.mlstatic.com/S_932201-MLM26442092868_112017-O.jpg'
,            },
            { 
                id: 6,
                title: 'Mi A1',
                company: 'Xiaomi',
                description: 'Potente, bonito y económico',
                price: '183',
                capacity: ['32Gb', '64Gb'],
                popularity: 'medium',
                photo: 'http://www.gatoahorrador.com/wp-content/uploads/2018/02/Global-Version-Xiaomi-Mi-A1-5-5-Inch-4GB-64GB-Smartphone-Black-464186-.jpg'
            },
            { 
                id: 7,
                title: 'Galaxy A5',
                company: 'Samsung',
                description: 'Galaxy A5, el nuevo smartphone completamente metálico con un montón de opciones para hacer los mejores selfies y gifs animados.',
                price: '400',
                capacity: ['8Gb'],
                popularity: 'low',
                photo: 'https://cdn.gadgets7.news/media/2017/01/samsung-galaxy-a5-2017.jpg'
,            },
            { 
                id: 8,
                title: 'Huawei P10',
                company: 'Huawei',
                description: 'Huawei P10 tiene una cámara principal doble mejorada y una frontal que te da nuevos argumentos para llevarte este dispositivo a tu bolsillo.',
                price: '300',
                capacity: ['8Gb','16Gb'],
                popularity: 'high',
                photo: 'https://http2.mlstatic.com/a71-huawei-p10-leica-4gb-ram-32gb-4g-lte-desbloqueado-D_NQ_NP_830067-MLM25706173642_062017-F.jpg'
            },
            { 
                id: 9,
                title: 'Huawei P10 Plus',
                company: 'Huawei',
                description: 'Huawei P10 Plus, un móvil con gran procesador, preciosa imagen de pantalla y doble cámara LEICA.',
                price: '399',
                capacity: ['16Gb', '32Gb'],
                popularity: 'medium',
                photo: 'https://http2.mlstatic.com/celular-huawei-p10-plus-vky-l09-64gb-4gb-ram-camara-dual-msi-D_NQ_NP_849423-MLM26078020857_092017-F.jpg'

            },
            { 
                id: 10,
                title: 'Moto G 5º Gen',
                company: 'Motorola',
                description: 'Cuenta con un atractivo diseño metálico y la cámara más avanzada de su categoría, que incluye Dual Autofocus Pixels',
                price: '399',
                capacity: ['16Gb', '32Gb'],
                popularity: 'medium',
                photo: 'https://i.pinimg.com/736x/a0/61/de/a061de427bdae59e9db02a8c75707ba6.jpg'
            }
        ]
      });
})
 
app.listen(3000)