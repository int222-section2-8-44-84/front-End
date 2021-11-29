<template>
  <div class="flex flex-wrap">
    <div class="w-full sm:w-6/12 md:w-4/12 px-4">
      <div class="relative inline-flex align-middle w-full">
      <button @click="toggleDropdown()" ref="btnDropdownRef" class="items-center justify-center transition-colors duration-150 rounded-full focus:shadow-outline ri-user-3-line"></button>
        <div v-bind:class="{'hidden': !dropdownPopoverShow, 'block': dropdownPopoverShow}" class="bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1" style="min-width:12rem" ref="popoverDropdownRef">
          
          <router-link to='/Profile'>
          <div class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent  text-blueGray-700 hover:bg-red-100 cursor-pointer">
            <i style="font-size: 18px;" class="ri-user-3-line mr-4"></i>Profile
          </div>
          </router-link>

          <router-link to='/PostsArchive'>
          <div class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent  text-blueGray-700 hover:bg-red-100 cursor-pointer">
            <i style="font-size: 18px;" class="ri-archive-line mr-4"></i>Archive
          </div>
          </router-link>

          <router-link to='/ManageMember'>
          <div class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent  text-blueGray-700 hover:bg-red-100 cursor-pointer">
            <i style="font-size: 18px;" class="ri-settings-5-line mr-4"></i>Manage member
          </div>
          </router-link>

          <div class="h-0 my-2 border border-solid border-t-0 border-blueGray-800 opacity-50"></div>
          <div @click="logout()" class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700 hover:bg-red-100 cursor-pointer">
            <i style="font-size: 18px;" class="ri-logout-circle-r-line mr-4"></i>Log out
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { createPopper } from "@popperjs/core";

export default {
  name: "dropdown",
  data() {
    return {
      dropdownPopoverShow: false
    }
  },
  methods: {
    toggleDropdown: function(){
      if(this.dropdownPopoverShow){
        this.dropdownPopoverShow = false;
      } else {
        this.dropdownPopoverShow = true;
        createPopper(this.$refs.btnDropdownRef, this.$refs.popoverDropdownRef, {
          placement: "bottom-start"
        });
      }
    },
    async logout() {
      localStorage.removeItem("token")
        setTimeout( () => location.reload(), 1000);
    },
  },
  // async created() {
    
  // },
};
</script>