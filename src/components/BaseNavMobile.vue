<template>
  <div class="z-50 inset-0 overflow-x-hidden overflow-y-auto fixed">
    <div class="bg-white w-full text-center py-4 px-3">
      <div class="flex justify-between items-center">
        <div @click="showNavHam()">
          <svg width="25" height="18" viewBox="0 0 25 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line y1="1.5" x2="25" y2="1.5" stroke="#2D2D2D" stroke-width="3" />
            <line y1="16.5" x2="25" y2="16.5" stroke="#2D2D2D" stroke-width="3"/>
            <line y1="9" x2="25" y2="9" stroke="#2D2D2D" stroke-width="3" />
          </svg>
        </div>
        <router-link to="/">
          <svg width="91" height="29" viewBox="0 0 91 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path/>
          </svg>
        </router-link>
        <router-link to="/basket">
          <span class="fi-rr-shopping-bag text-lg"></span>
        </router-link>
      </div>
      <div v-if="showNav">
       <div class="mt-4">
      <router-link to="/">
          <div class="flex justify-center items-center">
            <span class="fi-rr-home text-sm mt-1"></span>
            <p class="font-medium ml-2 text-base">Home</p>
          </div>
      </router-link>

      <router-link to="/team">
          <div class="flex justify-center items-center mt-1">
            <span class="fi-rr-users text-sm mt-1"></span>
            <p class="font-medium ml-2 text-base">Team</p>
          </div>
      </router-link>

      <router-link to="/login">
          <div class="flex justify-center items-center mt-1">
            <span class="fi-rr-user text-primary text-sm mt-1"></span>
            <p class="font-medium ml-2 text-base text-primary hover:text-dark transition duration-200">Login</p>
          </div>
      </router-link>

      </div>
      </div>

    </div>
  </div>
  <div v-if="showNav" class="opacity-25 fixed inset-0 z-40 bg-black"></div>
</template>

<script>
export default {
  data() {
    return {
      mobileView: true,
      showNav: false,
    };
  },
  methods: {
    showNavHam() {
      this.showNav = !this.showNav;
    },
  },
};
</script>