const lib = require('./lib.js');
// lib 文件无任何内容时，值为 {} 
// console.log('end require', lib);

console.log(__filename);  // 当前文件路径
console.log(__dirname);  // 当前文件所在文件夹路径

// console.log(process);  // node 进程对象


console.log(process.argv); // 命令行参数获取


// 剪刀石头布小游戏
// console.log()
// const playerAction = process.argv[process.argv.length - 1];


const game = require('./lib');

// game(playerAction);

process.stdin.on("data", e => {
    const playerAction = e.toString().trim();

    game(playerAction);
})