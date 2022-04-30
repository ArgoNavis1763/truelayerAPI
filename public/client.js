const container = document.getElementById("container");

document.addEventListener("DOMContentLoaded", async () => {
  const identity_response = await fetch("/truelayer/fetch-info");
  const identity_data = await identity_response.json();
  const identity_results = identity_data.results[0];
  //   console.log(identity_results);

  const accounts_response = await fetch("/truelayer/fetch-all-accounts");
  const accounts_data = await accounts_response.json();
  const account_results = accounts_data.results;
  //   console.log(account_results);

  const cards_response = await fetch("/truelayer/fetch-all-cards");
  const cards_data = await cards_response.json();
  const cards_results = cards_data.results;
  //   console.log(cards_results);

  fillCards(identity_results, account_results, cards_results);
});

const fillCards = (identity, accounts, cards) => {
  const identity_card = document.getElementById("info");

  const full_name = identity.full_name;
  const addresses = identity.addresses[0];
  const address_line = addresses.address;
  const city = addresses.city;
  const zip = addresses.zip;
  const country = addresses.country;

  const email = identity.emails[0];
  const phone1 = identity.phones[0];
  const phone2 = identity.phones[1];

  identity_card.innerHTML = `<strong>Name:</strong> ${full_name}
  <br/>
  <br/>
  <strong>Address:</strong> ${address_line},
  ${city},
  ${zip},
  ${country}
<br/>
<br/>
  <strong>Email:</strong> ${email}
<br/>
<br/>
  <strong>Phone:</strong> ${phone1}, ${phone2}`;

  const accounts_card = document.getElementById("accounts");

  accounts.forEach((account) => {
    const display_name = account.display_name;
    const account_type = account.account_type;
    const account_number = account.account_number.number;
    const sort_code = account.account_number.sort_code;

    const account_div = document.createElement("div");
    account_div.classList.add("account-div");
    accounts_card.appendChild(account_div);
    account_div.innerHTML = `<strong>Account Name:</strong> ${display_name}
    <br/>
    <strong>Account Type:</strong> ${account_type}
    <br/>
    <strong>Account Number:</strong> ${account_number}
    <br/>
    <strong>Sort Code:</strong> ${sort_code}
    `;

    accounts_card.appendChild(account_div);
  });

  const cards_card = document.getElementById("cards");
  cards_card.innerText = cards;
};
