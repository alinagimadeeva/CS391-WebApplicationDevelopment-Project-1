# English Language Tutoring Services Project

This project aims to provide a platform for individuals seeking to improve their English language skills. Whether to the beginner or the one aiming to enhance proficiency, this platform connects them with experienced teachers who are dedicated to supporting language learning journey.

The goal of this project is to create a user-friendly and accessible platform. Users can easily navigate the platform, apply for a suitable class and see the lessons that they've been enrolled in.

## Navigation

- [General information and Intructions](#general-Information-and-intructions)
- [Page descriptions](#page-descriptions)
  - [Home](#home)
  - [About](#about)
  - [Sign up for a lesson](#sign-up-for-a-lesson)
  - [My lessons](#my-lessons)
  - [Thank you](#thank-you)
- [Usage scenarios and Flow diagram](#usage-scenarios-and-flow-diagram)

## General Information and Intructions
 
**index.html** is the entry point of the application. Every page is responsive page, bootstrap grid system was used for responsive design. All pages use the same header and the footer.

**Data management and exceptional situations :**\
Application contains 3 data activities (save, show and delete lesson). Data is saved on the browser using WebStorage API. In case one student tries to enroll more than once in a day, a notification will be sent that they need to enroll in another day class. In case deleting the lesson, a confirmation notification will be displayed.

**Menu items are:**

* **Home** 
* **About** 
* **Sign up for a leson** 
* **My lessons** 

## Page descriptions

### Home
In the Home page users can explore the advantages of studying with the platform and read student reviews. Additionally, there are buttons to learn more about the school and teachers (leads to the About page), as well as to sign up for a lesson (leads to the Sign up for a leson page).

### About
The About page displays information about different teachers along with their images, names and descriptions. It allows users to navigate through the list of teachers using previous and next buttons and learn more about their expertise.

### Sign up for a lesson
On the Sign up for a Lesson page, users can register for a lesson by filling out a form. The form includes fields for class format, name, surname, email, date, time, comment on the lesson and the agreement to receive mailing updates. After submitting the application, users are redirected to the Thank you page.

* There were used appropriate HTML input types (ex.: email, textarea), built-in validation attributes (ex.: required) and 3 custom validation functions (checking of 'name' and 'surname' input field contains only alphabetic characters; checking the time selected in the 'time' input field, ensuring it's between 07:00 and 21:00).

### Thank you
In the Thank youpage there will be a link to where enrolled lessons are displayed (My lessons page).

### My lessons
The My Lessons page displays enrolled lessons and allows users to manage them. Users can view upcoming lessons and delete them if needed.

## Usage scenarios and flow diagram
Click for [page flow diagram and scenarios](diagram-scenarios.md).