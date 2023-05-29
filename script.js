const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Mugs",
    price: 50,
    colors: [
      {
        code: "#c0d8ca",
        img: "https://i.pinimg.com/474x/b7/5e/47/b75e474db40f39df3f347068b2c9db95.jpg",
      },
      {
        code: " #825f59",
        img: "https://i.pinimg.com/474x/5c/74/ee/5c74ee5f0c45b08c65a2eeeae68c0cc7.jpg",
      },
    ],
  },
  {
    id: 2,
    title: "Spoons",
    price: 80,
    colors: [
      {
        code: "Black",
        img: "https://i.pinimg.com/474x/f8/39/1b/f8391b476eaca8c496eefbbee11d9c60.jpg",
      },
      {
        code: "#87b69c",
        img: "https://i.pinimg.com/474x/9e/59/4a/9e594ae24eaab5e5894ecbe6302a7952.jpg",
      },
    ],
  },
  {
    id: 3,
    title: "Plates",
    price: 70,
    colors: [
      {
        code: "#677251",
        img: "https://i.pinimg.com/474x/b2/0c/ec/b20cec52a55e9e34264548695e898e30.jpg",
      },
      {
        code: "pink",
        img: "https://i.pinimg.com/474x/be/f3/d2/bef3d27699e089bb49c482590bea0f97.jpg",
      },
    ],
  },
  {
    id: 4,
    title: "Bowls",
    price: 90,
    colors: [
      {
        code: "Brown",
        img: "https://i.pinimg.com/474x/c5/40/3e/c5403e7de121dda0a6c1de3b4727346e.jpg",
      },
      {
        code: "#29353d",
        img: "https://i.pinimg.com/474x/a4/47/8c/a4478cda69ed86eb4b073b8fbd3be7fe.jpg",
      },
    ],
  },
  {
    id: 5,
    title: "Vase",
    price: 120,
    colors: [
      {
        code: "#d3af65",
        img: "https://i.pinimg.com/474x/cf/bd/68/cfbd6806f5e675ea08faf2adedcaea15.jpg",
      },
      {
        code: "#879db0",
        img: "https://i.pinimg.com/474x/7a/6f/ea/7a6fea1d71996b8147b8efaefc5ba3a5.jpg",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductQuantity = document.querySelectorAll(".quantity");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change text of current Pordoct
    currentProductTitle.textContent = choosenProduct.title
    currentProductPrice.textContent = "$" + choosenProduct.price
    currentProductImg.src = choosenProduct.colors[0].img

    // assigning colors
    currentProductColors.forEach((color, index) => {
        color.style.backgroundColor = choosenProduct.colors[index].code
    })
  });
});

//assigning images according to colors
currentProductColors.forEach((color, index) => {
    color.addEventListener("click", () => {
        currentProductImg.src = choosenProduct.colors[index].img
    })
})

currentProductQuantity.forEach((quantity, index) => {
    quantity.addEventListener("click", () => {
        currentProductQuantity.forEach((quant) => {
            //set the to default
            quant.style.backgroundColor= "white"
            quant.style.color= "black"
        })
        quantity.style.backgroundColor= "black"
        quantity.style.color= "white"
    })
})


// product
const productButton = document.querySelector(".productButton")
const payment = document.querySelector(".payment")
const close = document.querySelector(".close")

productButton.addEventListener("click", () => {
  payment.style.display = "flex"
})
close.addEventListener("click", () => {
  payment.style.display = "none"
})