<template>
<!-- home -->
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

    <!-- Header -->
    <!-- sm:rounded-lg rounded-md / sm:rounded-t-lg rounded-t-md -->
    <div class="my-8">
        <div class="container mx-auto px-6">
            <!-- <div class="h-96 rounded-3xl overflow-hidden bg-cover bg-center bg-gradient-to-r from-red-300 via-red-400 to-red-300">
                <div class="bg-opacity-50 flex items-center h-full">
                    <div class="px-10 max-w-xl">
                        <h2 class="text-4xl text-black font-semibold">Lorem ipsum</h2>
                        <p class="mt-2 text-black">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore facere provident 
                          molestias ipsam sint voluptatum pariatur.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                          nisi ut aliquip ex ea commodo consequat. </p>
                    </div>
                </div>
            </div> -->
            <img src="../assets/header.png"> 
        </div>
    </div>

    <!-- Category -->
    <!-- sm:grid-cols-1 sm:grid-cols-4 lg:grid-cols-4 -->
    <div class="grid sm:grid-cols-3 sm:gap-6 gap-2 md:grid-cols-2 lg:grid-cols-4  grid-cols-2 px-4 sm:mx-40 gap-4">
        <div class="bg-white shadow-md hover:bg-red-600 transform hover:-translate-y-1 cursor-pointer rounded-lg transition duration-500 hover:shadow-2xl flex items-center justify-between p-3 text-white font-medium">
            <div class="mx-auto text-center">
                <div class="flex flex-col items-center justify-center h-40 w-full">
                    <img src="../assets/allblack.png">
                </div>
                <h2 class="title-font font-medium sm:text-xl xl:text-3xl text-black uppercase">All</h2>
            </div>
        </div>
        <div class="bg-white shadow-md hover:bg-red-600 transform hover:-translate-y-1 cursor-pointer rounded-lg transition duration-500 hover:shadow-2xl flex items-center justify-between p-3 text-white font-medium">
            <div class="mx-auto text-center">
                <div class="flex flex-col items-center justify-center h-40 w-full">
                    <img src="../assets/mainblack.png">
                </div>
                <h2 class="title-font font-medium sm:text-xl xl:text-3xl text-black uppercase">Main</h2>
            </div>
        </div>
        <div class="bg-white shadow-md hover:bg-red-600 transform hover:-translate-y-1 cursor-pointer rounded-lg transition duration-500 hover:shadow-2xl flex items-center justify-between p-3 text-white font-medium">
            <div class="mx-auto text-center">
                <div class="flex flex-col items-center justify-center h-40 w-full">
                    <img src="../assets/dessertblack.png">
                </div>
                <h2 class="title-font font-medium sm:text-xl xl:text-3xl text-black uppercase">Desserts</h2>
            </div>
        </div>
        <div class="bg-white shadow-md hover:bg-red-600 transform hover:-translate-y-1 cursor-pointer rounded-lg transition duration-500 hover:shadow-2xl flex items-center justify-between p-3 text-white font-medium">
            <div class="mx-auto text-center">
                <div class="flex flex-col items-center justify-center h-40 w-full">
                     <img src="../assets/drinkblack.png">
                </div>
                <h2 class="title-font font-medium sm:text-xl xl:text-3xl text-black uppercase">Drinks</h2>
            </div>
        </div>
    </div>
    
    <!-- Card -->
    <section class="text-black body-font">
        <div class="container sm:pb-24 pb-16 sm:px-24 px-4 mx-auto">
            <div class="grid sm:grid-cols-3 sm:gap-6 gap-2 grid-cols-2 sm:py-7 py-8 ">
                
                <div class="bg-white sm:rounded-lg rounded-md shadow-md cursor-pointer">
                    <router-link to='/Product'>
                    <a class="block relative sm:h-56 h-36 sm:rounded-t-lg rounded-t-md overflow-hidden">
                    <!-- <img class="object-cover object-center w-full h-full block" src=""> -->
                    </a>
                    <div class="sm:my-3 sm:mx-4 my-2 mx-3">
                        <h2 class="text-gray-900 title-font sm:text-lg text-sm font-semibold">Product</h2>
                        <p class="mt-1 text-primary sm:text-base text-xs">Description</p>
                    </div>
                    </router-link>
                </div>

                <div class="bg-white sm:rounded-lg rounded-md shadow-md cursor-pointer">
                    <a class="block relative sm:h-56 h-36 sm:rounded-t-lg rounded-t-md overflow-hidden">
                    <!-- <img class="object-cover object-center w-full h-full block" src=""> -->
                    </a>
                    <div class="sm:my-3 sm:mx-4 my-2 mx-3">
                        <h2 class="text-gray-900 title-font sm:text-lg text-sm font-semibold">Product</h2>
                        <p class="mt-1 text-primary sm:text-base text-xs">Description</p>
                    </div>
                </div>

                <div class="bg-white sm:rounded-lg rounded-md shadow-md cursor-pointer">
                    <a class="block relative sm:h-56 h-36 sm:rounded-t-lg rounded-t-md overflow-hidden">
                    <!-- <img class="object-cover object-center w-full h-full block" src=""> -->
                    </a>
                    <div class="sm:my-3 sm:mx-4 my-2 mx-3">
                        <h2 class="text-gray-900 title-font sm:text-lg text-sm font-semibold">Product</h2>
                        <p class="mt-1 text-primary sm:text-base text-xs">Description</p>
                    </div>
                </div>

                <div class="bg-white sm:rounded-lg rounded-md shadow-md cursor-pointer">
                    <a class="block relative sm:h-56 h-36 sm:rounded-t-lg rounded-t-md overflow-hidden">
                    <!-- <img class="object-cover object-center w-full h-full block" src=""> -->
                    </a>
                    <div class="sm:my-3 sm:mx-4 my-2 mx-3">
                        <h2 class="text-gray-900 title-font sm:text-lg text-sm font-semibold">Product</h2>
                        <p class="mt-1 text-primary sm:text-base text-xs">Description</p>
                    </div>
                </div>

                <div class="bg-white sm:rounded-lg rounded-md shadow-md cursor-pointer">
                    <a class="block relative sm:h-56 h-36 sm:rounded-t-lg rounded-t-md overflow-hidden">
                    <!-- <img class="object-cover object-center w-full h-full block" src=""> -->
                    </a>
                    <div class="sm:my-3 sm:mx-4 my-2 mx-3">
                        <h2 class="text-gray-900 title-font sm:text-lg text-sm font-semibold">Product</h2>
                        <p class="mt-1 text-primary sm:text-base text-xs">Description</p>
                    </div>
                </div>

                <div class="bg-white sm:rounded-lg rounded-md shadow-md cursor-pointer">
                    <a class="block relative sm:h-56 h-36 sm:rounded-t-lg rounded-t-md overflow-hidden">
                    <!-- <img class="object-cover object-center w-full h-full block" src=""> -->
                    </a>
                    <div class="sm:my-3 sm:mx-4 my-2 mx-3">
                        <h2 class="text-gray-900 title-font sm:text-lg text-sm font-semibold">Product</h2>
                        <p class="mt-1 text-primary sm:text-base text-xs">Description</p>
                    </div>
                </div>
  
                <div class="bg-white sm:rounded-lg rounded-md shadow-md cursor-pointer">
                    <a class="block relative sm:h-56 h-36 sm:rounded-t-lg rounded-t-md overflow-hidden">
                    <!-- <img class="object-cover object-center w-full h-full block" src=""> -->
                    </a>
                    <div class="sm:my-3 sm:mx-4 my-2 mx-3">
                        <h2 class="text-gray-900 title-font sm:text-lg text-sm font-semibold">Product</h2>
                        <p class="mt-1 text-primary sm:text-base text-xs">Description</p>
                    </div>
                </div>

                <div class="bg-white sm:rounded-lg rounded-md shadow-md cursor-pointer">
                    <a class="block relative sm:h-56 h-36 sm:rounded-t-lg rounded-t-md overflow-hidden">
                    <!-- <img class="object-cover object-center w-full h-full block" src=""> -->
                    </a>
                    <div class="sm:my-3 sm:mx-4 my-2 mx-3">
                        <h2 class="text-gray-900 title-font sm:text-lg text-sm font-semibold">Product</h2>
                        <p class="mt-1 text-primary sm:text-base text-xs">Description</p>
                    </div>
                </div>
    
                <div class="bg-white sm:rounded-lg rounded-md shadow-md cursor-pointer">
                    <a class="block relative sm:h-56 h-36 sm:rounded-t-lg rounded-t-md overflow-hidden">
                    <!-- <img class="object-cover object-center w-full h-full block" src=""> -->
                    </a>
                    <div class="sm:my-3 sm:mx-4 my-2 mx-3">
                        <h2 class="text-gray-900 title-font sm:text-lg text-sm font-semibold">Product</h2>
                        <p class="mt-1 text-primary sm:text-base text-xs">Description</p>
                    </div>
                </div>

                <div class="bg-white sm:rounded-lg rounded-md shadow-md cursor-pointer">
                    <a class="block relative sm:h-56 h-36 sm:rounded-t-lg rounded-t-md overflow-hidden">
                    <!-- <img class="object-cover object-center w-full h-full block" src=""> -->
                    </a>
                    <div class="sm:my-3 sm:mx-4 my-2 mx-3">
                        <h2 class="text-gray-900 title-font sm:text-lg text-sm font-semibold">Product</h2>
                        <p class="mt-1 text-primary sm:text-base text-xs">Description</p>
                    </div>
                </div>

                <div class="bg-white sm:rounded-lg rounded-md shadow-md cursor-pointer">
                    <a class="block relative sm:h-56 h-36 sm:rounded-t-lg rounded-t-md overflow-hidden">
                    <!-- <img class="object-cover object-center w-full h-full block" src=""> -->
                    </a>
                    <div class="sm:my-3 sm:mx-4 my-2 mx-3">
                        <h2 class="text-gray-900 title-font sm:text-lg text-sm font-semibold">Product</h2>
                        <p class="mt-1 text-primary sm:text-base text-xs">Description</p>
                    </div>
                </div>

                <div class="bg-white sm:rounded-lg rounded-md shadow-md cursor-pointer">
                    <a class="block relative sm:h-56 h-36 sm:rounded-t-lg rounded-t-md overflow-hidden">
                    <!-- <img class="object-cover object-center w-full h-full block" src=""> -->
                    </a>
                    <div class="sm:my-3 sm:mx-4 my-2 mx-3">
                        <h2 class="text-gray-900 title-font sm:text-lg text-sm font-semibold">Product</h2>
                        <p class="mt-1 text-primary sm:text-base text-xs">Description</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

</template>

<script>
import BaseNavMobile from "../components/BaseNavMobile.vue";

export default {
  name: "Home",
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

