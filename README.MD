Author: Yaritza Marie Miranda Castillo

Date: May 27, 2024

This project is based on Guru 99's Selenium Live Project: FREE Real Time Project for Practice

The project aims to put QA's in a simulated corporate test environment, the goal was tp automate using Selenium but I'll be translating the requeriments into Cypress
to automate the test cases for a demo banking website: https://www.demo.guru99.com/V4/. 

The project's duration is 7 days and QA gets an email every 24 hours with the work allocation for that day

Source:
https://www.guru99.com/live-selenium-project.html

Day 1 task:

1. Verify the login Section:
Test case: enter valid user id and password
Test Steps:
    1. Go to https://clicks.aweber.com/y/ct/?l=9GJb&m=mqr21DGG7WFEjy9&b=ftyRAGqn86J.zqoUqwX_JA
    2. Enter valid UserId
    3. Enter Valid Password
    4. Click Login
Test Data: UserId, Password
Expected Result: Login Successful

Day 2 Task:
1. Verify the login Section:
Test case: enter valid user id and password
Test Steps:
    1. Go to https://clicks.aweber.com/y/ct/?l=9GJb&m=mqr21DGG7WFEjy9&b=ftyRAGqn86J.zqoUqwX_JA
    2. Enter valid UserId
    3. Enter Valid Password
    4. Click Login
    5. Verify The Output
Test Data: UserId, Password
Expected Result: Login Successful, Verify the Title of The HomePage

Day 3 Task:
Parametrize Test Scenarios, added the following test cases:
Invalid User and Valid Password
Valid User and Invalid Password
Invalid Password and Invalid User
Login Reset Button
Added the test data into the users.xlsx file in the fixtures folder

Note: the website has a bug so unfortunalety you'll have to manually dismiss the browser alerts
This means that running it through the github pipelines will now work

Day 4 Task:

Task for day 4 was focused to adding annotations with TestNG, not needed since we are using Cypress 

Day 5 Task:

Task for day 5 was also also geared for TestNG.

Day 6 Task:
Adding Screenshots after Login
Day 7 Task:
Project Closure:

Other scenario suggestions to automate: https://docs.google.com/spreadsheets/d/1WRDwFzHL0bMepIXcAEBPqtGWYvtWtXka0rfG8XamkVU/edit#gid=4
Project Requirements: https://docs.google.com/document/d/1rPW5DV82VJT6vtA1VDSrfxaCBuAduxW0zb1yfTh_VMk/edit

Note:

Credentials last 20 days after creation date (5/27/2024), to run the test cases it is recommended you create a new set of credentials here:
https://demo.guru99.com/ and update them in ../fixtures/users.xlsx in the A2 and B2 cells
The first set of credentials generated were:
user Id: mngr573953
Password: YhutysY