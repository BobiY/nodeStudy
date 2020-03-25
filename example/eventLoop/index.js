const eventLoop = {
    queue:[],
    fsqueue: [], // 储存已经执行完的事件
    loop() {
        while(this.queue.length > 0) {
            var callback = this.queue.shift();
            console.log("callback",callback, this.queue.length);
            callback();
        }
        this.fsqueue.forEach( callback => {
            if( callback.done ) {
                callback();
            }
        } )
        setTimeout(this.loop.bind(this), 100);
    },
    add(callback){
        this.queue.push(callback);
    }
}

eventLoop.loop();

setTimeout(() => {
    eventLoop.add(function() {
        console.log(1)
    })
}, 500);

setTimeout(() => {
    eventLoop.add(function() {
        console.log(2)
    })
}, 800);