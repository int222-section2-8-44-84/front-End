<template>
<!-- ManageManager -->
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
            </div>
        </div>
        <base-nav-mobile v-if="showNav" />
        <base-nav v-if="!mobileView" />

        <div class="min-w-screen flex items-center p-5 lg:p-8 relative">
            <div class="w-full max-w-6xl rounded-md bg-white shadow-xl p-10 lg:p-10 mx-auto text-gray-800 relative md:text-left">
                <div class="md:flex items-center -mx-10">

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
