<template>
<!-- home -->
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
    <base-nav-mobile v-if="showNav"/>
    <base-nav v-if="!mobileView" class="fixed w-full z-50 top-0"/>

    <!-- Header -->
    <div class="my-8 sm:pt-20 pt-0 md:pt-0 lg:pt-20">
        <!-- Search
        <div class="relative flex w-full flex-wrap mx-auto px-24 pb-8">
            <span class="z-10 h-full text-md text-gray absolute justify-center pl-4 py-3">
                <span class="fi-rr-search"></span>  
            </span>
            <input type="text" placeholder="Search" v-model="search" class="px-2 py-2 placeholder-gray relative bg-light rounded-xl text-lg outline-none focus:ring-2 focus:ring-primary w-full pl-9 "/>
        </div> -->

        <div class="container mx-auto px-6">
            <img class="w-full" src="../assets/header.png"> 
        </div>
    </div>
    
    <!-- Search -->
    <div id="search" class="relative flex w-full flex-wrap mx-auto my-8 sm:px-48 md:px-14 lg:px-48 2xl:px-72 px-4">
        <span class="h-full text-md text-gray-400 absolute justify-center pl-4 py-3">
          <span class="ri-search-line"></span>  
        </span>
        <input v-model="search" type="text" placeholder="Search ..." class="px-2 py-2 pl-10 w-full text-lg text-gray-700 rounded-lg placeholder-gray-400 bg-light border-none appearance-none dark:text-gray-200 focus:ring-roseMadder focus:ring-2 focus:outline-none focus:placeholder-transparent focus:ring-0">
    </div>

    <!-- Category -->
    <div class="grid sm:grid-cols-4 sm:gap-6 sm:mx-40 gap-2 md:grid-cols-4 md:gap-2 md:mx-10 lg:grid-cols-4 lg:mx-44 2xl:mx-72 xl:gap-4 grid-cols-2 px-4 gap-2">
        <div @click="categoryTabs(1),filterByCategoryId(4)" v-bind:class="{'bg-white': openTab !== 1, 'bg-roseMadder': openTab === 1}" class="shadow-md transform hover:-translate-y-1 hover:bg-roseMadder cursor-pointer rounded-lg transition duration-500 hover:shadow-2xl flex items-center justify-between p-3 text-white font-medium">
            <div class="mx-auto text-center">
                <div class="flex flex-col items-center justify-center h-40 w-full">
                    <img class="w-24" src="../assets/allblack.png">
                </div>
                <h2 class="title-font font-normal sm:text-xl xl:text-3xl text-black uppercase">All</h2>
            </div>
        </div>

        <div @click="categoryTabs(2),filterByCategoryId(1)" v-bind:class="{'bg-white': openTab !== 2, 'bg-roseMadder': openTab === 2}" class="bg-white shadow-md hover:bg-roseMadder transform hover:-translate-y-1 cursor-pointer rounded-lg transition duration-500 hover:shadow-2xl flex items-center justify-between p-3 text-white font-medium">
            <div class="mx-auto text-center">
                <div class="flex flex-col items-center justify-center h-40 w-full">
                    <img class="w-24" src="../assets/mainblack.png">
                </div>
                <h2 class="title-font font-normal sm:text-xl xl:text-3xl text-black uppercase">Main</h2>
            </div>
        </div>

        <div @click="categoryTabs(3),filterByCategoryId(2)" v-bind:class="{'bg-white': openTab !== 3, 'bg-roseMadder': openTab === 3}" class="bg-white shadow-md hover:bg-roseMadder transform hover:-translate-y-1 cursor-pointer rounded-lg transition duration-500 hover:shadow-2xl flex items-center justify-between p-3 text-white font-medium">
            <div class="mx-auto text-center">
                <div class="flex flex-col items-center justify-center h-40 w-full">
                    <img class="w-24" src="../assets/dessertblack.png">
                </div>
                <h2 class="title-font font-normal sm:text-xl xl:text-3xl text-black uppercase">Desserts</h2>
            </div>
        </div>

        <div @click="categoryTabs(4),filterByCategoryId(3)" v-bind:class="{'bg-white': openTab !== 4, 'bg-roseMadder': openTab === 4}" class="bg-white shadow-md hover:bg-roseMadder transform hover:-translate-y-1 cursor-pointer rounded-lg transition duration-500 hover:shadow-2xl flex items-center justify-between p-3 text-white font-medium">
            <div class="mx-auto text-center">
                <div class="flex flex-col items-center justify-center h-40 w-full">
                     <img class="w-24" src="../assets/drinkblack.png">
                </div>
                <h2 class="title-font font-normal sm:text-xl xl:text-3xl text-black uppercase">Drinks</h2>
            </div>
        </div>
    </div>
    <!-- <div v-if="searchFound" class="text-center mt-4 text-4xl">Sorry... But Not Found</div> -->
    
    <!-- Card -->
    <div class="container sm:pb-24 pb-16 sm:px-24 md:px-14 xl:px-32 px-4 mx-auto">
      <!-- <div class="grid sm:grid-cols-3 sm:gap-6 md:gap-2 xl:gap-4 grid-cols-2 gap-2 sm:py-7 py-8"> -->
        <div v-bind:class="{'hidden': openTab !== 1, 'block': openTab === 1}">
            <div class="grid sm:grid-cols-3 sm:gap-6 md:gap-2 xl:gap-4 grid-cols-2 gap-2 sm:py-7 py-8">
                <div v-for="post in returnFilter()" :key="post.postNumber">
                <div class="bg-white rounded-lg sm:rounded-md shadow-md cursor-pointer">
                    <router-link :to="{name: 'Post', params: {postNumber: post.postNumber}}">
                        <a class="block relative sm:h-80 h-36 md:h-64 2xl:h-80 sm:rounded-t-lg rounded-t-md  overflow-hidden">
                            <img class="object-cover object-center w-full h-full block" :src="createImageUrl(post.imageName)"/>
                        </a>
                        <div class="sm:my-3 sm:mx-4 md:my-2 md:mx-2 my-2 mx-3">
                            <h2 class="text-gray-900 title-font sm:text-lg text-sm font-semibold">{{ post.food }}</h2>
                            <p class="mt-1 sm:text-base text-xs">Restaurant : {{post.restaurant}}</p>
                            <p class="mt-1 mb-2 sm:text-base text-xs">Price : THB {{post.foodPrice}}</p>
                            <span v-for="tag in post.postTags" :key="tag.tagId" class="sm:text-base text-xs text-white mr-2 bg-red-600 px-2 rounded-lg">{{tag.tags.tag}}</span>
                            <!-- <div class="mt-1 sm:text-base text-xs text-gray-500">Tag : 
                                <span v-for="tag in post.postTags" :key="tag.tagId" class="mr-2">{{tag.tags.tag}}</span>
                            </div> -->
                            <span class="flex mt-3 pb-4 justify-center">
                                <svg v-for="starColor in this.reviewRateStar(post.reviewRate)" :key="starColor" fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4" viewBox="0 0 24 24" :style="{'color': starColor}">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                            </span>
                        </div>
                    </router-link>
                </div>
            </div>
            </div>
        </div>

        <div v-bind:class="{'hidden': openTab !== 2, 'block': openTab === 2}">
            <div class="grid sm:grid-cols-3 sm:gap-6 md:gap-2 xl:gap-4 grid-cols-2 gap-2 sm:py-7 py-8">
            <div v-for="post in returnFilter()" :key="post.postNumber">
            <div class="bg-white rounded-lg sm:rounded-md shadow-md cursor-pointer">
                <router-link :to="{ name: 'Post', params: {postNumber: post.postNumber} }">
                <a class="block relative sm:h-80 h-36 md:h-64 2xl:h-80 sm:rounded-t-lg rounded-t-md  overflow-hidden">
                    <img class="object-cover object-center w-full h-full block" :src="createImageUrl(post.imageName)">
                </a>
                <div class="sm:my-3 sm:mx-4 md:my-2 md:mx-2 my-2 mx-3">
                    <h2 class="text-gray-900 title-font sm:text-lg text-sm font-semibold">{{ post.food }}</h2>
                    <p class="mt-1 sm:text-base text-xs">Restaurant : {{post.restaurant}}</p>
                    <p class="mt-1 mb-2 sm:text-base text-xs">Price : THB {{post.foodPrice}}</p>
                    <span v-for="tag in post.postTags" :key="tag.tagId" class="sm:text-base text-xs text-white mr-2 bg-red-600 px-2 rounded-lg">{{tag.tags.tag}}</span>
                    <span class="flex mt-3 pb-4 justify-center">
                        <svg v-for="starColor in this.reviewRateStar(post.reviewRate)" :key="starColor" fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4" viewBox="0 0 24 24" :style="{'color': starColor}">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                        </svg>
                    </span>
                </div>
                </router-link>
            </div>
            </div>
            </div>
        </div>

        <div v-bind:class="{'hidden': openTab !== 3, 'block': openTab === 3}">
            <div class="grid sm:grid-cols-3 sm:gap-6 md:gap-2 xl:gap-4 grid-cols-2 gap-2 sm:py-7 py-8">
            <div v-for="post in returnFilter()" :key="post.postNumber">
            <div class="bg-white rounded-lg sm:rounded-md shadow-md cursor-pointer">
                <router-link :to="{ name: 'Post', params: {postNumber: post.postNumber} }">
                <a class="block relative sm:h-80 h-36 md:h-64 2xl:h-80 sm:rounded-t-lg rounded-t-md  overflow-hidden">
                    <img class="object-cover object-center w-full h-full block" :src="createImageUrl(post.imageName)">
                </a>
                <div class="sm:my-3 sm:mx-4 md:my-2 md:mx-2 my-2 mx-3">
                    <h2 class="text-gray-900 title-font sm:text-lg text-sm font-semibold">{{ post.food }}</h2>
                    <p class="mt-1 sm:text-base text-xs">Restaurant : {{post.restaurant}}</p>
                    <p class="mt-1 mb-2 sm:text-base text-xs">Price : THB {{post.foodPrice}}</p>
                    <span v-for="tag in post.postTags" :key="tag.tagId" class="sm:text-base text-xs text-white mr-2 bg-red-600 px-2 rounded-lg">{{tag.tags.tag}}</span>
                    <span class="flex mt-3 pb-4 justify-center">
                        <svg v-for="starColor in this.reviewRateStar(post.reviewRate)" :key="starColor" fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4" viewBox="0 0 24 24" :style="{'color': starColor}">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                        </svg>
                    </span>
                </div>
                </router-link>
            </div>
        </div>
            </div>
        </div>

        <div v-bind:class="{'hidden': openTab !== 4, 'block': openTab === 4}">
            <div class="grid sm:grid-cols-3 sm:gap-6 md:gap-2 xl:gap-4 grid-cols-2 gap-2 sm:py-7 py-8">
                <div v-for="post in returnFilter()" :key="post.postNumber">
            <div class="bg-white rounded-lg sm:rounded-md shadow-md cursor-pointer">
                <router-link :to="{ name: 'Post', params: {postNumber: post.postNumber} }">
                <a class="block relative sm:h-80 h-36 md:h-64 2xl:h-80 sm:rounded-t-lg rounded-t-md  overflow-hidden">
                    <img class="object-cover object-center w-full h-full block" :src="createImageUrl(post.imageName)">
                </a>
                <div class="sm:my-3 sm:mx-4 md:my-2 md:mx-2 my-2 mx-3">
                    <h2 class="text-gray-900 title-font sm:text-lg text-sm font-semibold">{{ post.food }}</h2>
                    <p class="mt-1 sm:text-base text-xs">Restaurant : {{post.restaurant}}</p>
                    <p class="mt-1 mb-2 sm:text-base text-xs">Price : THB {{post.foodPrice}}</p>
                    <span v-for="tag in post.postTags" :key="tag.tagId" class="sm:text-base text-xs text-white mr-2 bg-red-600 px-2 rounded-lg">{{tag.tags.tag}}</span>
                    <span class="flex mt-3 pb-4 justify-center">
                        <svg v-for="starColor in this.reviewRateStar(post.reviewRate)" :key="starColor" fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4" viewBox="0 0 24 24" :style="{'color': starColor}">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                        </svg>
                    </span>
                </div>
                </router-link>
            </div>
        </div>
            </div>
        </div>
    </div>


</template>

<script>
import BaseNavMobile from "../components/BaseNavMobile.vue";

export default {
  name: "Home",
    el: '#color-picker',
  components: {
    BaseNavMobile,
  },
  data() {
    return {
        openTab: 1,
        mobileView: true,
        showNav: false,
        urlpost: "https://52.152.137.28:3000/posts",
        urlImage: "https://52.152.137.28:3000/files/",
        posts: [],
        tag: [],
        postViews: [],
        search: '',
        id: null,
        // getUser: "https://52.152.137.28:3000/me",
    };
  },

  methods: {
    Profile(){
      this.$router.push({
          name: "Profile",
          params: { accNumber: this.id.accountNumber },
        });
    },
    categoryTabs: function(tabNumber){
      this.openTab = tabNumber
    },
    showNavHam() {
      this.showNav = !this.showNav;
    },
    handleView() {
      this.mobileView = window.innerWidth <= 990;
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
    filterByCategoryId(cId){
        if (cId == 1 || cId == 2 || cId ==3) {
            this.postViews = this.posts.filter(item => item.categoryId == cId);
        } else {
            this.postViews = this.posts
        }
    },
    filterByTags(posts){
        // let x = [];
        // let y = posts.postTags
        // for (let i = 0; i < y.length; i++) {
        //     if (this.y[i].tags.tag == this.search) {
        //         this.x.push(posts[i])
        //     }
        // }
        // return x
        return posts.filter(t => t.postTags.tags.tag.toLowerCase().includes(this.search.toLowerCase()))
        // <span v-for="tag in post.postTags" :key="tag.tagId">{{tag.tags.tag}}</span>
    },
    filterBySearch(posts) {
        return posts.filter(p => p.food.toLowerCase().includes(this.search.toLowerCase()))
    },
    returnFilter() {
        // return this.filterByTags(this.filterBySearch(this.postViews))
        return this.filterBySearch(this.postViews)
    },
    reviewRateStar(reviewRate){
        let stars = ["DEDEDE","DEDEDE","DEDEDE","DEDEDE","DEDEDE"];
        for (let i = 0; i < reviewRate; i++) {
            stars[i] = "F3C04B";
        }
        //console.log(stars);
        return stars;
    }

},

  async created() {
    this.handleView();
    window.addEventListener("resize", this.handleView);
    this.posts = await this.getPostsData(this.urlpost);
    // this.getUserFromToken();
    this.categoryTabs(1);
    this.filterByCategoryId(4);
  },
  
};
</script>

