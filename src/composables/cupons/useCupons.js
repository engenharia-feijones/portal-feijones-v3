const BASE_URL = "https://feijonesmvpapi.azurewebsites.net/api/Cliente";

export default function useCupons() {
  async function createCupom(customer) {
    const response = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(customer),
    });

    return await response.json();
  }

  async function vinculateCupomCustomer(customer) {
    const response = await fetch(`${BASE_URL}/${customer.id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(customer),
    });

    await response.json();
  }

  async function getCupons() {
    const response = await fetch(BASE_URL, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    return await response.json();
  }

  return { createCupom, vinculateCupomCustomer, getCupons };
}
