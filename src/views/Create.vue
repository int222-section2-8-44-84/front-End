<template>
<!-- Create -->
    <router-link to="Create">
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
        <base-nav v-if="!mobileView" />'
        
        <!-- Form Create -->
        <form @submit.prevent="submitForm">
        <div class="items-center justify-center flex h-4/5 mt-2">
        <div class="grid bg-white rounded-lg shadow-xl w-11/12 md:w-9/12 lg:w-1/2 mb-12">
            <div class="flex justify-center py-4">
            </div>
            <div class="flex justify-center">
            <div class="flex">
                <h1 class="font-bold md:text-2xl text-xl text-red-600">Wongnok</h1>
            </div>
            </div>

            <div class="grid grid-cols-1 mt-5 mx-7">
            <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Product Name</label>
            <input class="py-2 px-3 rounded-lg border-2  mt-1 focus:outline-none focus:ring-2 focus:ring-silverPink focus:border-transparent" type="text" placeholder="Input 1" />
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7">
            <div class="grid grid-cols-1">
                <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Price</label>
                <input class="py-2 px-3 rounded-lg border-2 mt-1 focus:outline-none focus:ring-2 focus:ring-silverPink focus:border-transparent" type="text" placeholder="Input 2" />
            </div>
            <div class="grid grid-cols-1">
                <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Tag</label>
                <select class="py-2 px-3 rounded-lg border-2 mt-1 focus:outline-none focus:ring-2 focus:ring-silverPink focus:border-transparent" type="text">
                    <option class="hidden" value="Select">Select...</option>
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                </select>
            </div>
            </div>

            <div class="grid grid-cols-1 mt-5 mx-7">
            <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Category</label>
            <select class="py-2 px-3 rounded-lg border-2 mt-1 focus:outline-none focus:ring-2 focus:ring-silverPink focus:border-transparent">
                <option class="hidden" value="Select">Select...</option>
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
            </select>
            </div>

            <div class="grid grid-cols-1 mt-5 mx-7">
            <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Description</label>
            <textarea class="py-2 px-3 rounded-lg border-2 mt-1 focus:outline-none focus:ring-2 focus:ring-silverPink focus:border-transparent" type="text" placeholder="Another Input"></textarea>
            </div>

            <div class="grid grid-cols-1 mt-5 mx-7">
                <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold mb-1">Upload Photo</label>
                <div class='flex items-center justify-center w-full'>
                    <label class='cursor-pointer flex flex-col border-4 border-dashed w-full h-32 hover:bg-gray-100 hover:border-silverPink group'>
                        <div class='flex flex-col items-center justify-center pt-7'>
                            <svg class="w-10 h-10 text-gray-400 group-hover:text-silverPink" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                            <p class='lowercase text-sm text-gray-400 group-hover:text-silverPink pt-1 tracking-wider'>Select a photo</p>
                        </div>
                        <input type='file' class="hidden" />
                    </label>
                </div>
            </div>

            <div class='flex items-center justify-center  md:gap-8 gap-4 pt-5 pb-5'>
                <!-- <button class='w-auto bg-gray-500 hover:bg-gray-700 rounded-lg shadow-xl font-medium text-white px-4 py-2'>Cancel</button> -->
                <button class='sm:w-11/12 bg-red-600 hover:bg-red-700 rounded-lg shadow-xl font-medium text-white px-4 py-2'>Create</button>
            </div>
        </div>
        </div>
        </form>

    </router-link>
</template>
<script>
import BaseNavMobile from "../components/BaseNavMobile.vue";

export default {
  name: "Create",
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
