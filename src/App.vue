<template>
  <div class="container">
    <div class="card">
      <h2>{{$localization('app.title')}}</h2>
      <button class="btn" @click="changeLang">{{$localization('app.changeLangBtn')}}</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'App',
    inject: ['setLang', 'getLang', 'languages'],
    data() {
      return {
        currentLangIdx: -1
      }
    },
    mounted() {
      let currentLangObject = this.languages.find(lang => lang.name === this.getLang());
      this.currentLangIdx = this.languages.indexOf(currentLangObject);
    },
    methods: {
      changeLang() {
        this.currentLangIdx++;
        if (this.currentLangIdx === this.languages.length)
          this.currentLangIdx = 0;
        
        let currentLangName = this.languages[this.currentLangIdx].name;
        this.setLang(currentLangName);
        this.$forceUpdate();
      }
    }
  }
</script>

