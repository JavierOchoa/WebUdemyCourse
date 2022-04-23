console.log('Starting...')
let count = 0
setTimeout(function justWait(){
    console.log('wating 5 seconds')
}, 5000);
const myInterval = setInterval(function Interval() {
    console.log('Pasaron 2 segundos');
    count++;

    if(count === 3) {
        clearInterval(myInterval)
        console.log('Done')
    }
}, 2000)


