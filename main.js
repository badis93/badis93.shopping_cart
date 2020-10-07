








const plusbtn = document.querySelectorAll("#plus");


Array.from(plusbtn).map(function(el){
   
el.addEventListener("click", function () {

    el.nextElementSibling.value = parseInt(el.nextElementSibling.value) + 1;
    var total = document.querySelector(".total");



    var matches2 = el.parentElement.nextElementSibling.innerHTML.match(/(\d+)/); 
    var arr2 = [];
    arr2[0] = parseInt(matches2[0]);
   
    

    var matches = total.innerHTML.match(/(\d+)/);
    var arr = [];
    arr[0] = parseInt(matches[0]);


    
    total.innerHTML = `Total : $${arr[0] + arr2[0] }`;
    
     });
    

});






const moinsbtn = document.querySelectorAll("#moins");

Array.from(moinsbtn).map(function(el){
   
el.addEventListener("click", function () {
    if ( el.previousElementSibling.value > 0)
    {
    el.previousElementSibling.value = parseInt(el.previousElementSibling.value) - 1;


    var total = document.querySelector(".total");



    var matches2 = el.parentElement.nextElementSibling.innerHTML.match(/(\d+)/); 
    var arr2 = [];
    arr2[0] = parseInt(matches2[0]);
   
    

    var matches = total.innerHTML.match(/(\d+)/);
    var arr = [];
    arr[0] = parseInt(matches[0]);


    
    total.innerHTML = `Total : $${arr[0] - arr2[0] }`;
    
     
  
    }



});

});






$('.like-btn').on('click', function() {
$(this).toggleClass('is-active');
});






  
var deletebtn = document.querySelectorAll("#delete");
Array.from(deletebtn).map(function(el){
    el.addEventListener("click", function () {
        el.parentElement.parentElement.remove();




        var total = document.querySelector(".total");

        var matches = total.innerHTML.match(/(\d+)/);
        var arr = [];
        arr[0] = parseInt(matches[0]);
        
        


        if ( arr[0] > 0)
        { 


   
    var matches2 = el.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML.match(/(\d+)/); 
    
    var arr2 = [];
    arr2[0] = parseInt(matches2[0]);
   
    


    
    total.innerHTML = `Total : $${arr[0] - (arr2[0] * el.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.children[1].value)}`;

        }
        });
    
    });


  










