//--------------------------------excercises--------------------------------------------------------

fetch('Excercises1.json')
  .then(response => response.json())
  .then(data => {
    let excerciseContainers = {
    Easy: document.getElementById('Easy'),    
    };
    

    //loop through each excersise
let excerciseTypes = Object.keys(data.excercises);

excerciseTypes.forEach(excerciseType => {
      //map through the excersises array in the json and create html for each excersise
      data.excercises[excerciseType].forEach(excercise => {
        let excerciseElement = document.createElement('div');
        excerciseElement.setAttribute('data-name', excercise.name);
        excerciseElement.innerHTML = `

        <div class="box" data-name="${excercise.name}">
          
          <h3 class="tekst-excercise1">${excercise.title}</h3>

          <p class="specs">
          
          <strong>Name:</strong> ${excercise.name}<br>
          <br>
          <strong>description:</strong> ${excercise.description}<br>

          </p>

          <p class="excersise1"> ${excercise.description} </p>

        <div>
        `;
        excerciseContainers[excerciseType].appendChild(excerciseElement);
        setupEventListener(excerciseElement);
      });
    });
  })
.catch(error => {
    console.error('Error fetching data:', error);
});

function setupEventListener(boxObject) {
    let extraTekst = boxObject.querySelector('.excersise1');
    let box = boxObject.querySelector('.box');
  
    extraTekst.style.display = "none";
  
  }

//--------------------------------excercises--------------------------------------------------------

fetch('Excercises2.json')
  .then(response => response.json())
  .then(data => {
    let excerciseContainers = {
    IM: document.getElementById('IM'),    
    };
    

    //loop through each excersise
let excerciseTypes = Object.keys(data.excercises);

excerciseTypes.forEach(excerciseType => {
      //map through the excersises array in the json and create html for each excersise
      data.excercises[excerciseType].forEach(excercise => {
        let excerciseElement = document.createElement('div');
        excerciseElement.setAttribute('data-name', excercise.name);
        excerciseElement.innerHTML = `

        <div class="box" data-name="${excercise.name}">
          
          <h3 class="tekst-excercise1">${excercise.title}</h3>

          <p class="specs">
          
          <strong>Name:</strong> ${excercise.name}<br>
          <br>
          <strong>description:</strong> ${excercise.description}<br>

          </p>

          <p class="excersise1"> ${excercise.description} </p>

        <div>
        `;
        excerciseContainers[excerciseType].appendChild(excerciseElement);
        setupEventListener(excerciseElement);
      });
    });
  })
.catch(error => {
    console.error('Error fetching data:', error);
});

function setupEventListener(boxObject) {
    let extraTekst = boxObject.querySelector('.excersise1');
    let box = boxObject.querySelector('.box');
  
    extraTekst.style.display = "none";
  
  }

//--------------------------------excercises--------------------------------------------------------

fetch('Excercises3.json')
  .then(response => response.json())
  .then(data => {
    let excerciseContainers = {
    Hard: document.getElementById('Hard'),    
    };
    

    //loop through each excersise
let excerciseTypes = Object.keys(data.excercises);

excerciseTypes.forEach(excerciseType => {
      //map through the excersises array in the json and create html for each excersise
      data.excercises[excerciseType].forEach(excercise => {
        let excerciseElement = document.createElement('div');
        excerciseElement.setAttribute('data-name', excercise.name);
        excerciseElement.innerHTML = `

        <div class="box" data-name="${excercise.name}">
          
          <h3 class="tekst-excercise1">${excercise.title}</h3>

          <p class="specs">
          
          <strong>Name:</strong> ${excercise.name}<br>
          <br>
          <strong>description:</strong> ${excercise.description}<br>

          </p>

          <p class="excersise1"> ${excercise.description} </p>

        <div>
        `;
        excerciseContainers[excerciseType].appendChild(excerciseElement);
        setupEventListener(excerciseElement);
      });
    });
  })
.catch(error => {
    console.error('Error fetching data:', error);
});

function setupEventListener(boxObject) {
    let extraTekst = boxObject.querySelector('.excersise1');
    let box = boxObject.querySelector('.box');
  
    extraTekst.style.display = "none";
  
  }


  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");
  
  hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
  })
  
  document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
  }))
  
  const switcher = document.querySelector('.btn');
  
  switcher.addEventListener('click', function() {
      document.body.classList.toggle('dark-theme');
      document.body.classList.toggle('light-theme');
  
      const className = document.body.className;
      if(className == "dark-theme") {
          this.textContent = "dark";
      } else{
          this.textContent = "light";
      }
      
      console.log('current class name: ' + className);
  })


