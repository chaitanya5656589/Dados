console.log('Welcome to Gandaki Province Information Portal');

// Add smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('a[href^="#"]');
  
  for (const link of links) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  }
  
  // Add active class to dropdown toggle when clicked
  const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
  
  dropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', function() {
      const dropdown = this.closest('.dropdown');
      const dropdownMenu = dropdown.querySelector('.dropdown-menu');
      
      if (dropdownMenu.style.display === 'block') {
        dropdownMenu.style.display = 'none';
      } else {
        dropdownMenu.style.display = 'block';
      }
    });
  });
  
  // Close dropdown when clicking outside
  document.addEventListener('click', function(event) {
    const dropdowns = document.querySelectorAll('.dropdown');
    
    dropdowns.forEach(dropdown => {
      if (!dropdown.contains(event.target)) {
        const dropdownMenu = dropdown.querySelector('.dropdown-menu');
        if (dropdownMenu) {
          dropdownMenu.style.display = 'none';
        }
      }
    });
  });

  // District popup functionality
  setupDistrictPopups();
  
  // Municipality popup functionality
  setupMunicipalityPopups();
});

// District data
const districtData = {
  // Major Districts
  'Kaski': {
    population: '492,098',
    malePopulation: '236,385',
    femalePopulation: '255,713',
    smartphoneUsers: '310,000',
    area: '2,017 sq km',
    headquarters: 'Pokhara',
    description: 'Kaski is home to Pokhara, the provincial capital and a major tourist destination. It is the economic and administrative hub of Gandaki Province with beautiful lakes and mountain views.'
  },
  'Gorkha': {
    population: '271,061',
    malePopulation: '129,000',
    femalePopulation: '142,061',
    smartphoneUsers: '145,000',
    area: '3,610 sq km',
    headquarters: 'Gorkha',
    description: 'Historically significant district, known for being the origin of the Shah dynasty that unified Nepal. It was the epicenter of the 2015 earthquake.'
  },
  'Tanahun': {
    population: '323,288',
    malePopulation: '152,000',
    femalePopulation: '171,288',
    smartphoneUsers: '180,000',
    area: '1,546 sq km',
    headquarters: 'Damauli',
    description: 'A major district with significant agricultural production and the Seti River hydropower projects.'
  },
  'Syangja': {
    population: '289,148',
    malePopulation: '135,000',
    femalePopulation: '154,148',
    smartphoneUsers: '165,000',
    area: '1,164 sq km',
    headquarters: 'Putalibazar',
    description: 'Known for its agricultural production and as a major supplier of vegetables to urban centers.'
  },
  'Baglung': {
    population: '268,613',
    malePopulation: '125,000',
    femalePopulation: '143,613',
    smartphoneUsers: '150,000',
    area: '1,784 sq km',
    headquarters: 'Baglung',
    description: 'A major district with rich cultural heritage and developing infrastructure.'
  },
  
  // Minor Districts
  'Manang': {
    population: '5,618',
    malePopulation: '2,970',
    femalePopulation: '2,648',
    smartphoneUsers: '2,800',
    area: '2,246 sq km',
    headquarters: 'Chame',
    description: 'A high-altitude district in the trans-Himalayan region, known for its unique culture and trekking routes. It has one of the lowest population densities in Nepal.'
  },
  'Mustang': {
    population: '13,452',
    malePopulation: '6,900',
    femalePopulation: '6,552',
    smartphoneUsers: '7,500',
    area: '3,573 sq km',
    headquarters: 'Jomsom',
    description: 'Famous for its ancient kingdom of Lo and desert-like landscape in the rain shadow of the Himalayas. It borders Tibet and has a unique cultural heritage.'
  },
  'Myagdi': {
    population: '113,641',
    malePopulation: '54,000',
    femalePopulation: '59,641',
    smartphoneUsers: '65,000',
    area: '2,297 sq km',
    headquarters: 'Beni',
    description: 'Known for its diverse landscapes and as the gateway to the Dhaulagiri mountain range. It has significant potential for hydropower development.'
  },
  'Lamjung': {
    population: '167,724',
    malePopulation: '79,000',
    femalePopulation: '88,724',
    smartphoneUsers: '95,000',
    area: '1,692 sq km',
    headquarters: 'Besishahar',
    description: 'A district with rich biodiversity and the starting point of the Annapurna Circuit trek. It has diverse ethnic communities and cultural traditions.'
  },
  'Parbat': {
    population: '146,590',
    malePopulation: '69,000',
    femalePopulation: '77,590',
    smartphoneUsers: '85,000',
    area: '494 sq km',
    headquarters: 'Kushma',
    description: 'A small but culturally rich district with significant religious sites. It has the highest population density among the hill districts of Gandaki Province.'
  },
  'Nawalpur': {
    population: '311,604',
    malePopulation: '149,000',
    femalePopulation: '162,604',
    smartphoneUsers: '175,000',
    area: '1,043 sq km',
    headquarters: 'Kawasoti',
    description: 'The newest district in Gandaki Province, formed after the administrative restructuring of Nepal. It has a diverse geography ranging from plains to hills.'
  }
};

// Municipality data
const municipalityData = {
  // Urban Municipalities
  'Pokhara Metropolitan City': {
    population: '402,995',
    malePopulation: '193,438',
    femalePopulation: '209,557',
    smartphoneUsers: '285,000',
    area: '464.24 sq km',
    district: 'Kaski',
    description: 'The largest city and provincial capital of Gandaki Province, known for its stunning lakes and mountain views. It is a major tourist destination and economic hub.'
  },
  'Baglung Municipality': {
    population: '57,823',
    malePopulation: '27,755',
    femalePopulation: '30,068',
    smartphoneUsers: '42,000',
    area: '98.01 sq km',
    district: 'Baglung',
    description: 'The administrative center of Baglung district with growing urban infrastructure and commercial activities.'
  },
  'Besishahar Municipality': {
    population: '36,510',
    malePopulation: '17,525',
    femalePopulation: '18,985',
    smartphoneUsers: '25,000',
    area: '69.63 sq km',
    district: 'Lamjung',
    description: 'The headquarters of Lamjung district and a gateway to the Annapurna Circuit trek.'
  },
  'Gorkha Municipality': {
    population: '49,272',
    malePopulation: '23,651',
    femalePopulation: '25,621',
    smartphoneUsers: '32,000',
    area: '83.45 sq km',
    district: 'Gorkha',
    description: 'The main urban center of Gorkha district with historical significance as the birthplace of modern Nepal.'
  },
  'Kawasoti Municipality': {
    population: '62,354',
    malePopulation: '29,930',
    femalePopulation: '32,424',
    smartphoneUsers: '45,000',
    area: '101.73 sq km',
    district: 'Nawalpur',
    description: 'A growing urban center in Nawalpur district with good transportation links to major cities.'
  },
  'Kushma Municipality': {
    population: '31,259',
    malePopulation: '15,005',
    femalePopulation: '16,254',
    smartphoneUsers: '22,000',
    area: '53.18 sq km',
    district: 'Parbat',
    description: 'The district headquarters of Parbat, known for its suspension bridge and developing urban infrastructure.'
  },
  'Putalibazar Municipality': {
    population: '43,982',
    malePopulation: '21,111',
    femalePopulation: '22,871',
    smartphoneUsers: '30,000',
    area: '74.52 sq km',
    district: 'Syangja',
    description: 'The administrative center of Syangja district with a focus on education and commercial activities.'
  },
  'Vyas Municipality': {
    population: '74,198',
    malePopulation: '35,615',
    femalePopulation: '38,583',
    smartphoneUsers: '52,000',
    area: '105.92 sq km',
    district: 'Tanahun',
    description: 'A major municipality in Tanahun district with significant urban development and educational institutions.'
  },
  'Waling Municipality': {
    population: '47,563',
    malePopulation: '22,830',
    femalePopulation: '24,733',
    smartphoneUsers: '33,000',
    area: '80.24 sq km',
    district: 'Syangja',
    description: 'An important urban center in Syangja district known for its agricultural market and growing commercial sector.'
  },
  
  // Rural Municipalities
  'Annapurna Rural Municipality': {
    population: '18,694',
    malePopulation: '8,972',
    femalePopulation: '9,722',
    smartphoneUsers: '9,500',
    area: '417.7 sq km',
    district: 'Kaski',
    description: 'A rural municipality in Kaski district with stunning mountain views and trekking routes.'
  },
  'Machhapuchhre Rural Municipality': {
    population: '21,775',
    malePopulation: '10,452',
    femalePopulation: '11,323',
    smartphoneUsers: '11,000',
    area: '544.58 sq km',
    district: 'Kaski',
    description: 'Named after the famous Machhapuchhre (Fishtail) mountain, this rural municipality has significant tourism potential.'
  },
  'Madi Rural Municipality': {
    population: '17,458',
    malePopulation: '8,380',
    femalePopulation: '9,078',
    smartphoneUsers: '8,700',
    area: '394.76 sq km',
    district: 'Kaski',
    description: 'A rural municipality in southern Kaski with agricultural focus and developing infrastructure.'
  },
  'Rupa Rural Municipality': {
    population: '15,284',
    malePopulation: '7,336',
    femalePopulation: '7,948',
    smartphoneUsers: '7,600',
    area: '94.7 sq km',
    district: 'Kaski',
    description: 'Named after Lake Rupa, this rural municipality has potential for eco-tourism and agricultural development.'
  },
  'Ajirkot Rural Municipality': {
    population: '14,568',
    malePopulation: '6,992',
    femalePopulation: '7,576',
    smartphoneUsers: '6,800',
    area: '184.7 sq km',
    district: 'Gorkha',
    description: 'A rural municipality in Gorkha district with challenging terrain and developing infrastructure.'
  },
  'Dharche Rural Municipality': {
    population: '16,372',
    malePopulation: '7,858',
    femalePopulation: '8,514',
    smartphoneUsers: '7,200',
    area: '664.35 sq km',
    district: 'Gorkha',
    description: 'Located in northern Gorkha, this rural municipality has significant tourism potential due to its proximity to trekking routes.'
  },
  'Bhimsen Rural Municipality': {
    population: '19,854',
    malePopulation: '9,530',
    femalePopulation: '10,324',
    smartphoneUsers: '9,100',
    area: '274.62 sq km',
    district: 'Gorkha',
    description: 'Named after the legendary Bhimsen, this rural municipality focuses on agricultural development and infrastructure.'
  },
  'Nason Rural Municipality': {
    population: '1,456',
    malePopulation: '699',
    femalePopulation: '757',
    smartphoneUsers: '650',
    area: '661.11 sq km',
    district: 'Manang',
    description: 'A sparsely populated rural municipality in Manang with unique high-altitude culture and traditions.'
  },
  'Manang Ngisyang Rural Municipality': {
    population: '1,645',
    malePopulation: '789',
    femalePopulation: '856',
    smartphoneUsers: '720',
    area: '571.48 sq km',
    district: 'Manang',
    description: 'Located in the Annapurna Conservation Area, this rural municipality has significant tourism potential.'
  },
  'Lo-Ghekar Damodarkunda Rural Municipality': {
    population: '3,785',
    malePopulation: '1,817',
    femalePopulation: '1,968',
    smartphoneUsers: '1,900',
    area: '1,632.72 sq km',
    district: 'Mustang',
    description: 'The largest rural municipality in Mustang with ancient cultural heritage and unique landscape.'
  },
  'Gharapjhong Rural Municipality': {
    population: '2,945',
    malePopulation: '1,414',
    femalePopulation: '1,531',
    smartphoneUsers: '1,500',
    area: '1,086.24 sq km',
    district: 'Mustang',
    description: 'A rural municipality in Mustang with significant cultural heritage and developing tourism infrastructure.'
  }
};

function setupDistrictPopups() {
  // Create modal elements
  const modalOverlay = document.createElement('div');
  modalOverlay.className = 'modal-overlay';
  
  const modalContent = document.createElement('div');
  modalContent.className = 'modal-content';
  
  modalContent.innerHTML = `
    <span class="modal-close"><i class="fas fa-times"></i></span>
    <div class="modal-header">
      <h3>District Information</h3>
    </div>
    <div class="modal-body">
      <p class="district-description"></p>
      <div class="district-stats">
        <!-- Stats will be populated dynamically -->
      </div>
    </div>
  `;
  
  modalOverlay.appendChild(modalContent);
  document.body.appendChild(modalOverlay);
  
  // Close modal when clicking on close button or outside the modal
  const closeBtn = modalContent.querySelector('.modal-close');
  closeBtn.addEventListener('click', () => {
    modalOverlay.classList.remove('active');
  });
  
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
      modalOverlay.classList.remove('active');
    }
  });
  
  // Add click event to district cards
  const districtCards = document.querySelectorAll('.district-card');
  
  districtCards.forEach(card => {
    card.addEventListener('click', () => {
      const districtName = card.querySelector('h3').textContent;
      const district = districtData[districtName];
      
      if (district) {
        // Populate modal with district data
        const modalHeader = modalContent.querySelector('.modal-header h3');
        modalHeader.textContent = districtName + ' District';
        
        const districtDescription = modalContent.querySelector('.district-description');
        districtDescription.textContent = district.description;
        
        const districtStats = modalContent.querySelector('.district-stats');
        districtStats.innerHTML = `
          <div class="district-stat-card">
            <div class="stat-icon"><i class="fas fa-users"></i></div>
            <h4>Total Population</h4>
            <div class="stat-value">${district.population}</div>
          </div>
          <div class="district-stat-card">
            <div class="stat-icon"><i class="fas fa-male"></i></div>
            <h4>Male Population</h4>
            <div class="stat-value">${district.malePopulation}</div>
          </div>
          <div class="district-stat-card">
            <div class="stat-icon"><i class="fas fa-female"></i></div>
            <h4>Female Population</h4>
            <div class="stat-value">${district.femalePopulation}</div>
          </div>
          <div class="district-stat-card">
            <div class="stat-icon"><i class="fas fa-mobile-alt"></i></div>
            <h4>Smartphone Users</h4>
            <div class="stat-value">${district.smartphoneUsers}</div>
          </div>
          <div class="district-stat-card">
            <div class="stat-icon"><i class="fas fa-map-marked-alt"></i></div>
            <h4>Area</h4>
            <div class="stat-value">${district.area}</div>
          </div>
          <div class="district-stat-card">
            <div class="stat-icon"><i class="fas fa-city"></i></div>
            <h4>Headquarters</h4>
            <div class="stat-value">${district.headquarters}</div>
          </div>
        `;
        
        // Show modal
        modalOverlay.classList.add('active');
      }
    });
  });
}

function setupMunicipalityPopups() {
  // Create modal elements if they don't already exist
  let modalOverlay = document.querySelector('.modal-overlay');
  
  if (!modalOverlay) {
    modalOverlay = document.createElement('div');
    modalOverlay.className = 'modal-overlay';
    
    const modalContent = document.createElement('div');
    modalContent.className = 'modal-content';
    
    modalContent.innerHTML = `
      <span class="modal-close"><i class="fas fa-times"></i></span>
      <div class="modal-header">
        <h3>Municipality Information</h3>
      </div>
      <div class="modal-body">
        <p class="municipality-description"></p>
        <div class="municipality-stats">
          <!-- Stats will be populated dynamically -->
        </div>
      </div>
    `;
    
    modalOverlay.appendChild(modalContent);
    document.body.appendChild(modalOverlay);
    
    // Close modal when clicking on close button or outside the modal
    const closeBtn = modalContent.querySelector('.modal-close');
    closeBtn.addEventListener('click', () => {
      modalOverlay.classList.remove('active');
    });
    
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        modalOverlay.classList.remove('active');
      }
    });
  }
  
  // Add click event to municipality items
  const municipalityItems = document.querySelectorAll('.municipality-item');
  
  municipalityItems.forEach(item => {
    item.addEventListener('click', () => {
      const municipalityName = item.querySelector('.municipality-name').textContent;
      const municipality = municipalityData[municipalityName];
      
      if (municipality) {
        const modalContent = modalOverlay.querySelector('.modal-content');
        // Populate modal with municipality data
        const modalHeader = modalContent.querySelector('.modal-header h3');
        modalHeader.textContent = municipalityName;
        
        const municipalityDescription = modalContent.querySelector('.municipality-description');
        municipalityDescription.textContent = municipality.description;
        
        const municipalityStats = modalContent.querySelector('.municipality-stats');
        municipalityStats.innerHTML = `
          <div class="district-stat-card">
            <div class="stat-icon"><i class="fas fa-users"></i></div>
            <h4>Total Population</h4>
            <div class="stat-value">${municipality.population}</div>
          </div>
          <div class="district-stat-card">
            <div class="stat-icon"><i class="fas fa-male"></i></div>
            <h4>Male Population</h4>
            <div class="stat-value">${municipality.malePopulation}</div>
          </div>
          <div class="district-stat-card">
            <div class="stat-icon"><i class="fas fa-female"></i></div>
            <h4>Female Population</h4>
            <div class="stat-value">${municipality.femalePopulation}</div>
          </div>
          <div class="district-stat-card">
            <div class="stat-icon"><i class="fas fa-mobile-alt"></i></div>
            <h4>Smartphone Users</h4>
            <div class="stat-value">${municipality.smartphoneUsers}</div>
          </div>
          <div class="district-stat-card">
            <div class="stat-icon"><i class="fas fa-map-marked-alt"></i></div>
            <h4>Area</h4>
            <div class="stat-value">${municipality.area}</div>
          </div>
          <div class="district-stat-card">
            <div class="stat-icon"><i class="fas fa-map-pin"></i></div>
            <h4>District</h4>
            <div class="stat-value">${municipality.district}</div>
          </div>
        `;
        
        // Show modal
        modalOverlay.classList.add('active');
      }
    });
  });
}