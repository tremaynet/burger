$(document).ready(function () {
  // Getting references to the name inout and devour container, as well as the table body
  var nameInput = $("#burger-name");
  var burgerList = $(".burgers");
  var devouredBurgerList = $(".devoured-burgers");

  var burgerContainer = $(".burger-container");
  // Adding event listeners to the form to create a new object, and the button to devour
  // a Burger
  $(document).on("submit", "#burger-form", handleBurgerFormSubmit);
  $(document).on("click", ".devoure-burger", handleDevoureBurgerPress);

  // Getting the intiial list of Burgers
  getBurgers();

  // A function to handle what happens when the form is submitted to create a new Burger
  function handleBurgerFormSubmit(event) {
    event.preventDefault();
    // Don't do anything if the name fields hasn't been filled out
    if (!nameInput.val().trim().trim()) {
      return;
    }
    // Calling the upsertBurger function and passing in the value of the name input
    upsertBurger({
      burger_name: nameInput
        .val()
        .trim(),
      devoured: 0
    });
  }

  // A function for creating a burger. Calls getBurgers upon completion
  function upsertBurger(burgerData) {
    console.log(burgerData)
    $.post("/api/burgers", burgerData)
      .then(getBurgers);
  }

  // Function for creating a new list row for burger
  function createBurgerRow(burgerData) {
    var newBurger = $("<div class='burger'>");
    newBurger.data("burger", burgerData);
    newBurger.append(`<div class='burger-name'>${burgerData.id + 1}. ${burgerData.burger_name}</div>`);
    newBurger.append("<div><button class='devoure-burger btn btn-warning'>Devour it!</button></div>");
    console.log(newBurger)
    return newBurger;
  }

  // Function for creating a new list row for devoured burger
  function createDevouredBurgerRow(burgerData) {
    var newBurger = $("<div class='burger'>");
    newBurger.data("burger", burgerData);
    newBurger.append(`<input type='input' placeholder='${burgerData.id + 1}. ${burgerData.burger_name}' class='burger-name'/>`);
    console.log(newBurger)
    return newBurger;
  }
  // Function for retrieving burgers and getting them ready to be rendered to the page
  function getBurgers() {
    devouredBurgerList.children().remove();
    burgerList.children().remove();
    $.get("/api/burgers", function (data) {
      for (var i = 0; i < data.length; i++) {
        if (data[i].devoured) {
          devouredBurgerList.append(createDevouredBurgerRow(data[i]))
        }
        else {
          burgerList.append(createBurgerRow(data[i]))
        }
      }
      nameInput.val("");
    });
  }

  // Function for handling what happens when the delete button is pressed
  function handleDevoureBurgerPress() {
    var listItemData = $(this).parent("div").parent("div").data("burger");
    $.ajax({
      method: "PUT",
      url: "/api/burgers",
      data: { ...listItemData, devoured: 1 }
    })
      .then(getBurgers);
  }
});
