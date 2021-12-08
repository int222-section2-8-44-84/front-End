<template>
  <div>
      <div class="relative w-auto my-6 mx-auto max-w-sm">
        <div class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
         
            <div class="flex items-start justify-between p-3 rounded-t">
                <button class="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-medium outline-none focus:outline-none" 
                    @click="close()">
                    <i class="ri-close-fill"></i>
                </button>
            </div>
            <i class="text-redRYB ri-delete-bin-fill mx-auto" style="font-size: 72px;"></i>

          <div class="relative px-6 flex-auto">
            <p class="text-center text-redRYB text-2xl font-medium leading-relaxed">
              Are you sure?
            </p>
            <p class="text-silverPink text-center font-medium">Do you really want to delete? <br>This process cannot be undone</p>
          </div>

          <div class="flex-auto relative p-6 rounded-b">
            <div class="pb-2">
                <button @click="deletePost(this.id)" type="button" class="text-white bg-red-600 hover:bg-red-700 font-semibold w-full px-28 py-3 rounded-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                    Delete
                </button>
            </div>
            <div>
                <button @click="close()" type="button" class="border border-solid border-gray-200 bg-transparent hover:bg-gray-100 font-semibold w-full px-28 py-3 rounded-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                    Cancle
                </button>
            </div>
          </div>

        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "small-modal",
  props:[
    "post",
    "id"
  ],
  data() {
    return {
        checktran: false,
        urlDelete: "https://wongnok.onthewifi.com/backend/deletePost",
        urlpost: "https://wongnok.onthewifi.com/backend/posts",

    }
  },
  methods: {
    async close(){
      this.$emit('adding-close-modal');
    },
    async getPostsData(url){
        try {
            const res = await fetch(url)
            const data = await res.json()
            return data
        }
        catch(error){
            console.log(`Could not get ${error}`)
        }
    },
    async deletePost(postNumber){
      var token = localStorage.getItem("token");
      let checktran;
      let errorMessage;
      let red;
      let green;
        const res = await fetch(`${this.urlDelete}/${postNumber}`, {
        method: "DELETE",
        headers: {
            "Authorization": token,
          },
      });
      if(res.ok){
          await this.getPostsData(this.urlpost)
          checktran = true;
          red = false;
          green = true;
          setTimeout(()=>{checktran = false } , 9000);
      } else {
          checktran = false;
          red = false;
          green = true;
          errorMessage = await res.json().message;
          setTimeout(()=>{checktran = false } , 9000);
      }
      this.$emit("check",{
        checktran:checktran,
        errorMessage:errorMessage,
        red:red,
        green:green,
      })
      setTimeout( () => this.$router.push({ path: '/'}), 1000);
    },

  }
}
</script>

