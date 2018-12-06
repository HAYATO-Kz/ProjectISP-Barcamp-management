# Barcamp-Management

Status of Travis and Coverage: [![Build Status](https://travis-ci.org/JP-SKE15/ProjectISP-Barcamp-management.svg?branch=master)](https://travis-ci.org/JP-SKE15/ProjectISP-Barcamp-management)


Barcamp management is a web application for managing Barcamp event, which makes managing event more convenient than manually doing it yourselfs is the main focus for this application.

This software is developed as a part of 01219245	Individual Software Development Process at Kasetsart University

# Website

Link to webpage https://barcamp-management.herokuapp.com/

# Installation
Install Python and NodeJS<br>
* **Python** (version 3.6.6 or newer) <br>
The official download site: [download](https://www.python.org/downloads/)
    <br>
* **NodeJS** (version 10.12.0)<br>
The official download site: [download](https://nodejs.org/en/)

# How to run
1. Open terminal and clone the project <br>
`git clone https://github.com/JP-SKE15/ProjectISP-Barcamp-management.git`
2. Install all required software in requirements.txt <br>
    `pip install -r requirements.txt`
3. Install node_modules <br>
    `npm install`
4. Create any necessary database tables according to the database settings <br>
    `python manage.py migrate`
5. Load initialize database <br>
    `python manage.py loaddata backend`
6. Create admin's user <br>
    `python manage.py createsuperuser`
7. Input admin id, email, and password
8. Run locally <br>
    `python manage.py runserver 3000`
9. Head over http://localhost:3000/

# How organizer can select room for each topic

### Deployed App
  1. go to https://barcamp-management.herokuapp.com/admin/
  2. input id : admin_barcamp , password : barcamp123

### Run locally
   1. go to http://localhost:3000/admin/
   2. input admin's id and password that create by <br>
    `python manage.py createsuperuser`

then follow the example

![click](/IterationPlan-and-Design/Django-admin/Click.png)
  
![topic](/IterationPlan-and-Design/Django-admin/topic.png)
  
![room](/IterationPlan-and-Design/Django-admin/room.png)

# Team member

| Name        | Github  | Role |
| ------------- |:-----:| -----: |
| Hayato Kawai       | [JP-SKE15](https://github.com/JP-SKE15) | Team leader, front-end developer |
| Thanaphon Keawjam     |   [ThanaphonKeawjam](https://github.com/ThanaphonKeawjam) | Back-end developer |
| Pittayoot Ruangrungratanakul |    [khaopanbit](https://github.com/khaopanbit) |  Back-end developer |


# Process component

- [Iteration plan](https://github.com/JP-SKE15/ProjectISP-Barcamp-management/wiki/Iteration-plan)
- [Issue tracker](https://github.com/JP-SKE15/ProjectISP-Barcamp-management/issues)
- Task board : [![Waffle.io - Columns and their card count](https://badge.waffle.io/JP-SKE15/ProjectISP-Barcamp-management.svg?columns=all)](https://waffle.io/JP-SKE15/ProjectISP-Barcamp-management)
- [Web design](https://github.com/JP-SKE15/ProjectISP-Barcamp-management/blob/master/IterationPlan-and-Design/design.md)
