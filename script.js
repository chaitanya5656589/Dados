console.log('Welcome to Gandaki Province Information Portal');

// Issue impact data
const issueImpactData = {
  'Infrastructure Development (35%)': {
    districts: [
      { name: 'Gorkha', impact: 30, details: 'Road network damage, bridge repairs needed' },
      { name: 'Myagdi', impact: 25, details: 'Limited access to remote areas' },
      { name: 'Baglung', impact: 25, details: 'Transportation infrastructure needs upgrade' },
      { name: 'Manang', impact: 20, details: 'High-altitude infrastructure challenges' }
    ],
    description: 'Infrastructure development remains a critical challenge across Gandaki Province, particularly affecting mountainous and remote districts. Key issues include road maintenance, bridge construction, and access to remote communities.'
  },
  'Tourism Recovery (28%)': {
    districts: [
      { name: 'Kaski', impact: 40, details: 'Tourism sector recovery post-pandemic' },
      { name: 'Mustang', impact: 35, details: 'Heritage site preservation needed' },
      { name: 'Manang', impact: 25, details: 'Trekking route maintenance required' }
    ],
    description: 'Tourism recovery efforts are focused on revitalizing the sector post-pandemic, with emphasis on sustainable tourism development and cultural preservation.'
  },
  'Environmental Conservation (20%)': {
    districts: [
      { name: 'Mustang', impact: 35, details: 'Glacial lake monitoring' },
      { name: 'Kaski', impact: 35, details: 'Urban waste management' },
      { name: 'Manang', impact: 30, details: 'Climate change impacts' }
    ],
    description: 'Environmental challenges include climate change impacts on glacial lakes, forest conservation, and waste management in tourist areas.'
  },
  'Education Access (12%)': {
    districts: [
      { name: 'Myagdi', impact: 35, details: 'Remote school access' },
      { name: 'Baglung', impact: 35, details: 'Digital infrastructure needed' },
      { name: 'Parbat', impact: 30, details: 'Teacher shortage' }
    ],
    description: 'Education access challenges particularly affect remote districts, with focus needed on infrastructure and digital learning resources.'
  },
  'Healthcare Services (5%)': {
    districts: [
      { name: 'Manang', impact: 40, details: 'Limited healthcare facilities' },
      { name: 'Mustang', impact: 35, details: 'Emergency services needed' },
      { name: 'Myagdi', impact: 25, details: 'Healthcare staff shortage' }
    ],
    description: 'Healthcare service improvements are needed especially in remote areas, focusing on facility upgrades and staff retention.'
  }
};

// District data
const districtData = {
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
  'Manang': {
    population: '5,618',
    malePopulation: '2,970',
    femalePopulation: '2,648',
    smartphoneUsers: '2,800',
    area: '2,246 sq km',
    headquarters: 'Chame',
    description: 'A high-altitude district in the trans-Himalayan region, known for its unique culture and trekking routes.'
  },
  'Mustang': {
    population: '13,452',
    malePopulation: '6,900',
    femalePopulation: '6,552',
    smartphoneUsers: '7,500',
    area: '3,573 sq km',
    headquarters: 'Jomsom',
    description: 'Famous for its ancient kingdom of Lo and desert-like landscape in the rain shadow of the Himalayas.'
  },
  'Myagdi': {
    population: '113,641',
    malePopulation: '54,000',
    femalePopulation: '59,641',
    smartphoneUsers: '65,000',
    area: '2,297 sq km',
    headquarters: 'Beni',
    description: 'Known for its diverse landscapes and as the gateway to the Dhaulagiri mountain range.'
  },
  'Lamjung': {
    population: '167,724',
    malePopulation: '79,000',
    femalePopulation: '88,724',
    smartphoneUsers: '95,000',
    area: '1,692 sq km',
    headquarters: 'Besishahar',
    description: 'A district with rich biodiversity and the starting point of the Annapurna Circuit trek.'
  },
  'Parbat': {
    population: '146,590',
    malePopulation: '69,000',
    femalePopulation: '77,590',
    smartphoneUsers: '85,000',
    area: '494 sq km',
    headquarters: 'Kushma',
    description: 'A small but culturally rich district with significant religious sites.'
  },
  'Nawalpur': {
    population: '311,604',
    malePopulation: '149,000',
    femalePopulation: '162,604',
    smartphoneUsers: '175,000',
    area: '1,043 sq km',
    headquarters: 'Kawasoti',
    description: 'The newest district in Gandaki Province, formed after the administrative restructuring of Nepal.'
  }
};

// Municipality data
const municipalityData = {
  'Pokhara Metropolitan City': {
    population: '402,995',
    malePopulation: '193,438',
    femalePopulation: '209,557',
    smartphoneUsers: '285,000',
    area: '464.24 sq km',
    district: 'Kaski',
    description: 'The largest city and provincial capital of Gandaki Province, known for its stunning lakes and mountain views.'
  }
  // ... rest of municipality data
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
        // Calculate percentages
        const totalPopulation = parseInt(district.population.replace(/,/g, ''));
        const malePopulation = parseInt(district.malePopulation.replace(/,/g, ''));
        const femalePopulation = parseInt(district.femalePopulation.replace(/,/g, ''));
        const smartphoneUsers = parseInt(district.smartphoneUsers.replace(/,/g, ''));
        
        const malePercentage = ((malePopulation / totalPopulation) * 100).toFixed(1);
        const femalePercentage = ((femalePopulation / totalPopulation) * 100).toFixed(1);
        const smartphonePercentage = ((smartphoneUsers / totalPopulation) * 100).toFixed(1);
        
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
            <div class="stat-percentage">100%</div>
          </div>
          <div class="district-stat-card">
            <div class="stat-icon"><i class="fas fa-male"></i></div>
            <h4>Male Population</h4>
            <div class="stat-value">${district.malePopulation}</div>
            <div class="stat-percentage">${malePercentage}%</div>
          </div>
          <div class="district-stat-card">
            <div class="stat-icon"><i class="fas fa-female"></i></div>
            <h4>Female Population</h4>
            <div class="stat-value">${district.femalePopulation}</div>
            <div class="stat-percentage">${femalePercentage}%</div>
          </div>
          <div class="district-stat-card">
            <div class="stat-icon"><i class="fas fa-mobile-alt"></i></div>
            <h4>Smartphone Users</h4>
            <div class="stat-value">${district.smartphoneUsers}</div>
            <div class="stat-percentage">${smartphonePercentage}%</div>
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

document.addEventListener('DOMContentLoaded', () => {
  // Initialize pie chart if we're on the issues page
  const issuesChart = document.getElementById('issuesChart');
  if (issuesChart) {
    const chart = new Chart(issuesChart, {
      type: 'pie',
      data: {
        labels: [
          'Infrastructure Development (35%)',
          'Tourism Recovery (28%)',
          'Environmental Conservation (20%)',
          'Education Access (12%)',
          'Healthcare Services (5%)'
        ],
        datasets: [{
          data: [35, 28, 20, 12, 5],
          backgroundColor: [
            'rgba(45, 152, 218, 0.85)',  // Modern blue
            'rgba(46, 204, 113, 0.85)',  // Emerald green
            'rgba(142, 68, 173, 0.85)',  // Wisteria purple
            'rgba(243, 156, 18, 0.85)',  // Orange
            'rgba(231, 76, 60, 0.85)'    // Pomegranate red
          ],
          borderColor: [
            'rgba(45, 152, 218, 1)',
            'rgba(46, 204, 113, 1)',
            'rgba(142, 68, 173, 1)',
            'rgba(243, 156, 18, 1)',
            'rgba(231, 76, 60, 1)'
          ],
          borderWidth: 2,
          hoverBackgroundColor: [
            'rgba(45, 152, 218, 0.95)',
            'rgba(46, 204, 113, 0.95)',
            'rgba(142, 68, 173, 0.95)',
            'rgba(243, 156, 18, 0.95)',
            'rgba(231, 76, 60, 0.95)'
          ],
          hoverBorderColor: [
            'rgba(45, 152, 218, 1)',
            'rgba(46, 204, 113, 1)',
            'rgba(142, 68, 173, 1)',
            'rgba(243, 156, 18, 1)',
            'rgba(231, 76, 60, 1)'
          ],
          hoverBorderWidth: 3
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              color: '#2c3e50',
              font: {
                size: 14,
                family: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
              },
              padding: 20,
              usePointStyle: true,
              pointStyle: 'circle'
            }
          },
          title: {
            display: true,
            text: 'Distribution of Major Issues in Gandaki Province',
            color: '#2c3e50',
            font: {
              size: 18,
              family: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
              weight: 'bold'
            },
            padding: {
              top: 10,
              bottom: 30
            }
          }
        },
        onClick: (event, elements) => {
          if (elements.length > 0) {
            const index = elements[0].index;
            const label = chart.data.labels[index];
            showIssueImpactPopup(label);
          }
        }
      }
    });
  }

  // Add smooth scrolling for anchor links
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

function showIssueImpactPopup(issueName) {
  const issueData = issueImpactData[issueName];
  if (!issueData) return;

  let modalOverlay = document.querySelector('.modal-overlay');
  if (!modalOverlay) {
    modalOverlay = document.createElement('div');
    modalOverlay.className = 'modal-overlay';
    document.body.appendChild(modalOverlay);
  }

  const modalContent = document.createElement('div');
  modalContent.className = 'modal-content';

  modalContent.innerHTML = `
    <span class="modal-close"><i class="fas fa-times"></i></span>
    <div class="modal-header">
      <h3>${issueName}</h3>
    </div>
    <div class="modal-body">
      <p class="issue-description">${issueData.description}</p>
      <h4>Most Impacted Districts</h4>
      <div class="impact-districts">
        ${issueData.districts.map(district => `
          <div class="impact-district-card">
            <div class="district-name">${district.name}</div>
            <div class="impact-meter">
              <div class="impact-level" style="width: ${district.impact}%"></div>
            </div>
            <div class="impact-stats">
              <span class="impact-percentage">${district.impact}% Impact</span>
              <span class="impact-details">${district.details}</span>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  modalOverlay.innerHTML = '';
  modalOverlay.appendChild(modalContent);
  modalOverlay.classList.add('active');

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
