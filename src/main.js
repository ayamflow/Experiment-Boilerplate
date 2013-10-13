require.config({
    baseUrl: 'src/experiment',
    paths: {
        Stats: '../../lib/stats.min',
        Leap: '../../lib/leap.min'
    },
    shim: {
        'Stats': {
            exports: 'Stats'
        },
        'Leap': {
            exports: 'Leap'
        }
    }
});

require(['Playground'], function(Playground) {
    var playground = new Playground();
});