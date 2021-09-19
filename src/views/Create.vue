<template>
<!-- Create -->
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
        
        <!-- Form Create -->
        <form @submit.prevent="submitForm">
        <div class="items-center justify-center flex h-4/5 mt-8">
        <div class="grid bg-white rounded-lg shadow-xl w-11/12 md:w-9/12 lg:w-1/2 mb-12">
            <div class="flex justify-center py-4">
            </div>
            <div class="flex justify-center">
            <div class="flex">
                <h1 class="font-bold md:text-2xl text-xl text-red-600">Create Post</h1>
            </div>
            </div>

            <div class="grid grid-cols-1 mt-5 mx-7">
            <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Product Name</label>
            <input v-model="postName" class="py-2 px-3 rounded-lg border-2  mt-1 focus:outline-none focus:ring-2 focus:ring-roseMadder focus:border-transparent" type="text" placeholder="PostName" />
            <p v-if="invalidpostName" class="text-red-500 text-xs text-left italic">** Please enter your PostName! **</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7">
              <div class="grid grid-cols-1">
                <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Price</label>
                <div class="flex flex-row">
                  <span class="flex items-center bg-grey-lighter rounded rounded-r-none mr-2 font-bold text-gray-500">฿</span>
                  <input v-model="price" class="w-full py-2 px-3 rounded-lg border-2 mt-1 focus:outline-none focus:ring-2 focus:ring-roseMadder focus:border-transparent" type="number"/>
                </div>
                <p v-if="invalidPrice" class="text-red-500 text-xs text-left italic">** Please enter your price! **</p>
              </div>

              <div class="grid grid-cols-1">
                <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Tag</label>
                <select v-model="tags" class="py-2 px-3 rounded-lg border-2 mt-1 focus:outline-none focus:ring-2 focus:ring-roseMadder focus:border-transparent" type="text">
                    <option class="hidden" value="Select">Select...</option>
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                </select>
                <p v-if="invalidTags" class="text-red-500 text-xs text-left italic">** Please enter your Tags! **</p>
              </div>
            </div>

            <div class="grid grid-cols-1 mt-5 mx-7">
            <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Category</label>
            <select v-model="category" class="py-2 px-3 rounded-lg border-2 mt-1 focus:outline-none focus:ring-2 focus:ring-roseMadder focus:border-transparent">
                <option class="hidden" value="Select">Select...</option>
                <option>Main</option>
                <option>Dessert</option>
                <option>Drink</option>
            </select>
            <p v-if="invalidCategory" class="text-red-500 text-xs text-left italic">** Please enter your Category! **</p>
            </div>

            <div class="grid grid-cols-1 mt-5 mx-7">
              <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Description</label>
              <textarea v-model="description" class="h-28 px-3 rounded-lg border-2 mt-1 focus:outline-none focus:ring-2 focus:ring-roseMadder focus:border-transparent" type="text" placeholder="Description"></textarea>
              <p v-if="invalidDescription" class="text-red-500 text-xs text-left italic">** Please enter your Description! **</p>
            </div>

            <div class="grid grid-cols-1 mt-5 mx-7">
                <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold mb-1">Upload Photo</label>
                <div class='flex items-center justify-center w-full'>
                    <label class='cursor-pointer flex flex-col border-4 border-dashed w-full  hover:bg-gray-100 hover:border-roseMadder group'>
                        <div v-if="!image" class='flex flex-col items-center justify-center py-7'>
                            <svg class="w-10 h-10 text-gray-400 group-hover:text-roseMadder" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                            </svg>
                            <p class='lowercase text-sm text-gray-400 group-hover:text-roseMadder pt-1 tracking-wider'>Select a photo</p>
                        </div>
                        <div id="preview" v-else>
                            <img :src="imageshow" class="object-cover object-top w-auto max-h-96"/>
                        </div>
                            <input id="file-input" type="file" class="hidden" @change="uploadPhoto($event)" />
                    </label>
                </div>
                <p v-if="invalidImage" class="text-red-500 text-xs text-left italic">** Please enter your Photo! **</p>
            </div>

            <div class="grid grid-cols-1 mt-5 mx-7 pb-3">
              <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Rating</label>
                <div class="flex justify-center">
                    <button type="button" v-for="i in 5" :key="i" :class="{ 'mr-1': i < 5 }" @click="ratingStar(i)" class="focus:outline-none">
                    <svg class="block h-8 w-8" :class="[value >= i ? 'text-yellow-400' : 'text-gray-200']" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path>
                    </svg>
                  </button>
                </div>
            </div>

            <div class='flex items-center justify-center md:gap-8 gap-4 pt-5 pb-5 xl:px-8 md:px-8'>
                <button v-on:click="resetCreate()" class='sm:w-6/12 bg-blue-500 hover:bg-blue-600 rounded-lg shadow-xl font-medium text-white text-xl px-4 py-2'>Reset</button>
                <button type="submit" class='sm:w-6/12 bg-red-600 hover:bg-red-700 rounded-lg shadow-xl font-medium text-white text-xl px-4 py-2'>Create</button>
            </div>
        </div>
        </div>       
        </form>
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
        image: '',
        imageshow: '',
        postName: '',
        price: '',
        tags: '',
        category: '',
        description: '',
        invalidpostName: false,
        invalidPrice: false,
        invalidTags: false,
        invalidCategory: false,
        invalidDescription: false,
        invalidImage: false,
        mobileView: true,
        showNav: false, 
    };
  },

  methods: {
    ratingStar(i){
      console.log(i);
    },
    showNavHam() {
      this.showNav = !this.showNav;
    },
    handleView() {
      this.mobileView = window.innerWidth <= 990;
    },
    uploadPhoto(e) {
      this.image = e.target.files[0];
      this.imageshow = e.target.files[0];
      var reader = new FileReader();
      reader.onload = (e) => {
        this.imageshow = e.target.result;
      };
      reader.readAsDataURL(this.imageshow);
      console.log(this.image);
      console.log(this.image.name);
    },
    resetCreate(){
      this.postName = null
      this.price = null
      this.tags = null
      this.category = null
      this.description = null
      this.image = null
      this.imageshow = null
    },
    submitForm() {
    this.invalidpostName = (this.postName === "") ? true : false;
    this.invalidPrice = (this.price === "") ? true : false;
    this.invalidTags = (this.tags === "") ? true : false;
    this.invalidCategory = (this.category === "") ? true : false;
    this.invalidDescription = (this.description === "") ? true : false;
    this.invalidImage = (this.image === "") ? true : false;
    //document.getElementById("tags").value == "" ? true : false;

      console.log(
        "postName: " + this.invalidpostName,
        "price: " + this.invalidPrice,
        "tag:" + this.invalidTags,
        "category:" + this.invalidCategory,
        "description:" + this.invalidDescription,
        "image:" + this.invalidImage,
      );

    },

  },
  created() {
    this.handleView();
    window.addEventListener("resize", this.handleView);
  },
};
</script>
