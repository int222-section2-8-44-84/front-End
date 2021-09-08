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
                <div class="px-3 py-2 flex items-center text-xl text-base hover:text-redRYB">
                    Home
                </div>
            </li>
          </router-link>

            <router-link to="/Team">
                <li class="nav-item">
                    <div class="px-3 py-2 flex items-center text-xl text-base hover:text-redRYB">
                        Team
                    </div>
                </li>
            </router-link>

            <router-link to="/Create">
              <li class="nav-item">
                <div class="px-3 py-2 flex items-center text-base text-xl hover:text-redRYB">
                  + Create
                </div>
              </li>
            </router-link>
        </ul>
    </div>

    <div>
      <input 
        type="search" 
        name="query" 
        placeholder="Search" 
        class="w-full h-12 px-4 text-sm text-gray-700 bg-white border border-gray-300 
        rounded-lg lg:w-36 xl:transition-all xl:duration-300 xl:w-36 xl:focus:w-44 lg:h-10 
        dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-teal-500 
        dark:focus:border-teal-500 focus:outline-none focus:ring focus:ring-primary 
        dark:placeholder-gray-400 focus:ring-opacity-40">
    </div> 

    <!-- Login / Register -->
      <div style="font-size: 32px;">
        <button v-on:click="toggleModal()" class="items-center justify-center w-12 h-12 transition-colors duration-150 rounded-full focus:shadow-outline hover:bg-red-200 ml-5 ri-user-3-line"></button>
          <div v-if="showModal" class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex">
            <div class="relative w-auto my-6 mx-auto max-w-md">
      <!--LogInForm-->
              <form @submit.prevent="submitLoginForm">
                <div v-bind:class="{'hidden': openTab !== 1, 'block': openTabMobile === 1}">
                  <div class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"> 
                    <!--header-->
                    <div class="flex items-start justify-between p-3 rounded-t">
                      <button class="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-medium outline-none focus:outline-none" 
                        v-on:click="toggleModal()">
                          <i class="ri-close-fill"></i>
                      </button>
                    </div>         
                    <img class="mx-auto px-20" src="../assets/sapiens.png">

                    <!--body-->
                    <div class="relative px-12 flex-auto">
                      <div class="space-y-3">
                        <div>
                          <input type="email" v-model="emailLogin" placeholder="Username or Email address" class="placeholder-gray block text-lg py-2 px-4 rounded-lg w-full  border-2 border-gray-100 shadow-sm outline-none" />
                          <p v-if="invalidEmailLogin" class="text-red-500 text-xs text-left italic">** Please enter your Username or Email! **</p>
                        </div>
                  
                        <div>
                          <input type="password" v-model="passLogin" placeholder="Password" class="placeholder-gray block text-lg py-2 px-4 rounded-lg w-full border-2 border-gray-100 shadow-sm outline-none" />
                          <p v-if="invalidPassLogin" class="text-red-500 text-xs text-left italic">** Please enter your Password! **</p>
                        </div>

                        <button class="ButtonSubmit font-semibold text-2xl text-white py-2 px-4 rounded-lg w-full bg-red-600 hover:bg-red-700 shadow-lg"
                          type="submit">
                            Log In
                        </button>
                  
                        <div class="cursor-pointer text-silverPink text-lg font-semibold">
                          Don’t have an account? 
                            <a v-on:click="toggleTabs(2)" v-bind:class="{'': openTabMobile !== 2, '': openTabMobile === 2}" 
                              class="text-yellow-400 hover:text-yellow-500">
                                Register 
                            </a>
                        </div>
                      </div>
                    </div>   

                    <!--footer-->
                    <div class="flex items-center justify-end p-3 rounded-b"></div>
                  </div>
                </div>
              </form>
              
      <!-- RegisterForm -->
              <form @submit.prevent="submitRegisForm">
                <div v-bind:class="{'hidden': openTab !== 2, 'block': openTabMobile === 2}">
                  <div class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"> 
                    
                    <!--header-->
                    <div class="flex items-start justify-between p-3 rounded-t">
                      <button class="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-medium outline-none focus:outline-none" 
                        v-on:click="toggleModal()">
                          <i class="ri-close-fill"></i>
                      </button>
                    </div>          

                    <!--body-->
                    <div class="relative px-12 flex-auto">
                      <div class="space-y-3">
                        <p class="font-medium text-3xl text-left text-redRYB py-2">Get Started</p>
                        <div>
                          <input type="text" v-model="userRegis" placeholder="Username" class="placeholder-gray block text-lg py-2 px-4 rounded-lg w-full border-2 border-gray-100 shadow-sm outline-none" />
                          <p v-if="invalidUseRegis" class="text-red-500 text-xs text-left italic">** Please enter your Username! **</p>
                        </div>
                    
                        <div class="">
                        <input type="email" v-model="emailRegis" placeholder="example@mail.com" class="placeholder-gray block text-lg py-2 px-4 rounded-lg w-full  border-2 border-gray-100 shadow-sm outline-none" />
                        <p v-show="invalidEmailRegis" class="text-red-500 text-xs text-left italic">** Please enter your Email! **</p>
                        </div>

                        <div>
                          <input type="password" v-model="passRegis" placeholder="Password" class="placeholder-gray block text-lg py-2 px-4 rounded-lg w-full border-2 border-gray-100 shadow-sm outline-none" />
                          <p v-if="invalidPassRegis" class="text-red-500 text-xs text-left italic">** Please enter your Password! **</p>
                        </div>
                  
                        <button class="ButtonSubmit font-semibold text-2xl text-white py-2 px-32 rounded-lg w-full bg-red-600 hover:bg-red-700 shadow-lg"
                          type="submit">
                            Register
                        </button>
                  
                        <div class="cursor-pointer text-silverPink text-lg font-semibold">
                          Already have an account? 
                            <a v-on:click="toggleTabs(1)" v-bind:class="{'': openTabMobile !== 1, '': openTabMobile === 1}" class="text-yellow-400 hover:text-yellow-500">Log In</a>
                        </div>
                      </div>
                    </div>

                    <!--footer-->
                    <div class="flex items-center justify-end p-3 rounded-b"></div>
                  </div>
                </div>
              </form>
            </div>
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
      showModal: false,
      invalidEmailLogin: false,
      invalidPassLogin: false,
      invalidUseRegis: false,
      invalidEmailRegis: false,
      invalidPassRegis: false,
    }
  },
  methods: {
    toggleModal: function(){
      this.showModal = !this.showModal;
      console.log(this.invalidEmailInput);
      console.log(this.invalidPassInput);
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
  }
}
</script>