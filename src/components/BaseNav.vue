<template>
  <nav class="bg-white shadow-md">
    <div class="container mx-auto py-2 px-7 flex justify-between items-center">
      <!-- Logo -->
      <router-link to="/">
        <div class="flex items-center mb-4 md:mb-0">
        <img class="leading-relaxed inline-block py-2 w-auto h-16" src="../assets/wongnoklogo.png">
        </div>
      </router-link>


    <div class="lg:flex md:flex flex-grow items-center">
        <ul class="flex flex-col lg:flex-row md:flex-row list-none mx-auto">
          <router-link to="/">
            <li class="nav-item">
                <div class="px-3 py-2 flex items-center text-2xl hover:text-redRYB">
                    Home
                </div>
            </li>
          </router-link>

            <router-link to="/Team">
                <li class="nav-item">
                    <div class="px-3 py-2 flex items-center text-2xl hover:text-redRYB">
                        Team
                    </div>
                </li>
            </router-link>

            <router-link to="/Create">
              <li class="nav-item">
                <div class="px-3 py-2 flex items-center text-2xl hover:text-redRYB">
                  + Create
                </div>
              </li>
            </router-link>
        </ul>
    </div>

    <div v-if="click">
      <input
        v-model="input"
        type="text" 
        name="query" 
        placeholder="Search" 
        class="w-full h-12 px-4 text-xl text-gray-700 bg-white border border-gray-300 
        rounded-lg lg:w-48 xl:transition-all xl:duration-300 xl:w-48 xl:focus:w-44 lg:h-10 
        dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-teal-500 
        dark:focus:border-teal-500 focus:outline-none focus:ring focus:ring-primary 
        dark:placeholder-gray-400 focus:ring-opacity-40"> 
    </div>
    <button style="font-size: 32px;" class="ml-2 ri-close-line" v-on:click="searchinput()" v-else></button>
    <i style="font-size: 32px;" class="ml-2 ri-search-line"></i>

    <!-- Login / Register -->
      <div style="font-size: 32px;">
        <button v-on:click="toggleModal()" class="items-center justify-center w-12 h-12 transition-colors duration-150 rounded-full focus:shadow-outline hover:bg-red-200 ml-5 ri-user-3-line"></button>
          <div v-if="showModal" class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex">
            <pop-up
            :showModal="showModal"
            @adding-showModal='toggleModal'
            >

            </pop-up>
          </div>
          <div v-if="showModal" class="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "regular-modal",
  data() {
    return {
      openTab: 1,
      emailLogin: "",
      passLogin: "",
      userRegis: "",
      emailRegis: "",
      passRegis: "",
      // input: '',
      showModal: false,
      invalidEmailLogin: false,
      invalidPassLogin: false,
      invalidUseRegis: false,
      invalidEmailRegis: false,
      invalidPassRegis: false,
      // click: false,
    }
  },
  methods: {
    searchinput(){
        this.click = !this.click,
        this.input = ''
    },
    toggleModal: function(){
      this.showModal = !this.showModal;
      // console.log(this.invalidEmailInput);
      // console.log(this.invalidPassInput);
    },
    toggleTabs: function(tabNumber){
      this.openTab = tabNumber
    },
    submitLoginForm() {
      // if(this.email === ""){
      //   this.invalidEmailInput = true
      // }
      this.invalidEmailLogin = (this.emailLogin === "") ? true : false;
      this.invalidPassLogin = (this.passLogin === "") ? true : false;
      // console.log(
      //   // "Email: " + this.email

      // );
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
  // computed: {
  //   filterSearch(){

  //   }
  // }
}
</script>