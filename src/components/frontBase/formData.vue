<template>
    <div>
        FormData
        <submit-form :list="formList" :model="formModel"></submit-form>
    </div>
</template>
<script>
import Form from '../public/form'
export default {
    name: 'FormData',
    components: {
        'submit-form': Form
    },
    data(){
        return {
            formList: [
                {id: 0, name: '姓名', type: 'input', value: 'name', width: '250px'},
                {id: 1, name: '性别', type: 'radio', value: 'sex', options: [
                    {id: 0, value: 'male', name: '男'},
                    {id: 1, value: 'female', name: '女'}
                ], width: '250px'},
                {id: 2, name: '星座', type: 'singleCascader', value: 'constellation',  options: [
                    {id: 1, value: 'fire', label: '火象星座', children: [
                        {id: 1, value: 'Sagittarius', label: '射手座'}, 
                        {id: 2, value: 'Aries', label: '白羊座'},
                        {id: 3, value: 'Leo', label: '狮子座'}]
                    },
                    {id: 2, value: 'water', label: '水象星座', children: [
                        {id: 1, value: 'Cancer', label: '巨蟹座'}, 
                        {id: 2, value: 'Pisces', label: '双鱼座'},
                        {id: 3, value: 'Scorpio', label: '天蝎座'}]
                    },
                    {id: 3, value: 'wind', label: '风象星座', children: [
                        {id: 1, value: 'Libra', label: '天秤座'}, 
                        {id: 2, value: 'Gemini', label: '双子座'},
                        {id: 3, value: 'Aquarius', label: '水瓶座'}]
                    },
                    {id: 4, value: 'earth', label: '土象星座', children: [
                        {id: 1, value: 'Capricorn', label: '摩羯座'}, 
                        {id: 2, value: 'Virgo', label: '处女座'},
                        {id: 3, value: 'Taurus', label: '金牛座'}]
                    }], 
                    width: '250px'
                },
                {id: 3, name: '出生年月', type: 'singleDatePicker', value: 'birth', width: '250px'},
                {id: 4, name: '照片', type: 'upload', value: 'photo'},
            ],
            formModel: {
                name: '',
                sex: '',
                constellation: '',
                birth: '',
                photo: ''
            }
        }
    },
    methods: {

    }
}
</script>
<style scoped>

</style>