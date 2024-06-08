<script>
  import { fly } from 'svelte/transition';
  import MapPin from '../lib/components/icons/location-icon.svelte';
  let experiences = [
      {
          role: "Data Science Coop",
          company: "Moderna",
          location: "Cambridge, USA",
          date: "July 2023 - December 2023",
          logoUrl: "https://media.graphassets.com/xA1oy1JXQM2vuNteY5xZ",
          website: "https://www.modernatx.com/"
      },
      {
          role: "Data Science Intern",
          company: "Lowe's Companies, Inc.",
          location: "Charlotte, USA",
          date: "May 2023 - July 2023",
          logoUrl: "https://media.graphassets.com/MuNFq4IvQhKqX7iZSZjt",
          website: "https://www.lowes.com/"
      },
      {
          role: "Data Scientist",
          company: "Fluid AI",
          location: "Mumbai, India",
          date: "September 2021 - August 2022",
          logoUrl: "https://media.graphassets.com/iv0d9IyWQcSSmn2P6DmP",
          website: "https://fluid.ai/"
      },
      {
          role: "Machine Learning Trainee",
          company: "CapeStart Inc.",
          location: "Nagercoil, India",
          date: "February 2021 - August 2021",
          logoUrl: "https://media.graphassets.com/x3yYQfpDSoayuyAA8kGV",
          website: "https://www.capestart.com/"
      },
      {
          role: "Data Science Intern",
          company: "AIDOS Business Solutions Pvt. Ltd",
          location: "Hyderabad, India",
          date: "October 2020 - January 2021",
          logoUrl: "https://media.graphassets.com/FWw9y2LqR2i8wTuu5XTY",
          website: "https://aidossolutions.com/"
      }
  ];
</script>

<style>
  .timeline {
      position: relative;
      max-width: 1000px;
      margin: 0 auto;
      padding: 20px 0;
      list-style: none;
  }
  .timeline::before {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 50%;
      width: 2px;
      background: #ddd;
  }
  .timeline-item {
      position: relative;
      width: 50%;
      padding: 20px 40px;
      box-sizing: border-box;
      transition: transform 0.3s;
  }
  .timeline-item:nth-child(odd) {
      left: 0;
  }
  .timeline-item:nth-child(even) {
      left: 50%;
  }
  .timeline-item .content {
      padding: 20px;
      background: white;
      color: black;
      border: 1px solid #ddd;
      border-radius: 8px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      position: relative;
      transition: transform 0.3s, box-shadow 0.3s;
      text-decoration: none;
      display: block;
      color: inherit;
  }
  .timeline-item .content:hover {
      transform: translateY(-5px);
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }
  .timeline-item .content img {
      width: 120px;
      display: block;
      margin: 0 auto 10px;
  }
  .timeline-item .role {
      font-weight: bold;
      font-size: 1.1em;
      margin-bottom: 5px;
  }
  .timeline-item .date {
      font-size: 0.9em;
      color: #666;
      text-align: center;
      margin-bottom: 10px;
  }
  .timeline-item .location {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.9em;
      color: #666;
      text-align: center;
  }
  .timeline-item .location svg {
      width: 16px;
      height: 16px;
      margin-right: 5px;
  }
  .timeline-item::after {
      content: '';
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 25px;
      height: 25px;
      border-radius: 50%;
      background: #ddd;
      border: 4px solid #fff;
      z-index: 1;
      transition: background 0.3s, transform 0.3s;
  }
  .timeline-item:hover::after {
      background: #4285f4; /* Change to the desired hover color */
      transform: translateY(-50%) scale(1.1);
  }
  .timeline-item:nth-child(odd)::after {
      left: 100%;
      margin-left: -13px;
  }
  .timeline-item:nth-child(even)::after {
      right: 100%;
      margin-right: -13px;
  }
  @media screen and (max-width: 768px) {
      .timeline::before {
          left: 20px;
      }
      .timeline-item {
          width: 100%;
          padding-left: 50px;
          padding-right: 20px;
      }
      .timeline-item:nth-child(odd),
      .timeline-item:nth-child(even) {
          left: 0;
      }
      .timeline-item::after {
          left: 20px;
      }
      .timeline-item .content {
          margin-left: 40px;
      }
  }
</style>

<ul class="timeline">
  {#each experiences as experience, index}
      <li class="timeline-item" in:fly={{ x: index % 2 === 0 ? -200 : 200, duration: 500 }}>
          <a href={experience.website} target="_blank" class="content">
              <img src={experience.logoUrl} alt="Company Logo" />
              <div class="role">{experience.role}</div>
              <p class="date">{experience.date}</p>
              <div class="location">
                  <MapPin />
                  <p>{experience.location}</p>
              </div>
          </a>
      </li>
  {/each}
</ul>
