if (!localStorage.getItem("applicationList")) {
  localStorage.setItem("applicationList", JSON.stringify([]));
}

function saveApplication(event) {
  event.preventDefault();
  var result = validateFormData();
  if (!result)
    return false;
  let format = document.querySelector('input[name="format"]:checked').value;
  let name = document.getElementById("name").value;
  let surname = document.getElementById("surname").value;
  let email = document.getElementById("email").value;
  let teacher = document.getElementById("teacher").value;
  let date = document.getElementById("date").value;
  let time = document.getElementById("time").value;;
  let feedback = document.getElementById("feedback").value;
  let mailing = document.getElementById("mailing").checked;

  var applications = JSON.parse(localStorage.getItem("applicationList"));
  if (applications && applications.length > 0) {
    var isDuplicate = applications.some(function (application) {
      return application.name === name && application.date === date;
    });
    if (isDuplicate) {
      alert("You already have a lesson scheduled for this day under this name. Please choose another day or name.");
      return false;
    }
  }

  let newApplication = { format, name, surname, email, teacher, date, time, feedback, mailing };
  var applications = JSON.parse(localStorage.getItem("applicationList"));
  applications.push(newApplication);
  localStorage.setItem("applicationList", JSON.stringify(applications));
  window.location.href = "thanks.html";
}


function validateName() {
  var name = document.getElementById('name').value;
  if (!name.match(/^[A-Za-z]+$/)) {
    return false;
  }
  return true;
}

function validateSurname() {
  var surname = document.getElementById('surname').value;
  if (!surname.match(/^[A-Za-z]+$/)) {
    return false;
  }
  return true;
}

function validateTime() {
  var timeInput = document.getElementById('time');
  var selectedTime = timeInput.value;
  var minTime = '07:00';
  var maxTime = '21:00';

  if (selectedTime < minTime || selectedTime > maxTime) {
    return false;
  }
  return true;
}

function validateFormData() {
  if (!validateName()) {
    alert("Please, enter proper name");
    return false;
  }
  if (!validateSurname()) {
    alert("Please, enter proper surname");
    return false;
  }
  if (!validateTime()) {
    alert("Please, select the time in between: 7:00 - 21:00");
    return false;
  }
  return true;
}

document.addEventListener("DOMContentLoaded", function () {
  
  var lessonsContainer = document.getElementById("lessons-container");
  var applications = JSON.parse(localStorage.getItem("applicationList"));

  if (applications && applications.length > 0) {
    applications.forEach(function (application, index) {
      var lessonElement = document.createElement("div");
      lessonElement.classList.add("lesson");

      var nameElement = document.createElement("p");
      nameElement.textContent = "Student: " + application.name + " " + application.surname;
      lessonElement.appendChild(nameElement);

      var dateElement = document.createElement("p");
      dateElement.textContent = "Date: " + application.date;
      lessonElement.appendChild(dateElement);

      var timeElement = document.createElement("p");
      timeElement.textContent = "Time: " + application.time;
      lessonElement.appendChild(timeElement);

      var teacherElement = document.createElement("p");
      teacherElement.textContent = "Teacher: " + application.teacher;
      lessonElement.appendChild(teacherElement);

      var deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.classList.add("delete-button");
      deleteButton.addEventListener("click", function () {
        if (confirm("Are you sure that you want to delete this lesson?")) {
          deleteApplication(index);
          lessonsContainer.removeChild(lessonElement);
        }
      });
      lessonElement.appendChild(deleteButton);

      lessonsContainer.appendChild(lessonElement);
    });
  } else {
    var noLessonsMessage = document.createElement("p");
    noLessonsMessage.textContent = "You don't have any lessons.";
    lessonsContainer.appendChild(noLessonsMessage);
  }
});

function deleteApplication(index) {
  var applications = JSON.parse(localStorage.getItem("applicationList"));
  applications.splice(index, 1);
  localStorage.setItem("applicationList", JSON.stringify(applications));
}

const reviews = [
  {
    id: 1,
    name: 'Aurora Sterling',
    job: 'British teacher',
    img: 'css/images/teacher1.jpg',
    text: "My teaching journey began at Oxford University, where I learned to fuse tradition with innovation in English education. Let's embark on an exciting learning adventure together!",
  },
  {
    id: 2,
    name: 'Asher Fox',
    job: 'American teacher',
    img: 'css/images/teacher2.jpg',
    text: "From my studies at Cambridge University, I bring a dynamic approach to teaching English, blending time-honored techniques with modern strategies. Join me as we explore the wonders of language!",
  },
  {
    id: 3,
    name: 'Emberlyn Frost',
    job: 'British teacher',
    img: 'css/images/teacher3.jpg',
    text: "At Columbia University, I learned the art of teaching English with passion. My approach blends methods with modern strategies, ensuring every student finds their path to success. Let's embark on a journey of learning and growth together!",
  },
  {
    id: 4,
    name: 'Luna Whitaker',
    job: 'American teacher',
    img: 'css/images/teacher4.jpg',
    text: "Trained at Yale University, I developed a passion for teaching English that is both enriching and rewarding. Join me for an interactive and immersive learning experience!",
  },
  {
    id: 5,
    name: 'Jasper Blake',
    job: 'American teacher',
    img: 'css/images/teacher5.jpg',
    text: "At Harvard University, I honed my skills in teaching English, crafting engaging lessons that inspire learning. Let's journey together through the realms of language and discovery!",
  },
];

const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentItem = 0;
const item = reviews[currentItem];
showPerson(item);

function showPerson(person) {
  img.src = person.img;
  author.textContent = person.name;
  job.textContent = person.job;
  info.textContent = person.text;
}

nextBtn.addEventListener('click', function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(reviews[currentItem]);
});

prevBtn.addEventListener('click', function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(reviews[currentItem]);
});
