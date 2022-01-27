// const inputPrice = document.querySelector("#price").value;
// const inputMoney = document.querySelector("#money").value;
// let displayResult = document.querySelector("#result");

// const petrolPrice = 1.86;

// const calcPetrolPrice = () => {
//   //   displayResult.textContent = inputPrice * inputMoney;

//   console.log(inputPrice);
//   console.log(inputMoney);
// };

const calculate = () => {
  let price = Number(document.getElementById("price").value);
  let money = Number(document.getElementById("money").value);

  let amount = Math.floor(money / price);

  let answer = document.querySelector("#answer");

  let text = `You can buy ${Math.floor(money / price)} litres of gasoline.`;

  amount >= 10
    ? (text = "good, now you can escape")
    : (text = "Ups, you have to stay here");

  answer.textContent = text;
};
