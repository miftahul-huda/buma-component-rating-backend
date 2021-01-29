*BUMA component rating backend*

This is the backend for BUMA component rating using GCP Auto ML vision model. It runs on Node JS Express and PostgreSQL as database, and Sequelize ORM tool to connect to PostgreSQL.

**Prerequisite**
Install Node JS and NPM.

**Download**
You can download using git:

    git clone https://github.com/miftahul-huda/buma-component-rating-backend.git

**Install**
Go to "component-rating-backend" folder. Run:

    npm install

**Configuration**
This uses port 8080 to connect and PostgreSQL. To configure the PostgreSQL connection, open with text editor the file "initialization.js".

Modify this codes:

    const  sequelize  =  new  Sequelize('maintenance-order',  '<dbusername>',  '<dbpassword>',  {
    host:  '<dbhost>',
    dialect:  'postgres'
    });

**Run Locally**
To run locally, just type in the console in the root folder of this application:

    node app.js

**Deploy in App Engine**
To deploy the application in app engine:

    gcloud app deploy

Once done, open the link that displayed in the output of the deploy command.

To look for the uploaded mo, add "/web/uploadedmolist" in the link url.




