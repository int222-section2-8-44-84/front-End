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
        <!-- <router-link to="/">
          <svg width="91" height="29" viewBox="0 0 91 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path/>
          </svg>
        </router-link> -->
      </div>

      <div v-if="showNav">
        <div class="mt-4">
          <router-link to="/">
            <div class="flex justify-center items-center">
              <span class="text-sm mt-1"></span>
              <p class="uppercase font-medium text-base">Home</p>
            </div>
          </router-link>
          
          <router-link to="/Team">
            <div class="flex justify-center items-center mt-1">
              <span class="text-sm mt-1"></span>
              <p class="uppercase font-medium text-base">Team</p>
            </div>
          </router-link>

          <router-link to="/Create">
            <div class="flex justify-center items-center mt-1">
              <span class="text-sm mt-1"></span>
              <p class="uppercase font-medium text-base">Create +</p>
            </div>
          </router-link>

          <!-- <router-link to="/login"> -->
          <div class="flex justify-center items-center mt-1">
            <span class="text-sm mt-1"></span>
            <div style="font-size: 24px;">
                <i class="ri-user-3-line"></i>
            </div>
          </div>
          <!-- </router-link> -->

          <div>
            <input 
              type="search" 
              name="query" 
              placeholder="Search" 
              class="w-full h-12 px-4 text-lg text-gray-700 bg-white border border-gray-300 
              rounded-lg lg:w-56 xl:transition-all xl:duration-300 xl:w-56 xl:focus:w-44 lg:h-10 
              dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-teal-500 
              dark:focus:border-teal-500 focus:outline-none focus:ring focus:ring-primary 
              dark:placeholder-gray-400 focus:ring-opacity-40">
          </div> 
          
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