<template>
    <div>
        <ckeditor
                :editor="editor"
                v-model="editorData"
                @destory="onEditorDestroy"
                @ready="onEditorReady"
                :config="editorConfig"/>
    </div>
</template>
<style>
</style>
<script>
    import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor'
    import CKEditor from '@ckeditor/ckeditor5-vue/dist/ckeditor'

    import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
    import EssentialsPlugin from '@ckeditor/ckeditor5-essentials/src/essentials';
    import UploadAdapterPlugin from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter';
    import AutoformatPlugin from '@ckeditor/ckeditor5-autoformat/src/autoformat';
    import BoldPlugin from '@ckeditor/ckeditor5-basic-styles/src/bold';
    import ItalicPlugin from '@ckeditor/ckeditor5-basic-styles/src/italic';
    import BlockQuotePlugin from '@ckeditor/ckeditor5-block-quote/src/blockquote';
    import EasyImagePlugin from '@ckeditor/ckeditor5-easy-image/src/easyimage';
    import HeadingPlugin from '@ckeditor/ckeditor5-heading/src/heading';
    import ImagePlugin from '@ckeditor/ckeditor5-image/src/image';
    import ImageCaptionPlugin from '@ckeditor/ckeditor5-image/src/imagecaption';
    import ImageStylePlugin from '@ckeditor/ckeditor5-image/src/imagestyle';
    import ImageToolbarPlugin from '@ckeditor/ckeditor5-image/src/imagetoolbar';
    import ImageUploadPlugin from '@ckeditor/ckeditor5-image/src/imageupload';
    import LinkPlugin from '@ckeditor/ckeditor5-link/src/link';
    import ListPlugin from '@ckeditor/ckeditor5-list/src/list';
    import ParagraphPlugin from '@ckeditor/ckeditor5-paragraph/src/paragraph';
    import AlignmentPlugin from '@ckeditor/ckeditor5-alignment/src/alignment';

    export default {
        data() {
            return {
                editor: ClassicEditor,
                editorData: '<p>Content of the editor.</p>',
                editorConfig: {
                    plugins: [
                        ClassicEditorBase,
                        EssentialsPlugin,
                        UploadAdapterPlugin,
                        AutoformatPlugin,
                        BoldPlugin,
                        ItalicPlugin,
                        BlockQuotePlugin,
                        EasyImagePlugin,
                        HeadingPlugin,
                        ImagePlugin,
                        ImageCaptionPlugin,
                        ImageStylePlugin,
                        ImageToolbarPlugin,
                        ImageUploadPlugin,
                        LinkPlugin,
                        ListPlugin,
                        ParagraphPlugin,
                        AlignmentPlugin,
                    ],

                    toolbar: {
                        items: [
                            'heading',
                            '|',
                            'bold',
                            'italic',
                            'link',
                            'alignment',
                            'bulletedList',
                            'numberedList',
                            'imageUpload',
                            'blockQuote',
                            'undo',
                            'redo',
                            'auto',
                        ]
                    },
                    image: {
                        toolbar: [
                            'imageStyle:full',
                            'imageStyle:side',
                            '|',
                            'imageTextAlternative'
                        ]
                    },
                    language: 'zh-cn'
                }
            }
        },
        mounted() {
        },
        beforeDestroy() {
            // this.editor.destroy()
        },
        methods: {
            onEditorReady(editor) {
                console.log(Array.from(editor.ui.componentFactory.names()))
            },
            onEditorDestroy(e) {
                console.log(e, 'hello')
            }
        },
        components: {
            // Use the <ckeditor> component in this view.
            ckeditor: CKEditor.component
        },
    }
</script>
