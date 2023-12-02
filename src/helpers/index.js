export const getPopulation = cities => {
    var totalPopulation = 0;
    cities.map(city => {
      totalPopulation =
        totalPopulation + parseInt(city.population.replace(/,/g, ""), 10);
    });
    return totalPopulation.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };