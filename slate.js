S.cfga({
    defaultToCurrentScreen: true,
    switchIconSize: 140
});

S.bnda({
    'f1:cmd': S.op('move', {
        x: 'screenOriginX',
        y: 'screenOriginY',
        width: 'screenSizeX',
        height: 'screenSizeY',
        screen: '1'
    }),
    'f2:cmd': S.op('move', {
        x: 'screenOriginX',
        y: 'screenOriginY',
        width: 'screenSizeX',
        height: 'screenSizeY',
        screen: '0'
    }),

    'right:ctrl;cmd': S.op('push', {
        direction: 'right',
        style: 'bar-resize:screenSizeX/2',
        screen: '1'
    }),
    'left:ctrl;cmd': S.op('push', {
        direction: 'left',
        style: 'bar-resize:screenSizeX/2',
        screen: '1'
    }),
    'up:ctrl;cmd': S.op('push', {
        direction: 'up',
        style: 'bar-resize:screenSizeY/2',
        screen: '1'
    }),
    'down:ctrl;cmd': S.op('push', {
        direction: 'down',
        style: 'bar-resize:screenSizeY/2',
        screen: '1'
    }),
    'right:shift;cmd': S.op('push', {
        direction: 'right',
        style: 'bar-resize:screenSizeX/2',
        screen: '0'
    }),
    'left:shift;cmd': S.op('push', {
        direction: 'left',
        style: 'bar-resize:screenSizeX/2',
        screen: '0'
    }),
    'up:shift;cmd': S.op('push', {
        direction: 'up',
        style: 'bar-resize:screenSizeY/2',
        screen: '0'
    }),
    'down:shift;cmd': S.op('push', {
        direction: 'down',
        style: 'bar-resize:screenSizeY/2',
        screen: '0'
    }),

    'right:cmd': S.op('focus', {
        direction: 'right'
    }),
    'left:cmd': S.op('focus', {
        direction: 'left'
    }),
    'up:cmd': S.op('focus', {
        direction: 'up'
    }),
    'down:cmd': S.op('focus', {
        direction: 'down'
    }),
    'up:cmd;alt': S.op('focus', {
        direction: 'behind'
    }),
    'down:cmd;alt': S.op('focus', {
        direction: 'behind'
    }),

    'esc:cmd': S.op('grid', {
        grids: {
            '1440x900': {
                width: 8,
                height: 6
            },
            '1680x1050': {
                width: 8,
                height: 6
            },
            '1280x1024': {
                width: 6,
                height: 6
            }
        }
    })
});
