

const plusbtn1 = document.getElementById("plus1");

plusbtn1.addEventListener("click", function () {
    let input = document.getElementById("myInput").value;
    
    var a = parseInt(input);
    if ( a < 100) {
        a = a + 1;
      } else {
          a =100;
      }

   
      document.getElementById("myInput").value = a;
      countprice ();
     });



     
const plusbtn2 = document.getElementById("plus2");

plusbtn2.addEventListener("click", function () {
    let input = document.getElementById("myInput2").value;
    
    var a = parseInt(input);
    if ( a < 100) {
        a = a + 1;
      } else {
          a =100;
      }

   
      document.getElementById("myInput2").value = a;
      countprice ();
     });



     
const plusbtn3 = document.getElementById("plus3");

plusbtn3.addEventListener("click", function () {
    let input = document.getElementById("myInput3").value;
    
    var a = parseInt(input);
    if ( a < 100) {
        a = a + 1;
      } else {
          a =100;
      }

   
      document.getElementById("myInput3").value = a;

      countprice ();
     });










     
const moinsbtn1 = document.getElementById("moins1");

moinsbtn1.addEventListener("click", function () {
    let input = document.getElementById("myInput").value;
    
    var a = parseInt(input);
    if ( a > 1) {
        a = a - 1;
      } else {
          a = 0;
      }

   
      document.getElementById("myInput").value = a;
      countprice ();
     });



     
const moinsbtn2 = document.getElementById("moins2");

moinsbtn2.addEventListener("click", function () {
    let input = document.getElementById("myInput2").value;
    
    var a = parseInt(input);
    if ( a > 1) {
        a = a - 1;
      } else {
          a = 0;
      }

   
      document.getElementById("myInput2").value = a;
      countprice ();
     });



     
const moinsbtn3 = document.getElementById("moins3");

moinsbtn3.addEventListener("click", function () {
    let input = document.getElementById("myInput3").value;
    
    var a = parseInt(input);
    if ( a > 1) {
        a = a - 1;
      } else {
          a = 0;
      }

   
      document.getElementById("myInput3").value = a;

      countprice ();
     });






$('.like-btn').on('click', function() {
$(this).toggleClass('is-active');
});






  
const deletebtn1 = document.querySelectorAll("#delete1");

delete1.addEventListener("click", function () {
   delete1.parentElement.parentElement.remove();
   countprice ();

    });
  


    const deletebtn2 = document.querySelectorAll("#delete2");

delete2.addEventListener("click", function () {
   delete2.parentElement.parentElement.remove();
   countprice ();

    });


  
    const deletebtn3 = document.querySelectorAll("#delete3");

delete3.addEventListener("click", function () {
   delete3.parentElement.parentElement.remove();
   countprice ();

    });









   function countprice ()
   {

    
   
    const title = document.getElementById("total-price1");
    if (title)
    {
        var inputVal = document.getElementById("myInput").value;
        title.innerHTML = `$${inputVal * 549}`; 
        title.parentElement.appendChild(title);
    }
    
    const title2 = document.getElementById("total-price2");
    if (title2)
    {
    var inputVal2 = document.getElementById("myInput2").value;
    
    title2.innerHTML = `$${inputVal2 * 870}`; 
    title2.parentElement.appendChild(title2);
    }


    const title3 = document.getElementById("total-price3");
    if (title3)
    {
    var inputVal3 = document.getElementById("myInput3").value;
    
    title3.innerHTML = `$${inputVal3 * 349}`; 
    title3.parentElement.appendChild(title3);
    }
   



    const title4 = document.querySelector(".total");

    if (title4)
    {
            var arr = [];

        
            if (title){
                var matches = title.innerHTML.match(/(\d+)/);

                arr[0] = parseInt(matches[0]);
            }
            else{
                arr[0] = 0;
            }

            if (title2){
                var matches1 = title2.innerHTML.match(/(\d+)/);

                arr[1] = parseInt(matches1[0]);
            }
            else{
                arr[1] = 0;
            }

            if (title3){
                var matches2 = title3.innerHTML.match(/(\d+)/);

                arr[2] = parseInt(matches2[0]);
            }
            else{
                arr[2] = 0;
            }




        
    title4.innerHTML =`Total : $${arr[0] + arr[1] + arr[2]}`;
    title4.append();
       
   }
}
           
    
  countprice ();


