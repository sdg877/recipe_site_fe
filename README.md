Description
I decided to build a MERN stack recipe site using an external API. I wanted users to be able to filter, search, and save recipes. This was my first full-stack website built without any assistance.

Timeframe
This site took me 45 hours to build including planning and deployment. I built this site alone.

Technologies used:
MongoDB
Express
React
Node
Bootstrap

Frontend Deployment Link
Backend Deployment Link
Github Frontend Link
Github Backend Link

Brief
I decided to build a MERN stack site to showcase the skills that I learned during my engineering bootcamp. This was my first solo project using an external API. I wanted the site to be user-friendly and for the user to be able to save recipes and to be able to mark whether they would make again. 

Planning
I made a list of all the features that I wanted to include on the site. I wanted users to be able to search and filter recipes, to be able to save recipes to their profile if they have an account, and for them to be able to mark the recipe once they had tried it. Once I had decided on the user story, I made a list of all the pages and components I would need. I chose an external API and set up an account. 

Code Process
I started by setting up backend and frontend environments and installing relevant dependencies. I installed Mongoose and connected my backend in my server.js file. 

After I defined my user schema, I then added a checkToken.js, database.js and ensureLoggedIn.js files.
![Screenshot 2024-05-24 at 11 59 08](https://github.com/sdg877/recipe_site_fe/assets/149600602/af79af6f-6aca-44b0-9976-b77111fab982)
![Screenshot 2024-05-24 at 11 56 53](https://github.com/sdg877/recipe_site_fe/assets/149600602/07a6515d-87f2-4ca6-b71e-a4df2bb478d1)



In the frontend, I created a utilities folder and send-request.js, users-api.js and users-service.js files.
send-request.js


users-api.js


Snippet of user-service.js file


I then created sign-up and login form components and created a login page and endpoints so that the user could toggle between the forms depending on whether they have an account setup already.I then redirected the user to the profile page once they had logged in or signed up.




Once the authorization was complete, I then moved on to setting up the API to source the recipes. I tested out a couple of recipe API’s before deciding the Spoonacular was the best one. I created an API key and saved it in my .env file on the frontend and created a useEffect hook.



Once I was able to view the recipes on my homepage, I created a RecipeView.jsx page which allows the users to view the recipe in detail. 



I noticed that recipes without images were still displaying ion my list which affected the styling and layout so I added a function that would only allow recipes with image to be displayed on my site.

I wanted logged in users to be able to save recipes to their profile using local storage.


I then pulled the data I wanted displayed onto the recipe card:


I then added these two functions as I noticed that there were formatting errors with the data.


I then used local storage so that users were able to save recipes to their profile once logged in. 



I also wanted users to be able to mark the recipes with whether they had tried and if they would try again, i created a dropdown menu for this.



Challenges
This was my first complicated site built without any help from instructors and using an external API. There were points when setting up authentication and using the APi that I struggled but I did a lot of online research and looking at old projects and was able to overcome any issues that I had. 

Wins
That i was able to build this site from scratch and deploy it without any outside help. I thoroughly enjoyed this project.

Key learnings
To be patient if sometyhing isn’t working and that everything can be resolved with proper research and practice.
