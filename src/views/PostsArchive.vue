<template>
<!-- PostsArchive -->
        <!-- Navbar -->
        <div class="bg-white shadow-md w-full text-center py-4 px-3" v-if="mobileView">
            <div class="flex justify-between items-center">
                <!-- Nav Mobile -->
                <div v-if="mobileView" @click="showNavHam()">
                    <svg width="25" height="18" viewBox="0 0 25 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line y1="1.5" x2="25" y2="1.5" stroke="#2D2D2D" stroke-width="3" />
                    <line y1="16.5" x2="25" y2="16.5" stroke="#2D2D2D" stroke-width="3" />
                    <line y1="9" x2="25" y2="9" stroke="#2D2D2D" stroke-width="3" />
                    </svg>
                </div>
                <!-- <router-link to="/">
                    <svg width="91" height="29" viewBox="0 0 91 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path/>
                    </svg>
                </router-link> -->
            </div>
        </div>
        <base-nav-mobile v-if="showNav" />
        <base-nav v-if="!mobileView" />
        
        <div class="container mt-12 mx-auto">
          <div class="flex flex-col text-center w-full">
            <h1 class="sm:text-4xl text-3xl font-medium title-font">Post Archive</h1>
          </div>
        </div>

    <div class="container sm:pb-24 pb-16 sm:px-24 md:px-14 xl:px-32 px-4 mx-auto">
      <div class="grid sm:grid-cols-3 sm:gap-6 md:gap-2 grid-cols-2 gap-2 sm:py-7 py-8">
        
        <div class="bg-white rounded-lg sm:rounded-md xl:m-4 sm:m-2 shadow-md cursor-pointer">
          <a class="block relative sm:h-80 h-36 md:h-64 2xl:h-80 sm:rounded-t-lg rounded-t-md  overflow-hidden"></a>
          <!-- <img class="object-cover object-center w-full h-full block" src=""> -->
          <div class="sm:my-3 sm:mx-4 my-2 mx-3">
            <h2 class="text-gray-900 title-font sm:text-lg text-sm font-semibold">Product</h2>
            <p class="mt-1 pb-4 sm:text-base text-xs">Description</p>
          </div>
        </div>

        <div class="bg-white rounded-lg sm:rounded-md xl:m-4 sm:m-2 shadow-md cursor-pointer">
          <a class="block relative sm:h-80 h-36 md:h-64 2xl:h-80 sm:rounded-t-lg rounded-t-md  overflow-hidden"></a>
          <!-- <img class="object-cover object-center w-full h-full block" src=""> -->

          <div class="sm:my-3 sm:mx-4 my-2 mx-3">
            <h2 class="text-gray-900 title-font sm:text-lg text-sm font-semibold">Product</h2>
            <p class="mt-1 pb-4 sm:text-base text-xs">Description</p>
          </div>
        </div>

        <div class="bg-white rounded-lg sm:rounded-md xl:m-4 sm:m-2 shadow-md cursor-pointer">
          <a class="block relative sm:h-80 h-36 md:h-64 2xl:h-80 sm:rounded-t-lg rounded-t-md  overflow-hidden"></a>
          <!-- <img class="object-cover object-center w-full h-full block" src=""> -->
          <div class="sm:my-3 sm:mx-4 my-2 mx-3">
            <h2 class="text-gray-900 title-font sm:text-lg text-sm font-semibold">Product</h2>
            <p class="mt-1 pb-4 sm:text-base text-xs">Description</p>
          </div>
        </div>

        <div class="bg-white rounded-lg sm:rounded-md xl:m-4 sm:m-2 shadow-md cursor-pointer">
          <a class="block relative sm:h-80 h-36 md:h-64 2xl:h-80 sm:rounded-t-lg rounded-t-md  overflow-hidden"></a>
          <!-- <img class="object-cover object-center w-full h-full block" src=""> -->
          <div class="sm:my-3 sm:mx-4 my-2 mx-3">
            <h2 class="text-gray-900 title-font sm:text-lg text-sm font-semibold">Product</h2>
            <p class="mt-1 pb-4 sm:text-base text-xs">Description</p>
          </div>
        </div>
        
    </div>
</div>
</template>

<script>
import BaseNavMobile from "../components/BaseNavMobile.vue";

export default {
    el: '#color-picker',
  components: {
    BaseNavMobile,
  },
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
    handleView() {
      this.mobileView = window.innerWidth <= 990;
    },
  },
  created() {
    this.handleView();
    window.addEventListener("resize", this.handleView);
  },
};
</script>
