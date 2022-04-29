const dotenv = require("./node_modules/dotenv");
dotenv.config();
const Truelayer = require("./classes/truelayer.js");

const getAllCards = async () => {
  const user = new Truelayer();
  const response = await user.fetchAllCards();
  console.log(response);
};

// getAllCards();

const getAllAccounts = async () => {
  const account = new Truelayer();
  const response = await account.fetchAllAccounts();
  console.log(response);
};

// getAllAccounts();

const getOneAccount = async (accountID) => {
  const account = new Truelayer();
  const response = await account.fetchSingleAccount(accountID);
  console.log(response);
};

// getOneAccount("56c7b029e0f8ec5a2334fb0ffc2fface");

const getBalance = async (accountID) => {
  const account = new Truelayer();
  const response = await account.fetchBalance(accountID);
  console.log(response);
};

// getBalance("56c7b029e0f8ec5a2334fb0ffc2fface");

const getAccountTransactions = async (accountID) => {
  const account = new Truelayer();
  const response = await account.fetchAccountTransactions(accountID);
  console.log(response);
};

// getAccountTransactions("56c7b029e0f8ec5a2334fb0ffc2fface");

const getDD = async (accountID) => {
  const account = new Truelayer();
  const response = await account.fetchDD(accountID);
  console.log(response);
};

// getDD("56c7b029e0f8ec5a2334fb0ffc2fface");

const getInfo = async () => {
  const account = new Truelayer();
  const response = await account.fetchInfo();
  console.log(response);
};

// getInfo();

const getSingleCard = async (cardID) => {
  const card = new Truelayer();
  const response = await card.fetchSingleCard(cardID);
  console.log(response);
};

// getSingleCard("328f557c68aebd532cbbd05ce5bcb6c8");

const getCardBalance = async (cardID) => {
  const card = new Truelayer();
  const response = await card.fetchCardBalance(cardID);
  console.log(response);
};

// getCardBalance("328f557c68aebd532cbbd05ce5bcb6c8");

const getCardTransactions = async (cardID) => {
  const card = new Truelayer();
  const response = await card.fetchCardTransactions(cardID);
  console.log(response);
};

getCardTransactions("328f557c68aebd532cbbd05ce5bcb6c8");
