import React from 'react';

const ProfesLogin = () => {
  const redirectUri = encodeURIComponent(`${window.location.origin}/professorCallback`);
  const auth0LoginUrl = `https://${process.env.REACT_APP_AUTH0_DOMAIN}/authorize?client_id=${process.env.REACT_APP_AUTH0_CLIENT_ID}&scope=openid%20profile%20email&redirect_uri=${redirectUri}&response_type=code&`;




  return (
    <div>
      <a href={auth0LoginUrl}>Professor Login</a>
    </div>
  );
};

export default ProfesLogin;

