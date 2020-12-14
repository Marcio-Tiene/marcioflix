const URL = window.location.href.includes('localhost')
  ? 'http://localhost:8080'
  : process.env.REACT_APP_API_KEY;

export default { URL };
