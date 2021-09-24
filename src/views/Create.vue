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
            <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Post Title</label>
            <input v-model="postTitle" class="py-2 px-3 rounded-lg border-2  mt-1 focus:outline-none focus:ring-2 focus:ring-roseMadder focus:border-transparent" type="text" placeholder="PostTitle" />
            <p v-if="invalidPostTitle" class="text-red-500 text-xs text-left italic">** Please enter your PostTitle! **</p>
            </div>

            <div class="grid grid-cols-1 mt-5 mx-7">
            <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Food Name</label>
            <input v-model="foodName" class="py-2 px-3 rounded-lg border-2  mt-1 focus:outline-none focus:ring-2 focus:ring-roseMadder focus:border-transparent" type="text" placeholder="FoodName" />
            <p v-if="invalidFoodName" class="text-red-500 text-xs text-left italic">** Please enter your FoodName! **</p>
            </div>

            <div class="grid grid-cols-1 mt-5 mx-7">
            <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Restaurant</label>
            <input v-model="restaurant" class="py-2 px-3 rounded-lg border-2  mt-1 focus:outline-none focus:ring-2 focus:ring-roseMadder focus:border-transparent" type="text" placeholder="Restaurant" />
            <p v-if="invalidRestaurant" class="text-red-500 text-xs text-left italic">** Please enter your Restaurant! **</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7">
            <div class="grid grid-cols-1">
                <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Price</label>
                <div class="flex flex-row">
                  <span class="flex items-center bg-grey-lighter rounded rounded-r-none mr-2 font-bold text-gray-500">฿</span>
                  <input v-model="price" class="w-full py-2 px-3 rounded-lg border-2 mt-1 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent" type="number"/>
                </div>
                <p v-if="invalidPrice" class="text-red-500 text-xs text-left italic">** Please enter your price! **</p>
            </div>
            <div class="grid grid-cols-1">
                <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Category</label>
                <select v-model="category" class="py-2 px-3 rounded-lg border-2 mt-1 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent">
                  <option class="hidden" value="Select">Select...</option>
                  <option v-for="category in categories" :key="category.categoryId" :value="category.categoryId" class="select-none">{{ category.category }}</option>
                  </select>
                <p v-if="invalidCategory" class="text-red-500 text-xs text-left italic">** Please enter your Category! **</p>
            </div>
            </div>

            <div class="grid grid-cols-1 mt-5 mx-7">
              <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Tags</label>
              <div class="border border-4 border-gray-300 border-opacity-75 rounded-lg overflow-y-scroll" style="height: 15vh;">
                  <div v-for="(tag, key) in tag" :key="tag.tagId" class="text-left ml-3 my-2 text-lg">
                    <input type="checkbox" :id="key" v-model="tags[key]" >
                    <label :for="key" class="ml-2">{{ tag.tag }}</label>
                  </div>
              </div>
              <p v-if="invalidTags" class="text-red-500 text-xs text-left italic">** Please enter your Tags! **</p>
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
                <base-button v-on:click="resetCreate()" class="bg-blue-500 hover:bg-blue-600 rounded-lg px-4 py-2 " label="Reset"/>
                <base-button type="submit" class="bg-red-600 hover:bg-red-700 rounded-lg px-4 py-2" label="Create"/>
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
        postTitle: '',
        foodName: '',
        restaurant: '',
        price: '',
        // postTime: '',
        user: 1,
        rating: 0,
        tags: [],
        tagsData: [],
        category: '',
        description: '',
        invalidPostTitle: false,
        invalidFoodName: false,
        invalidRestaurant: false,
        invalidPrice: false,
        invalidTags: false,
        invalidCategory: false,
        invalidDescription: false,
        invalidImage: false,
        mobileView: true,
        showNav: false,
        urlcategory: "http://localhost:3000/showAllCategories",
        urlpost: "http://localhost:3000/posts",
        urltag: "http://localhost:3000/showAllTags",
        urlposthastag: "http://localhost:3000/showPostsHasTags",
        urladdpost: "http://localhost:3000/createPost",
        urladdupload: "http://localhost:3000/uploadimage",
        
        categories: [],
        tag: [],
        posts: [],
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
      this.postTitle = null
      this.price = null
      this.tags = null
      this.category = null
      this.description = null
      this.image = null
      this.imageshow = null
      this.tags = []
      this.tagsData = []
    },
    submitForm() {
    this.invalidPostTitle = (this.postTitle === "") ? true : false;
    this.invalidFoodName = (this.foodName === "") ? true : false;
    this.invalidRestaurant = (this.restaurant === "") ? true : false;
    this.invalidPrice = (this.price === "") ? true : false;
    this.invalidTags = (this.tags.length === 0 ) ? true : false;
    this.invalidCategory = (this.category === "") ? true : false;
    this.invalidDescription = (this.description === "") ? true : false;
    this.invalidImage = (this.image === "") ? true : false;
    //document.getElementById("tags").value == "" ? true : false;

      if (
        this.postTitle !== "" &&
        this.foodName !== "" &&
        this.restaurant != "" &&
        this.price !== "" &&
        this.description !== "" &&
        this.category !== "" &&
        this.image !== null &&
        this.tags.length !== 0
      ) {
        // this.addPostsData();
        this.addAllPostsData();
      }

      // console.log(
      //   "postTitle: " + this.postTitle,
      //   "food: " + this.foodName,
      //   "price: " + this.price,
      //   "tag:" + this.tags,
      //   "category:" + this.category,
      //   "description:" + this.description,
      //   // "postTime" + 
      //   "image:" + this.image,
      // );

    },
    
     async addPostsData(){ 
       console.log("postTitle: " + this.postTitle,
          "food: " + this.foodName,
          "restaurant: "+ this.restaurant,
          "foodPrice:" + this.price,
          "description: " + this.description,
          "reviewRate: "+ this.rating,
          "postTime: "+ Date.now(),
          "imageName: "+ this.image.name,
          "userNumber: " +this.user, 
          "tag: " +this.tags,
          "categoryId: "+ this.category),
      await fetch(this.urladdpost, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          postTitle: this.postTitle,
          food: this.foodName,
          restaurant: this.restaurant,
          foodPrice: this.price,
          description: this.description,
          reviewRate: this.rating,
          postTime: Date.now(),
          imageName: this.image.name,
          userNumber: this.user, 
          // tag: this.tags,
          categoryId: this.category,
        }),
      });
      var formData = new FormData();
      formData.append("file",this.image,this.image.name);
      await fetch(this.urladdupload, {
        method: "POST",
        body: formData,
      });
    },
    async addTags(tag){
      await fetch(this.urltag, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(
          tag
        ),
      });
    },
    // async addUploadPhoto(p){
    //   var formData = new FormData();
    //   formData.append("file",p,p.name);
    //   await fetch(this.urladdupload, {
    //     method: "POST",
    //     body: formData,
    //   });
    // },

    async getBackEndData(url) {
      try {
        const res = await fetch(url);
        const data = await res.json();
        return data;
      } catch (error) {
        console.log(`Could not get ${error}`);
      }
    },

     async addAllPostsData(){ 
       this.tagsData = [];
       for(let i=0;i < this.tags.length;i++){
        if(this.tags[i] == true){
          this.tagsData.push(this.tag[i]);
        }
      }
      
       let timeElapsed = Date.now();
        var today = new Date(timeElapsed);
        today.toUTCString();
        console.log(today);
      var formData = new FormData();
      let post = JSON.stringify({
          postTitle: this.postTitle,
          food: this.foodName,
          restaurant: this.restaurant,
          foodPrice: this.price,
          description: this.description,
          reviewRate: this.rating,
          postTime: today,
          imageName: this.image.name,
          userNumber: this.user,
          categoryId: this.category,
        })
      formData.append("post", post);
      
      formData.append("tags",JSON.stringify(this.tagsData));
      formData.append("file",this.image,this.image.name);

     

      console.log(
        
          "postTitle: " + this.postTitle,
          "food: " + this.foodName,
          "restaurant: "+ this.restaurant,
          "foodPrice:" + this.price,
          "description: " + this.description,
          "reviewRate: "+ this.rating,
          "postTime: "+ today,
          "imageName: "+ this.image.name,
          "userNumber: " +this.user, 
          "tag: " +this.tagsData,
          "categoryId: "+ this.category
          )
      // console.log(formData);
      
      await fetch("http://localhost:3000/createPostWithImage", {
        method: "POST",
        // headers: {
        //   "Content-type": "application/json",
        // },
        body: formData
      });
      
    },

  },
  async created() {
    this.handleView();
    window.addEventListener("resize", this.handleView);
    this.posts = await this.getBackEndData(this.urlpost);
    this.categories = await this.getBackEndData(this.urlcategory);
    this.tag = await this.getBackEndData(this.urltag);
    
  },
};
</script>
