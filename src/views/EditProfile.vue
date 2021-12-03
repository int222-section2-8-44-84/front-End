<template>
<!-- EditProfile -->
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
                      <p v-if="invalidUsername" class="text-red-500 text-xs text-left italic">** Please enter your Username! **</p>
                    </div>
                    <div>
                      <input v-model="email" type="text" placeholder="example@mail.com" class="placeholder-gray block py-2 px-4 rounded-lg w-full border-2 border-gray-100 shadow-sm outline-none" />
                      <p v-if="invalidEmail" class="text-red-500 text-xs text-left italic">** Please enter your Email! **</p>
                    </div>
                    <div>
                      <input v-model="role" placeholder="Role" disabled class="placeholder-gray block py-2 px-4 rounded-lg w-full border-2 border-gray-100 shadow-sm outline-none" />
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
  props: ["account"],
  data() {
    return {
      username: this.account.userID,
      email: this.account.email,
      role: this.account.role.role,
      // username:'',
      // email: '',
      invalidUsername: false,
      invalidEmail: false,
      userID: '',
      accountNumber: '',
      urlme: "http://localhost:3000/me",
      urlEditAcc: "http://localhost:3000/editAccount"
    }
  },
  methods: {
    close(){
      this.$emit('adding-edit-profile');
    },
    async getBackEndData() {
      var token = localStorage.getItem("token");
      const res = await fetch(this.urlme, {
        method: "GET",
        headers: {
          Authorization: token,
        },
      });
      const data = await res.json();
      return data;
    },
    async submitForm() {
      this.invalidUsername= this.username === "" ? true : false;
      this.invalidEmail = this.email === "" ? true : false;
      if(this.invalidUsername && this.invalidEmail){
        let update = {
          userID: this.userID,
          email: this.email,
        }
        let formData = JSON.stringify(update);
        const res = await fetch(`${this.urlEditAcc}/{accountNumber}`,{
          method: "PUT",
          body: formData,
          headers: {
            "Authorization": this.token,
            "Content-type": "application/json",
          },
        })
        if(res.ok){
        const user = await res.json();
        return user
      }
      setTimeout( () => location.reload(), 1000);
      }
    },
    async editProfile(accountNumber){
      var token = localStorage.getItem("token");
      var formData = new FormData();
      formData.append("accountNumber", localStorage.getItem("userAccountNumber"));
      let res = await fetch(`${this.urlEditAcc}/${accountNumber}`, {
        method: "PUT",
        headers: {
          Authorization: token,
        },
        body: formData
        });
      if(res.ok){
        const user = await res.json();
        return user
      }
    },
  },
  async created() {
    this.getBackEndData();
    this.userID = localStorage.getItem("userID"),
    this.accountNumber = localStorage.getItem("userAccountNumber");
  },
};
</script>

