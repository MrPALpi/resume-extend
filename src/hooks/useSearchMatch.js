import { ref, computed } from 'vue';

export default function useSearchMatch(arrayToMatch){

    const findWord = ref('');
    console.log(arrayToMatch.value)
    const searchMatch = computed(()=>{
        return arrayToMatch.value.filter((elm)=>elm.toLowerCase().includes(findWord.value.toLowerCase()));
        
    })

    return { findWord, searchMatch }
}