const dotenv = require("./node_modules/dotenv");
dotenv.config();
const Truelayer = require("./classes/truelayer.js");

const getAllCards = async () => {
  const user = new Truelayer();
  const response = await user.fetchAllCards();
  console.log(response);
};

getAllCards();

const getAllAccounts = async () => {
  const account = new Truelayer();
  const response = await account.fetchAllAccounts();
  console.log(response);
};

getAllAccounts();

const getOneAccount = async (accountID) => {
  const account = new Truelayer();
  const response = await account.fetchSingleAccount(accountID);
  console.log(response);
};

getOneAccount("56c7b029e0f8ec5a2334fb0ffc2fface");
