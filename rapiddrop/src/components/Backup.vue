<template>
    <div>
      <h1>Data from Backend</h1>
      <ul>
        <li v-for="item in data" :key="item.id">{{ item.date }}</li>
      </ul>
    </div>
  </template>
  
  <script>
  import api from "../services/api";
  
  export default {
    data() {
      return {
        data: [],
      };
    },
    created() {
        console.log('Created')
      api.get("WeatherForecast")
        .then((response) => {
          this.data = response.data;
          console.log('Data:', this.data)
        })
        .catch((error) => {
          console.error(error);
        });
    },
  };
  </script>
  