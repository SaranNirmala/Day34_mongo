// Find all the topics and tasks which are thought in the month of October
db.task.find({"taskDate":{$gte: "01-10-2021",$lte: "31-10-2021"}});
db.task.find({"date":{$gte: "01-10-2021",$lte: "31-10-2021"}},{topic: 1, _id:0})

// Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020
db.company_drive.find({"driveDate":{$gte: "01-10-2020",$lte: "15-10-2020"}})

// Find all the company drives and students who are appeared for the placement.
db.company_drive.find({"cname":"Google Inc"}, {"appearedStudent":1,})
db.company_drive.find({"cname":"TCS Inc"}, {"appearedStudent":1})
db.company_drive.find({"cname":"cognito Inc"}, {"appearedStudent":1})
db.company_drive.find({"cname":"CTS Inc"}, {"appearedStudent":1})
db.company_drive.find({"cname":"wipro Inc"}, {"appearedStudent":1})
db.company_drive.find({"cname":"IBM Inc"}, {"appearedStudent":1})


// Find the number of problems solved by the user in codekata
db.codekata.find({"id":1}, {"problem.solved":1, _id:0})
db.codekata.find({"id":2}, {"problem.solved":1, _id:0})
db.codekata.find({"id":3}, {"problem.solved":1, _id:0})
db.codekata.find({"id":4}, {"problem.solved":1, _id:0})
db.codekata.find({"id":5}, {"problem.solved":1, _id:0})

// Find all the mentors with who has the mentee's count more than 15
db.mentor.find({"mCount": {$gte: 15}}, {"mentorName":1, _id:0});

// Find the number of users who are absent and task is not submitted  between 15 oct-2020 and 31-oct-2020
db.topics.find({"date":{$gte: "01-10-2021",$lte: "31-10-2021"}},{"absent":1, _id:0})
db.tasks.find({"taskDate":{$gte: "01-10-2021",$lte: "31-10-2021"}},{"notSubmitted":1, _id:0})
