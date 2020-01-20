# Tech Challenge Winter Semester 19-20

# Overview
This is the technical documentation for the tech challenge project **secure medical image storage system** by **MediDonate** group. This repository hosts every subsystem of the project. The codebase is written in **Angular** (version 8.2.14). you can find the requirement modules in **requirement.txt**

# Project Structure
* **images:** Stores the example of medical images.
* **home:** Stores the code for home page bottom in website.
* **form**: Stores the code for Form page bottom in website.
* **image-gallery:** Stores the code for visualities of medical images
* **maps:** Stores the code for knowledge graph of available medical image data set.  It creates a server that allows third party companies to see available data to system.
* **contact:** Stores the code for contact bottom in website



# Running
* **Build Requirement Modules:** npm build
* **Start Server:** npm start
* **Server will be started in** http://localhost:4200/

Run make docker. If Golang cannot find dependencies, go to sphere folder and run go get.
Once every service starts, go to localhost:8080 and connect to db. Username is root, password is example. Import db.sql to the database.
Go to localhost:4000 to see user dashboard.
Go to localhost:5000 to see reinvent dashboard.

# Used technologies


#  Communication

This project uses MQTT for the communication between sockets and server. Sockets publish to the topic my-topic and server is subscribed to that topic. An MQTT broker is distributed with the docker-compose.yaml in this project. Docker handles networking itself, thus the hostname for the MQTT server is given as mqtt, where the mqtt broker is mapped to.

The raspberry Pi in the building may not be reachable by users if every house uses a private network. To fix this problem, the proposed solution is tunneling from raspberry pi to a public server. This approach still protect the data. It also make the dasboard reachable outside the house.
#  Database

The system uses MySQL database for data storage. A MySQL instance is distributed with the project.

Sphere uses the db called local. It has 6 tables.

ads: Stores ads data. Every ad has a type and usage information which is used to compare ads with power usage data.
measurements: Stores measurements sent by the sockets. Every socket has a unique id and the time that the measurement was collected.
notifs: Stores notifications. Notifications are simple texts that concern every inhabitant of the building.
promotions: Stores promotions created by ReInvent.
repairs: Stores repair requests from house owners to reinvent. Requests have a status field that shows their completion.
sockets: Stores microcontrolller data used by sockets. Every microcontroller has a unique id, a type and a status. The type is e.g. [Entertainment, Lighting, Cooking, Charging]
ReInvent uses the db called cloud. It has only 1 table and it' identical to ads. Every 24 hour sphere syncs it's local ads table with reinvents table to update visible ads.

To reach the database you can go to port 8080 on your deployment. An additional image called adminer is deployed by the system to allow GUI operations on the database.







