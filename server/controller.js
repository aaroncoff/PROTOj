const axios = require ('axios');


module.exports = {


// Student Login
studLogin: (req, res) => {
    console.log('student login works')
    const payload = {
        client_id: process.env.REACT_APP_AUTH0_CLIENT_ID,
        client_secret: process.env.REACT_APP_AUTH0_CLIENT_SECRET,
        code: req.query.code,
        grant_type: 'authorization_code',
        redirect_uri: `http://${req.headers.host}/auth/callback`
      };

  function tradeCodeForAccessToken() {
      console.log("1", payload)
    return axios.post(`https://${process.env.REACT_APP_AUTH0_DOMAIN}/oauth/token`, payload);
  }

  function tradeAccessTokenForUserInfo(accessTokenResponse) {
    const accessToken = accessTokenResponse.data.access_token;
    return axios.get(`https://${process.env.REACT_APP_AUTH0_DOMAIN}/userinfo/?access_token=${accessToken}`);
  }

  function storeStudentInfoInDataBase(userInfoResponse) {
      console.log(userInfoResponse)
    const userData = userInfoResponse.data;
  console.log("2", userData)
    return req.app.get('db').find_student_by_auth0_id(userData.email).then(users => {
        console.log("3", users)
      if (users.length) {
        const user = users[0];
        req.session.user = user;
        console.log("4", req.session.user)
        res.redirect('/studprof');
      } else {
        const createData = [userData.sub, userData.email, userData.name, userData.picture];

        return req.app.get('db').add_student(createData).then(newUsers => {
          const user = newUsers[0];
          req.session.user = user
          res.redirect('/studprof');
        })
      }
    })
  }

  function tradeAccessTokenForUserInfo(accessTokenResponse){
    return axios.get(`https://${process.env.REACT_APP_AUTH0_DOMAIN}/userinfo?access_token=${accessTokenResponse.data.access_token}`)

}

  
tradeCodeForAccessToken()
  .then(tradeAccessTokenForUserInfo)
  .then(storeStudentInfoInDataBase)
  .catch(error => {
      console.log('Server error', error);
      res.status(500).send('Check server for error');
  })
  
},

// Professor login
profLogin: (req, res) => {
    console.log('professor login works')
    const payload = {
        client_id: process.env.REACT_APP_AUTH0_CLIENT_ID,
        client_secret: process.env.REACT_APP_AUTH0_CLIENT_SECRET,
        code: req.query.code,
        grant_type: 'authorization_code',
        redirect_uri: `http://${req.headers.host}/auth/callback`
      };




  function tradeCodeForAccessToken() {
      console.log("1", payload)
    return axios.post(`https://${process.env.REACT_APP_AUTH0_DOMAIN}/oauth/token`, payload);
  }

  function tradeAccessTokenForUserInfo(accessTokenResponse) {
    const accessToken = accessTokenResponse.data.access_token;
    return axios.get(`https://${process.env.REACT_APP_AUTH0_DOMAIN}/userinfo/?access_token=${accessToken}`);
  }

  function storeProfessorInfoInDataBase(userInfoResponse) {
    console.log(userInfoResponse)
  const userData = userInfoResponse.data;
console.log("2", userData)
  return req.app.get('db').find_professor_by_auth0_id(userData.email).then(users => {
      console.log("3", users)
    if (users.length) {
      const user = users[0];
      req.session.user = user;
      console.log("4", req.session.user)
      res.redirect('/profprof');
    } else {
      const createData = [userData.sub, userData.email, userData.name, userData.picture];

      return req.app.get('db').add_professor(createData).then(newUsers => {
        const user = newUsers[0];
        req.session.user = user
        res.redirect('/profprof');
      })
    }
  })
}

  function tradeAccessTokenForUserInfo(accessTokenResponse){
    return axios.get(`https://${process.env.REACT_APP_AUTH0_DOMAIN}/userinfo?access_token=${accessTokenResponse.data.access_token}`)

}

  
tradeCodeForAccessToken()
  .then(tradeAccessTokenForUserInfo)
  .then(storeProfessorInfoInDataBase)
  .catch(error => {
      console.log('Server error', error);
      res.status(500).send('Check server for error');
  })
  
},


logout: (req,res) => {
        req.session.destroy();
        res.end();

    },
    getUser:(req,res)=> {
        res.json(req.session.user);
    },

    editProfile: (req, res) => {
        const { email } = req.body;
        const db = req.app.get('db');
        db.edit_user({
            id: req.session.user.id,
            email,
        }).then(updatedUsers => {
            res.status(200).json({ user: updatedUsers[0] });
        }).catch(error => {
            console.log('edit profile error', error);
            res.status(500).json({ message: 'Error editing profile'});
        })
    },


// deleteStudent: (req, res) => {
//     const dbInstance = req.app.get('db')
//     dbInstance.delete_student(req.body.studentId).then(students => {
//         res.send(students);
//     })
// }
// }
 
// addUniversity: (req,res) => {
//     req.app.get('db').add_university().then( university => {
//         res.send(university);
//     })
// },

// addCompany: (req, res) => {
//     req.app.get('db').add_company().then( company => res.send(company));
// },

// addProfessor: (req, res) => {
//     req.app.get('db').add_professor().then( professor => res.send(professor));

// },

// addProject: (req, res) => {
//     req.app.get('db').add_project().then( project => {
//         res.send(project);
    
// })
// }
// }

addStudent: (req, res) => {
    const dbInstance = req.app.get('db')
    dbInstance.add_student().then( students => {
        res.send(students);
})
},

updateStudent: (req, res) => {
    const dbInstance = req.app.get('db')
    
    dbInstance.update_student([req.body.studentId, req.body.firstName, req.body.lastName, req.body.uinversity, req.body.major, req.body.email]).then( response => {
        res.status(200).send(response)
    })
},

getStudent: (req, res) => {
    const dbInstance = req.app.get('db')
    const {search} = req.query
    console.log(search)
    dbInstance.get_student(search).then(students => {
        res.send(students);
    })

},

getUniversity: (req, res) => {
    const dbInstance = req.app.get('db')
    const {search} = req.query
    dbInstance.get_university(search).then(universities => {
        res.send(universities);
    })

},

addProfessor: (req, res) => {
    const dbInstance = req.app.get('db')
    dbInstance.add_professor().then( professors => {
        res.send(professors);
})
},

getProfessor: (req, res) => {
    const dbInstance = req.app.get('db')
    const {search} = req.query
    dbInstance.get_professor(search).then(professors => {
        res.send(professors);
    })

},

getCompany: (req, res) => {
    const dbInstance = req.app.get('db')
    const {search} = req.query
    dbInstance.get_company(search).then(companies => {
        res.send(companies);
    })
}


}

// getStudent
// updateStudent
// deleteStudent

// // createHouses: (req, res) => {
//     //Destruct thte data from the req.body, then assign to object, since it is using named parameters.
//     // const { nameInput, addressInput, cityInput, stateInput, zipcodeInput,
//     //      imageurlInput, monthly_mortgage_amountInput, monthly_rentInput } = req.body;   
//     // const newHouse = { nameInput, addressInput, cityInput, stateInput, zipcodeInput,
//     //      imageurlInput, monthly_mortgage_amountInput, monthly_rentInput };       
//     //Assign the db instance from the request to a variable     

// addUniversity
// getUniversity
// updateUniversity
// deleteUniversity

// addProfessor
// getProfessor
// updateProfessor
// deleteProfessor

// addCompany
// getCompany
// updateCompany
// deleteCompany

// addProject
// getProject
// updateProject
// deleteProject

// addSponsor
// getSponsor
// updateSponsor
// deleteSponsor

