document.addEventListener("DOMContentLoaded", () => {
    loadComponents();
  });
  
  function loadComponents() {
    loadComponent("navbar", "navbar.html", "navbar.css");
    loadComponent("aboutus", "aboutus.html", "aboutus.css");
    loadComponent("counter-section", "counter.html", "counter.css");
    loadComponent("initiatives", "initiatives.html", "initiatives.css");
    loadComponent("sponsors", "sponsors.html", "sponsors.css");
    loadComponent("testimonial", "testimonial.html", "testimonial.css");
    loadComponent("footer", "footer.html", "footer.css");
  }
  
  function loadComponent(id, file, cssFile) {
    fetch(file)
      .then((response) => response.text())
      .then((data) => {
        document.getElementById(id).innerHTML = data;
        if (cssFile) {
          loadCSS(cssFile);
        }
  
        // Check if the loaded component is the testimonial and initialize the slider
        if (id === "testimonial") {
          initializeTestimonialSlider();
        }
      })
      .catch((error) => console.error("Error loading component:", error));
  }
  
  function loadCSS(cssFile) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = cssFile;
    document.head.appendChild(link);
  }
  
function initializeTestimonialSlider() {
    // Ensure jQuery is loaded
    if (window.jQuery) {
        $(document).ready(function () {
            $.getJSON('speakers.json', function (data) {
                var slidesHtml = '';
                data.speakers.forEach(function (speaker) {
                    slidesHtml += `
                        <div class="slide">
                            <div class="sp-image">
                                <img src="${speaker.image}">
                                <div class="sp-card-content">
                                    <h1 class="sp-qoute">‘‘</h1>
                                    <h2 class="sp-name">${speaker.name}</h2>
                                    <h4 style="color:white">${speaker.role}</h4>
                                    <p class="sp-description">${speaker.description}</p>
                                </div>
                            </div>
                        </div>`;
                });
                $('#slider').html(slidesHtml);

                // Initialize the slider
                $('#slider').slick({
                    autoplay: true,
                    dots: true,
                    infinite: true,
                    pauseOnHover: false,
                    centerMode: true,
                    centerPadding: "18%"
                });
            });
        });
    } else {
        console.error('jQuery is not loaded.');
    }
}
  document.addEventListener('DOMContentLoaded', function() {
    // Popup Form 1
    const openFormBtn1 = document.getElementById('openFormBtn1');
    const popupForm1 = document.getElementById('popupForm1');
    const closeBtn1 = popupForm1.querySelector('.closeBtn');
  
    openFormBtn1.addEventListener('click', function() {
      popupForm1.style.display = 'block';
    });
  
    closeBtn1.addEventListener('click', function() {
      popupForm1.style.display = 'none';
    });
  
    // Popup Form 2
    const openFormBtn2 = document.getElementById('openFormBtn2');
    const popupForm2 = document.getElementById('popupForm2');
    const closeBtn2 = popupForm2.querySelector('.closeBtn');
  
    openFormBtn2.addEventListener('click', function() {
      popupForm2.style.display = 'block';
    });
  
    closeBtn2.addEventListener('click', function() {
      popupForm2.style.display = 'none';
    });
  
    // Popup Form 3
    const openFormBtn3 = document.getElementById('openFormBtn3');
    const popupForm3 = document.getElementById('popupForm3');
    const closeBtn3 = popupForm3.querySelector('.closeBtn');
  
    openFormBtn3.addEventListener('click', function() {
      popupForm3.style.display = 'block';
    });
  
    closeBtn3.addEventListener('click', function() {
      popupForm3.style.display = 'none';
    });
  });
  
  document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('team-container');

    fetch('team.json')
        .then(response => response.json())
        .then(data => {
            data.forEach(member => {
                const memberDiv = document.createElement('div');
                memberDiv.classList.add('team-member');

                const img = document.createElement('img');
                img.src = member.image;
                img.alt = `${member.name}'s photo`;

                const name = document.createElement('h2');
                name.textContent = member.name;

                const position = document.createElement('p');
                position.textContent = member.position;

                const email = document.createElement('p');
                email.textContent = member.email;

                memberDiv.appendChild(img);
                memberDiv.appendChild(name);
                memberDiv.appendChild(position);
                memberDiv.appendChild(email);

                container.appendChild(memberDiv);
            });
        })
        .catch(error => console.error('Error loading team data:', error));
});
