const URL = window.location.href.includes('localhost')
  ? 'http://localhost:8080'
  : 'https://marciotflix.herokuapp.com';

export default { URL };
