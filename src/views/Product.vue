<template>
<!-- Product -->
<div class="Product">
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

    
<!-- Body-->
<div class="min-w-screen flex items-center p-5 lg:p-8 relative">
    <div class="w-full max-w-6xl rounded-md bg-white shadow-xl p-10 lg:p-10 mx-auto text-gray-800 relative md:text-left">
        <div class="md:flex items-center -mx-10">
            <div class="w-full md:w-1/2 px-10 mb-10 md:mb-0">
                <div class="relative">
                    <img src="https://pngimg.com/uploads/raincoat/raincoat_PNG53.png" class="w-full relative z-10" alt="">
                    <div class="border-4 border-yellow-200 absolute top-10 bottom-10 left-10 right-10 z-0"></div>
                </div>
            </div>

            <div class="w-full lg:w-1/2 md:w-1/2 px-5 xl:pr-24">
                <div class="mb-3">
                    <h2 class="text-sm title-font text-gray-500 tracking-widest">CATEGORY</h2>
                    <h1 class="font-bold uppercase text-2xl mb-5">Mens's Ragged <br>Waterproof Jacket</h1>
                    <div class="flex mb-4">
                        <span class="flex items-center">
                            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-black" viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                            </svg>
                            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-black" viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                            </svg>
                            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-black" viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                            </svg>
                            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-black" viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                            </svg>
                            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-gray-400" viewBox="0 0 24 24">
                               <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                            </svg>
                            <p class="text-gray-600 ml-3">4 Reviews</p>
                            <div class="flex ml-3 pl-3 py-2 border-l-2 border-gray-300 space-x-2"></div>
                            <p class="text-gray-600">dd-mm-yyyy</p>
                        </span>
                    </div>
                
                    <p class="text-base text-justify">
                        Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia
                        microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn.
                        Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over,
                        neutra jean shorts keytar banjo tattooed umami cardigan.
                    </p>
                </div>

                <div>
                    <div class="flex items-center pb-5 border-b-2 border-gray-200 mb-5">
                        <div class="flex items-center">
                            <span class="text-gray-400 mr-3">Tag : </span>
                            <!-- <div class="flex ml-2 text-black bg-gray-300 border-0 py-2 px-6 rounded-full"># Lorem ipsum</div> -->
                        </div>
                    </div>

                    <div class="flex inline-block align-bottom">
                        <span class="title-font font-medium text-2xl text-black">$58.00</span>
                        <!-- <button type="submit" class='sm:w-24 sm:ml-auto bg-red-600 hover:bg-red-700 rounded-lg shadow-xl font-medium text-white px-4 py-2'>Create</button>
                        <button type="submit" class='sm:w-24 sm:ml-4 bg-red-600 hover:bg-red-700 rounded-lg shadow-xl font-medium text-white px-4 py-2'>Create</button> -->
                    </div>
                        <router-link to='/Edit'>
                            <button class="mt-3 ml-auto text-white bg-yellow-400 py-2 px-6 hover:bg-yellow-500 rounded">Edit</button>
                        </router-link>
                        <router-link to='/ManageMember'>
                            <button class="mt-3 ml-4 text-white bg-red-500 px-4 py-2 hover:bg-red-600 rounded">Delete</button>
                        </router-link>
                </div>
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




