<template>
  <div class="relative w-auto my-6 mx-auto max-w-md">
    <form @submit.prevent="submitLoginForm">
      <div v-bind:class="{ hidden: openTab !== 1, block: openTabMobile === 1 }">
        <div
          class="
            border-0
            rounded-lg
            shadow-lg
            relative
            flex flex-col
            w-full
            bg-white
            outline-none
            focus:outline-none
          "
        >
          <div class="flex items-start justify-between p-3 rounded-t">
            <button
              class="
                p-1
                ml-auto
                bg-transparent
                border-0
                text-black
                float-right
                text-3xl
                leading-none
                font-medium
                outline-none
                focus:outline-none
              "
              v-on:click="closeForm()"
            >
              <i class="ri-close-fill"></i>
            </button>
          </div>
          <img class="mx-auto px-20" src="../assets/sapiens.png" />

          <div class="relative px-12 flex-auto">
            <div class="space-y-3">
              <div>
                <input
                  type="text"
                  v-model="emailLogin"
                  placeholder="Username or Email address"
                  class="
                    placeholder-gray
                    block
                    text-lg
                    py-2
                    px-4
                    rounded-lg
                    w-full
                    border-2 border-gray-100
                    shadow-sm
                    outline-none
                  "
                />
                <p
                  v-if="invalidEmailLogin"
                  class="text-red-500 text-xs text-left italic"
                >
                  ** Please enter your Username or Email! **
                </p>
              </div>

              <div>
                <input
                  type="password"
                  v-model="passLogin"
                  placeholder="Password"
                  class="
                    placeholder-gray
                    block
                    text-lg
                    py-2
                    px-4
                    rounded-lg
                    w-full
                    border-2 border-gray-100
                    shadow-sm
                    outline-none
                  "
                />
                <p
                  v-if="invalidPassLogin"
                  class="text-red-500 text-xs text-left italic"
                >
                  ** Please enter your Password! **
                </p>
              </div>

              <button
                class="
                  font-semibold
                  text-2xl text-white
                  py-2
                  px-4
                  rounded-lg
                  w-full
                  bg-red-600
                  hover:bg-red-700
                  shadow-lg
                "
                type="submit"
              >
                Log In
              </button>

              <div class="cursor-pointer text-silverPink text-lg font-semibold">
                Don’t have an account?
                <a
                  v-on:click="toggleTabs(2)"
                  v-bind:class="{
                    '': openTabMobile !== 2,
                    '': openTabMobile === 2,
                  }"
                  class="text-yellow-400 hover:text-yellow-500"
                >
                  Register
                </a>
              </div>
            </div>
          </div>

          <div class="flex items-center justify-end p-3 rounded-b"></div>
        </div>
      </div>
    </form>

    <form @submit.prevent="submitRegisForm">
      <div v-bind:class="{ hidden: openTab !== 2, block: openTabMobile === 2 }">
        <div
          class="
            border-0
            rounded-lg
            shadow-lg
            relative
            flex flex-col
            w-full
            bg-white
            outline-none
            focus:outline-none
          "
        >
          <div class="flex items-start justify-between p-3 rounded-t">
            <button
              class="
                p-1
                ml-auto
                bg-transparent
                border-0
                text-black
                float-right
                text-3xl
                leading-none
                font-medium
                outline-none
                focus:outline-none
              "
              v-on:click="closeForm()"
            >
              <i class="ri-close-fill"></i>
            </button>
          </div>

          <div class="relative px-12 flex-auto">
            <div class="space-y-3">
              <p class="font-medium text-3xl text-left text-redRYB py-2">
                Get Started
              </p>
              <div>
                <input
                  type="text"
                  v-model="userRegis"
                  placeholder="Username"
                  class="
                    placeholder-gray
                    block
                    text-lg
                    py-2
                    px-4
                    rounded-lg
                    w-full
                    border-2 border-gray-100
                    shadow-sm
                    outline-none
                  "
                />
                <p
                  v-if="invalidUseRegis"
                  class="text-red-500 text-xs text-left italic"
                >
                  ** Please enter your Username! **
                </p>
              </div>

              <div>
                <input
                  type="email"
                  v-model="emailRegis"
                  placeholder="example@mail.com"
                  class="
                    placeholder-gray
                    block
                    text-lg
                    py-2
                    px-4
                    rounded-lg
                    w-full
                    border-2 border-gray-100
                    shadow-sm
                    outline-none
                  "
                />
                <p
                  v-show="invalidEmailRegis"
                  class="text-red-500 text-xs text-left italic"
                >
                  ** Please enter your Email! **
                </p>
              </div>

              <div>
                <input
                  type="password"
                  v-model="passRegis"
                  placeholder="Password"
                  class="
                    placeholder-gray
                    block
                    text-lg
                    py-2
                    px-4
                    rounded-lg
                    w-full
                    border-2 border-gray-100
                    shadow-sm
                    outline-none
                  "
                />
                <p
                  v-if="invalidPassRegis"
                  class="text-red-500 text-xs text-left italic"
                >
                  ** Please enter your Password! **
                </p>
              </div>

              <button
                class="
                  font-semibold
                  text-2xl text-white
                  py-2
                  px-32
                  rounded-lg
                  w-full
                  bg-red-600
                  hover:bg-red-700
                  shadow-lg
                "
                type="submit"
              >
                Register
              </button>

              <div class="cursor-pointer text-silverPink text-lg font-semibold">
                Already have an account?
                <a
                  v-on:click="toggleTabs(1)"
                  v-bind:class="{
                    '': openTabMobile !== 1,
                    '': openTabMobile === 1,
                  }"
                  class="text-yellow-400 hover:text-yellow-500"
                  >Log In</a
                >
              </div>
            </div>
          </div>
          <div class="flex items-center justify-end p-3 rounded-b"></div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
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
      urlAuthen: "https://wongnok.onthewifi.com/backend/authenticate",
      urlRegis: "https://wongnok.onthewifi.com/backend/register",
      urlMe: "https://wongnok.onthewifi.com/backend/me",
    };
  },
  methods: {
    toggleTabs: function (tabNumber) {
      this.openTab = tabNumber;
    },
    async submitLoginForm() {
      this.invalidEmailLogin = this.emailLogin === "" ? true : false;
      this.invalidPassLogin = this.passLogin === "" ? true : false;
      if (this.invalidEmailLogin == false && this.invalidPassLogin == false) {
        this.authen();
   
      }
    },
    async authen() {
      const response = await fetch(this.urlAuthen, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          username: this.emailLogin,
          password: this.passLogin,
        }),
      });
      if (response.status == 500) {
        alert("Your username or password are worng. Please try again.")
      } else if (response.status != 200){
        alert("Something error with status "+ response.status + " please try again.")
      }
       else {
        var jwt_token = await response.json();
        localStorage.setItem("token", "Bearer " + jwt_token.token);
        var token = localStorage.getItem("token");
        const res = await fetch(this.urlMe, {
          method: "GET",
          headers: {
            Authorization: token,
          },
        });
        const myAccount = await res.json();
        localStorage.setItem("userAccountNumber", myAccount.accountNumber);
        localStorage.setItem("userID", myAccount.userID);
        localStorage.setItem("userRole", myAccount.role.role);
        this.closeForm();
        setTimeout( () => location.reload(), 1000);
      }
    },
    submitRegisForm() {
      this.invalidUseRegis = this.userRegis === "" ? true : false;
      this.invalidEmailRegis = this.emailRegis === "" ? true : false;
      this.invalidPassRegis = this.passRegis === "" ? true : false;
      if (
        this.invalidUseRegis == false &&
        this.invalidEmailRegis == false &&
        this.invalidPassRegis == false
      ) {
        try {
          this.register();
        } catch (error) {
          console.log("Cant Register");
        }
      }
    },
    async register() {
      var formData = new FormData();
      formData.append("userID", this.userRegis);
      formData.append("password", this.passRegis);
      formData.append("email", this.emailRegis);
      var res = await fetch(this.urlRegis, {
        method: "POST",
        body: formData,
      });
      if(res.status==900){
        alert("This userID has already exit.");
      }else if(res.status==901){
        alert("This email has already exit.");
      }else if(res.status==200){
        alert("Register complete. Welcome "+ this.userRegis + ". \n Please Log in.");
        this.toggleTabs(1);
      }
    },
    closeForm() {
      this.$emit("adding-showModal", false);
    },
  },
};
</script>