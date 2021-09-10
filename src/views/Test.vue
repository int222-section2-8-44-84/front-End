<template>
<!-- LoginMobile -->
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

  <!-- Template Login/Register -->
  <div class="my-8">
    <div v-if="loginMobile">
      <div class="container sm:pb-16 pb-10 sm:px-9 px-4 mx-auto">
        <form @submit.prevent="submitLoginForm">
          <div v-bind:class="{'hidden': openTabMobile !== 3, 'block': openTabMobile === 3}">
              <!--header-->
              <img class="mx-auto px-10" src="../assets/sapiens.png">
              <div class="space-y-0">
                  <p class="font-semibold text-xl text-redRYB py-2">Welcome</p>
                  <p class="text-gray-500 text-xs">Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
              <div class="space-y-3">
                <div>
                  <input type="email" v-model="emailLogin" placeholder="Username or Email address" class="text-sm placeholder-gray w-full px-3 py-2 rounded-lg mt-3 focus:outline-none focus:ring-2 focus:ring-roseMadder focus:border-transparent" />
                  <p v-if="invalidEmailLogin" class="text-red-500 text-xs text-left italic">** Please enter your Username or Email! **</p>
                </div>

                <div>
                  <input type="password" v-model="passLogin" placeholder="Password" class="text-sm placeholder-gray w-full px-3 py-2 rounded-lg mt-3 focus:outline-none focus:ring-2 focus:ring-roseMadder focus:border-transparent" />
                  <p v-if="invalidPassLogin" class="text-red-500 text-xs text-left italic">** Please enter your Username or Password! **</p>
                </div>

                <button
                  class="font-medium text-md text-white px-3 py-1 rounded-md w-full bg-red-600 hover:bg-red-700 shadow-md"
                  type="submit">
                      Log In
                </button>
              </div>
              <!-- <base-button buttonLabel="Login"/> -->
              <div class="font-semibold text-sm text-center text-silverPink pt-3">Don't have an account?
                <a class="font-semibold text-sm text-yellow-400 hover:text-yellow-500" v-on:click="toggleTabs(4)" v-bind:class="{'': openTabMobile !== 4, '': openTabMobile === 4}">
                    Register
                </a>
              </div>
          </div>
        </form>
        
        <!-- Register -->
        <form @submit.prevent="submitRegisForm">
          <div v-bind:class="{'hidden': openTabMobile !== 4, 'block': openTabMobile === 4}">
            <!--header-->
            <img class="mx-auto px-10" src="../assets/sapiensMobile.png">
            <p class="space-y-0 font-semibold text-xl text-left text-redRYB py-2">Get Started</p>
            <div class="space-y-3">
              <div>
                <input type="text" v-model="userRegis" placeholder="Username" class="text-sm placeholder-gray w-full px-3 py-2 rounded-lg mt-3 focus:outline-none focus:ring-2 focus:ring-roseMadder focus:border-transparent" />
                <p v-if="invalidUseRegis" class="text-red-500 text-xs text-left italic">** Please enter your Username! **</p>
              </div>

              <div>
                <input type="email" v-model="emailRegis" placeholder="example@mail.com" class="text-sm placeholder-gray w-full px-3 py-2 rounded-lg mt-3 focus:outline-none focus:ring-2 focus:ring-roseMadder focus:border-transparent" />
                <p v-show="invalidEmailRegis" class="text-red-500 text-xs text-left italic">** Please enter your Email! **</p>
              </div>

              <div>
                <input type="password" v-model="passRegis" placeholder="Password" class="text-sm placeholder-gray w-full px-3 py-2 rounded-lg mt-3 focus:outline-none focus:ring-2 focus:ring-roseMadder focus:border-transparent" />
                <p v-if="invalidPassRegis" class="text-red-500 text-xs text-left italic">** Please enter your Password! **</p>
              </div>

              <button
                class="font-medium text-md text-white px-3 py-1 rounded-md w-full bg-red-600 hover:bg-red-700 shadow-md"
                type="submit">
                    Register
              </button>
            </div>

            <div class="font-semibold text-sm text-center text-silverPink pt-3">Already have an account?
              <a class="font-semibold text-sm text-yellow-400 hover:text-yellow-500" v-on:click="toggleTabs(3)" v-bind:class="{'': openTabMobile !== 3, '': openTabMobile === 3}">
                Login
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import BaseNavMobile from "../components/BaseNavMobile.vue";
export default {
    components: {
        BaseNavMobile,
    },
    data() {
        return {
            emailLogin: "",
            passLogin: "",
            userRegis: "",
            emailRegis: "",
            passRegis: "",
            mobileView: true,
            showNav: false,
            loginMobile: true,
            invalidEmailLogin: false,
            invalidPassLogin: false,
            invalidUseRegis: false,
            invalidEmailRegis: false,
            invalidPassRegis: false,
            opentab: 1,
            openTabMobile: 3,
            login: '',
            password: '',
        }
    },
    methods: {
    toggleTabs: function(tabNumber){
      this.openTab = tabNumber
      this.openTabMobile = tabNumber
    },
    showNavHam() {
      this.showNav = !this.showNav;
    },
    handleView() {
      this.mobileView = window.innerWidth <= 990;
    },
    submitLoginForm() {
      this.invalidEmailLogin = (this.emailLogin === "") ? true : false;
      this.invalidPassLogin = (this.passLogin === "") ? true : false;
      console.log(this.invalidEmailInput);
      console.log(this.invalidPassInput);
      // this.$router.push("/");
    },
    submitRegisForm(){
      this.invalidUseRegis = (this.userRegis === "") ?  true : false;
      this.invalidEmailRegis = (this.emailRegis === "") ? true : false;
      this.invalidPassRegis = (this.passRegis === "") ? true : false;
    }
    },
    created() {
        this.handleView();
        window.addEventListener("resize", this.handleView);
  },
}
</script>