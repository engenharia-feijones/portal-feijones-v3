export default function useCuponsFilter() {
  function filtredCustomers(searchCupom, customers) {
    let conditions = [];
    searchCupom && conditions.push(filterCupom);
    if (conditions.length > 0) {
      return customers.filter((customer) => {
        return conditions.every((condition) =>
          condition(customer, searchCupom)
        );
      });
    }
    return customers;
  }

  function filterCupom(customer, searchCupom) {
    return customer.dtNas?.toLowerCase().includes(searchCupom?.toLowerCase());
  }

  return { filtredCustomers };
}
