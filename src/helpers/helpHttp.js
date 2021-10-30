export const helpHttp = () => {
  const customFetch = (endpoint, options) => {
    const defaultHeader = {
      accept: "application/json",
    };

    const controller = new AbortController();
    options.signal = controller.signal;

    //Default

    //If a method is indicated, use that method otherwise use GET
    options.method = options.method || "GET";

    //If any headers are indicated, use those headers otherwise use default
    options.headers = options.headers
      ? { ...defaultHeader, ...options.headers }
      : defaultHeader;

    options.body = JSON.stringify(options.body) || false;
    //In case there is no body and this value is equal to false, it will be deleted
    if (!options.body) delete options.body;

    //In case the server is not responding, cancel the request
    setTimeout(() => controller.abort(), 10000);
    // console.log(options);

    return fetch(endpoint, options)
      .then((res) =>
        res.ok
          ? res.json()
          : Promise.reject({
              error: true,
              status: res.status || "00",
              statusText: res.statusText || "Ocurrio un error",
            })
      )
      .catch((err) => err);
  };

  const get = (url, options = {}) => customFetch(url, options);

  const post = (url, options) => {
    options.method = "POST";
    return customFetch(url, options);
  };

  const put = (url, options) => {
    options.method = "PUT";
    return customFetch(url, options);
  };

  const del = (url, options) => {
    options.method = "DELETE";
    return customFetch(url, options);
  };

  return { get, post, put, del };
};
