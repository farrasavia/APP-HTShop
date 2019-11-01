<template>
    <div class="q-pa-md">
        <div class="q-gutter-md row items-start">
            <q-uploader
            color="blue"
            url="http://localhost:8080/upload"
            label="Filtered (jpg only)"
            multiple
            :filter="checkFileType"
            style="max-width: 300px"
            />
        </div>
    </div>
</template>

<script>
export default {

    methods: {
    checkFileSize (files) {
      return files.filter(file => file.size < 2048)
    },

    checkFileType (files) {
      return files.filter(file => file.type === 'image/jpg')
    }
  }
    
}
</script>

<style>

</style>