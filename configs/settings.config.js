const settingsMap = {
  production: {
    BASE_API_DOMAIN: 'https://www.gnowth.com',
    BASE_API_URL: 'https://www.gnowth.com/api',
    BASE_URL: 'https://www.gnowth.com/#',
    ENABLE_FEATURE_OBSERVATION: false,
    ENVIRONMENT: 'production',
    VERSION: 'PROD-1.0.0',
    XDOMAIN_ENABLED: true,
  },
};

export default Object.assign(
  // default settings
  {
    BASE_API_DOMAIN: 'http://localhost:8000',
    BASE_API_URL: 'http://localhost:8000/api',
    BASE_URL: 'http://localhost:9000/#',
    CSRF_COOKIE_NAME: 'csrftoken',
    ENVIRONMENT: 'development',
    ENABLE_FEATURE_OBSERVATION: true,
    LANG: ['en'],
    VERSION: 'DEV-0.1.0',
    XDOMAIN_ENABLED: false,
  },

  // env settings
  settingsMap[process.env.NODE_ENV],
);
