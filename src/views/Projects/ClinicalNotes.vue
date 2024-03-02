<template>
  <div id="clinical-notes">
    <div class="page colour-bg-alt-1">
      <div>
        <h1>Clinical Notes Redesign</h1>
        <h5>Supporting Healthcare Practitioners by facilitating a streamlined clinical note taking experience.</h5>
        <img class="ob-hero" src="../../assets/images/notes/notes-hero.png" alt="Clinical Notes Examples" />
      </div>
    </div>

    <div class="page">
      <div class="content spacer-top">
        <h4>Background</h4>
        <p class="space-btm-med">
          Nookal is a Practice Management Software Company for the Allied Health Industry. The software enables the treatment of patients by health care providers in a range of disciplines. Part of a health care providers role when treating a patient is to complete a clinical note after each appointment, which is achieved by text input.
        </p>
        <h4>Problem</h4>
        <p class="space-btm-med">
          Legally a health care provider is required to write a clinical note for each appointment. On average a provider will spend at least 1 hour a day writing clinical notes. Adding functionality to speed up this process would be a massive benefit to all users who need to write clinical notes.
        </p>
        <h4>Goals</h4>
        <p>
          I wanted to take steps to ensure I had a deep understanding of the problems providers were having when writing clinical notes. As the system is being used everyday by thousands of providers it was important to find out what the system is doing well and what could be improved upon. It was also important that any new functionality would integrate seamlessly into the current flow.
        </p>
      </div>
    </div>

    <div class="page flat-bg auto-height">
      <div class="content spacer-top">
        <h2>RESEARCH<span>.</span></h2>
        <h4>Interviews</h4>
        <p>I started this project with several in person interviews which were held on-site. These gave me insight into the day to day operations of a clinic. During this time I was also able to attend several appointments to experience firsthand the process of treating a patient. It was interesting to see how the practitioners utilised the platform to look up client information and write clinical notes.</p>
        <p class="space-top-sml"> I noticed several pain points during this process and was able to follow up with questions to better understand these issues. Some of the problems I was able to identify though this process included:</p>
        <div class="flexed-col top-space">
          <div class="points">Practitioners have to sort through many clinical notes to find the one they need.</div>
          <div class="points">When choosing a clinical note, many of the options shown are for other practitioners.</div>
          <div class="points">Clinical notes can often be very similar between patients with much duplication.</div>
          <div class="points">Each practitioner uses abbreviations in notes and tend to have their own standards.</div>
          <div class="points">Practitioners asked to be able to record the appointment to be able to replay later.</div>
        </div>
      </div>
    </div>

    <div class="page auto-height">
      <div class="content spacer-top">
        <h4>Customer Survey</h4>
        <p>Next I send out a survey to our customer base with open and closed questions to further understand if what was enjoyed about the clinical note section and if there were any additional pain points.</p>

        <div class="flexed-col top-space">
          <div class="points alt">How many patients a week do you see?</div>
          <div class="points alt">Approximately how much time do you spend writing clinical notes each week?</div>
          <div class="points alt">How many different clinical notes templates do you use?</div>
          <div class="points alt">How often do you use abbreviations in a clinical note?</div>
          <div class="points alt">Do you experience any frustration with writing clinical notes? If so what?</div>
          <div class="points alt">Is there anything that would make your life easier when writing a clinical note?</div>
          <div class="points alt">Do you use a mobile or tablet to write clinical notes?</div>
        </div>

        <p class="top-space">The results that came back reviled many insights into possible improvements:</p>
        <img class="wireframe space-top-sml" src="../../assets/images/notes/notes-stats.png" alt="Clinical Notes survey results" />
      </div>
    </div>

    <div class="page vert-space-lge">
      <div class="content">
        <h4>Current State Evaluation</h4>
        <p>Talking to practitioners early in the research phase gave me a fresh outlook when reviewing the current flow. This allowed me to quickly notice several strengths and weaknesses.</p>

        <h6 class="top-space">Strengths</h6>
        <div class="alt-flexed">
          <div class="note">The history and documents tab shows important information whilst writing notes.</div>
          <div class="note">Practitioners can save the clinical note as a draft to return to later.</div>
          <div class="note">Practitioners like to finalise the clinical note to mark it as completed.</div>
        </div>

        <h6 class="top-space">Weaknesses</h6>
        <div class="flexed">
          <div class="note">Practitioners have to choose between a large number of clinical note templates.</div>
          <div class="note">Need to receive a notification when they have uncompleted clinical notes.</div>
          <div class="note">It can be difficult to write clinical notes on a phone.</div>
          <div class="note">There is no easy way to add quickly add often used phases or abbreviations.</div>
        </div>
        <img class="wireframe space-top-med img-bg" src="../../assets/images/notes/cn-flow-chart.png" alt="Clinical notes flow chart" />
      </div>
    </div>




  </div>

</template>

<script>
export default {
  name: "ClinicalNotes"
}
</script>

<style scoped>
  @import "./projects.scss";
  @import "./clincial-notes.scss";
</style>