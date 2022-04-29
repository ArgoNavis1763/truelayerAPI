const dotenv = require("dotenv");
dotenv.config();
const Truelayer = require("./classes/truelayer.js");
const axios = require("axios");
const express = require("express");
const app = express();
const truelayer = new Truelayer();
app.use(express.json());

// 56c7b029e0f8ec5a2334fb0ffc2fface account ID
// 328f557c68aebd532cbbd05ce5bcb6c8 card ID

app.listen(8080, () => {
  console.log("listening on 8080");
});

app.get("/truelayer/fetch-all-cards", async (req, res) => {
  const response = await truelayer.fetchAllCards();
  res.send(response);
});

app.get("/truelayer/fetch-all-accounts", async (req, res) => {
  const response = await truelayer.fetchAllAccounts();
  res.send(response);
});

app.get("/truelayer/fetch-one-account/:accountID", async (req, res) => {
  const response = await truelayer.fetchSingleAccount(req.params.accountID);
  res.send(response);
});

app.get("/truelayer/fetch-balance/:accountID", async (req, res) => {
  const response = await truelayer.fetchAccountBalance(req.params.accountID);
  res.send(response);
});

app.get(
  "/truelayer/fetch-account-transactions/:accountID",
  async (req, res) => {
    const response = await truelayer.fetchAccountTransactions(
      req.params.accountID
    );
    res.send(response);
  }
);

app.get("/truelayer/fetch-DD/:accountID", async (req, res) => {
  const response = await truelayer.fetchDD(req.params.accountID);
  res.send(response);
});

app.get("/truelayer/fetch-info/", async (req, res) => {
  const response = await truelayer.fetchInfo();
  res.send(response);
});

app.get("/truelayer/fetch-single-card/:cardID", async (req, res) => {
  const response = await truelayer.fetchSingleCard(req.params.cardID);
  res.send(response);
});

app.get("/truelayer/fetch-card-balance/:cardID", async (req, res) => {
  const response = await truelayer.fetchCardBalance(req.params.cardID);
  res.send(response);
});

app.get("/truelayer/fetch-card-transactions/:cardID", async (req, res) => {
  const response = await truelayer.fetchCardTransactions(req.params.cardID);
  res.send(response);
});

app.post("/truelayer/check-if-verified", async (req, res) => {
  const response = await truelayer.verifyAccountHolder(req.body.name);
  res.send(response);
});

app.use(express.static("public"));
