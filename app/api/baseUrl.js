export default function getBaseUrl() {
  return getQueryStringParameterByName('useMockApi')
    ? 'http://localhost:3001/'
    : 'https://production.env.com';
}

function getQueryStringParameterByName(pName, pUrl) {
  let name = pName;
  let url = pUrl;

  if (!url) url = window.location.href;
  name = name.replace(/\\/g, '\\$&');
  const regex = new RegExp(`[?&]${name}(=([^&#]*)|&|#|$)`);
  const results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
