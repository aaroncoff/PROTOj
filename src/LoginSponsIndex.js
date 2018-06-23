import React from 'react';

const SponsorLogin = () => {
const redirectUri = encodeURIComponent(`${window.location.origin}/sponsorCallback`);
  const auth0LoginUrl = `https://${process.env.REACT_APP_AUTH0_DOMAIN}/authorize?client_id=${process.env.REACT_APP_AUTH0_CLIENT_ID}&scope=openid%20profile%20email&redirect_uri=${redirectUri}&response_type=code&`;

  
  return (
    <div>
        
      <a href={auth0LoginUrl}>Sponsor Login</a>
    </div>
  );
};
export default SponsorLogin;

