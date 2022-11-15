const DataAPI = () => {
  const url = "http://my-json-server.typicode.com/kowackag/db-diet-form";

  function addOrdersAPI(data) {
    const options = {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    };
    return _fetch(options, `/orders`);
  }

  function loadProductsAPI() {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    return _fetch(options, `/products`);
  }

  function _fetch(options, additionalPath = "") {
    const urlCopy = `${url}${additionalPath}`;
    return fetch(urlCopy, options).then((resp) => {
      if (resp.ok) {
        return resp.json();
      }
      return Promise.reject(resp);
    });
  }

  return [addOrdersAPI, loadProductsAPI];
};

export default DataAPI;
