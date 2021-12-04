<template>
<!-- PostsArchive -->
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
        
        <div class="container mt-12 mx-auto">
          <div class="flex flex-col text-center w-full">
            <h1 class="sm:text-4xl text-3xl font-medium title-font">Post Archive</h1>
          </div>
        </div>

    <div class="container sm:pb-24 pb-16 sm:px-24 md:px-14 xl:px-32 px-4 mx-auto">
      <div v-if="this.posts.length==0" 
      class="pt-28">
      <div class="pb-8">It seem you didn't post any review.</div>
      <router-link to="/Create">
        <button
                class="
                  text-white
                  bg-yellow-400
                  border-0
                  py-2
                  px-4
                  focus:outline-none
                  hover:bg-red-600
                  rounded
                  shadow-lg
                "
              >
                Let's Post!
              </button>
      </router-link>
      </div>
      <div v-else class="grid sm:grid-cols-3 sm:gap-6 md:gap-2 xl:gap-4 grid-cols-2 gap-2 sm:py-7 py-8">
            <div v-for="post in posts" :key="post.postNumber">
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
</template>

<script>
import BaseNavMobile from "../components/BaseNavMobile.vue";

export default {
    el: '#color-picker',
  components: {
    BaseNavMobile,
  },
  data() {
    return {
        mobileView: true,
        showNav: false, 
        urlpost: "https://wongnok.onthewifi.com/backend/postsByAccount",
        posts: [],
        urlImage: "https://wongnok.onthewifi.com/backend/files/",
    };
  },

  methods: {
    showNavHam() {
      this.showNav = !this.showNav;
    },
    handleView() {
      this.mobileView = window.innerWidth <= 990;
    },
    reviewRateStar(reviewRate){
        let stars = ["DEDEDE","DEDEDE","DEDEDE","DEDEDE","DEDEDE"];
        for (let i = 0; i < reviewRate; i++) {
            stars[i] = "F3C04B";
        }
        //console.log(stars);
        return stars;
    },
    createImageUrl(postimage){
        return this.urlImage + postimage
    },
    
    async getPostsData(url){
        var token = localStorage.getItem("token");
      //console.log(token);
      try {
        const res = await fetch(url, {
          method: "GET",
          headers: {
            Authorization: token,
          },
        });
        const data = await res.json();
        return data;
      } catch (error) {
        console.log(`Could not get ${error}`);
      }
    },
    checkAuthen(){
      if(localStorage.getItem("token")==null){
        alert("Please Log in to use this feature.")
        this.$router.push("/");
      }
    }
  },
  async created() {
    this.checkAuthen();
    this.handleView();
    window.addEventListener("resize", this.handleView);
    this.posts = await this.getPostsData(this.urlpost+"/"+localStorage.getItem("userAccountNumber"));
  },
};
</script>
