const axios = require("axios");

module.exports = class Truelayer {
  constructor() {
    this.url = "https://api.truelayer-sandbox.com/data/v1";
  }

  async fetchAllCards() {
    try {
      const response = await axios.get(`${this.url}/cards`, {
        headers: {
          Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
        },
      });
      const cards = response.data;
      return cards;
    } catch (error) {
      throw new Error("Error: ", error);
    }
  }
  async fetchAllAccounts() {
    try {
      const response = await axios.get(`${this.url}/accounts`, {
        headers: {
          Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
        },
      });
      const accounts = response.data;
      return accounts;
    } catch (error) {
      throw new Error("Error: ", error);
    }
  }
  async fetchSingleAccount(accountID) {
    try {
      const response = await axios.get(`${this.url}/accounts/${accountID}`, {
        headers: {
          Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
        },
      });
      const account = response.data;
      return account;
    } catch (error) {
      throw new Error("Error: ", error);
    }
  }
};
