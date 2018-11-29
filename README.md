# Barcamp-Management

[![Build Status](https://travis-ci.org/JP-SKE15/ProjectISP-Barcamp-management.svg?branch=master)](https://travis-ci.org/JP-SKE15/ProjectISP-Barcamp-management)

Barcamp management is a web application for managing Barcamp event, which makes managing event more convenient than manually doing it yourselfs is the main focus for this application.

This software is developed as a part of 01219245	Individual Software Development Process at Kasetsart University

# Website

Link to webpage https://barcamp-management.herokuapp.com/

# Requirements

* Python: [download](https://www.python.org/downloads/) (Version requirement: Python-3.7.0 and up)
* NodeJS: [download](https://nodejs.org/en/) (Version requirement: Nodejs-10.12.0)
* Django: `pip install django` or [click](https://www.djangoproject.com/download/) (Version requirement:Django-2.1.2)
* Rest Framework: `pip install djangorestframework` or [click](https://www.django-rest-framework.org/)

# How to run

1. Clone this github repo
2. Go to the repo then install node_modules `npm install`
3. Create any necessary database tables according to the database settings `python manage.py migrate`
4. Load initialize database `python manage.py loaddata backend`
5. Run locally `python manage.py runserver 3000`
6. Head over http://localhost:3000/


# Team member

| Name        | Github  | Role |
| ------------- |:-----:| -----: |
| Hayato Kawai       | [JP-SKE15](https://github.com/JP-SKE15) | Team leader, front-end developer |
| Thanaphon Keawjam     |   [ThanaphonKeawjam](https://github.com/ThanaphonKeawjam) | Back-end developer |
| Pittayoot Ruangrungratanakul |    [khaopanbit](https://github.com/khaopanbit) |  Back-end developer |


# Process component

- [Iteration plan](https://github.com/JP-SKE15/ProjectISP-Barcamp-management/wiki/Iteration-plan)
- [Issue tracker](https://github.com/JP-SKE15/ProjectISP-Barcamp-management/issues)
- Task board : [[![Waffle.io - Columns and their card count](https://badge.waffle.io/JP-SKE15/ProjectISP-Barcamp-management.svg?columns=all)](https://waffle.io/JP-SKE15/ProjectISP-Barcamp-management))
- [Web design](https://github.com/JP-SKE15/ProjectISP-Barcamp-management/blob/master/IterationPlan-and-Design/design.md)
