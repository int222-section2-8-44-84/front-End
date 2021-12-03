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

 <div class="min-w-screen flex items-center p-5 lg:p-8 relative">
    <div class="w-full max-w-3xl rounded-md bg-white shadow-xl p-10 lg:p-10 mx-auto text-gray-800 relative md:text-left">
        <div class="md:flex items-center -mx-10">
            <div class="w-full md:w-1/2 px-10 mb-10 md:mb-0">
                <div class="relative">
                    <img src="../assets/sapiensProfile.png" class="w-full relative z-10">
                    <!-- <div class="border-4 border-yellow-200 absolute top-10 bottom-10 left-10 right-10 z-0"></div> -->
                </div>
            </div>

            <div class="w-full lg:w-1/2 md:w-1/2 px-5 md:pr-12 xl:pr-24">
                <div class="mb-3">
                    <h1 class="font-bold uppercase text-4xl pb-4">Profile</h1>
                    <h1 class="text-base pb-2">Username : {{this.account.userID}}</h1>
                    <p class="text-base pb-2">Email : {{this.account.email}}</p>
                    <p class="text-base pb-2">Role : {{this.account.role.role}}</p>
                </div>

                <div class="flex">
                        <button @click="EditMember()" class="text-white mr-2 bg-yellow-400 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded shadow-lg">Edit</button>
                        <div v-if="showPro" class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex">
                          <edit-profile
                            @adding-edit-profile="close"
                            :account= "this.id"
                          >
                          </edit-profile>
                        </div>
                        <div v-if="showPro" class="opacity-25 fixed inset-0 z-40 bg-black"></div>
                    
                    <button @click="deletePost()" class="text-white bg-red-500 border-0 py-2 px-4 focus:outline-none hover:bg-red-600 rounded shadow-lg">Delete Account</button>
                    <div v-if="checkDel" class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex">
                      <confirm-delete
                        @adding-close-modal="delModal"
                      >
                      </confirm-delete>
                    </div>
                    <div v-if="checkDel" class="opacity-25 fixed inset-0 z-40 bg-black"></div>

                </div>
            </div>  
        </div>
    </div>
</div>

</template>
<script>
import BaseNavMobile from "../components/BaseNavMobile.vue";
import EditProfile from "../views/EditProfile.vue"

export default {
    el: '#color-picker',
  components: {
    BaseNavMobile,
    EditProfile
  },
  data() {
    return {
      mobileView: true,
      showNav: false,
      showPro: false,
      checkDel: false,
      account: null,
      accountTags: "https://localhost:3000/me",
      id: 0
    };
  },

  methods: {
    showNavHam() {
      this.showNav = !this.showNav;
    },
    handleView() {
      this.mobileView = window.innerWidth <= 990;
    },
    close(){
        this.showPro =! this.showPro;
    },
    EditMember(){
        this.showPro = !this.showPro;
        this.id = this.account;
    },
    async deletePost(){
      this.checkDel = !this.checkDel;
    },

    async getBackEndData(url) {
      var token = localStorage.getItem("token");
      //console.log(token);
      try {
        const res = await fetch(url, {
          method: "GET",
          headers: {
            "Authorization": token,
          },
        });
        const data = await res.json();
        return data;
      } catch (error) {
        console.log(`Could not get ${error}`);
      }
    },
    checkAuthen(){
      if(localStorage.getItem("token")==null){
        alert("Please Log in to use this feature.")
        this.$router.push("/");
      }
    }
  },
  async created() {
    this.checkAuthen();
    this.handleView();
    window.addEventListener("resize", this.handleView);
    this.account = await this.getBackEndData(this.accountTags);
  },
};
</script>
