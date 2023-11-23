document.getElementById('comment').addEventListener('click', function(){
    const textArea = document.getElementById('input_field');
    const text = textArea.value;
    const p = document.createElement('p');
    p.innerText = text
    console.log(p);
   const box = document.getElementById('comment_box');
   box.appendChild(p)
})








document.getElementById('secound-item').addEventListener('click',function (event){
    event.stopImmediatePropagation()
    console.log('secound-item clicked');      
})


document.getElementById('secound-item').addEventListener('click',function (){

    console.log('secound-item clicked');      
})

document.getElementById('secound-item').addEventListener('click',function (){
 
    console.log('secound-item clicked');      
})

document.getElementById('secound-item').addEventListener('click',function (){

    console.log('secound-item clicked');      
})

document.getElementById('ul-container').addEventListener('click',function (){
    console.log('Ul container clicked');      
})
document.getElementById('section-container').addEventListener('click',function (){
    console.log('section-container clicked');      
})


 



document.getElementById("deleted-button").addEventListener('click',function 
(){
          document.getElementById('sercate').style.display ='None'       

})  

document.getElementById('deleted-confrom').addEventListener('focus',function(){
          document.body.style.backgroundColor='gray'
})

document.getElementById('deleted-confrom').addEventListener('blur',function(){
          document.body.style.backgroundColor='white'
})
document.getElementById('deleted-confrom').addEventListener('keyup',function(event){
          const deleteField =document.getElementById('deleted-confrom');
          const deletebutton =document.getElementById('deleted-button');
          
          if(event.target.value =='delete'){
          deletebutton.removeAttribute('disabled')
          
          }
          else{
          deletebutton.setAttribute('disabled',true)       
          }
          
       
})






          


