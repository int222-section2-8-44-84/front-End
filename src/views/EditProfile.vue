<template>
  <div>
      <div class="relative w-auto my-6 mx-auto max-w-sm">
        <!--content-->
        <div class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
         
          <!--header-->
            <div class="flex items-start justify-between p-3 rounded-t">
                <button class="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-medium outline-none focus:outline-none" 
                    @click="close()">
                    <i class="ri-close-fill"></i>
                </button>
            </div>
            <!-- <img class="mx-auto w-60" src="../assets/sapiensMember.png"> -->

          <!--body-->
          <form @submit.prevent="submitForm">
            <div class="relative px-6 space-y-3 flex-auto">
                    <p class="text-center text-yellow-500 text-2xl font-medium leading-relaxed">
                        Edit Profile
                    </p>
                    <p class="text-sm text-gray-400 pb-4">Personal login information of your account</p>
                    <div>
                      <input v-model="username" type="text" placeholder="Username" class="placeholder-gray block py-2 px-4 rounded-lg w-full border-2 border-gray-100 shadow-sm outline-none" />
                      <!-- <p v-if="invalidUseRegis" class="text-red-500 text-xs text-left italic">** Please enter your Username! **</p> -->
                    </div>
                    <div>
                      <input v-model="email" type="text" placeholder="example@mail.com" class="placeholder-gray block py-2 px-4 rounded-lg w-full border-2 border-gray-100 shadow-sm outline-none" />
                    </div>
                    <div>
                      <input v-model="role" type="text" placeholder="Role" class="placeholder-gray block py-2 px-4 rounded-lg w-full border-2 border-gray-100 shadow-sm outline-none" />
                    </div>
            </div>

          <!--footer-->
          <div class="flex-auto relative p-6 rounded-b">
            <div class="pb-2">
                <button type="submit" class="text-white bg-yellow-400 hover:bg-yellow-500 font-semibold  w-full px-28 py-3 rounded-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                    Update
                </button>
            </div>
            <div>
                <button @click="close()" type="button" class="border border-solid border-gray-200 bg-transparent hover:bg-gray-100 font-semibold w-full px-28 py-3 rounded-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                    Cancle
                </button>
            </div>
          </div>
          </form>
        </div>
      </div>
  </div>
  
</template>
<script>
export default {
  data() {
    return {
      username: this.userID,
      email: this.email,
      // role: this.role.role,
      account: null,
      urlme: "http://localhost:3000/me",
    }
  },
  methods: {
    close(){
      this.$emit('adding-edit-profile');
    },
    async getBackEndData(url) {
      var token = localStorage.getItem("token");
      try {
        const res = await fetch(url, {
          method: "GET",
          headers: {
            "Authorization": token,
          },
        });
        const data = await res.json();
        return data;
      } catch (error) {
        console.log(`Could not get ${error}`);
      }
    },
    
  },
  async created() {
    this.account = await this.getBackEndData(this.urlme);
  },
};
</script>

