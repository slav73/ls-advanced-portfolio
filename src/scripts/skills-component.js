import Vue from "vue";

const skill = {
  template: "#skill",
  props: ["skillName", "skillPercent"],
  methods: {
    drawColouredCircle() {
      const circle = this.$refs["color-circle"];
      console.log(circle.style);
      const dashArray = parseInt(
        getComputedStyle(circle).getPropertyValue("stroke-dasharray")
      );

      const percent = (dashArray / 100) * (100 - this.skillPercent);

      circle.style.strokeDashoffset = percent;
    }
  },
  mounted() {
    this.drawColouredCircle();    
  }
}

const skillsRow = {
  template: "#skills-row",
  components: {
    skill
  },
  props: ["skill"]
}

new Vue({
  el: "#skills-component",
  template: "#skills-list",
  components: {
    skillsRow
  },
  data() {
    return {
      skills: {}
    };
  },
  created() {
    this.skills = require ("../data/skills.json");
  }
}) 