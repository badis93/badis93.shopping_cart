$('.minus-btn').on('click', function(e) {
    e.preventDefault();
    var $this = $(this);
    var $input = $this.closest('div').find('input');
    var value = parseInt($input.val());

    if (value > 1) {
        value = value - 1;
    } else {
        value = 0;
    }

$input.val(value);

countprice ();

});

$('.plus-btn').on('click', function(e) {
    e.preventDefault();
    var $this = $(this);
    var $input = $this.closest('div').find('input');
    var value = parseInt($input.val());

    if (value < 100) {
      value = value + 1;
    } else {
        value =100;
    }

    $input.val(value);



    countprice ();
});

$('.like-btn').on('click', function() {
$(this).toggleClass('is-active');
});


const deletebtn1 = document.querySelectorAll("#delete1");

delete1.addEventListener("click", function () {
   delete1.parentElement.parentElement.remove();
    });
  


    const deletebtn2 = document.querySelectorAll("#delete2");

delete2.addEventListener("click", function () {
   delete2.parentElement.parentElement.remove();
    });


  
    const deletebtn3 = document.querySelectorAll("#delete3");

delete3.addEventListener("click", function () {
   delete3.parentElement.parentElement.remove();
    });



   function countprice ()
   {
    var inputVal = document.getElementById("myInput").value;
   
    const title = document.getElementById("total-price1");
    title.innerHTML = `$${inputVal * 549}`; 
    title.parentElement.appendChild(title);


    var inputVal2 = document.getElementById("myInput2").value;
    const title2 = document.getElementById("total-price2");
    title2.innerHTML = `$${inputVal2 * 870}`; 
    title2.parentElement.appendChild(title2);


    var inputVal3 = document.getElementById("myInput3").value;
    const title3 = document.getElementById("total-price3");
    title3.innerHTML = `$${inputVal3 * 349}`; 
    title3.parentElement.appendChild(title3);

    var matches = title.innerHTML.match(/(\d+)/);
    var matches1 = title2.innerHTML.match(/(\d+)/);
    var matches2 = title3.innerHTML.match(/(\d+)/);


    const title4 = document.querySelector(".total");
    title4.innerHTML =`Total : $${parseInt(matches1[0]) + parseInt(matches[0]) + parseInt(matches2[0])}`;
    title4.append();
       
   }
           
    
  countprice ();