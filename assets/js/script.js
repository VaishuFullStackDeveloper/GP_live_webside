//  home section
 document.addEventListener('DOMContentLoaded', function () {
      const mobileMenuToggle = document.getElementById('mobileMenuToggle');
      const mobileNav = document.getElementById(' desktopNav');
      const mobileNavLinks = document.querySelectorAll('.nav-link');

      mobileMenuToggle.addEventListener('click', function () {
        this.classList.toggle('active');
        mobileNav.classList.toggle('active');
        const isExpanded = mobileNav.classList.contains('active');
        this.setAttribute('aria-expanded', isExpanded);
      });

      mobileNavLinks.forEach(link => {
        link.addEventListener('click', function () {
          mobileMenuToggle.classList.remove('active');
          mobileNav.classList.remove('active');
          mobileMenuToggle.setAttribute('aria-expanded', 'false');
        });
      });

      document.addEventListener('click', function (event) {
        const isClickInsideNav = mobileNav.contains(event.target);
        const isClickOnToggle = mobileMenuToggle.contains(event.target);
        if (!isClickInsideNav && !isClickOnToggle && mobileNav.classList.contains('active')) {
          mobileMenuToggle.classList.remove('active');
          mobileNav.classList.remove('active');
          mobileMenuToggle.setAttribute('aria-expanded', 'false');
        }
      });

      window.addEventListener('resize', function () {
        if (window.innerWidth > 768) {
          mobileMenuToggle.classList.remove('active');
          mobileNav.classList.remove('active');
          mobileMenuToggle.setAttribute('aria-expanded', 'false');
        }
      });

      const allNavLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
      allNavLinks.forEach(link => {
        link.addEventListener('click', function (e) {
          if (this.getAttribute('href').startsWith('#')) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
              targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
              });
            }
          }
        });
      });

      // Loading animation
      document.body.style.opacity = '0';
      document.body.style.transition = 'opacity 0.3s ease';
      setTimeout(() => {
        document.body.style.opacity = '1';
      }, 100);
    });

// Schemes-sections---------------------------

function filter(category) {
  document
    .querySelectorAll(".tab")
    .forEach((t) => t.classList.remove("active"));
  event.target.classList.add("active");
  document.querySelectorAll(".scheme-card").forEach((card) => {
    if (category === "all" || card.classList.contains(category)) {
      card.style.display = "flex";
      card.style.animation = "fadeIn 0.6s ease-out";
    } else {
      card.style.display = "none";
    }
  });
}


// member---------------------------------
 // Minimal JavaScript for click effects
      document.addEventListener("DOMContentLoaded", function () {
        // Get all clickable cards
        const cards = document.querySelectorAll(
          ".member-card, .other-member-card"
        );

        // Add click effect to each card
        cards.forEach((card) => {
          card.addEventListener("click", function () {
            // Add clicked class for visual feedback
            this.classList.add("clicked");

            // Add pulse animation
            this.classList.add("pulse-animation");

            // Remove clicked class after animation
            setTimeout(() => {
              this.classList.remove("clicked");
              this.classList.remove("pulse-animation");
            }, 600);
          });
        });
      });

   
      const data = {
        // birth certificate
        birth: {
          title:"Birth Certificate",
          desc:"Used for official birth registration. Required for school, ID, and government schemes.",
          docs:["Hospital birth certificate", "Parents' Aadhar cards", "Address proof", "Filled application form"],
          process:"Submit the form and documents at the Gram Panchayat. Certificate issued within 7 days.",
          fees:"Free within 21 days, ₹50 after 21 days.",
          applyLink:"#apply-birth",
          formLink:"#form-birth"
        },
        // death certificate
        death: {
          title:"Death Certificate",
          desc:"Proof of a person's death. Used for legal and financial matters like pension, insurance.",
          docs:["Medical certificate of death", "Aadhar card of deceased", "Applicant ID proof", "Filled application form"],
          process:"Submit documents to Panchayat. Certificate issued within 5–10 days.",
          fees:"₹50",
          applyLink:"#apply-death",
          formLink:"#form-death"
        },
        // water connection
        water: {
          title:"Water Connection",
          desc:"Apply for new or modified water supply connections for home or farm.",
          docs:["Property proof", "ID proof", "Electricity bill", "Filled application form"],
          process:"Submit documents. Connection will be inspected and installed within 15 working days.",
          fees:"₹300 + installation charges",
          applyLink:"#apply-water",
          formLink:"#form-water"
        },
        // marriage certificate
        marriage: {
          title:"Marriage Certificate",
          desc:"Legal document verifying marriage. Required for visa, bank, and legal purposes.",
          docs:["Marriage invitation/photo", "Bride and groom ID proof", "2 witnesses' IDs", "Photos", "Filled form"],
          process:"Submit documents. Certificate issued after 7–10 days verification.",
          fees:"₹100",
          applyLink:"#apply-marriage",
          formLink:"#form-marriage"
        },
        // house tax
        tax: {
          title: "House Tax",
          desc: "Check and pay property/house tax. View receipts and clear dues.",
          docs: ["House number or property ID", "Owner ID proof", "Old tax receipt"],
          process: "Available at Gram Panchayat or online portal. Instant payment & receipt.",
          fees: "Based on area & property type",
          applyLink: "#apply-tax",
          formLink: "#form-tax"
        },
        // voter help
        aadhar: {
          title:"Aadhar / Voter Help",
          desc:"Help with new applications, corrections or updates in Aadhar or Voter ID.",
          docs:["Old Aadhar/Voter ID", "DOB proof", "Address proof", "Photo"],
          process:"Walk-in to Panchayat center. Updates done in 7–15 days.",
          fees:"₹50 for correction",
          applyLink:"#apply-aadhar",
          formLink:"#form-aadhar"
        },
        // hrievance
        grievance: {
          title:"Grievance Form",
          desc:"Submit complaints about sanitation, roads, electricity, or local issues.",
          docs:["ID proof", "Issue details", "Location photo (if available)"],
          process:"Submit at Panchayat. Issue acknowledged in 5 days, resolved soon.",
          fees:"No charges",
          applyLink:"#apply-grievance",
          formLink:"#form-grievance"
        },
        // light services
        lighting: {
          title:"Sanitation & Lighting",
          desc:"Request new streetlights, garbage collection, or public toilet repairs.",
          docs:["Request letter", "Location address", "Photos (if possible)"],
          process:"Field visit within 5–7 days, action initiated accordingly.",
          fees:"Free",
          applyLink:"#apply-lighting",
          formLink:"#form-lighting"
        },
        // essential certificate
        caste: {
          title:"Domicile / Income / Caste",
          desc:"Apply for essential certificates required for education, jobs, and schemes.",
          docs:["Aadhar card", "Ration card", "School bonafide", "Caste proof"],
          process:"Verification done by officials. Issued within 10–15 working days.",
          fees:"₹30 per certificate",
          applyLink:"#apply-caste",
          formLink:"#form-caste"
        },
        // rit request
        rti: {
          title:"RTI Request",
          desc:"File an RTI to access official Panchayat records or decisions.",
          docs:["ID proof", "Detailed request letter", "RTI application form"],
          process:"Reply given within 30 days of submission as per RTI Act.",
          fees:"₹10 (RTI filing fee)",
          applyLink:"#apply-rti",
          formLink:"#form-rti"
        }
      };
      

      
// function for show services
      function showService(key, e) {
        document.querySelectorAll('.service-btn').forEach(btn => btn.classList.remove('active'));
        if (e) e.target.classList.add('active');
        const s = data[key];
        document.getElementById('service-info').innerHTML = `
             <h3>${s.title}</h3>
             <div class="section-block">
               <p>${s.desc}</p>
             </div>
             <div class="section-block">
               <h4>📄 Required Documents:</h4>
               <ul class="document-list">
                 ${s.docs.map(doc => `<li>✅ ${doc}</li>`).join('')}
               </ul>
             </div>
             <div class="section-block">
               <h4>🛠️ Process:</h4>
               <p>${s.process}</p>
             </div>
             <div class="section-block">
               <h4>💰 Fees:</h4>
               <p>${s.fees}</p>
             </div>
             <div class="btn-group">
               <a href="${s.applyLink}">📝 Apply Now</a>
               <a href="${s.formLink}">📄 Download Form</a>
             </div>
           `;
      }
    // Load default service
      showService('birth');
      // Load default service
      showService('birth');


      // contact----------------------
      
      function toggleDarkMode() {
        document.body.classList.toggle('dark');
      }
 

      // ------------------------
 
    document.addEventListener('DOMContentLoaded', function () {
      const mobileMenuToggle = document.getElementById('mobileMenuToggle');
      const mobileNav = document.getElementById('mobileNav');
      const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

      mobileMenuToggle.addEventListener('click', function () {
        this.classList.toggle('active');
        mobileNav.classList.toggle('active');
        const isExpanded = mobileNav.classList.contains('active');
        this.setAttribute('aria-expanded', isExpanded);
      });

      mobileNavLinks.forEach(link => {
        link.addEventListener('click', function () {
          mobileMenuToggle.classList.remove('active');
          mobileNav.classList.remove('active');
          mobileMenuToggle.setAttribute('aria-expanded', 'false');
        });
      });

      document.addEventListener('click', function (event) {
        const isClickInsideNav = mobileNav.contains(event.target);
        const isClickOnToggle = mobileMenuToggle.contains(event.target);
        if (!isClickInsideNav && !isClickOnToggle && mobileNav.classList.contains('active')) {
          mobileMenuToggle.classList.remove('active');
          mobileNav.classList.remove('active');
          mobileMenuToggle.setAttribute('aria-expanded', 'false');
        }
      });

      window.addEventListener('resize', function () {
        if (window.innerWidth > 768) {
          mobileMenuToggle.classList.remove('active');
          mobileNav.classList.remove('active');
          mobileMenuToggle.setAttribute('aria-expanded', 'false');
        }
      });

      const allNavLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
      allNavLinks.forEach(link => {
        link.addEventListener('click', function (e) {
          if (this.getAttribute('href').startsWith('#')) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
              targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
              });
            }
          }
        });
      });

      // Loading animation
      document.body.style.opacity = '0';
      document.body.style.transition = 'opacity 0.3s ease';
      setTimeout(() => {
        document.body.style.opacity = '1';
      }, 100);
    });
 