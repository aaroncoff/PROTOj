import React from 'react';

const SponsorLogin = (props) => {
const redirectUri = encodeURIComponent(`${window.location.origin}/sponsorCallback`);
  const auth0LoginUrl = `https://${process.env.REACT_APP_AUTH0_DOMAIN}/authorize?client_id=${process.env.REACT_APP_AUTH0_CLIENT_ID}&scope=openid%20profile%20email&redirect_uri=${redirectUri}&response_type=code&`;
 console.log('AUth0 Login Url------', auth0LoginUrl);
  
  return (
    <div>
        
      <a href={auth0LoginUrl}>Sponsor Login</a>
    </div>
  );
};

// class SponsorLogin extends Component {
//     constructor() {
//         super();
//         this.state = {
//         }
//     }
//     login() {
//         const redirectUri = encodeURIComponent(`${window.location.origin}/sponsorCallback`);
//         const auth0LoginUrl = `https://${process.env.REACT_APP_AUTH0_DOMAIN}/authorize?client_id=${process.env.REACT_APP_AUTH0_CLIENT_ID}&scope=openid%20profile%20email&redirect_uri=${redirectUri}&response_type=code&`;
//        window.location = auth0LoginUrl;
//         console.log('AUth0 Login Url------', auth0LoginUrl);
//     }
//     return (
//         <div>
//             <button onClick={() => this.login()}></button>
//         </div>
//     )
// }
export default SponsorLogin;

