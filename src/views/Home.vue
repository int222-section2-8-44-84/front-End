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
      <!-- <router-link to="/">
        <svg width="91" height="29" viewBox="0 0 91 29" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path/>
        </svg>
      </router-link> -->
    </div>
  </div>
  <base-nav-mobile v-if="showNav" />
  <base-nav v-if="!mobileView" />

    <!-- Header -->
    <!-- sm:rounded-lg rounded-md / sm:rounded-t-lg rounded-t-md -->
    <div class="my-8">
        <div class="container mx-auto px-6">
            <img class="w-full" src="../assets/header.png"> 
        </div>
    </div>

    <!-- Category -->
    <div class="grid sm:grid-cols-4 sm:gap-6 sm:mx-40 gap-2 md:grid-cols-4 md:gap-2 md:mx-10 lg:grid-cols-4 lg:mx-44 2xl:mx-72 xl:gap-4 grid-cols-2 px-4 gap-2">
        <div @click="categoryTabs(1)" v-bind:class="{'bg-white': openTab !== 1, 'bg-roseMadder': openTab === 1}" class="shadow-md transform hover:-translate-y-1 hover:bg-roseMadder cursor-pointer rounded-lg transition duration-500 hover:shadow-2xl flex items-center justify-between p-3 text-white font-medium">
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
    
    <!-- Card -->
    <div class="container sm:pb-24 pb-16 sm:px-24 md:px-14 xl:px-32 px-4 mx-auto">
      <!-- <div class="grid sm:grid-cols-3 sm:gap-6 md:gap-2 xl:gap-4 grid-cols-2 gap-2 sm:py-7 py-8"> -->
        <div v-bind:class="{'hidden': openTab !== 1, 'block': openTab === 1}">
            <div class="grid sm:grid-cols-3 sm:gap-6 md:gap-2 xl:gap-4 grid-cols-2 gap-2 sm:py-7 py-8">
                <div v-for="post in posts" :key="post.postNumber">
                <div class="bg-white rounded-lg sm:rounded-md shadow-md cursor-pointer">
                    <router-link :to="{ name: 'Post', params: {postNumber: post.postNumber} }">
                        <a class="block relative sm:h-80 h-36 md:h-64 2xl:h-80 sm:rounded-t-lg rounded-t-md  overflow-hidden">
                            <img class="object-cover object-center w-full h-full block" :src="createImageUrl(post.imageName)"/>
                        </a>
                        <div class="sm:my-3 sm:mx-4 md:my-2 md:mx-2 my-2 mx-3">
                            <h2 class="text-gray-900 title-font sm:text-lg text-sm font-semibold">{{ post.postTitle }}</h2>
                            <p class="mt-1 pb-4 sm:text-base text-xs">THB {{post.foodPrice}}</p>
                        </div>
                    </router-link>
                </div>
            </div>
            </div>
        </div>

        <div v-bind:class="{'hidden': openTab !== 2, 'block': openTab === 2}">
            <div class="grid sm:grid-cols-3 sm:gap-6 md:gap-2 xl:gap-4 grid-cols-2 gap-2 sm:py-7 py-8">
            <div v-for="post in postViews" :key="post.postNumber">
            <div class="bg-white rounded-lg sm:rounded-md shadow-md cursor-pointer">
                <router-link :to="{ name: 'Post', params: {postNumber: post.postNumber} }">
                <a class="block relative sm:h-80 h-36 md:h-64 2xl:h-80 sm:rounded-t-lg rounded-t-md  overflow-hidden">
                    <img class="object-cover object-center w-full h-full block" :src="createImageUrl(post.imageName)">
                </a>
                <div class="sm:my-3 sm:mx-4 md:my-2 md:mx-2 my-2 mx-3">
                    <h2 class="text-gray-900 title-font sm:text-lg text-sm font-semibold">{{ post.postTitle }}</h2>
                    <p class="mt-1 pb-4 sm:text-base text-xs">THB {{post.foodPrice}}</p>
                </div>
                </router-link>
            </div>
            </div>
            </div>
        </div>

        <div v-bind:class="{'hidden': openTab !== 3, 'block': openTab === 3}">
            <div class="grid sm:grid-cols-3 sm:gap-6 md:gap-2 xl:gap-4 grid-cols-2 gap-2 sm:py-7 py-8">
            <div v-for="post in postViews" :key="post.postNumber">
            <div class="bg-white rounded-lg sm:rounded-md shadow-md cursor-pointer">
                <router-link :to="{ name: 'Post', params: {postNumber: post.postNumber} }">
                <a class="block relative sm:h-80 h-36 md:h-64 2xl:h-80 sm:rounded-t-lg rounded-t-md  overflow-hidden">
                    <img class="object-cover object-center w-full h-full block" :src="createImageUrl(post.imageName)">
                </a>
                <div class="sm:my-3 sm:mx-4 md:my-2 md:mx-2 my-2 mx-3">
                    <h2 class="text-gray-900 title-font sm:text-lg text-sm font-semibold">{{ post.postTitle }}</h2>
                    <p class="mt-1 pb-4 sm:text-base text-xs">THB {{post.foodPrice}}</p>
                </div>
                </router-link>
            </div>
        </div>
            </div>
        </div>

        <div v-bind:class="{'hidden': openTab !== 4, 'block': openTab === 4}">
            <div class="grid sm:grid-cols-3 sm:gap-6 md:gap-2 xl:gap-4 grid-cols-2 gap-2 sm:py-7 py-8">
                <div v-for="post in postViews" :key="post.postNumber">
            <div class="bg-white rounded-lg sm:rounded-md shadow-md cursor-pointer">
                <router-link :to="{ name: 'Post', params: {postNumber: post.postNumber} }">
                <a class="block relative sm:h-80 h-36 md:h-64 2xl:h-80 sm:rounded-t-lg rounded-t-md  overflow-hidden">
                    <img class="object-cover object-center w-full h-full block" :src="createImageUrl(post.imageName)">
                </a>
                <div class="sm:my-3 sm:mx-4 md:my-2 md:mx-2 my-2 mx-3">
                    <h2 class="text-gray-900 title-font sm:text-lg text-sm font-semibold">{{ post.postTitle }}</h2>
                    <p class="mt-1 pb-4 sm:text-base text-xs">THB {{post.foodPrice}}</p>
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
        urlpost: "http://localhost:3000/posts",
        urlImage: "http://localhost:3000/files/",
        posts: [],
        postViews: [],
    };
  },

  methods: {
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
    filterByCategoryId(cId){
        //console.log(this.posts)
        this.postViews = [];
        //console.log(this.postViews)
        this.postViews = this.posts.filter(item => item.categoryId == cId);
        //console.log(this.postViews)
    },
    createImageUrl(postimage){
        return this.urlImage + postimage
    }

},
  async created() {
    this.handleView();
    window.addEventListener("resize", this.handleView);
    this.posts = await this.getPostsData(this.urlpost);
  },
  
};
</script>

