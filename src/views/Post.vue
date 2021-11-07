<template>
<!-- Post -->
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

    <!-- Status Del -->
    <div v-show="checktran">
        <div v-show="red" class="bg-red-500 py-2 w-full text-white text-center">Error !! : {{errorMessage}}</div>
        <div v-show="green" class="bg-green-500 py-2 w-full text-white text-center">Delete success</div>
    </div>

<!-- Body-->
<!-- <div v-for="post in posts" :key="post.postNumber"> -->
<div class="min-w-screen flex items-center p-5 lg:p-8 relative">
    <div class="w-full max-w-6xl rounded-md bg-white shadow-xl p-10 lg:p-10 mx-auto text-gray-800 relative md:text-left">
        <div class="md:flex items-center -mx-10">
            <div class="w-full md:w-1/2 px-10 mb-10 md:mb-0">
                <div class="relative">
                    <img :src="createImageUrl(post.imageName)" class="w-full relative z-10">
                    <!-- <div class="border-4 border-yellow-200 absolute top-10 bottom-10 left-10 right-10 z-0"></div> -->
                </div>
            </div>

            <div class="w-full lg:w-1/2 md:w-1/2 px-5 md:pr-12 xl:pr-24">
                <div class="mb-3">
                    <h2 class="text-base font-semibold title-font text-gray-400 uppercase tracking-widest">{{ this.post.categories.category }}</h2>
                    <h1 class="font-bold uppercase text-2xl">Title : {{this.post.postTitle}}</h1>
                    <h1 class="font-medium text-2xl">Food : {{ this.post.food }}</h1>
                    <h1 class="text-base">@Username</h1>
                    <div class="flex mb-4">
                        <span class="flex items-center">
                            <svg v-for="starColor in this.reviewRateStarColors" :key="starColor" fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4" viewBox="0 0 24 24" :style="{'color': starColor}">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                            </svg>
                            <p class="sm:text-lg md:text-base text-sm text-gray-600 ml-2">Reviews</p>
                            <div class="flex ml-3 pl-3 py-2 border-l-2 border-gray-300 space-x-2"></div>
                            <p class="text-xs sm:text-lg md:text-sm text-gray-600">{{ post.postTime }}</p>
                        </span>
                    </div>

                    <p class="text-lg font-medium text-justify">Restaurant : {{ this.post.restaurant }}</p>
                    <p class="text-lg text-justify">
                        {{ post.description }}
                    </p>
                </div>

                <div class="flex items-center pb-5 border-b-2 border-gray-200 mb-5">
                    <div class="flex items-center">
                        <div class="relative flex text-gray-500">Tag : 
                            <div v-for="tag in post.postTags" :key="tag.tagId" class="ml-3">{{tag.tags.tag}}</div>
                        </div>
                    </div>
                </div>

                <div class="flex inline-block mb-3">
                    <span class="title-font font-medium text-2xl text-black">THB {{ this.post.foodPrice }}</span>
                </div>

                <div class="flex">
                    <router-link to='/Edit'>
                        <button @click="sendEditingPost(this.post)" class="text-white mr-2 bg-yellow-400 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded shadow-lg">Edit</button>
                    </router-link>
                    <button @click="deletePost(post.postNumber)" class="text-white bg-red-500 border-0 py-2 px-4 focus:outline-none hover:bg-red-600 rounded shadow-lg">Delete</button>
                    <div v-if="checkDel" class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex">
                        <confirm-delete
                        @adding-close-modal="delModal"
                        :id="id"
                        @check="check"
                        >
                        </confirm-delete>
                    </div>
                    <div v-if="checkDel" class="opacity-25 fixed inset-0 z-40 bg-black"></div>
                        
                    <button class="flex ml-auto ri-thumb-up-fill rounded-full w-10 h-10 bg-white shadow-lg p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4 hover:bg-blue-500 hover:text-white"></button>
                    <!-- <span class="ml-2">15</span> -->
                    <button class="ri-thumb-down-fill rounded-full w-10 h-10 bg-white shadow-lg  p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4 hover:bg-red-500 hover:text-white"></button>
                    <!-- <span class="ml-2">15</span> -->
                </div>
            </div>  
        </div>
    </div>
</div>
 <!-- </div> -->
</div>
</template>

<script>
import BaseNavMobile from "../components/BaseNavMobile.vue";

export default {
  name: "Product",
  components: {
    BaseNavMobile,
  },
  props:{
      postNumber: Number
  },
  data() {
    return {
    mobileView: true,
    showNav: false,
    urlpost: "http://localhost:3000/posts/",
    urlImage: "http://localhost:3000/files/",
    urlDelete: "http://localhost:3000/deletePost/",
    post: null,
    reviewRateStarColors: ["DEDEDE","DEDEDE","DEDEDE","DEDEDE","DEDEDE"],
    checktran:false,
    errorMessage: null,
    red:false,
    green:false,
    checkDel: false,
    id: 0
        urlpost: "http://13.76.247.191:3000/posts/",
        urlImage: "http://13.76.247.191:3000/files/",
        urlDelete: "http://13.76.247.191:3000/deletePost/",
        // urlcategory: "http://localhost:3000/showAllCategories",
        post: null,
        // categories: [],
        reviewRateStarColors: ["DEDEDE","DEDEDE","DEDEDE","DEDEDE","DEDEDE"]

    };
  },
  emits:[
    "edit-post"
  ],
  methods: {
    sendEditingPost(posts){
        this.$emit('edit-post',posts)
    },
    showNavHam() {
      this.showNav = !this.showNav;
    },
    handleView() {
      this.mobileView = window.innerWidth <= 990;
    },
    check(c) {
        this.errorMessage = c.errorMessage
        this.red = c.red
        this.green = c.green
        this.checktran = c.checktran
    },
    delModal () {
        // console.log('Second Step')
        this.checkDel = !this.checkDel;
    },
    createImageUrl(postimage){
        return this.urlImage + postimage
    },
    async getPostsData(url){
        try {
            const res = await fetch(url)
            const data = await res.json()
            return data
        }
        catch(error){
            console.log(`Could not get ${error}`)
        }
    },
    createImageUrl(postimage){
        return this.urlImage + postimage
    },

    async deletePost(postNumber){
        this.checkDel = !this.checkDel;
        this.id = postNumber
    //     const res = await fetch(`${this.urlDelete}/${postNumber}`, {
    //     method: "DELETE",
    //   });
    //   if(res.ok){
    //       await this.getPostsData()
    //       this.checktran = true;
    //       this.red = false;
    //       this.green = true;
    //       setTimeout(()=>{this.checktran = false } , 5000);
    //   } else {
    //       this.checktran = true;
    //       this.red = false;
    //       this.green = true;
    //       this.errorMessage = await res.json().message;
    //       setTimeout(()=>{this.checktran = false } , 5000);
    //   }
    //   location.reload();
    //setTimeout(function(){location.reload()}, 5000);
    // alert("Delete: "+postNumber+" complete.")
    // this.$router.push("/");
    },
  },

  async created() {
    this.handleView();
    window.addEventListener("resize", this.handleView);
    this.post = await this.getPostsData(this.urlpost+"/"+this.postNumber);
    //console.log(this.postNumber)
    //console.log(this.post)
    if (this.post.reviewRate > 5){
        this.post.reviewRate = 5;
        alert("I see youuuuuuuuuuu~~~")
    }
    for (let i=0; i<this.post.reviewRate; i++){
        this.reviewRateStarColors[i] = "F3C04B"
    }
    console.log(this.reviewRateStarColors)
  }
};
</script>




