$(document).ready(function(){
/*



*/
var foods =['pizza','pasta','chocolate','apples'];
//console.log(foods.length);
//console.log(foods[3]);


 //forloop(foods)
 // myfunction();
 // myfunction1();
 // eachLoop(foods);
 paramUrl ='https://randomuser.me/api?results=50';
 myfunApi(paramUrl);

 
});
function myfunction(){
    $("#hidepicture").on('click',function(){
      $("#tvtower").fadeOut("slow");
    });
    $("#showpicture").on('click',function(){
      $("#tvtower").fadeIn("slow");
    });
  }
   function myfunction1(){
     $("#changeColor").on('click',function(){
         $("#thingsIlike").fadeIn().css('background-color','red').css('color','blue');
      //   $("#thingsIlike").css('color','blue');
      //   $('#firstheading').fadeIn("slow").append(' Welcome to our Class');
      $('#firstheading').html('<strong> Welcome to our Class</strong>');
     })
  }
  function hideAndShow(){
    $("#hidepicture").click(function(){
        console.log("Hide button clicked");
        $("#tvtower").hide();
      });
      
      $("#showpicture").click(function(){
        console.log("Show button clicked");
        $("#tvtower").show();
      });

  }
  function mouseoverAndleave(){
    $('#tvtower').mouseover(function(){
        console.log('mouse is over tv tower');
        $(this).hide();
    })
    $('#tvtower').mouseleave(function(){
        console.log('mouse has left tv tower');
        $(this).show();
    })
  }
  function personalData(){
    var firstName ='Ridvan';
    var lastName ='Woldu';
    console.log('Hello'+ firstName+' '+lastName);
    firstName ='Tom';
    console.log('Hello'+ firstName);
    var is_an_excellent_teacher = false
    
    if(is_an_excellent_teacher == true){
        firstName = 'Ridvan';
    
    }else{
        firstName ='Tom';
    }
    console.log('Hello '+ firstName+ ' '+lastName +' you are an excellent teacher');
  }
  function eachLoop(param){
    $.each(param,function(key,value){
        console.log(key +' : ' + value);
    })
  }
  function forloop(param){
    for(var i=0;i < param.length; i=i +1){
        // console.log(foods[i]);
         $('#thingsIlike').append('<li>' + param[i] +'</li>');
     }

  }

  function myfunApi(paramUrl){

    $.ajax({
     //   url:'https://randomuser.me/api',
        url: paramUrl,
        dateType: 'json',
        success: function(data){
         //   console.log(data);
     //   $.each(data.results,function(key,value){
      //  console.log(value);
        $.each(data.results,function(key,person){
            console.log(person.name.title + ' '+ person.name.first + ' '+ person.name.last);
            $('#users').append('<div class="col-md-4">'+person.name.title + ' '+ person.name.first + ' '+ person.name.last +'</div>');

        })
        }
    });
  }