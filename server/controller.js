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
    //   console.log("1", payload)
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
        res.redirect(`/studprof/${req.session.user.studentid}`);
        
      } else {
        const createData = [userData.email, userData.given_name, userData.family_name, userData.picture];

        return req.app.get('db').add_student(createData).then(newUsers => {
          const user = newUsers[0];
          req.session.user = user
          res.redirect('/studprof');
          console.log(req.session.user)
        })
      }
    }).catch(error => console.log(error))
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
      const createData = [userData.email, userData.given_name, userData.family_name, userData.picture];

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

//sponsor login

sponsLogin: (req, res) => {
    console.log('sponsor login works')
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

  function storeSponsorInfoInDataBase(userInfoResponse) {
    console.log(userInfoResponse)
  const userData = userInfoResponse.data;
console.log("2", userData)
  return req.app.get('db').find_sponsor_by_auth0_id(userData.email).then(users => {
      console.log("3-----------------", users)
    if (users.length) {
      const user = users[0];
      req.session.user = user;
      req.session.save();
      console.log("4", req.session.user)
      res.redirect('/sponsprof');
    } else {
      const createData = [userData.email, userData.given_name, userData.family_name, userData.picture];

      return req.app.get('db').add_sponsor(createData).then(newUsers => {
        const user = newUsers[0];
        req.session.user = user
        res.redirect('/sponsprof');
      })
    }
  })
}

  function tradeAccessTokenForUserInfo(accessTokenResponse){
    return axios.get(`https://${process.env.REACT_APP_AUTH0_DOMAIN}/userinfo?access_token=${accessTokenResponse.data.access_token}`)

}

  
tradeCodeForAccessToken()
  .then(tradeAccessTokenForUserInfo)
  .then(storeSponsorInfoInDataBase)
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


getData: (req, res) => {
    if(req.session.user){
        console.log('req-session-user--------------', req.session.user);
        res.send(req.session.user)
    }else{res.redirect('/')};

},

addStudent: (req, res) => {
    const dbInstance = req.app.get('db')
    dbInstance.add_student().then( students => {
        res.send(students);
})
},

updateStudent: (req, res) => {
    const dbInstance = req.app.get('db')
    
    dbInstance.update_student([req.body.studentId, req.body.given_name, req.family_name, req.body.uinversity, req.body.major, req.body.email]).then( response => {
        res.status(200).send(response)
    })
},

updateStudentUniversity: (req, res) => {
    const dbInstance = req.app.get('db')
    console.log(req.body)
    dbInstance.update_student_university([req.body.university, req.params.id]).then( response => {
        res.status(200).send(response)
    })
},

getStudent: (req, res) => {
    console.log('getStudent')
    const dbInstance = req.app.get('db')
    const {search} = req.query
    console.log('hit', search)
    dbInstance.get_student(search).then(students => {
        console.log('1', students);
        res.send(students);
    })

},

getStudentById: (req, res) => {
    // console.log(req.params.id)
    const { id } = req.params;
    const dbInstance = req.app.get('db')
    dbInstance.get_student_id(id).then(student => {
        res.send(student)
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
        console.log('------------------professors', professors);
        res.send(professors);
    }).catch(err => console.log('Get Professor Database Error-----', err));

},

getSponsor: (req, res) => {
    const dbInstance = req.app.get('db')
    const {search} = req.query
    dbInstance.get_sponsor(search).then(sponsors => {
        console.log('-----------------sponsors', sponsors);
        res.send(sponsors);
    }).catch(err =>{ console.log("----getSponsor error", err)
})
},

addSponsor: (req, res) => {
    const dbInstance = req.app.get('db')
    dbInstance.add_sponsor().then( sponsors => {
        res.send(sponsors);
})
},

addProject: (req, res) => {
    console.log('-------------method hit')
    const data = req.body;
    console.log(req.body)
    const dbInstance = req.app.get('db')
    dbInstance.add_project({
        // {projname, company, sponsor, bio}
        company: data.company,
        sponsor: data.sponsor,
        projname: data.projname,
        student1: data.student1,
        student2: data.student2,
        student3: data.student3,
        student4: data.student4,
        student5: data.student5,
        bio: data.bio,
        industry: data.industry,
        user_id: req.session.user.sponsid
    }).then( projects => {
        req.session.user.projects = projects
        console.log("-------------", req.session.user)
        res.send('success');
}).catch(err => console.log(err))
},

getProject: (req, res) => {
    const dbInstance = req.app.get('db')
    const {search} = req.query
    console.log("----------getProj---hit")
    dbInstance.get_project(search).then(projects => {
        res.send(projects);
    }).catch(err => {
        console.log('get project error', err)
        res.send('get project error')
    } )
},

// getStudent: (req, res) => {
//     console.log('getStudent')
//     const dbInstance = req.app.get('db')
//     const {search} = req.query
//     console.log('hit', search)
//     dbInstance.get_student(search).then(students => {
//         console.log('1', students);
//         res.send(students);
//     })

// },

// app.get('/api/projects', controller.getProject)

// app.get('/api/projects/:projname', controller.getProjectByName)

getProjectByName: (req, res) => {
    const dbInstance = req.app.get('db')
    const {projname} = req.params
    console.log("----------getProj---hit", projname)
    dbInstance.get_projname(projname).then(projects => {
        console.log(projects);
        res.send(projects);
    })
},

updateProject: (req, res) => {
    const dbInstance = req.app.get('db')
    
    dbInstance.update_project([req.body.company, req.body.sponsor, req.body.projname, req.body.student1, req.body.student2, req.body.student3, req.body.student4, req.body.student5, req.body.bio, req.body.industry]).then( response => {
        res.status(200).send(response)
    })
}

// addIndProj: (req, res) => {
//     console.log('addIndProj Hit');
//     const data = req.body;
//     console.log(req.body);
//     const dbInstance = req.app.get('db')
//     dbInstance.add_industry_projects({
//         industry: data.industry
//     }).then( industry => {

//     })
// }

// updateSponsor: (req, res) => {
//     const dbInstance = req.app.get('db')
    
//     dbInstance.update_sponsor([req.body.studentId, req.body.firstName, req.body.lastName, req.body.uinversity, req.body.major, req.body.email]).then( response => {
//         res.status(200).send(response)
//     })
// }

// getProfile: (req, res) => {
//     const dbInstance = req.app.get('db')
//     const {search} = req.query
//     dbInstance.get_company(search).then(companies => {
//         res.send(companies);
//     })
// }

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

