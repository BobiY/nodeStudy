module.exports = function(playerAction) {
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
        return 0;
    } else if ( 
        (playerAction === 'shitou' && computerAction === 'jiandao') ||
        (playerAction === 'jiandao' && computerAction === "bu")  || 
        (playerAction === 'bu' && computerAction === "shitou")
        ) {
            console.log('你赢了~QvQ');
            return 1;
    } else {
        console.log('你输了，对手给出的是 ' + computerAction);
        return -1;
    }
}