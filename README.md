# Single page application for Loans 
The server is a Web API developed with ASP .NET and SQLite and the web application is developed with Angular 10.

1.	Open the Server.sln project from folder \Web API\Server with Visual Studio (I have used 2019 version)
•	Run the server -> it should take you to https://localhost:44331
2.	Open the web application from folder \Website with any IDE you prefer
•	Open Command Prompt and type: cd {yourpath}\Website
•	After that, run the command: npm start -> it should take you to https://localhost:4200 (there is no route because it is a single-page application)
3.	While having both of them running, you will be able to:
•	Add a new Loan from the form
•	Refresh the Loans panel to see the changes 
•	See the details -> and then delete a selected loan
