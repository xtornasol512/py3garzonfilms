# Django Web Aplication for GarzonFilms Project
===============================================

### Tecnologies

* Django
* Python
* foundation
* Heroku app
* git


### Set Enviroment Vars

Load the following envs with the `export` shell command

- DJANGO_SECRET_KEY
- DEBUG_STATE
- PRODUCTION
- DATABASE_URL


### Install and run

1. Install a virtualenv with python3
`$ python3 -m venv .dj3 `
2. Run the environment
`$ source .dj3/bin/activate`
3. Install requirements.txt
`$ pip install -r requirements.txt`
4. Stand up the development server
`$ python garzonfilms/manage.py runserver`
Enjoy it

### Migrate and Make migrations
* if you wanna run the models like are, just run migrate
`$ python garzonfilms/manage.py migrate`
* if you wanna make changes to models just run 
`$ python garzonfilms/manage.py makemigrations` 
`$ python garzonfilms/manage.py migrate`

### If you wanna load fixtures
* A user, groups and some media with examples
`$ python garzonfilms/manage.py loaddata ./garzonfilms/fixturex/initial_data.json`


