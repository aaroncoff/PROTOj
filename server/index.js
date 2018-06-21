require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const controller = require('./controller');
const PORT = 3500;
const session = require('express-session');

const app = express();
app.use(bodyParser.json());
app.use( session({
  secret: 'Devmountain',
  resave: false,
  saveUninitialized: true,
  expires: 1000000000
}))

massive( process.env.CONNECTION_STRING).then( dbInstance => {
  app.set( 'db', dbInstance);
}).catch( err => console.log('db connection error', err) );

app.get('/studentCallback',controller.studLogin);
app.get('/professorCallback',controller.profLogin);
app.get('/user-data', controller.getProfessor);




// app.get('/user', controller.getUser);
// app.post('/api/logout', controller.logout);
// app.put('/api/user/:id', controller.editProfile);











app.post('/api/students', controller.addStudent)

app.get('/api/students', controller.getStudent)

app.post('/api/students', controller.updateStudent)

app.get('/api/universities', controller.getUniversity)

app.get('/api/companies', controller.getCompany)

// app.delete('/api/students', controller.deleteStudents)









app.listen(PORT, () => console.log(`Server listening on Port:${PORT}`));