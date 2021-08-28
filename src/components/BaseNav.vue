<template>
<nav class="bg-white shadow-md">
    <div class="container mx-auto py-2 px-7 flex justify-between items-center">
      <!-- Logo -->
      <router-link to="/">
        <div class="flex items-center mb-4 md:mb-0">
        <img class="leading-relaxed inline-block py-2 w-auto h-16" src="../assets/wongnoklogo.png">
        </div>
      </router-link>

    <div class="lg:flex flex-grow items-center">
        <ul class="flex flex-col lg:flex-row list-none mx-auto">
            <li class="nav-item">
                <div class="px-3 py-2 flex items-center text-xl text-base hover:text-red-600">
                    Home
                </div>
            </li>

            <router-link to="/team">
                <li class="nav-item">
                    <div class="px-3 py-2 flex items-center text-xl text-black hover:text-red-600">
                        Team
                    </div>
                </li>
            </router-link>

            <div class="px-3 py-2 flex items-center text-base text-xl hover:text-red-600">
                + Create
            </div>
        </ul>
    </div>

    <div>
        <input 
            type="search" 
            name="query" 
            placeholder="Search" 
            class="w-full h-12 px-4 text-sm text-gray-700 bg-white border border-gray-300 
            rounded-lg lg:w-36 xl:transition-all xl:duration-300 xl:w-36 xl:focus:w-44 lg:h-10 
            dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-teal-500 
            dark:focus:border-teal-500 focus:outline-none focus:ring focus:ring-primary 
            dark:placeholder-gray-400 focus:ring-opacity-40">
    </div> 

    <div style="font-size: 32px;">
      <i class="ml-5 hover:text-red-600 ri-user-3-line"></i>
    </div>

      <!-- <router-link to="/team">
        <div class="w-36">
          <div class=" flex items-center hover:text-primary transition duration-200">
            <span class="fi-rr-users text-xl"></span>
            <p class="font-medium ml-2 text-base">Team</p>
          </div>
        </div>
      </router-link> -->

      <!-- <div class="flex items-center space-x-7">
        <router-link to="/basket">
          <span class="fi-rr-shopping-bag text-xl hover:text-primary transition duration-200"></span>
        </router-link>
        
        <router-link to="/login">
          <span class="fi-rr-user text-xl hover:text-primary transition duration-200"></span>
        </router-link>
      </div> -->
    </div>
</nav>
</template>