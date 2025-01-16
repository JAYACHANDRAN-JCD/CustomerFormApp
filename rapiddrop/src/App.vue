<template>
  <v-app class="app-view">
    <v-app-bar app fixed class="top-bar">
      <!-- Centered "Delivery" Text with Icon -->
      <div class="notch-container">
        <v-icon class="notch-icon">mdi-truck</v-icon>
        <span class="notch-text">Delivery</span>
      </div>
    </v-app-bar>

    <v-main>
      <v-container>
        <!-- <DeliveryForm></DeliveryForm> -->
         <DeliveryList> </DeliveryList>
      </v-container>
    </v-main>

    <!-- Bottom Navigation -->
    <v-bottom-navigation
      app
      fixed
      class="custom-bottom-nav"
      v-model="activeTab"
    >
      <!-- Home Button -->
      <v-btn value="home" class="nav-btn rounded">
        <v-icon :class="{ 'active-icon': activeTab === 'home' }">mdi-home</v-icon>
      </v-btn>

      <!-- Search Button -->
      <v-btn value="search" class="nav-btn rounded">
        <v-icon :class="{ 'active-icon': activeTab === 'search' }">mdi-truck</v-icon>
      </v-btn>

      <!-- Inbox Button -->
      <v-btn value="inbox" class="nav-btn rounded">
        <v-icon :class="{ 'active-icon': activeTab === 'inbox' }">mdi-sale</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </v-app>
</template>

<script>
// import DeliveryForm from './components/DeliveryForm.vue';
import DeliveryList from './components/DeliveryList.vue';

export default {
  name: 'App',

  components: {
    // DeliveryForm,
    DeliveryList
  },

  data: () => ({
    activeTab: 'home', // Default active tab
  }),
};
</script>

<style>
/* Top bar styling */
.top-bar {
  background: linear-gradient(60deg, #B2DFDB , #B2EBF2)!important;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

/* Notch container styling */
.notch-container {
  background: white;
  border-radius: 20px;
  padding: 5px 20px;
  box-shadow: inset 1px 2px 5px rgba(0, 0, 0, 0.5);
  display: flex; /* Align items horizontally */
  align-items: center; /* Center items vertically */
  gap: 8px; /* Add spacing between icon and text */
  position: absolute;
  top: 20%;
  transform: translateX(-50%);
}

/* Icon styling */
.notch-icon {
  font-size: 20px;
  color: #26C6DA;
}

/* Notch text styling */
.notch-text {
  color: #004D40;
  font-size: 16px;
  font-weight: bold;
}

/* Bottom navigation bar styling */
.custom-bottom-nav {
  background: linear-gradient(60deg, #B2DFDB , #B2EBF2)!important;
  border-radius: 15px 15px 0 0;
  padding: 10px 0;
  display: flex;
  justify-content: space-evenly; /* Ensure even spacing between buttons */
  align-items: center;
  height: 70px;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
}

/* Navigation button styling */
.nav-btn {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #3f3f3f;
  text-transform: none;
  font-size: 12px;
  background-color: transparent !important; /* Remove button background color */
  box-shadow: none !important; /* Remove default button shadow */
  border-radius: 50%; /* Make the button circular */
  padding: 10px;
}

/* Ripple effect customization */
.nav-btn .v-ripple__container {
  border-radius: 50%; /* Make the ripple effect circular */
  overflow: hidden; /* Ensure it doesn't extend beyond the button */
}

/* Icon styling */
.nav-btn .v-icon {
  font-size: 24px;
  transition: color 0.3s ease;
  margin: 20px;
}

/* Active icon color */
.active-icon {
  color: #00838F  !important; /* Purple for the active icon */
}
.app-view{
  background: linear-gradient(40deg,#E0F7FA,#E0F2F1) !important;
}
</style>
