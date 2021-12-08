<template>
  <div class="z-50 inset-0 overflow-x-hidden overflow-y-auto fixed">
    <div class="bg-white w-full text-center py-4 px-3">
      <div class="flex justify-between items-center">
        <div @click="showNavHam()">
          <svg width="25" height="18" viewBox="0 0 25 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line y1="1.5" x2="25" y2="1.5" stroke="#2D2D2D" stroke-width="3" />
            <line y1="16.5" x2="25" y2="16.5" stroke="#2D2D2D" stroke-width="3"/>
            <line y1="9" x2="25" y2="9" stroke="#2D2D2D" stroke-width="3" />
          </svg>
        </div>
      </div>

      <div v-if="showNav">
        <div class="mt-4">
          <router-link to="/">
            <div class="flex justify-center items-center">
              <span class="text-sm mt-1"></span>
              <p class="uppercase font-medium text-base">Home</p>
            </div>
          </router-link>
          
          <router-link to="/Team">
            <div class="flex justify-center items-center mt-1">
              <span class="text-sm mt-1"></span>
              <p class="uppercase font-medium text-base">Team</p>
            </div>
          </router-link>

            <div class="flex justify-center items-center mt-1">
              <span class="text-sm mt-1"></span>
              <p class="uppercase font-medium text-base">Create +</p>
            </div>

          <div class="flex justify-center items-center mt-1">
            <span class="text-sm mt-1"></span>
            <div style="font-size: 24px;">

                <button class="ri-user-3-line"></button>
                <div v-if="showModal" class="p-4 overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex">
                  <pop-up
                    :showModal="showModal"
                    @adding-showModal='toggleModal'
                  >
                  </pop-up>
                </div>
            <div v-if="showModal" class="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-if="showNav" class="opacity-25 fixed inset-0 z-40 bg-black"></div>
</template>

<script>
export default {
  data() {
    return {
      mobileView: true,
      showNav: false,
      showModal: false,
      after: false,

    };
  },
  methods: {
    showNavHam() {
      this.showNav = !this.showNav;
    },
    toggleModal: function(){
      this.showModal = !this.showModal;
    },
  },
   async created() {
  },
};
</script>