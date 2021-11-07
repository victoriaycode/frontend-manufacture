import axios from 'axios';

const getToken = () => {
  return `bearer ${localStorage.getItem('token')}`;
}

export const createProduct = async (data, successCallback, errorCallback) => {
  const options = {
    method: 'POST',
    url: 'https://weparsebk.herokuapp.com/products/',
    headers: {
      'Content-Type': 'application/json',
      Authorization: getToken(),
    },
    data
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const obtainProducts = async (successCallback, errorCallback) => {
  var options = {
    method: 'GET',
    url: 'https://weparsebk.herokuapp.com/products/',
    headers: {
      'Content-Type': 'application/json',
      Authorization: getToken(),
    }
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const obtainProductById = async (id, successCallback, errorCallback) => {
  var options = {
    method: 'GET',
    url: `https://weparsebk.herokuapp.com/products/${id}/`,
    headers: {
      'Content-Type': 'application/json',
      Authorization: getToken(),
    }
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const obtainProductByDescrip = async (descrip, successCallback, errorCallback) => {
  var options = {
    method: 'GET',
    url: `https://weparsebk.herokuapp.com/products/d/${descrip}/`,
    headers: {
      'Content-Type': 'application/json',
      Authorization: getToken(),
    }
  };
  console.log(options);
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const obtainProductByState = async (state, successCallback, errorCallback) => {
  var options = {
    method: 'GET',
    url: `https://weparsebk.herokuapp.com/products/s/${state}/`,
    headers: {
      'Content-Type': 'application/json',
      Authorization: getToken(),
    }
  };
  console.log(options);
  await axios.request(options).then(successCallback).catch(errorCallback);
};


export const updateProductInfo = async (id, dataToUpdate, successCallback, errorCallback) => {
  var options = {
    method: 'PATCH',
    url: `https://weparsebk.herokuapp.com/products/upd/${id}/`,
    headers: {
      'Content-Type': 'application/json',
      Authorization: getToken(),
    },
    data: dataToUpdate
  };
  console.log(options);
  await axios.request(options).then(successCallback).catch(errorCallback);
};


export const deleteProduct = async (id, successCallback, errorCallback) => {
  var options = {
    method: 'DELETE',
    url: `https://weparsebk.herokuapp.com/products/${id}`,
    headers: {
      'Content-Type': 'application/json',
      Authorization: getToken(),
    },
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const createUser = async (data, successCallback, errorCallback) => {
  var options = {
    method: 'POST',
    url: 'https://weparsebk.herokuapp.com/users/',
    headers: {
      'Content-Type': 'application/json',
      Authorization: getToken(),
    },
    data
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const optainUsers = async (successCallback, errorCallback) => {
  var options = {
    method: 'GET',
    url: 'https://weparsebk.herokuapp.com/users/',
    headers: {
      'Content-Type': 'application/json',
      Authorization: getToken(),
    },
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const updateUser = async (id, dataToUpdate, successCallback, errorCallback) => {
  var options = {
    method: 'PATCH',
    url: `https://weparsebk.herokuapp.com/users/upd/${id}/`,
    headers: {
      'Content-Type': 'application/json',
      Authorization: getToken(),
    },
    data: dataToUpdate
  };
  console.log(options);
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const obtainUserById = async (id, successCallback, errorCallback) => {
  var options = {
    method: 'GET',
    url: `https://weparsebk.herokuapp.com/users/${id}/`,
    headers: {
      'Content-Type': 'application/json',
      Authorization: getToken(),
    }
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};
export const obtainUserByRole = async (role, successCallback, errorCallback) => {
  var options = {
    method: 'GET',
    url: `https://weparsebk.herokuapp.com/users/r/${role}/`,
    headers: {
      'Content-Type': 'application/json',
      Authorization: getToken(),
    }
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const obtainUserByEmail = async (email, successCallback, errorCallback) => {
  var options = {
    method: 'GET',
    url: `https://weparsebk.herokuapp.com/users/e/${email}/`,
    headers: {
      'Content-Type': 'application/json',
      Authorization: getToken(),
    }
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const deleteUser = async (id, successCallback, errorCallback) => {
  var options = {
    method: 'DELETE',
    url: `https://weparsebk.herokuapp.com/users/${id}`,
    headers: {
      'Content-Type': 'application/json',
      Authorization: getToken(),
    }
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};



/**Obtain List of Orders */
export const obtainOrders = async (successCallback, errorCallback) => {
  var options = {
    method: 'GET',
    url: 'https://weparsebk.herokuapp.com/orders/',
    headers: {
      'Content-Type': 'application/json',
      Authorization: getToken(),
    }
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const obtainOrderById = async (id, successCallback, errorCallback) => {
  var options = {
    method: 'GET',
    url: `https://weparsebk.herokuapp.com/orders/${id}/`,
    headers: {
      'Content-Type': 'application/json',
      Authorization: getToken(),
    }
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const obtainOrderByClientId = async (idclient, successCallback, errorCallback) => {
  var options = {
    method: 'GET',
    url: `https://weparsebk.herokuapp.com/orders/idclient/${idclient}/`,
    headers: {
      'Content-Type': 'application/json',
      Authorization: getToken(),
    }
  };
  console.log(options);
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const obtainOrderByClientName = async (clientname, successCallback, errorCallback) => {
  var options = {
    method: 'GET',
    url: `https://weparsebk.herokuapp.com/orders/clientname/${clientname}/`,
    headers: {
      'Content-Type': 'application/json',
      Authorization: getToken(),
    }
  };
  console.log(options);
  await axios.request(options).then(successCallback).catch(errorCallback);
};


export const deleteOrder = async (id, successCallback, errorCallback) => {
  var options = {
    method: 'DELETE',
    url: `https://weparsebk.herokuapp.com/orders/${id}`,
    headers: {
      'Content-Type': 'application/json',
      Authorization: getToken(),
    }
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const obtainClients = async (successCallback, errorCallback) => {
  var options = {
    method: 'GET',
    url: 'https://weparsebk.herokuapp.com/clients/',
    headers: {
      'Content-Type': 'application/json',
      Authorization: getToken(),
    }
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const createClient = async (data, successCallback, errorCallback) => {
  var options = {
    method: 'POST',
    url: 'https://weparsebk.herokuapp.com/clients/',
    headers: {
      'Content-Type': 'application/json',
      Authorization: getToken(),
    },
    data
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};
export const createOrder = async (data, successCallback, errorCallback) => {
  var options = {
    method: 'POST',
    url: 'https://weparsebk.herokuapp.com/orders/',
    headers: {
      'Content-Type': 'application/json',
      Authorization: getToken(),
    },
    data
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};
export const updateOrder = async (idOrder, dataToUpdate, successCallback, errorCallback) => {
  var options = {
    method: 'PUT',
    url: `https://weparsebk.herokuapp.com/orders/upd/${idOrder}/`,
    headers: {
       'Content-Type': 'application/json',
      Authorization: getToken(),
      },
    data: dataToUpdate
  };
  console.log(options);
  await axios.request(options).then(successCallback).catch(errorCallback);
};

/*Users by autentication Auth0 */
export const obtainUserData = async (successCallback, errorCallback) => {
  var options = {
    method: 'GET',
    url: 'https://weparsebk.herokuapp.com/users/auth/self/',
    headers: {
      'Content-Type': 'application/json',
      Authorization: getToken(),
    },
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};
