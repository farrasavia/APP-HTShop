<template>

    <div class="flex flex-center">
      <div class="q-pa-md" style="max-width: 500px; width:100%">
        <h4 style="text-align:center;">Upload Dokumen KSSK</h4>
        <q-form class="q-gutter-md">
  
          <q-input
            filled
            v-model="nameFile"
            label="Nama File"
            hint="Contoh: 2016-12-01 Rapat Stabilitas Sistem Keuangan Triwulan IV - 2016"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Please type something']"
          />
           
          <div class="modal-body">
                <!--UPLOAD-->
            <form enctype="multipart/form-data" novalidate v-if="isInitial || isSaving">
              <div>
                <input type="file" multiple :name="uploadFieldName" :disabled="isSaving" @change="filesChange($event.target.name, $event.target.files); fileCount = $event.target.files.length" accept="image/*" class="dropbox">
                <p v-if="isInitial">
                  Drag your Image file(s) into the box to begin
                </p>
                <p v-if="isSaving">
                  Uploading {{ fileCount }} files...
                </p>
              </div>
            </form>
            <div class="dropbox" v-if="isFailed" @click="$emit('close')">
              <br>
              <p v-if="isFailed" style="color: #95D600">Upload Success
              </p>
            </div>
          </div>

          <div>
            <q-btn label="Submit" type="submit" color="black" @click="submit(waitedFormData)"/>
            <q-btn label="Reset" type="reset" color="black" flat class="q-ml-sm" @click="reset"/>
          </div>
        </q-form>
      </div>
    </div>

</template>

<style>
.q-field__control {
  color: black !important;
}
.q-uploader__header {
    color: black !important;
}

.dropbox {
    outline: 2px dashed #95D600; /* the dash box */
    outline-offset: -10px;
    background: #fbfbfb;
    text-align: center;
    color: dimgray;
    width: 100%;
    padding: 10px 10px;
    min-height: 200px; /* minimum height */
    position: relative;
    cursor: pointer;
  }

  .input-file {
    opacity: 0; /* invisible but it's there! */
    width: 100%;
    height: 200px;
    position: absolute;
    cursor: pointer;
  }

  .dropbox:hover {
    background: #f5f5f5; /* when mouse over to the drop zone, change color */
  }

  .dropbox p {
    font-size: 1.2em;
    text-align: center;
    padding: 50px 0;
  }

  .border-dash {
    margin-top: 15px;
    border: 2px dashed #95D600;
    width: 100%;
    border-radius: 3px;
    color: #757575;

  }

  .border-dash-header {
    margin-top: 15px;
    border: 2px dashed #95D600;
    width: 94%;
    border-radius: 3px;
    color: #757575;

  }

  .for-header {
    margin: 10px;
    padding-left: 20px;

  }

  .button-updates {
    line-height: 30px;
    border: 2px solid #95D600;
    background: #95D600;
    color: #fff;
    width: 100%;
    font-size: 14px;
    text-transform: none;
    font-weight: 600;
    letter-spacing: 0px;
    border-radius: 3px;
    font-family: Montserrat;
  }

  .button-cancels {
    line-height: 30px;
    border: 2px solid #ebebeb;
    background: #ebebeb;
    color: #888888;
    width: 100%;
    font-size: 14px;
    text-transform: none;
    font-weight: 600;
    letter-spacing: 0px;
    border-radius: 3px;
    font-family: Montserrat;
  }

  .modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    display: table;
    transition: opacity .3s ease;
  }

  .modal-wrapper {
    display: table-cell;
    vertical-align: middle;
  }

  .modal-container {
    width: 85%;
    height: 85%;
    margin: 0px auto;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    transition: all .3s ease;
    font-family: Montserrat;
    overflow-y: scroll;
    overflow-x: scroll;
    max-width: 100%;
    max-height: 100%;
  }

  .modal-header h3 {
    margin-top: 0;
    color: #95D600;
  }

  .detail {
    padding: 15px;
    border-bottom: 1px solid #e5e5e5;
  }

  .detail-table {
    line-height: 50px;
    border: 2px dashed #95D600;
    width: 100%;
    border-radius: 3px;
    color: #757575;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  .button-close-modal {
    border: 0px solid #95D600;
  }

  .modal-enter .modal-container,
  .modal-leave-active .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }

  @media only screen and (max-width: 375px) {
    .modal-container {
      width: 360px;
      height: 600px;
    }

    .border-dash {
      width: 40%;

    }
  }

  @media only screen and (max-width: 800px) {
    .modal-container {
      width: 360px;
      height: 600px;
    }
  }

</style>

<script>
import {uploadKSSK}  from '../../api/upload/index';
const STATUS_INITIAL = 0, STATUS_SAVING = 1, STATUS_SUCCESS = 2, STATUS_FAILED = 3;

export default {
  name: "upload",
  

  data() {
    return {
      lorem: "",
      ipsum: "",
      uploadedFiles: [],
      uploadError: null,
      currentStatus: null,
      uploadFieldName: 'photos',
      name : 'testing',
      string : 'string',
      nameFile : '',
      waitedFormData: '',
      waitedFormDataPdf: '',
      filesImage: '',
      filesPdf: ''


    };
  },


  computed: {
      isInitial() {
        return this.currentStatus === STATUS_INITIAL;
      },
      isSaving() {
        return this.currentStatus === STATUS_SAVING;
      },
      isSuccess() {
        return this.currentStatus === STATUS_SUCCESS;
      },
      isFailed() {
        return this.currentStatus === STATUS_FAILED;
      },
      getImage() {
        upload.getAllImage(window, this.id).then(function (images) {
          return images.config.url;
        }).catch(function (err) {
          console.log(err)
        });
      }
    },
    methods: {
        reset() {
        // reset form to initial state
        this.currentStatus = STATUS_INITIAL;
        this.uploadedFiles = [];
        this.uploadError = null;
        this.nameFile = ''
      },

      save(formData) {
        // upload data to the server
        this.currentStatus = STATUS_SAVING;

       


        uploadKSSK(formData)
          .then(x => {
            this.uploadedFiles = [].concat(x);
            this.currentStatus = STATUS_SUCCESS;
          })
          .catch(err => {
            this.uploadError = err.response;
            this.currentStatus = STATUS_FAILED;
          });

      },

      filesChange(fieldName, fileList) {
        
        // handle file changes
        const formData = new FormData();

        if (!fileList.length) return;

        // append the files to FormData
        Array
          .from(Array(fileList.length).keys())
          .map(x => {
            let newNameFile = this.nameFile + '.jpg'
            this.filesImage = newNameFile
            formData.append(fieldName, fileList[x], newNameFile);
          });

        // save it

        this.waitedFormData = formData
        
      },

      submit(waitedFormData) {
        
        this.save(waitedFormData);
      }
    },
    mounted() {
      this.reset();
    },



};
</script>