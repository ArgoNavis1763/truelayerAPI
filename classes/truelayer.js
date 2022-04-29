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
  async fetchBalance(accountID) {
    try {
      const response = await axios.get(
        `${this.url}/accounts/${accountID}/balance`,
        {
          headers: {
            Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
          },
        }
      );
      const balance = response.data;
      return balance;
    } catch (error) {
      throw new Error("Error: ", error);
    }
  }
  async fetchAccountTransactions(accountID) {
    try {
      const response = await axios.get(
        `${this.url}/accounts/${accountID}/transactions`,
        {
          headers: {
            Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
          },
        }
      );
      const balance = response.data;
      return balance;
    } catch (error) {
      throw new Error("Error: ", error);
    }
  }
  async fetchDD(accountID) {
    try {
      const response = await axios.get(
        `${this.url}/accounts/${accountID}/direct_debits`,
        {
          headers: {
            Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
          },
        }
      );
      const balance = response.data;
      return balance;
    } catch (error) {
      throw new Error("Error: ", error);
    }
  }

  async fetchInfo(accountID) {
    try {
      const response = await axios.get(`${this.url}/info`, {
        headers: {
          Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
        },
      });
      const balance = response.data;
      return balance;
    } catch (error) {
      throw new Error("Error: ", error);
    }
  }

  async fetchSingleCard(cardID) {
    try {
      const response = await axios.get(`${this.url}/cards/${cardID}`, {
        headers: {
          Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
        },
      });
      const card = response.data;
      return card;
    } catch (error) {
      throw new Error("Error: ", error);
    }
  }

  async fetchCardBalance(cardID) {
    try {
      const response = await axios.get(`${this.url}/cards/${cardID}/balance`, {
        headers: {
          Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
        },
      });
      const card = response.data;
      return card;
    } catch (error) {
      throw new Error("Error: ", error);
    }
  }

  async fetchCardTransactions(cardID) {
    try {
      const response = await axios.get(
        `${this.url}/cards/${cardID}/transactions`,
        {
          headers: {
            Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
          },
        }
      );
      const card = response.data;
      return card;
    } catch (error) {
      throw new Error("Error: ", error);
    }
  }
};
