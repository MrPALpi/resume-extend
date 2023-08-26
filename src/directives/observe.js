
export default{
    mounted(el, binding, vnode) {
        const setVisible = (entr)=>{
            if (el.classList.contains(binding.value.class + '_active')) { return}
            const {target, isIntersecting} = entr[0];
            if(isIntersecting){
                target.classList.add(binding.value.class + '_active');
            }   
        }
        const options = {
            // rootMargin: "70px",
            // threshold: 0.1,
            threshold: 0.3,
          };
          
          let observer = new IntersectionObserver(setVisible, options);
          observer.observe(el);
      }
    
}
