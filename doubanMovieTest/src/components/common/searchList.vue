<template>
  
</template>
<script>
    export default{
        name:'search',
        methods(){
            if(this.searchText === ''){
                this.$store.dispatch("getSearchList");
            }
        },
        computed:{
            searchText(){
                return this.$store.getters.searchText;
            }
        }
    }
</script>
<style>

</style>

