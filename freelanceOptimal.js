function optimalFreelancing(jobs) {
  let totalDays = 7;
  let workAdded = Array(totalDays).fill(false);
  let earnings = 0
  jobs.sort((a, b)=> b.payment - a.payment)
 
jobs.forEach((job)=>{
   let datToDecide = Math.min(job.deadline, totalDays)
   for(let i = datToDecide - 1; i >= 0; i--){
    if(!workAdded[i]){
        workAdded[i] = true
        earnings += job.payment
        break;
    }
   }
  })
return earnings;
}
   
  
  // Do not edit the line below.
const jobs = [
    {'deadline': 1, 'payment': 1},
    {'deadline': 2, 'payment': 1},
    {'deadline': 2, 'payment': 2},
]
let result = optimalFreelancing(jobs)
console.log('result',result)
//   exports.optimalFreelancing = optimalFreelancing;