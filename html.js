var ass = import('./Date/Data1.js')
ass.then(res=>{
  console.log(res.default);
}).catch(err=>{
  console.log(err);
})