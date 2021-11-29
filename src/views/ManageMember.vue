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


<div class="items-center relative overflow-x-auto m-4 pt-4 sm:-mx-6 sm:p-6 md:mx-8 md:p-2 xl:mx-20 xl:p-4">
<div class="align-middle inline-block min-w-full shadow-lg overflow-hidden bg-white p-10 rounded-xl">
        <!-- <div class="min-w-screen flex items-center p-5 lg:p-8 relative">
            <div class="w-full max-w-6xl rounded-md bg-white shadow-xl p-10 lg:p-10 mx-auto md:text-left"> -->
                <div class="items-center -mx-10">

                    <!-- Body -->
                    <div class="px-40 mb-10 md:mb-0">
                        <h1 class="font-medium text-2xl mb-5">Manage your Members</h1>
                    </div>
                    
                    <div class="px-36">
                        <!-- <div class="overflow-x-auto"> -->
                        <table class="table-auto border-collapse w-full">
                            <!-- <div class="text-lg font-normal text-gray-700"> -->
                                <tr class="border-b border-gray-200 py-10">
                                    <td class="text-lg font-medium text-gray-500 text-left px-4 py-4">Name</td>
                                    <td class="text-lg text-center font-medium text-gray-500 px-4 py-4">Role</td>
                                    <td class="text-lg font-medium text-gray-500 text-right px-4 py-4 pr-8">Actions</td>
                                </tr>
                                
                                <!-- First -->
                                <div v-for="account in allAccount" :key="account.accountNumber">
                                <tr class="hover:bg-gray-100 border-gray-200">
                                    <td class="text-left px-4 py-4">
                                        <div class="font-medium text-lg">{{account.userID}}</div>
                                        <div class="font-light">{{account.email}}</div>
                                    </td>
                                    <td class="px-4 py-4 text-center">
                                        <div class="text-lg">{{account.role.role}}</div>
                                    </td>
                                     <td class="px-4 py-4 text-right">
                                        <button @click="EditMember()" type="button" class="ri-edit-line items-center justify-center w-8 h-8 transition-colors duration-150 rounded-full focus:shadow-outline border border-gray-50 shadow-lg bg-white hover:bg-yellow-400 hover:text-white hover:border-transparent sm:mr-5" style="font-size: 18px;"></button>
                                            <div v-if="showEmem" class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex">
                                                <edit-member
                                                @adding-edit-modal="EMem"
                                                >
                                                </edit-member>
                                            </div>
                                            <div v-if="showEmem" class="opacity-25 fixed inset-0 z-40 bg-black"></div>
                                            
                                        <button @click="deletePost()" type="button" class="ri-delete-bin-line items-center justify-center w-8 h-8 transition-colors duration-150 rounded-full focus:shadow-outline border border-gray-50 shadow-lg bg-white hover:bg-red-400 hover:text-white hover:border-transparent" style="font-size: 18px;"></button>
                                        <div v-if="checkDel" class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex">
                                            <confirm-delete
                                                @adding-close-modal="delModal"
                                            >
                                            </confirm-delete>
                                        </div>
                                        <div v-if="checkDel" class="opacity-25 fixed inset-0 z-40 bg-black"></div>

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

export default {
    el: '#color-picker',
  components: {
    BaseNavMobile,
  },
  data() {
    return {
        mobileView: true,
        showNav: false,
        showEmem: false,
        checkDel: false,

        allAccount: [],
        account: null,
        urlacc: "http://localhost:3000/showAllAccounts",
    };
  },

  methods: {
    showNavHam() {
      this.showNav = !this.showNav;
    },
    handleView() {
      this.mobileView = window.innerWidth <= 990;
    },
    EMem(){
        this.showEmem =! this.showEmem;
    },
    EditMember(){
        this.showEmem = !this.showEmem;
    },
    async getAllAccount(){
        let token = localStorage.getItem('token')
        const res =  await fetch(`${this.urlacc}`,{
        method: "GET",
        headers: {
          "Authorization": token,
        },
      })
        this.allAccount = await res.json();
        console.log(this.allAccount)
    },
    async deletePost(){
      this.checkDel = !this.checkDel;
    },
  },
  async created() {
    this.handleView();
    window.addEventListener("resize", this.handleView);
    this.allAccount = await this.getAllAccount(this.urlacc);
    // this.getAllAccount();
  },
};
</script>
