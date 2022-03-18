const schedule = require('node-schedule')

 let i = 1;
 const task = schedule.scheduleJob('*/7 * * * * *', () => { 
  
     if(i === 10) {
        schedule.cancelJob(task)
     }
    console.log(`"text":Task-${i}`)
    i++
    console.log(`"date":`, new Date())

})