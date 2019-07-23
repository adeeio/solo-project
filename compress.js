var compress_images = require('compress-images'), input, output;

input = 'images/*.{jpg,JPG,jpeg,JPEG,png,svg,gif}';
output = 'output/';

compress_images(input, output, { compress_force: false, statistic: true, autoupdate: true }, false,
    { jpg: { engine: 'mozjpeg', command: ['-quality', '60'] } },
    { png: { engine: 'pngquant', command: ['--quality=20-50'] } },
    { svg: { engine: 'svgo', command: '--multipass' } },
    { gif: { engine: 'gifsicle', command: ['--colors', '64', '--use-col=web'] } }, function (error, completed, statistic) {
        console.log('-------------');
        console.log(error);
        console.log(completed);
        console.log(statistic);
        console.log('-------------');
    });