<template>
    <div class="Team">
        <base-nav-mobile v-if="showNav" />
        <base-nav v-if="!mobileView" />   
        <!-- component -->
        <!-- <style>
            .bg-dots{
            background-image: url(https://assets-global.website-files.com/5b5a66e9f3166b36708705fa/5dea7a12bb83ab1f13040de5_cx-dots.svg);
            background-repeat: no-repeat
            }
        </style> -->
        
        <div class="m-auto max-w-6xl lg:p-12">
            <div class="flex flex-col md:flex-row">
                <div class="md:w-1/2 max-w-md flex flex-col justify-center">
                    <div class="md:text-5xl text-2xl uppercase font-black">
                        KRITSANAPON RAKKIATNGAM
                    </div>
                    <div class="text-xl mt-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
                        do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </div>
                    <div class="my-5 h-16">
                        <div class="shadow-md font-medium py-2 px-4 text-white cursor-pointer bg-red-500 hover:bg-red-600 rounded text-lg text-center w-48">

                            Contact
                        </div>
                    </div>
                </div>
                
                <div class="flex md:justify-end w-full md:w-1/2 -mt-5">
                    <div class="bg-dots">
                        <div class="max-w-md z-10 mt-6 ml-4">
                            <img alt="card img" class="shadow-2xl lg:w-auto lg:h-80 rounded-md" src="../assets/melo.jpeg"> 
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- component -->
        <div class="m-auto max-w-6xl p-12">
            <div class="flex flex-col md:flex-row">
                <div class="md:w-1/2 max-w-md flex flex-col justify-center">
                    <div class="md:text-5xl text-2xl uppercase font-black">
                        NIPPIT CHOTIGO
                    </div>
                    <div class="text-xl mt-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
                        do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </div>
                    <div class="my-5 h-16">
                        <div class="shadow-md font-medium py-2 px-4 text-white cursor-pointer bg-red-500 hover:bg-red-600 rounded text-lg text-center w-48">
                            Contact
                        </div>
                    </div>
                </div>
                
                <div class="flex md:justify-end w-full md:w-1/2 -mt-5">
                    <div class="bg-dots">
                        <div class="max-w-md z-10 mt-6 ml-4">
                            <img alt="card img" class="shadow-2xl lg:w-80 lg:h-auto rounded-md" src="../assets/kin.jpg">
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- component -->
        <div class="m-auto max-w-6xl p-12">
            <div class="flex flex-col md:flex-row">
                <div class="md:w-1/2 max-w-md flex flex-col justify-center">
                    <div class="md:text-5xl text-2xl uppercase font-black">
                        WARISARA KHRUAJINLI
                    </div>
                    <div class="text-xl mt-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
                        do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </div>
                    <div class="my-5 h-16">
                        <div class="shadow-md font-medium py-2 px-4 text-white cursor-pointer bg-red-500 hover:bg-red-600 rounded text-lg text-center w-48">
                            Contact
                        </div>
                    </div>
                </div>
                
                <div class="flex md:justify-end w-full md:w-1/2 -mt-5">
                    <div class="bg-dots">
                        <div class="shadow-2xl max-w-md z-10 mt-6 ml-4">
                            <img alt="card img" class="shadow-2xl lg:w-auto lg:h-80 rounded-md" src="../assets/namwaan.jpg"> 
                        </div>
                    </div>
                </div>
            </div>
        </div>



		
        
	</div>
    
	
</template>
<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  //   name: 'Home',
  components: {
    
    // HelloWorld
  },
};
</script>