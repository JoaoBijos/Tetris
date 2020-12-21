const canvas = document.getElementById('tetris')
const context = canvas.getContext('2d')

context.scale(16,16)

const pecaL = [
    [1,0,0,0],
    [1,0,0,0],
    [1,0,0,0],
    [1,1,0,0]
]

const pecaLL = [
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,1],
    [1,1,1,1]
]

const pecaT = [
    [0,0,0],
    [0,1,0],
    [1,1,1],
]

const pecaI = [
    [1,0,0,0],
    [1,0,0,0],
    [1,0,0,0],
    [1,0,0,0]
]

const pecaN = [
    [0,1,0],
    [1,1,0],
    [1,0,0]
]

const pecaNN = [
    [0,0,0],
    [0,1,1],
    [1,1,0]
]

const pecaO = [
    [1,1],
    [1,1]
]


pecaL.forEach((row, y) => {
    row.forEach((value, x) => {
        if(value !== 0){
            context.fillStyle = 'green';
            context.fillRect(x,y,1,1);
        }
    });
});

pecaLL.forEach((row, y) => {
    row.forEach((value, x) => {
        if(value !== 0){
            context.fillStyle = '#852492';
            context.fillRect(x + 10,y + 15,1,1);
        }
    });
});

pecaT.forEach((row, y) => {
    row.forEach((value, x) => {
        if(value !== 0){
            context.fillStyle = 'red';
            context.fillRect(x + 9,y + 9,1,1);
        }
    });
});

pecaI.forEach((row, y) => {
    row.forEach((value, x) => {
        if(value !== 0){
            context.fillStyle = 'yellow';
            context.fillRect(x + 4,y + 9,1,1);
        }
    });
});

pecaN.forEach((row, y) => {
    row.forEach((value, x) => {
        if(value !== 0){
            context.fillStyle = 'blue';
            context.fillRect(x + 9,y + 3,1,1);
        }
    });
});

pecaNN.forEach((row, y) => {
    row.forEach((value, x) => {
        if(value !== 0){
            context.fillStyle = '#301f09';
            context.fillRect(x + 2,y + 13,1,1);
        }
    });
});

pecaO.forEach((row, y) => {
    row.forEach((value, x) => {
        if(value !== 0){
            context.fillStyle = 'rgb(255, 115, 0)';
            context.fillRect(x + 3,y + 20,1,1);
        }
    });
});

document.getElementById('points').innerHTML=1000