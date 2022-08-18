import { selector,useRecoilValue } from "recoil";
import cartCountState from "../atom/cartCountState";
import axios from "axios";

const selCartCountState = selector({
   key : 'selCartCountState',
   get : ({get})=>{
        let count = get(cartCountState);
        return count.cartCnt
   },

   set:({set}, newValue) => {
        set(cartCountState, newValue / {
            id:2,
            cartCnt :10,
            name : "dd"
        })
   }
   
});
    
export {selCartCountState};