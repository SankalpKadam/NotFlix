# NotFlix
![Home Screen](https://github.com/SankalpKadam/notflix/blob/master/public/images/GUI_1.png)
### Overview
The front-end project is built using Next.js and TypeScript, aiming to replicate the user interface of the original Netflix website. This clone provides users with a fully responsive UI, closely resembling the design and functionality of Netflix. Leveraging Next.js for seamless navigation and TypeScript for enhanced code structure, the project delivers an immersive experience, allowing users to explore and interact with the content in a manner reminiscent of the popular streaming platform.

### Features
1. **User Account Creation :**

Description: Users have the ability to create an account within the application.
Implementation: MongoDB is employed to maintain a list of users. Each user account is securely stored in the database, allowing for seamless account creation and management.

2. **User Login with Multiple Methods :**

Description: Users can log in using different methods for convenience and flexibility.
Implementation:
Utilized NextAuth for fetching and comparing user details, providing a straightforward authentication process.
Integrated Google Authentication Services to offer users a seamless and secure Google Sign-In experience.

3. **Netflix-style Banner on Home Screen :**

Description: The application features a dynamic banner on the home screen, akin to the Netflix interface, playing a captivating movie to enhance the user experience.
Implementation: Leveraged design principles to create an appealing and responsive banner that showcases engaging movie content.

4. **Movie Data Fetching from TMDB API :**

Description: The application fetches movie data from the third-party TMDB (The Movie Database) API.
Implementation: Utilized API calls to TMDB to dynamically retrieve and display up-to-date information about movies, ensuring a rich and diverse selection for users.

5. **Route Protection :**

Description: Certain routes within the application are protected and inaccessible to users who have not signed in.
Implementation: Implemented robust route protection mechanisms to ensure that only authenticated users can access specific sections of the application, enhancing security and privacy.

6. **User Session Management with JWT and Cookies :**

Description: The application creates and manages user sessions, enhancing user experience and security.
Implementation: Implemented JWT (JSON Web Tokens) and cookies to manage user sessions, allowing users to stay logged in for a specified duration. This enhances the user experience by reducing the need for frequent logins while maintaining security through token-based authentication.
### Getting Started
1. Clone the repository
```
git clone https://github.com/sankalpkadam/notflix.git 
```
2. Install dependencies
```
cd notflix
npm install
```
3. Run the application
```
npx next dev
```
### Technologies Used

+ Fully responsive and real time updating frontend is developed using the client and server side rendering capacities of **NextJS**. Utilized **TailwindCSS** for styling all the components.
+ Alongside, **Typescript** is used to maintain code structure for the files including but not limited to _custom api endpoints_, _custom hooks_, _fetching data from servers_ , _client components_ etc.
+ Futhermore, I integrated **MongoDB** to maintain list of users and their favorite movies. 
+ Incorporated, third party apis such as the **TMDB** to get list of movies and shows of various categories which are then rendered onto the UI.
+ Implemented, route protection using **NEXT AUTH** which prevents routes from being accessible if the user is not signed in.
+ Used **axios** to make requests and fetch data from the servers.

### Acknowledgements
_Antonio(youtuber)_