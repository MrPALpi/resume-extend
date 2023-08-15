
export default{
    mounted(el, binding, vnode) {
        // console.log(vnode);
        // const setVisible = (entr)=>{
        //     if (el.classList.contains(binding.value.class + '_active')) { return}
        //     const {target, isIntersecting} = entr[0];
            
        //     if(!isIntersecting){
        //         return;
        //     }
        //     if(binding.value.parent){
        //         for (let i=0; i<target.children.length; i++){
        //             target.children[i].style=`transition: transform 0.3s ease-in ${i/20}s, opacity 0.3s ease-in ${i/20}s`;
        //             target.children[i].classList.add(binding.value.class + '_active');
        //         }
        //     }
        //     else{
        //         target.classList.add(binding.value.class + '_active');
        //     }
            
        // }
        const setVisible = (entr)=>{
            if (el.classList.contains(binding.value.class + '_active')) { return}
            const {target, isIntersecting} = entr[0];
            if(isIntersecting){
                target.classList.add(binding.value.class + '_active');
            }   
        }
        const options = {
            // rootMargin: "70px",
            threshold: 0.1,
          };
          
          let observer = new IntersectionObserver(setVisible, options);
          observer.observe(el);
      }
    
}
