require.config({
    baseUrl: 'src/experiment',
    paths: {
        PIXI: '../../lib/pixi',
        Stats: '../../lib/stats.min'
    },
    shim: {
        'PIXI': {
            exports: 'PIXI'
        },
        'Stats': {
            exports: 'Stats'
        }
    }
});

require(['Playground'], function(Playground) {
    var playground = new Playground();
});