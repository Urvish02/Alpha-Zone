![image](https://user-images.githubusercontent.com/73232841/231286946-721b7cbe-c354-4e1f-a338-1402b737f639.png)
![image](https://user-images.githubusercontent.com/73232841/231286979-cc9d26df-f64e-49bb-88ef-7ad69160f47e.png)


Setup
To get this repository, run the following command inside your git enabled terminal

$ https://github.com/Urvish02/Alpha-Zone.git
You will need django to be installed in you computer to run this app. Head over to https://www.djangoproject.com/download/ for the download guide

Once you have downloaded django, go to the cloned repo directory and run the following command

$ python manage.py makemigrations
This will create all the migrations file (database migrations) required to run this App.

Now, to apply this migrations run the following command

$ python manage.py migrate
One last step and then our app will be live. We need to create an admin user to run this App. On the terminal, type the following command and provide username, password and email for the admin user

$ python manage.py createsuperuser
That was pretty simple, right? Now let's make the App live. We just need to start the server now and then we can start using our simple. Start the server by following command

$ python manage.py runserver
Once the server is hosted, head over to http://127.0.0.1:8000/ for the App.

Cheers and Happy Coding :)
