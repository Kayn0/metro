<template>
<div id="online-bookings">
  <div class="page colour-bg">
    <div>
      <h1>Online Bookings Platform</h1>
      <h6>Modernising Online Bookings for the Allied Health Industry</h6>
      <img class="ob-hero" src="../../assets/images/ob-hero.png" alt="Online Booking Platform Examples" />
    </div>
  </div>

  <div class="page">
    <div class="content">
      <h5>Background</h5>
      <p class="space-btm-med">
        Included as part of the service Nookal provides is an Online Bookings system. Customers of Nookal can obtain a hyperlink or button that can be included on their website or in emails which allows their patients to book services online.
      </p>
      <h5>Problem</h5>
      <p class="space-btm-med">
        The Online Booking System was already several years old and since its creation the customers expectations, wants and needs had changed significantly. It was clear that the system’s look and feel had become outdated and needed a refresh.
      </p>
      <h5>Goals</h5>
      <p>
        As the current system is being used by over 50K users every day, it was vital that any changes did not remove any functionality. I wanted to gain insights during the research phase to understand what features would be most beneficial to include. Lastly I wanted to create a modern interface and user experience for the Online Bookings Platform, by putting our customers and their patients at the forefront of my design decisions.
      </p>
    </div>
  </div>

  <div class="page colour-bg break-page">
    <div class="content">
      <h5>My Role</h5>
      <p>Research, user flows & stories, wire-framing, visual design, low & high fidelity mockups,  prototyping, usability testing</p>
    </div>
  </div>

  <div class="page">
    <div class="content space-top-lge">
      <h2>RESEARCH</h2>
      <h5>Current State Evaluation</h5>
      <p>To understand the current experience and pain points in the online booking process, I decided to evaluate the current user flow and review the data and information presented to the end user. Here are some of the most important things that I discovered:</p>
      <div class="note-holder">
        <div class="note">
          The look and feel of our platform on web, tablet and mobile is very outdated.
        </div>
        <div class="note">It would be better to separate services and classes, rather than listing them together.</div>
        <div class="note">The Service and Class details list makes it difficult to find a specific type.</div>
        <div class="note">The user flow is overly complicated with too many steps.</div>
      </div>

      <div class="label-heading">
        Old Online Bookings Interface and User Flow
      </div>
      <div class="flexed">
        <div class="stacked-images">
          <img src="../../assets/images/old-ob-1.png" alt="Make a booking" />
          <img src="../../assets/images/old-ob-2.png" alt="Select service or class" />
          <img src="../../assets/images/old-ob-3.png" alt="Select a practitioner" />
          <img src="../../assets/images/old-ob-4.png" alt="Enter your details" />
        </div>

        <div class="">
          <img class="old-flow" src="../../assets/images/ob-old-flow.png" alt="Online Bookings old user flow" />
        </div>
      </div>
    </div>
  </div>


  <div class="page no-bg space-top-lge space-btm-lge vert-space-lge">
    <div class="content">
      <h5>Competitive Analysis</h5>
      <p>Next I started competitive analysis by reviewing several of our main competitors that were offering similar online booking services. This gave me a solid grounding for understanding the current standards of online booking systems in terms of the features and user expectations. These were the platforms I reviewed:</p>
      <div class="image-content">

        <a class="label-heading" href="https://www.mindbodyonline.com/explore">mindbody</a>
        <img class="screenshot" src="../../assets/images/ob-mind-body.png" alt="Mind and Body screenshot" />
        <div class="flexed">
          <div class="boxed">
            <h6>Strengths</h6>
            <ul>
              <li>Easy to use search feature with sub categories for a quick searching.</li>
              <li>Easy to use search based on location.</li>
              <li>Companies can offer deals and discounts on services.</li>
            </ul>
          </div>
          <div class="boxed">
            <h6>Weaknesses</h6>
            <ul>
              <li>Overly complicated company page.</li>
              <li>Service and class date selector is limited in functionality.</li>
              <li>Distance is calculated in miles.</li>
            </ul>
          </div>
        </div>

        <a class="label-heading" href="https://healthengine.com.au/">Health Engine</a>
        <img class="screenshot" src="../../assets/images/ob-health-engine.png" alt="HealthEngine screenshot" />
        <div class="flexed">
          <div class="boxed">
            <h6>Strengths</h6>
            <ul>
              <li>Easy to find a specific category of healthcare.</li>
              <li>The Booking appointment modal is easy to use.</li>
              <li>Search in the navbar is very user friendly for navigating the site.</li>
            </ul>
          </div>
          <div class="boxed">
            <h6>Weaknesses</h6>
            <ul>
              <li>Messy service and class UI listing</li>
              <li>Site contains many ads.</li>
              <li>Practice information page layout and interface is cluttered making it hard to read.</li>
            </ul>
          </div>
        </div>

        <a class="label-heading" href="https://www.hotdoc.com.au/">HotDoc</a>
        <img class="screenshot" src="../../assets/images/ob-hotdoc.png" alt="Hotdoc screenshot" />
        <div class="flexed">
          <div class="boxed">
            <h6>Strengths</h6>
            <ul>
              <li>Popular search categories for quick searching.</li>
              <li>Easy to see available times for a service.</li>
              <li>Great search filters, allowing the user to search by a wide range of types.</li>
            </ul>
          </div>
          <div class="boxed">
            <h6>Weaknesses</h6>
            <ul>
              <li>Appointment time selection is overly complicated.</li>
              <li>Company details page is cluttered.</li>
              <li>Inconsistent button height and style.</li>
            </ul>
          </div>
        </div>
      </div>


      <p class="space-top-med">The research highlighted areas where our Online Bookings Platform had fallen behind our competitors. To ensure the new platform was successful my solutions would have to ensure the following:</p>
      <div class="flexed-col">
        <div class="points">Modern user interface</div>
        <div class="points">Improved input interactions and validation</div>
        <div class="points">Expanded Practitioner and Location searching</div>
        <div class="points">Ability to filter services and classes by category type</div>
        <div class="points">Additional location, practitioner, service and class information</div>
      </div>

    </div>
  </div>

  <div class="page vert-space-lge">
    <div class="content">
      <h1>Understand</h1>
      <h5>Reviewing Client Feedback</h5>
      <p>As the online booking platform had existed for several years, during that time I had gathered feedback from our Clients who had expressed the need for additional functionality. Several features that were suggested were considered for the final feature set, these were: </p>

      <ul>
        <li>The ability for the user to book multiple classes at once.</li>
        <li>Different users expressed the need to allow the end user to choose a practitioner before a location and vice versa.</li>
        <li>Able to either show a goodbye message or link to an external site on a complete booking.</li>
        <li>Able to quickly choose the first available practitioner.</li>
        <li>Able to show or hide appointment times and time lengths.</li>
        <li>Improved easier to user interface, with not so many steps.</li>
        <li>Many issues raised with the mobile and tablet experience.</li>
        <li>The ability to customise colour settings to match branding.</li>
        <li>The ability to add background images.</li>

      </ul>

      <h5>Round Table Discussions</h5>
      <p class="space-btm-sml">I reached out to several clients who had provided feedback on the Online Bookings platform and was able to meet either locally or on zoom for a round table discussion. These meetings gave me the opportunity to go into more detail of their wants, needs and expectations of the platform.</p>
      <p class="space-btm-sml">A common theme in these meetings was the differing needs of each Clinic in terms of the user journey. Questions in the round table highlighted that much of this was caused by the differing sizes of each clinic. I was able to sketch out and brainstorm ideas in these meetings, which gave me confidence in the proposed solutions.</p>

      Here are some of the key points from these meetings:
      <ul>
        <li>Some clinics had many locations with many practitioners. So allowing an easy way for the user to choose from all options available was needed.</li>
        <li>Other clinics only had one location and did not need this extra complexity and wanted the user to start by choosing from their practitioners.</li>
        <li>Other clinics wanted to be able to provide their patients with an easy way to book and rebook with a specific provider.</li>
      </ul>

      <p>All the clients were open to beta testing, which would help me ensure that the features and mockups generated by these meetings would keep the design process on track.</p>
    </div>
  </div>

  <div class="page no-bg vert-space-lge">
    <div class="content">
      <h1>Understand</h1>
      <h5>Personas</h5>
      <p>I created personas to help identify and explore the key user groups that I am designing the platform for. The persons helped to guide my design decisions and ensured I created solutions that best suits the end users.</p>
        <div class="personas">
          <img class="persona" src="../../assets/images/persona-1.png" alt="Persona - Sally Becker" />
          <img class="persona" src="../../assets/images/persona-2.png" alt="Persona - Damien Bosch" />
        </div>
    </div>
  </div>

  <div class="page vert-space-lge">
    <div class="content">
      <h1>Understand</h1>
      <h5>User Journey Flow Charts</h5>
      <p>As discovered in the round table meetings, I needed to create several use cases solutions to meet each of these needs. I used Flow Charts to document the different user journeys to give me a visual representation.</p>
      <h5>Full User Journey</h5>
      <p>The clinic has several locations with many practitioners at each location. All locations and practitioners need to be available to the patient.</p>
      <h5>Standard User Journey</h5>
      <p> The bulk of our users operate from one Location but can have many practitioners. This user flow allows the user start at the practitioner step.</p>
      <h5>Quick User Journey</h5>
      <p>Clinic’s would like to list practitioner’s on their website and would like a link to allow the user to book with the selected practitioner. Also users wanted to be able to provide a quick link for patients to rebook with the same practitioner. This user flow shows how this is achieved.</p>
      <div class="image-holder image-row">

        <div class="">
          <h6>Full User Journey</h6>
          <img class="user-journey" src="../../assets/images/user-journey-full.png" alt="Full User Journey" />
        </div>

        <div class="">
          <h6>Standard User Journey</h6>
          <img class="user-journey" src="../../assets/images/user-journey-standard.png" alt="Standard User Journey" />
        </div>

        <div class="">
          <h6>Quick User Journey</h6>
          <img class="user-journey" src="../../assets/images/user-journey-quick.png" alt="Quick User Journey" />
        </div>
      </div>
    </div>
  </div>

  <div class="page no-bg">
    <div class="content">
      <h1>Define</h1>

      <h5>Product Statement</h5>
      <p div class="highlight-text">Understanding customer needs to enable them to effectively sell their services, whilst providing their patients a user friendly, streamlined online booking experience.</p>
      <h5>Feature Roadmap</h5>
      <p>As a general overview here is part of the feature roadmap for the online bookings platform.</p>
      <ul>
        <li>Selecting a Practitioner or Location</li>
        <li>Selecting an Appointment</li>
        <li>Searching and Filtering</li>
        <li>Selecting Date and Time</li>
        <li>Rebooking a Class</li>
        <li>Enter User Details</li>
        <li>Enter Payment Details</li>
        <li>Goodbye Message</li>
        <li>Clinic Setup Options</li>
        <li>Branding and Customisation</li>
      </ul>
    </div>
  </div>

  <div class="page vert-space-lge">
      <div class="content">
        <h1>Create</h1>
        <h5>Wireframe Mockups</h5>
        <p>I started creating wireframe mockups, by taking what I learnt during the round table interviews. I had a concept in mind for how the page should interact with the user and I reworked a few different layout types, until I settled on one that I felt worked the best in terms of page space and presentation.</p>

        <h5>Low Resolution Mockups</h5>
        <p>Next I moved onto low resolution mockups to flesh out the interface and the elements. During this phase I was guided by my prior research especially the client feedback. This was done to ensure all relevant features and improvements were included in the system.</p>
        <div class="image-holder">
          <img class="wireframe" src="../../assets/images/low-res-1.png" alt="Low-res mockup of Location Selection" />
          <img class="wireframe" src="../../assets/images/low-res-2.png" alt="Low-res mockup of Practitioner Selection" />
          <img class="wireframe" src="../../assets/images/low-res-3.png" alt="Low-res mockup of Appointment Selection" />
        </div>
      </div>
  </div>

  <div class="page no-bg vert-space-lge">
    <div class="content">
      <h1>Prototype</h1>
      <h3>UI Toolkit</h3>

      <div class="swatches">
        <div class="swatch accent">
          <div class="swatch-label">
            <h5>Accent</h5>
            <h6>#5A6469</h6>
          </div>
        </div>

        <div class="swatch primary">
          <div class="swatch-label">
            <h5>Primary</h5>
            <h6>#009FCC</h6>
          </div>
        </div>

        <div class="swatch subdued">
          <div class="swatch-label">
            <h5>Subdued</h5>
            <h6>#C6F2FF</h6>
          </div>
        </div>

        <div class="swatch highlight">
          <div class="swatch-label">
            <h5>Highlight</h5>
            <h6>#E9FAFF</h6>
          </div>
        </div>

        <div class="swatch secondary">
          <div class="swatch-label">
            <h5>Secondary</h5>
            <h6>#3EB943</h6>
          </div>
        </div>

        <div class="swatch background">
          <div class="swatch-label">
            <h5>Background</h5>
            <h6>#FAFAFA</h6>
          </div>
        </div>

        <div class="swatch foreground">
          <div class="swatch-label">
            <h5>Foreground</h5>
            <h6>#FFFFFF</h6>
          </div>
        </div>

        <div class="swatch placeholder">
          <div class="swatch-label">
            <h5>Placeholder</h5>
            <h6>#979797</h6>
          </div>
        </div>
      </div>

      <hr />

      <div class="headings">
        <div class="heading-element">
          <div class="heading-left">
            <h1 class="ob">Heading H1</h1>
            <h5 class="ob">Lato Bold</h5>
            <h6 class="ob">32px</h6>
          </div>

          <div class="example-right">
              <h1>Donec et odio pellentesqu diam.</h1>
          </div>
        </div>

        <div class="heading-element">
          <div class="heading-left">
            <h2 class="ob">Heading H2</h2>
            <h5 class="ob">Lato Bold</h5>
            <h6 class="ob">24px</h6>
          </div>
          <div class="example-right">
            <h2>Donec et odio pellentesqu diam.</h2>
          </div>
        </div>

        <div class="heading-element">
          <div class="heading-left">
            <h3 class="ob">Heading H3</h3>
            <h5 class="ob">Lato Bold</h5>
            <h6 class="ob">16px</h6>
          </div>
          <div class="example-right">
            <h3>Donec et odio pellentesqu diam.</h3>
          </div>
        </div>

        <div class="heading-element">
          <div class="heading-left">
            <div class="ob-text">Body Default</div>
            <h5 class="ob">Lato Regular</h5>
            <h6 class="ob">16px</h6>
          </div>
          <div class="example-right">
            <div class="default-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet proin ut vitae, felis.</div>
          </div>
        </div>

        <div class="heading-element">
          <div class="heading-left">
            <div class="ob-text">Body Medium</div>
            <h5 class="ob">Lato Regular</h5>
            <h6 class="ob">14px</h6>
          </div>
          <div class="example-right">
            <div class="medium-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet proin ut vitae, felis.</div>
          </div>
        </div>

        <div class="heading-element">
          <div class="heading-left">
            <div class="ob-text">Body Small</div>
            <h5 class="ob">Lato Regular</h5>
            <h6 class="ob">12px</h6>
          </div>
          <div class="example-right">
            <div class="small-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet proin ut vitae, felis.</div>
          </div>
        </div>

        <div class="heading-element space-btm-med last">
          <div class="heading-left">
            <div class="ob-text">Text Link</div>
            <h5 class="ob">Lato Regular</h5>
            <h6 class="ob">14px</h6>
          </div>
          <div class="example-right">
            <div class="text-link">Lorem ipsum dolor sit amet.</div>
          </div>
        </div>
      </div>

      <hr />
      <h3>Icons</h3>
      <div class="image-container">
        <div class="icon">
          <font-awesome-icon :icon="['fas', 'search']" />
        </div>

        <div class="icon">
          <font-awesome-icon :icon="['fas', 'pen']" />
        </div>

        <div class="icon">
          <font-awesome-icon :icon="['fas', 'map-marker-alt']" />
        </div>

        <div class="icon">
          <font-awesome-icon :icon="['fas', 'building']" />
        </div>

        <div class="icon">
          <font-awesome-icon :icon="['fas', 'users']" />
        </div>

        <div class="icon">
          <font-awesome-icon :icon="['fas', 'user']" />
        </div>

        <div class="icon">
          <font-awesome-icon :icon="['fas', 'times']" />
        </div>

        <div class="icon">
          <font-awesome-icon :icon="['fas', 'envelope']" />
        </div>

        <div class="icon">
          <font-awesome-icon :icon="['fas', 'shopping-cart']" />
        </div>

        <div class="icon">
          <font-awesome-icon :icon="['fas', 'phone']" />
        </div>

        <div class="icon">
          <font-awesome-icon :icon="['fas', 'chevron-down']" />
        </div>

        <div class="icon">
          <font-awesome-icon :icon="['fas', 'chevron-left']" />
        </div>

        <div class="icon">
          <font-awesome-icon :icon="['fas', 'plus-circle']" />
        </div>

        <div class="icon">
          <font-awesome-icon :icon="['fas', 'font']" />
        </div>
      </div>

      <hr />
      <h3>Buttons</h3>
      <div class="buttons">

        <div class="button-container">
          <h5>Primary</h5>
          <button class="primary">BUTTON</button>
        </div>

        <div class="button-container">
          <h5>Secondary</h5>
          <button class="secondary">BUTTON</button>
        </div>

        <div class="button-container">
          <h5>Outline</h5>
          <button class="outline">BUTTON</button>
        </div>

        <div class="button-container">
          <h5>Disabled</h5>
          <button class="inactive" :disabled="true">BUTTON</button>
        </div>
      </div>

      <hr />
      <h3>Icon Buttons</h3>
      <div class="buttons small">
        <div class="button-container">
          <h5>State 1</h5>
          <button class="icon-text-btn">
            <div class="icon-btn-text">BOOK</div>
            <font-awesome-icon :icon="['fas', 'chevron-down']" />
          </button>
        </div>

        <div class="button-container">
          <h5>State 2</h5>
          <button class="icon-text-btn closed">
            <div class="icon-btn-text">CLOSE</div>
            <font-awesome-icon :icon="['fas', 'chevron-left']" />
          </button>
        </div>
      </div>

      <hr />
      <h3>Location & Practitioner Cards</h3>
      <div class="cards">
        <div class="card-container right-margin-medium">
          <div class="card">
            <font-awesome-icon class="card-location" :icon="['fas', 'map-marker-alt']" />
            <img class="prac-img" src="../../assets/images/physio-logo.png" alt="" />
            <div class="bottom-bar">
              <h4>Spring Hill</h4>
              <h6>115 Valley Road</h6>
            </div>
          </div>
        </div>

        <div class="card-container">
          <div class="card">
            <img class="prac" src="../../assets/images/jenny.png" alt="" />
            <div class="card-name">Jenny Jones</div>
            <div class="title">Podiatrist</div>
            <div class="bottom-bar">
              <h5>MORE INFO</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="page vert-space-lge">
    <div class="content">
      <h1>Prototype</h1>
      <h3>High Resolution Mockups</h3>
      <p>This series of mockups shows the Full User Journey when making an Online Booking with default styling and customisation options.  </p>
      <div class="image-holder">
        <img class="hi-res" src="../../assets/images/hires-1.png" alt="Hi-resolution of Location Selection" />
        <img class="hi-res" src="../../assets/images/hires-2.png" alt="Hi-resolution of Practitioner Selection" />
        <img class="hi-res" src="../../assets/images/hires-3.png" alt="Hi-resolution of Appointment Selection" />
        <img class="hi-res" src="../../assets/images/hires-4.png" alt="Hi-resolution of Appointment Type Selection" />
        <img class="hi-res" src="../../assets/images/hires-5.png" alt="Hi-resolution of Appointment Date Selection" />
        <img class="hi-res" src="../../assets/images/hires-6.png" alt="Hi-resolution of Appointment Time Selection" />
        <img class="hi-res" src="../../assets/images/hires-8.png" alt="Hi-resolution of Appointment Profile Details" />
      </div>
    </div>
  </div>

  <div class="page no-bg vert-space-lge">
    <div class="content">
      <h1>Prototype</h1>
      <h3>User Customisation</h3>
      <p>Feedback from clients had showed it was important to them for the ability to customise the look and feel of the platform to match their branding and create a point of difference from their competitors. To facilitate this clients are able to:</p>
        <ul>
          <li>Upload practitioner, location, service and class images.</li>
          <li>Customise the colours used throughout the platform to match branding.</li>
          <li>Add a background image.</li>
        </ul>
      <div class="image-holder">
        <img class="hi-res" src="../../assets/images/custom-1.png" alt="Example of colour customisation" />
        <img class="hi-res" src="../../assets/images/custom-2.png" alt="Example of background customisation" />
      </div>
    </div>
  </div>

  <div class="page vert-space-lge">
    <div class="content">
      <h1>Prototype</h1>
      <h3>Customisation Examples</h3>
      <div class="image-holder">
        <img class="hi-res" src="../../assets/images/custom-3.png" alt="Example of Online Booking Customisation" />
        <img class="hi-res" src="../../assets/images/custom-4.png" alt="Example of Online Booking Customisation" />
        <img class="hi-res" src="../../assets/images/custom-5.png" alt="Example of Online Booking Customisation" />
        <img class="hi-res" src="../../assets/images/custom-6.png" alt="Example of Online Booking Customisation" />
      </div>
    </div>
  </div>

  <div class="page no-bg vert-space-lge">
    <div class="content">
      <h1>Prototype</h1>
      <h3>Tablet UI</h3>
      <p>The tablet layout required several key changes from when using the platform on a desktop. These included adding a Navigation Header, containing global functionality. To conform to tablet design standards and to allow for many practitioners or locations to be easily viewed, I restyled the location and practitioner selection screens into a list view.</p>
      <div class="image-holder tablet-holder">
        <img class="tablet" src="../../assets/images/ipad-1.png" alt="Tablet example of Location Selection" />
        <img class="tablet" src="../../assets/images/ipad-2.png" alt="Tablet example of Practitioner Selection" />
        <img class="tablet" src="../../assets/images/ipad-3.png" alt="Tablet example of Practitioner Selection" />
        <img class="tablet" src="../../assets/images/ipad-4.png" alt="Tablet example of Practitioner Selection" />
        <img class="tablet" src="../../assets/images/ipad-5.png" alt="Tablet example of Practitioner Selection" />
      </div>
    </div>
  </div>

  <div class="page vert-space-lge">
    <div class="content">
      <h1>Prototype</h1>
      <h3>Mobile UI</h3>
      <p>The mobile UI and layout followed the list structure shown in the tablet view, however this was also continued for the appointment or class booking screens.</p>
      <div class="image-holder mobile-holder">
        <img class="mobile" src="../../assets/images/mobile-1.png" alt="Mobile homepage example" />
        <img class="mobile" src="../../assets/images/mobile-2.png" alt="Mobile example of Location Selection" />
        <img class="mobile" src="../../assets/images/mobile-3.png" alt="Mobile example of Practitioner Selection" />
        <img class="mobile" src="../../assets/images/mobile-5.png" alt="Mobile example of Booking Details" />
        <img class="mobile" src="../../assets/images/mobile-4.png" alt="Mobile example of Appointment Selection" />
        <img class="mobile" src="../../assets/images/mobile-6.png" alt="Mobile example of Date Selection" />
        <img class="mobile" src="../../assets/images/mobile-7.png" alt="Mobile example of Time Selection" />
        <img class="mobile" src="../../assets/images/mobile-8.png" alt="Mobile example of Practitioner Selection" />
      </div>
    </div>
  </div>

  <div class="page no-bg">
    <div class="content">
      <h1>Test</h1>
      <h3>Usability Testing</h3>
      <p>Overall the new platform was received with many positive comments and feedback during the Usability Testing phase. The streamlined flow, vastly improved tablet and mobile experience satisfied the needs of many different sized clinics.</p>
      <p>During this phase I was able to gather useful feedback from client testers that allowed me to make several improvements to the UI, these included:</p>
      <ul>
        <li>Allow services and classes to be grouped by categories.</li>
        <li>Further customisation at the end of the sales flow to allow the user to return to the clients website, receive a goodbye message or a combination of both.</li>
        <li>Added functionality for services and classes to be reordered.</li>
        <li>The option to show or hide qualification information for practitioners.</li>
        <li>In the web view the default setting when selecting a date is the month view over the week view.</li>
      </ul>
      <h3>Conclusion</h3>
      <p>While working on this project I learnt to lean on the information discovered during the Understand phase. This allowed me to not rely on preconceived ideas I had break away from the layout issues plaguing the initial version, especially for tablet and mobile. I thoroughly enjoyed the Usability phase, as it allowed me to take on valuable feedback which only helped to improve the end-users experience.</p>
    </div>
  </div>
</div>

</template>

<script>
export default {
  name: "OnlineBookings",
  computed: {
    isDisabled: true
  }

}

</script>

<style scoped>
  @import "./projects.scss";
</style>