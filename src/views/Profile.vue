<template>
<!-- Profile -->
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

        <div class="items-center justify-center flex h-4/5 mt-8">
            <div class="grid bg-white rounded-lg shadow-xl w-11/12 md:w-9/12 lg:w-1/2 mb-12">
                <div class="flex justify-center py-4">
                </div>
                    <div class="flex justify-center">
                        <div class="flex">
                            <h1 class="font-bold md:text-2xl text-xl text-red-600">Profile</h1>
                        </div>
                    </div>
                    <div class="flex justify-center my-3">
                        <div class="flex">
                            <h3 class="text-romanSilver">Personal login information of your account</h3>
                        </div>
                    </div>

                <form @submit.prevent="submitForm">
                    <div class="grid grid-cols-1 mt-5 mx-7">
                        <label class="uppercase md:text-sm text-xs text-gray-500 text-light text-left font-semibold">Username</label>
                        <input v-model="userName" class="py-2 px-3 rounded-lg border-2  mt-1 focus:outline-none focus:ring-2 focus:ring-roseMadder focus:border-transparent" type="text" placeholder="Username" />
                        <p v-if="invalidUserName" class="text-red-500 text-xs text-left italic">** Please enter your username! **</p>
                    </div>
                    <div class="grid grid-cols-1 mt-5 mx-7">
                        <label class="uppercase md:text-sm text-xs text-gray-500 text-light text-left font-semibold">Email</label>
                        <input v-model="email" class="py-2 px-3 rounded-lg border-2  mt-1 focus:outline-none focus:ring-2 focus:ring-roseMadder focus:border-transparent" type="text" placeholder="example@mail.com" />
                        <p v-if="invalidEmail" class="text-red-500 text-xs text-left italic">** Please enter your email! **</p>
                    </div>
                    <div class="grid grid-cols-1 mt-5 mx-7">
                        <label class="uppercase md:text-sm text-xs text-gray-500 text-light text-left font-semibold">Role</label>
                        <input class="disabled py-2 px-3 rounded-lg border-2  mt-1 focus:outline-none focus:ring-2 focus:ring-roseMadder focus:border-transparent"  />
                    </div>


                    <div class='flex items-center justify-center md:gap-8 gap-4 pt-5 pb-5 xl:px-8 md:px-8'>
                        <button type="submit" class='sm:w-6/12 bg-blue-500 hover:bg-blue-600 rounded-lg shadow-xl font-medium text-white text-xl px-4 py-2'>Update</button>
                        <button class='sm:w-6/12 bg-red-600 hover:bg-red-700 rounded-lg shadow-xl font-medium text-white text-xl px-4 py-2'>Delete</button>
                    </div>
                </form>

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
        userName: '',
        email: '',
        mobileView: true,
        showNav: false, 
        invalidUserName: false,
        invalidUEmail: false,
    };
  },

  methods: {
    showNavHam() {
      this.showNav = !this.showNav;
    },
    handleView() {
      this.mobileView = window.innerWidth <= 990;
    },
    submitForm() {
    this.invalidUserName = (this.userName === "") ? true : false;
    this.invalidEmail = (this.email === "") ? true : false;
    },
  },
  created() {
    this.handleView();
    window.addEventListener("resize", this.handleView);
  },
};
</script>
