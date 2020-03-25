console.log(__filename);  // 当前文件路径
console.log(__dirname);  // 当前文件所在文件夹路径

// console.log(process);  // node 进程对象


console.log(process.argv); // 命令行参数获取


// 剪刀石头布小游戏
// console.log()
const playerAction = process.argv[process.argv.length - 1];

const random = Math.random() * 3;

let computerAction = '';

if( random < 1 ) {
    computerAction = 'shitou';
} else if( random > 2 ) {
    computerAction = 'bu';
} else {
    computerAction = 'jiandao';
}

if ( playerAction === computerAction ) {
    console.log('这次是平局~~~QvQ');
} else if ( 
      (playerAction === 'shitou' && computerAction === 'jiandao') ||
      (playerAction === 'jiandao' && computerAction === "bu")  || 
      (playerAction === 'bu' && computerAction === "shitou")
    ) {
        console.log('你赢了~QvQ');
} else {
    console.log('你输了，对手给出的是 ' + computerAction)
}

