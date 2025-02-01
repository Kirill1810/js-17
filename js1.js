//1

const but = document.getElementsByClassNam('myButton');
const textInput = document.getElementsByClassNam('textInput');
 but.addEventListener('click', function() {
   
     but.textContent = textInput.value;
 });


//2


 const image = document. getElementsByClassName('img');
        const butto = document. getElementsByClassName('imgg');

      
        butto.addEventListener('click', function() {
      
            image.src = 'https://http.cat/[status_code]';

        });




//3


        const link = document.getElementsByClassName('myLink');
        const img = document.getElementsByClassName('myImg');
        const button = document.getElementsByClassName('swap');

      
        button.addEventListener('click', function() {
            link.href = 'https://www.youtube.com/watch?v=MdNhTUo9MlY';
            image.setAttribute('alt',);
        });

        
        //4



        
        const first = document.querySelector('all'); 
         const click = document.getElementsByClassName('cange');
 
     
         click.addEventListener('click', function() {
      
             firstListItem.textContent = 'Новий текст для першого елемента';
         });