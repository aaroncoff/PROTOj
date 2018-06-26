require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const controller = require('./controller');
const PORT = 3500;
const session = require('express-session');
// var socket = require('socket.io');
// io = socket(server);

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
app.get('/sponsorCallback', controller.sponsLogin);
app.get('/prof-data', controller.getProfessor);
app.get('/stud-data', controller.getStudent);
app.get('/spons-data', controller.getSponsor);
app.get('/api/proj-data', controller.getProject);
app.get('/api/userData', controller.getData);





app.get('/user', controller.getUser);
app.post('/api/logout', controller.logout);
app.put('/api/user/:id', controller.editProfile);











app.post('/api/students', controller.addStudent)

app.get('/api/students/:id', controller.getStudentById)
app.get('/api/students', controller.getStudent)

app.post('/api/students/', controller.updateStudent)

app.patch('/api/students/:id/university', controller.updateStudentUniversity)

app.get('/api/professors', controller.getProfessor)

app.post('/api/professors', controller.addProfessor)

app.post('/api/sponsors', controller.addSponsor)

app.get('/api/sponsors', controller.getSponsor)

app.post('/api/projects', controller.addProject)

app.get('/api/projects', controller.getProject)

app.post('/api/projects', controller.updateProject)

app.get('/api/universities', controller.getUniversity)

// app.get('/api/companies', controller.getCompany)

// app.post('/api/sponsors', controller.updateSponsor)

// app.delete('/api/students', controller.deleteStudents)









app.listen(PORT, () => console.log(`Server listening on Port:${PORT}`));