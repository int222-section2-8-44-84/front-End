<template>
  <nav class="bg-white shadow-md">
    <div class="container mx-auto py-2 px-7 flex justify-between items-center">
      <router-link to="/">
        <div class="flex items-center mb-4 md:mb-0">
        <img class="leading-relaxed inline-block py-2 w-auto h-16" src="../assets/wongnoklogo.png">
        </div>
      </router-link>


    <div class="lg:flex md:flex flex-grow items-center">
        <ul class="flex flex-col lg:flex-row md:flex-row list-none mx-auto">
          <router-link to="/">
            <li class="nav-item">
                <div class="px-3 py-2 flex items-center text-2xl hover:text-redRYB">
                    Home
                </div>
            </li>
          </router-link>

            <router-link to="/Team">
                <li class="nav-item">
                    <div class="px-3 py-2 flex items-center text-2xl hover:text-redRYB">
                        Team
                    </div>
                </li>
            </router-link>

              <li class="cursor-pointer nav-item">
                <div v-on:click="checkAuthen()" class="px-3 py-2 flex items-center text-2xl hover:text-redRYB">
                  + Create
                </div>
              </li>
        </ul>
    </div>
      <div v-if="after" style="font-size: 32px;">
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
  <div v-if="this.checkRole()">
          <router-link to='/ManageMember'>
          <div class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent  text-blueGray-700 hover:bg-red-100 cursor-pointer">
            <i style="font-size: 18px;" class="ri-settings-5-line mr-4"></i>Manage member
          </div>
          </router-link>
</div>
          <div class="h-0 my-2 border border-solid border-t-0 border-blueGray-800 opacity-50"></div>
          <div @click="logout()" class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700 hover:bg-red-100 cursor-pointer">
            <i style="font-size: 18px;" class="ri-logout-circle-r-line mr-4"></i>Log out
          </div>
        </div>
      </div>
    </div>
  </div>
      </div>

      <div v-else style="font-size: 32px;">
        <button v-on:click="toggleModal()" class="items-center justify-center transition-colors duration-150 w-12 h-12 hover:bg-red-200 rounded-full focus:shadow-outline ri-user-3-line"></button>
          <div v-if="showModal" class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex">
            <pop-up
            :showModal="showModal"
            @adding-showModal='toggleModal'
            >
            </pop-up>
          </div>
          <div v-if="showModal" class="opacity-25 fixed inset-0 z-40 bg-black"></div>
      </div>

    </div>
  </nav>
</template>

<script>
import { createPopper } from "@popperjs/core";
export default {
  name: "regular-modal",
  data() {
    return {
      openTab: 1,
      emailLogin: "",
      passLogin: "",
      userRegis: "",
      emailRegis: "",
      passRegis: "",
      showModal: false,
      invalidEmailLogin: false,
      invalidPassLogin: false,
      invalidUseRegis: false,
      invalidEmailRegis: false,
      invalidPassRegis: false,
      after: false,
      dropdownPopoverShow: false,
    }
  },
  methods: {

    toggleModal: function(){
      this.showModal = !this.showModal;
    },
    toggleTabs: function(tabNumber){
      this.openTab = tabNumber
    },

    checkAuthen(){
      if(localStorage.getItem("token")!=null){
        this.$router.push("/Create");
      }else{
        this.toggleModal();
      }
    },
    checkRole(){
      if( localStorage.getItem('userRole')=='Admin'){
        return true
      }else{
        return false
      }
    },
   
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
      localStorage.removeItem("userAccountNumber")
      localStorage.removeItem("userID")
      localStorage.removeItem("userRole")
      setTimeout( () => this.$router.push("/"), 1000);
      setTimeout( () => location.reload(), 1200);
    },


  },
   async created() {
     if(localStorage.getItem("token")!=null){
       this.after = true;
     }
  },
};
</script>