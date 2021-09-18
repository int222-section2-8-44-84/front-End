<template>
<!-- ManageManager -->
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
        <base-nav-mobile v-if="showNav" />
        <base-nav v-if="!mobileView" />

        <div class="min-w-screen flex items-center p-5 lg:p-8 relative">
            <div class="w-full max-w-6xl rounded-md bg-white shadow-xl p-10 lg:p-10 mx-auto relative md:text-left">
                <div class="items-center -mx-10">

                    <!-- Body -->
                    <div class="px-40 mb-10 md:mb-0">
                        <h1 class="font-medium text-2xl mb-5">Manage your Members</h1>
                    </div>
                    
                    <div class="px-36">
                        <table class="table-auto border-collapse w-full">
                            <div class="text-lg font-normal text-gray-700">
                                <tr class="border-b border-gray-200 py-10">
                                    <td class="text-lg font-medium text-gray-500 text-left px-4 py-4">Name</td>
                                    <td class="text-lg font-medium text-gray-500 px-4 py-4">Role</td>
                                    <td class="text-lg font-medium text-gray-500 text-right px-4 py-4 pr-8">Actions</td>
                                </tr>
                                
                                <!-- First -->
                                <tr class="hover:bg-gray-100 border-gray-200">
                                    <td class="px-4 py-4">
                                        <div class="font-medium text-lg">Sebastian Schrama</div>
                                        <div class="font-light">mail@gmail.com</div>
                                    </td>
                                    <td class="px-4 py-4">
                                        <select class="bg-transparent">
                                            <option>User</option>
                                            <option >Admin</option>
                                        </select>
                                    </td>
                                     <td class="px-4 py-4 text-right">
                                        <button type="button" class="items-center justify-center w-8 h-8 transition-colors duration-150 rounded-full focus:shadow-outline border border-gray-50 shadow-lg bg-white hover:bg-green-400 hover:text-white hover:border-transparent mr-5">
                                            <div style="font-size: 18px;">
                                                <i class="ri-check-line"></i>
                                            </div>
                                        </button>
                                        <button type="button" class="items-center justify-center w-8 h-8 transition-colors duration-150 rounded-full focus:shadow-outline border border-gray-50 shadow-lg bg-white hover:bg-red-400 hover:text-white hover:border-transparent">
                                            <div style="font-size: 18px; ">
                                                <i class="ri-delete-bin-line"></i>
                                            </div>
                                        </button>
                                    </td>
                                </tr>
                                
                                <!-- Second -->
                                <tr class="hover:bg-gray-100 border-gray-200">
                                    <td class="px-4 py-4">
                                        <div class="font-medium text-lg">Sebastian Schrama</div>
                                        <div class="font-light">mail@gmail.com</div>
                                    </td>
                                    <td class="px-4 py-4">
                                        <select class="bg-transparent">
                                            <option>User</option>
                                            <option>Admin</option>
                                        </select>
                                    </td>
                                    <td class="px-4 py-4 text-right">
                                        <button type="button" class="items-center justify-center w-8 h-8 transition-colors duration-150 rounded-full focus:shadow-outline border border-gray-50 shadow-lg bg-white hover:bg-green-400 hover:text-white hover:border-transparent mr-5">
                                            <div style="font-size: 18px;">
                                                <i class="ri-check-line"></i>
                                            </div>
                                        </button>
                                        <button type="button" class="items-center justify-center w-8 h-8 transition-colors duration-150 rounded-full focus:shadow-outline border border-gray-50 shadow-lg bg-white hover:bg-red-400 hover:text-white hover:border-transparent">
                                            <div style="font-size: 18px; ">
                                                <i class="ri-delete-bin-line"></i>
                                            </div>
                                        </button>
                                    </td>
                                </tr>

                                <!-- Third -->
                                <tr class="hover:bg-gray-100 border-gray-200">
                                    <td class="px-4 py-4">
                                        <div class="font-medium text-lg">Sebastian Schrama</div>
                                        <div class="font-light">mail@gmail.com</div>
                                    </td>
                                    <td class="px-4 py-4">
                                        <select class="bg-transparent">
                                            <option>User</option>
                                            <option>Admin</option>
                                        </select>
                                    </td>
                                    <td class="px-4 py-4 text-right">
                                        <button type="button" class="items-center justify-center w-8 h-8 transition-colors duration-150 rounded-full focus:shadow-outline border border-gray-50 shadow-lg bg-white hover:bg-green-400 hover:text-white hover:border-transparent mr-5">
                                            <div style="font-size: 18px;">
                                                <i class="ri-check-line"></i>
                                            </div>
                                        </button>
                                        <button type="button" class="items-center justify-center w-8 h-8 transition-colors duration-150 rounded-full focus:shadow-outline border border-gray-50 shadow-lg bg-white hover:bg-red-400 hover:text-white hover:border-transparent">
                                            <div style="font-size: 18px; ">
                                                <i class="ri-delete-bin-line"></i>
                                            </div>
                                        </button>
                                    </td>
                                </tr>


                            </div>
                        </table>
                    </div>


      
                </div>
            </div>
        </div>

</template>

<script>
import BaseNavMobile from "../components/BaseNavMobile.vue";
import { createPopper } from "@popperjs/core";

export default {
    el: '#color-picker',
  components: {
    BaseNavMobile,
  },
  data() {
    return {
        mobileView: true,
        showNav: false,
        dropdownPopoverShow: false, 
    };
  },

  methods: {
    showNavHam() {
      this.showNav = !this.showNav;
    },
    handleView() {
      this.mobileView = window.innerWidth <= 990;
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
  },
  created() {
    this.handleView();
    window.addEventListener("resize", this.handleView);
  },
};
</script>
