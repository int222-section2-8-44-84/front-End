<template>
<!-- Team -->
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

        <!-- component -->
        <div class="m-auto max-w-6xl p-12 sm:mt-12 lg:mt-2">
            <div class="flex flex-col md:flex-row justify-center">
                <div class="md:w-1/3 max-w-md flex flex-col justify-center">
                    <div class="xl:text-5xl lg:text-3xl md:text-3xl text-2xl text-left uppercase font-extrabold">
                        KRITSANAPON RAKKIATNGAM
                    </div>
                    <div class="text-xl sm:mt-4 text-left">
                        <!-- <div class="mb-5">62130500008 <br>Responsibilty : Database, Front-End, Back-End</div> -->
                        <div class="mb-5">My name is Kritsanapon Rakkiatngam or you can call me MeLo, I am a third-year student in School Information Technology major at KMUTT.</div>
                        <a href="https://github.com/MeLoLonjiNo" class="shadow-md font-medium py-2 px-16 text-white cursor-pointer bg-red-500 hover:bg-red-600 rounded text-lg text-center w-48">
                            Contact
                        </a>
                    </div>
                    
                </div>
                
                <div class="flex md:justify-end w-full md:w-1/2 sm:-mt-5">
                    <div class="bg-dots">
                        <div class="max-w-md z-10 mt-6 ml-4">
                            <img alt="card img" class="shadow-2xl w-64 md:w-64 lg:w-80 2xl:w-80 2xl:h-auto rounded-full" src="../assets/melo.jpeg">
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- component -->
        <div class="m-auto max-w-6xl p-12 sm:mt-12 lg:mt-2">
            <div class="flex flex-col md:flex-row justify-center">
                <div class="md:w-1/3 max-w-md flex flex-col justify-center">
                    <div class="xl:text-5xl lg:text-3xl md:text-3xl text-2xl text-left uppercase font-extrabold">
                        NIPPIT CHOTIGO
                    </div>
                    <div class="text-xl sm:mt-4 text-left">
                        <!-- <div class="mb-5">62130500044 <br>Responsibilty : Database, Devops, Back-End</div> -->
                        <div class="mb-5">My name is Nippit Chotigo or you can call me Kin, I am a third-year student in School Information Technology major at KMUTT.</div>
                        <a href="https://github.com/Chicky0" class="shadow-md font-medium py-2 px-16 text-white cursor-pointer bg-red-500 hover:bg-red-600 rounded text-lg text-center w-48">
                            Contact
                        </a>
                    </div>   
                </div>
                
                <div class="flex md:justify-end w-full md:w-1/2 sm:-mt-5">
                    <div class="bg-dots">
                        <div class="max-w-md z-10 mt-6 ml-4">
                            <img alt="card img" class="shadow-2xl w-64 md:w-64 lg:w-80 2xl:w-80 2xl:h-auto rounded-full" src="../assets/nippit.jpg">
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- component -->
        <div class="m-auto max-w-6xl p-12 sm:mt-12 lg:mt-2">
            <div class="flex flex-col md:flex-row justify-center">
                <div class="md:w-1/3 max-w-md flex flex-col justify-center">
                    <div class="xl:text-5xl lg:text-3xl md:text-3xl text-2xl text-left uppercase font-extrabold">
                        WARISARA KHRUAJINLI
                    </div>
                    <div class="text-xl sm:mt-4 text-left">
                        <!-- <div class="mb-5">62130500084 <br>Responsibilty : Front-End, Back- End</div> -->
                        <div class="mb-5">My name is Warisara Khruajinli or you can call me Namwaan, I am a third-year student in School Information Technology major at KMUTT.</div>
                        <a href="https://github.com/warisara-khruajinli" class="shadow-md font-medium py-2 px-16 text-white cursor-pointer bg-red-500 hover:bg-red-600 rounded text-lg text-center w-48">
                            Contact
                        </a>
                    </div>
                </div>
                
                <div class="flex md:justify-end w-full md:w-1/2 sm:-mt-5">
                    <div class="bg-dots">
                        <div class="max-w-md z-10 mt-6 ml-4">
                            <img alt="card img" class="shadow-2xl w-64 md:w-64 lg:w-80 2xl:w-80 2xl:h-auto rounded-full" src="../assets/namwaan.jpg"> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>


<script>
import BaseNavMobile from "../components/BaseNavMobile.vue";

export default {
  name: "Product",
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




