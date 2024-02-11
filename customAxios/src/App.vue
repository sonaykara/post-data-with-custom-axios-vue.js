<template>
  <div class="container pt-5">
    <h3>Add Descripcion</h3>
    <hr>
    <form @submit.prevent="submit">
      <div class="form-group">
        <label>Author</label>
        <input v-model="post.author" type="text" class="form-control" placeholder="Name Author">
      </div>
      <div class="form-group">
        <label>Header</label>
        <input v-model="post.title" type="text" class="form-control" placeholder="Header">
      </div>
      <button type="submit" class="btn btn-info">Submit</button>
    </form>
  </div>
</template>
<script>
 import customAxios from './custom_axios'

  export default {
    data() {
      return {
        post: {
          author: "",
          title: "",
        }
      }
    },
    methods: {
      submit() {
       customAxios.post("/abc" , {...this.post})
       .then((reponse) => {
            console.log(reponse)
            this.post = {}
       })

       .catch ((err) => {
        console.log(err)
      
       })

      }
    }
  }
</script>
