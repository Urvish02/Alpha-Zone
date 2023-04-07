// // Invoke Functions Call on Document Loaded
// document.addEventListener('DOMContentLoaded', function () {
//   hljs.highlightAll();
// });


// let alertWrapper = document.querySelector('.alert')
// let alertClose = document.querySelector('.alert__close')

// if (alertWrapper){
//   alertClose.addEventListener('Click', () =>
//     alertWrapper.style.display = 'none'
//   )
// }

// Invoke Functions Call on Document Loaded
document.addEventListener('DOMContentLoaded', function() {
  hljs.highlightAll();
});
 
let alertWrapper=document.querySelector('.alert')
let alertClose=document.querySelector('.alert__close')
 
function closeAlert()
{
  setTimeout( ()=> {alertWrapper.style.display="none"}, 3000)
}
 
if (alertWrapper)
{
  closeAlert()
}

