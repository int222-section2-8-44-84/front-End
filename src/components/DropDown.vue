<template>
    <div class="relative inline-block text-left">
        <div class="origin-top-right absolute right-0 mt-8 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" >
          <div class="py-1">
            <a href="#" class="text-black block px-4 py-2 text-sm">
              <i class="hover:text-red-600 ri-user-3-line"></i>
                Profile
            </a>

            <a href="#" class="text-black block px-4 py-2 text-sm">
              <i class="ri-settings-5-line"></i>
                Manager management
            </a>

            <form method="POST" action="#">
              <button type="submit" class="text-black block w-full text-left px-4 py-2 text-sm">
                <i class="ri-logout-box-r-line"></i>
                  Log out
              </button>
            </form>
          </div>
        </div>
    </div>
</template>