<template>
    <el-form>
        <el-form-item v-for="item in list" :key="item.id" :label="item.name" label-width="100px">
            <!-- 输入框 -->
            <el-input v-if="item.type === 'input'" :placeholder="'请输入'.concat(item.name)" v-model="model[item.value]" :style="{'width': item.width}"></el-input>
            <!-- 单选框 -->
            <el-radio-group v-if="item.type === 'radio'" v-model="model[item.value]" :style="{'width': item.width}">
                <el-radio v-for="{id, value, name} in item.options" :key="id" label="value">{{name}}</el-radio>
            </el-radio-group>
            <!-- 日期时间 -->
            <el-date-picker v-if="item.type === 'singleDatePicker'" :placeholder="'请选择'.concat(item.name)" v-model="model[item.value]" :style="{'width': item.width}" type="datetime"></el-date-picker>
            <!-- 级联选择（单选） -->
            <el-cascader v-if="item.type === 'singleCascader'" :placeholder="'请选择'.concat(item.name)" v-model="model[item.value]" :options="item.options" :style="{'width': item.width}"></el-cascader>
            <!-- 上传文件 -->
            <el-upload
                v-if="item.type === 'upload'"
                class="avatar-uploader"
                action=""
                v-model="model[item.value]"
                :show-file-list="false"
                :before-upload="beforeAvatarUpload"
                :http-request="handleUpload">
                <img v-if="imageUrl" :src="imageUrl" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
        </el-form-item>
    </el-form>
</template>
<script>
export default {
    name: 'Form',
    props: ['list', 'model'],
    data() {
      return {
        imageUrl: ''
      };
    },
    methods: {
        beforeAvatarUpload(file){
            const isJPG = file.type === 'image/jpeg';
            const isLt2M = file.size / 1024 / 1024 < 2;

            if (!isJPG) {
                this.$message.error('上传头像图片只能是 JPG 格式!');
            }
            if (!isLt2M) {
                this.$message.error('上传头像图片大小不能超过 2MB!');
            }
            return isJPG && isLt2M;
        },
        handleUpload(param){
            console.log(param)
            this.imageUrl = URL.createObjectURL(param.file);
        }
    }
}
</script>
<style scoped>
.avatar-uploader .el-upload {
    border: 1px dashed #555555;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>