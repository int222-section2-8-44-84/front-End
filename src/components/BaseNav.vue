<template>
  <header class="bg-white shadow-md">
    <div class="container mx-auto py-3 px-7 flex justify-between items-center">
      <!-- Logo -->
      <router-link to="/">
        <svg width="91" height="29" viewBox="0 0 91 29" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path/>
        </svg>
      </router-link>

      <div class="relative flex w-full flex-wrap pl-36 pr-16">
        <span class="z-10 h-full text-md text-gray absolute justify-center pl-4 py-3">
          <span class="fi-rr-search"></span>  
        </span>

        <input type="text" placeholder="Search" class="px-2 py-2 placeholder-gray relative bg-light rounded-full text-lg outline-none focus:ring-2 focus:ring-primary w-full pl-9 "/>
      </div>

      <router-link to="/team">
        <div class="w-36">
          <div class=" flex items-center hover:text-primary transition duration-200">
            <span class="fi-rr-users text-xl"></span>
            <p class="font-medium ml-2 text-base">Team</p>
          </div>
        </div>
      </router-link>

      <div class="flex items-center space-x-7">
        <router-link to="/basket">
          <span class="fi-rr-shopping-bag text-xl hover:text-primary transition duration-200"></span>
        </router-link>
        <router-link to="/login">
          <span class="fi-rr-user text-xl hover:text-primary transition duration-200"></span>
        </router-link>
      </div>
    </div>
  </header>
</template>