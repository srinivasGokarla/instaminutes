const schedule = require('node-schedule')

let arr = ["One","Two","Three","Four","Five","Six","Seven","Eight","Nine", "Final"]
let i= 0;
 const task = schedule.scheduleJob('*/7 * * * * *', () => { 
     if(i === 9) {
        schedule.cancelJob(task)
     }
    console.log(`"text":text${arr[i]}`)
    i++
    console.log(`"date":`, new Date())

})