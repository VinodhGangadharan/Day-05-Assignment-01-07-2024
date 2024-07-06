var resume = {
  "basics": {
    "name": "Vinodh G",
    "label": "Full stack Developer",
    "email": "abc123@gmail.com",
    "phone": "+91 9876543210",
    "summary": "A summary of Vinodh G…",
    "location": {
      "address": "000 Broadway St",
      "postalCode": "600075",
      "city": "Chennai",
      "countryCode": "IN",
      "region": "Tamilnadu"
    },
    "profiles": [{
      "network": "LinkedIn",
      "username": "Vinodh",
      "url": "https://linkedin.com/vinodh"
    }]
  },
  "work": [{
    "name": "XYZ Company",
    "position": "Senior Developer",
    "url": "https://company.com",
    "startDate": "2013-01-01",
    "endDate": "2024-01-01",
    "summary": "Description…",
    "highlights": [
      "Started the company"
    ]
  }],
  "education": [{
    "institution": "ABC University",
    "url": "https://institution.com/",
    "area": "Software Development",
    "studyType": "Bachelor",
    "startDate": "2009-01-01",
    "endDate": "2013-01-01",
    "score": "7.0",
    "courses": [
      "Computer Science"
    ]
  }],
  "awards": [{
    "title": "Award",
    "date": "2014-11-01",
    "awarder": "Company",
    "summary": "There is no spoon."
  }],
  "certificates": [{
    "name": "Certificate",
    "date": "2021-11-07",
    "issuer": "Company",
    "url": "https://certificate.com"
  }],
  "skills": [{
    "name": "Web Development",
    "level": "Master",
    "keywords": [
      "HTML",
      "CSS",
      "JavaScript"
    ]
  }],
  "languages": [{
    "language": "English",
    "fluency": "Native speaker"
  }],
  "interests": [{
    "name": "Wildlife",
    "keywords": [
      "Ferrets",
      "Unicorns"
    ]
  }],
  "references": [{
    "name": "Jane Doe",
    "reference": "Reference…"
  }],
  "projects": [{
    "name": "Project",
    "startDate": "2019-01-01",
    "endDate": "2021-01-01",
    "description": "Description...",
    "highlights": [
      "Won award at AIHacks 2016"
    ],
    "url": "https://project.com/"
  }]
} 

//------------------------------------------------------------------------------------------------------------

// For Loop
for (var i=0; i < resume.work.length; i++) 
  {
  var obj = resume.work[i];
  console.log(obj);
}

//output : Work details
//{name: 'XYZ Company', position: 'Senior Developer', url: 'https://company.com', startDate: '2013-01-01', endDate: '2024-01-01', …}

//--------------------------------------------------------------------------------------------------------

// For in Loop

for (var key in resume.work) {
  
  console.log(resume.work[key].startDate);
}

//Output : Work Start Date
//2013-01-01

//------------------------------------------------------------------------------------------------------------

// For of Loop

for (const value of Object.entries(resume.basics)) {
  console.log(value);
}  

//output : Basic info

//['name', 'Vinodh G']
//['label', 'Full stack Developer']
//['email', 'abc123@gmail.com']
//['phone', '+91 9876543210']
//['summary', 'A summary of Vinodh G…']
//..............................
//.............................

//---------------------------------------------------------------------------------------------------------

// ForEach Loop

  Object.values(resume.certificates).forEach(value => {
    console.log(value);
  }); 

  //output : Certificate details
  //{name: 'Certificate', date: '2021-11-07', issuer: 'Company', url: 'https://certificate.com'}

  //------------------------------------------------------------------------------------------------------------

  

