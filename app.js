const schedule = require('node-schedule')

 
 let out = []
 let arr = ["Taskone", "Tasktwo", "Taskthree", "Taskfour", "Taskfive", "Tasksix", "Taskseven", "Taskeight", "Tasknine","TaskTen"];
 for(j = 0; j < arr.length; j++) {
    let res  = arr[j]
   let ans = res.split("").reverse();
   let str = ""
   for(k= 0; k < ans.length; k++) {
     str = str + ans[k];
    
   }
   out.push(str)
 }

  //  console.log(out)
let i = 0
 const task = schedule.scheduleJob('*/7 * * * * *', () => { 
  
     if(i === 9) {
        schedule.cancelJob(task)
     }
    console.log(`"text":${out[i]}`)
    i++
    console.log(`"date":`, new Date())

})