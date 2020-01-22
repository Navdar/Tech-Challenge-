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
* In order to start database, you should have Neo4j Desktop version. The database will start in **bolt://localhost:7687**


# Communication
The system uses Neo4j database for data storage. 

# Usage

## Form Button
In the form button, you have to fill the form in order to access to data. You should fill name, surname, project description and type of fund. In the last part, you should choose what kind of disses data set would you like to access. After that you should click submit button then you can see the filled form. However, if you want to change something in form, then you click edit button and go back form and after that you can submit the form again. After a while, you will receive a confirmation e-mail, then you can move on to maps button.

## Map Botton
In the map botton, you can see the entire data sets for every country. Whole medical images will be stored as a knowledge graph. This will make to access to data set easier and also more secure. You can zoom it see too much detail of it. By clicking name, you see the name of country and available medical image domain for that country. You can merge two or more country in order to get whole data set belong to that countries. When you finish your merging, then you can move the image bottom in order to see whole images.

## Images Botton
In the images botton, you can see whole images for the specific country. You can go forward see next image. You can see name of diseases such as malignant melanoma. And you can go backward see last image. After deciding amount images, would you like download then you download them as a zip file in secure way.






