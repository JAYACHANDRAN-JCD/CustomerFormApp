<template>
  <v-app>
    <DeliveryForm></DeliveryForm>
  </v-app>
</template>

<script>
import DeliveryForm  from './components/DeliveryForm.vue';
export default {
  name: 'App',

  components: {
    DeliveryForm,
  },

  data: () => ({
    //
  }),
};
</script>
