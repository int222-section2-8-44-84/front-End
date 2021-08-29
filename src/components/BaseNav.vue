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
                <div class="px-3 py-2 flex items-center text-xl text-base hover:text-red-600">
                    Home
                </div>
            </li>
          </router-link>

            <router-link to="/Team">
                <li class="nav-item">
                    <div class="px-3 py-2 flex items-center text-xl text-black hover:text-red-600">
                        Team
                    </div>
                </li>
            </router-link>

            <router-link to="/Create">
              <li class="nav-item">
                <div class="px-3 py-2 flex items-center text-base text-xl hover:text-red-600">
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
      <button v-on:click="toggleModal()" class="ml-5 hover:text-red-600 ri-user-3-line"></button>
        <div v-if="showModal" class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex">
          <div class="relative w-auto my-6 mx-auto max-w-md">
            <!--content-->
            <div class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              <!--header-->

              <div class="flex items-start justify-between p-3 rounded-t">
                <!-- <img class="w-auto h-60 " src="../assets/sapiens.png"> -->
                <!-- <h3 class="text-3xl font-semibold">
                  Modal Title
                </h3> -->
                <button class="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-medium outline-none focus:outline-none" 
                v-on:click="toggleModal()">
                  <i class="ri-close-fill"></i>
                </button>
              </div>
              <img class="mx-auto px-16" src="../assets/sapiens.png">

              <!--body-->
              <div class="relative px-6 flex-auto">
                <div class="space-y-3">
                  <input type="email" placeholder="example@mail.com" class="block text-lg py-3 px-4 rounded-lg w-full  border-2 border-gray-100 shadow-sm outline-none" />
                  <input type="text" placeholder="Password" class="block text-lg py-3 px-4 rounded-lg w-full border-2 border-gray-100 shadow-sm outline-none" />
                </div>
                <!-- <p class="my-4 text-blueGray-500 text-lg leading-relaxed">
                  I always felt like I could do anything. That’s the main
                  thing people are controlled by! Thoughts- their perception
                  of themselves! They're slowed down by their perception of
                  themselves. If you're taught you can’t do anything, you
                  won’t do anything. I was taught I could do everything.
                </p> -->
              </div>

              <!--footer-->
              <div class="flex items-center justify-end p-6 rounded-b">
                <!-- <button 
                  class="text-red-500 bg-transparent border border-solid border-red-500 hover:bg-red-500 hover:text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" 
                  type="button" 
                  v-on:click="toggleModal()">
                    Close
                </button> -->
              </div>
            </div>
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
      showModal: false
    }
  },
  methods: {
    toggleModal: function(){
      this.showModal = !this.showModal;
    }
  }
}
</script>