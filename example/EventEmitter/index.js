const EventEmitter = require('events').EventEmitter;

class SelfEvent extends EventEmitter {
    constructor() {
        super();
        setInterval(() => {
            this.emit('newEvent', {price: Math.random()*80})
        }, 1000);
    }
}

const event = new SelfEvent();

event.addListener('newEvent', data => {
    console.log(data)
})