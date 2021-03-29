Vue.component("countrydata", {});

const app = new Vue({
  el: "#app",
  data: { info: [] },
  mounted() {
    axios
      .get(" https://covid-api.mmediagroup.fr/v1/vaccines")
      .then((response) => {
        this.info = Object.freeze(response.data);
      });
  },
  filters: {
    percentageOfVaccinated(value) {
      return ((value.All.administered / value.All.population) * 100).toFixed(1);
    },
  },
});
//TODO:Filter continents records
