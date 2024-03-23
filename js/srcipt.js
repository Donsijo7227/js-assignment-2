// prices for different options (flavour, size, topping)
const flavourPrices = {
  strawberry: 4.99,
  none: 0,
  chocolate: 5.99,
  banana: 3.50,
  mango: 4.99,
  blueberry: 4.29
};

const sizePrices = {
  small: 0,
  medium: 1.50,
  large: 2.50,
};

const toppingPrices = {
  none: 0,
  granola: 0.50,
  slicedAlmonds: 0.80,
  chocolateChips: 0.50,
  pumpkinSeeds: 0.20
};



//function for geting the form values when the place-order button is clicked by the user 
function orderSmoothie() {
  const flavor = document.getElementById('flavor').value;
  const size = document.getElementById('size').value;
  const toppings = document.getElementById('toppings').value;
  const specialInstructions = document.getElementById('specialInstructions').value;

  //condition for checking if the user has selected flavour and size | if not alerting the user to select 
  if (!flavor || !size) {
    alert("Please select flavour and size!");
  }

  //function for calculating total 
  const totalPrice = totalPriceCalculator(flavor, size, toppings);
  document.getElementById("total").textContent = totalPrice;

  //smoothie object constructor
  const smoothie = new Smoothie(flavor, size, toppings, specialInstructions);
  //console.log("Smoothie Object:", smoothie);

  //function for creating the description to be displayed to the user 
  const smoothieDescription = smoothie.getDescription();
  //displaying the description to the user 
  document.getElementById("smoothieDescription").textContent = smoothieDescription;

  //console.log(flavourPrices[flavor]);

  //function for clearing the form once the user hits place-order button
  clearForm();

}
//clears form
function clearForm() {
  document.getElementById(`smoothieForm`).reset();
}

function totalPriceCalculator(flavor, size, toppings) {
  let totalPrice = flavourPrices[flavor] + sizePrices[size] + toppingPrices[toppings];
  return totalPrice;
}

class Smoothie {
  constructor(flavor, size, toppings, specialInstructions) {
    this.flavor = flavor;
    this.size = size;
    this.toppings = toppings;
    this.specialInstructions = specialInstructions;
  }

  //function declaration for crafting the description to be displayed based on users selection 
  getDescription() {
    let description = `You Ordered a ${this.size} ${this.flavor} smoothie   `;
    if (this.toppings == 'none') {
      description += ``;
    } else {
      description += `topped with ${this.toppings}`;
    }
    if (this.specialInstructions) {
      description += `.Special Instructions: ${this.specialInstructions} `;
    }

    return description;
  }
}


function dynamicPriceFlavour() {
  //console.log(counter);
  const flavor = document.getElementById('flavor').value;
  price = flavourPrices[flavor];
  //console.log(flavor);
  //console.log(price);

  updatePrice(price);
}

function updatePrice(price) {
  let newPrice = price;
  dynamicPrice(newPrice);
  //console.log('final: ', newPrice);

}

function dynamicPrice(newPrice) {
  // console.log(newPrice)
  // newPrice = newPrice + newPrice;
  document.getElementById("dynamicContent").textContent = newPrice;
}