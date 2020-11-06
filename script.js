$("button").click(function(){
  let name = $(".name").val();
  let age = $(".year").val();
  age = 2020 - age;
  $(".message").append(`<p>Hello ${name}, you are ${age} years old.</p>`);
  
});
console.log(name)