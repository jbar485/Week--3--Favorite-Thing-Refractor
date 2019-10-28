$(document).ready(function(){
  $("#favoriteThings").submit(function(event){
    var group1 = [];
    // console.log("Group 1 Pre Loop: ", group1);
    var group2 = [];
    var inputs = ["food", "dessert", "movie", "animal", "snack", "holiday", "activity"];
    inputs.forEach(function(input){
      var userInput = $('input#' + input).val();
      console.log("User Input: ", userInput);
      console.log("Type of: ", typeof(userInput));
      $(".favoriteThingList").append("<li>" + userInput + "</li>");
      group1.push(userInput);
      console.log("Group 1 In Loop: ", userInput);
    })
    // var group1 = [food, dessert, snack];
    // var group2 = [movie, animal, holiday, activity];


    //
    //
    //
    // var food = $("input#food").val();
    // var dessert = $("input#dessert").val();
    // var movie = $("input#movie").val();
    // var animal = $("input#animal").val();
    // var snack = $("input#snack").val();
    // var holiday = $("input#holiday").val();
    // var activity = $("input#activity").val();


    console.log(group1);

    // $(".favoriteThingList").append("<li>" + food + "</li>");
    // $(".favoriteThingList").append("<li>" + dessert + "</li>");
    // $(".favoriteThingList").append("<li>" + movie + "</li>");
    // $(".favoriteThingList").append("<li>" + animal + "</li>");
    // $(".favoriteThingList").append("<li>" + snack + "</li>");
    // $(".favoriteThingList").append("<li>" + holiday + "</li>");
    // $(".favoriteThingList").append("<li>" + activity + "</li>");


    event.preventDefault();
  })
})
