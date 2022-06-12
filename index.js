const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

const totalBatteries = batteryBatches.reduce(
    function (accum, elem){
        return elem+accum
    },
0)

// Can also be written in arrow funcyion as:
// const totalBatteries = batteryBatches.reduce((accum, elem) => (elem + accum),0)

// console.log(totalBatteries)

