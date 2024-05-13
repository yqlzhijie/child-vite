
<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <editor
        style="width: 100%"
        ref="editorRef"
        v-model="content"
        v-loading="states.loading"
        :init="initOption"
    ></editor>
  <!-- <HelloWorld msg="Vite + Vue" /> -->
</template>
<script >
import { ref,reactive,watch } from "vue"
import tinymce from 'tinymce'
import Editor from '@tinymce/tinymce-vue'
const content = ref('')

const states = reactive({
    loading: false,
})

const editorRef = ref()
watch(
    () => content.value,
    val => {
        content.value = val
        console.log(tinymce);
        
    },
)
// 更新字段地址：https://www.tiny.cloud/docs/tinymce/6/migration-from-5x/#things-we-renamed
const initOption = ref({
    base_url: 'tinymce', // 不配置这里会自动走cdn 可能慢或者报错
    suffix: '.min',
    language: 'zh_CN', // 语言类型
    placeholder: '在这里输入文字', // textarea中的提示信息
    width: '100%',
    resize: false, // 编辑器宽高是否可变，false-否,true-高可变，'both'-宽高均可，注意引号
    branding: false, // tiny技术支持信息是否显示
    statusbar: false, // 最下方的元素路径和字数统计那一栏是否显示
    // elementpath: false, //元素路径是否显示
    // font_formats: '微软雅黑=Microsoft YaHei,Helvetica Neue,PingFang SC,sans-serif;苹果苹方=PingFang SC,Microsoft YaHei,sans-serif;宋体=simsun,serif;仿宋体=FangSong,serif;黑体=SimHei,sans-serif;Arial=arial,helvetica,sans-serif;Arial Black=arial black,avant garde;Book Antiqua=book antiqua,palatino;', // 字体样式

    plugins:
        'directionality visualblocks visualchars fullscreen image link media template code codesample table   pagebreak nonbreaking anchor  advlist lists wordcount  emoticons codesample fullscreen help ', // 插件配置 axupimgs indent2em
    toolbar: [
        'undo redo  cut copy paste pastetext  forecolor backcolor fontsize bold italic underline strikethrough link alignleft aligncenter alignright alignjustify table image axupimgs codesample fullscreen help',
    ], // 工具栏配置，设为false则隐藏 | bullist numlist subscript superscript
    font_size_formats: '12px 14px 16px 18px 24px 36px 48px',
    font_family_formats: 'SourceHanSansSC-Regular', // 字体样式
    menubar: false,
    type_ahead_urls: true,
    paste_data_images: true, // 图片是否可粘贴
    block_unsupported_drop: false,
    // 此处为图片上传处理函数
    file_picker_types: 'file image media', // file image media分别对应三个类型文件的上传：link插件，image和axupimgs插件，media插件。想屏蔽某个插件的上传就去掉对应的参数
    autoComplete:false,
})

// const init = (value, disable) => {
//     disabled.value = disable
//     content.value = value
// }

// const getEditorValue = () => {
//     return content.value
// }


</script>


<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
