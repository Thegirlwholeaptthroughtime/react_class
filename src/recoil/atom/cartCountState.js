
import {
    atom 
}from 'recoil'
//변수하나 객체하나 라고 생각하면 쉬움


const cartCountState = atom({
    key : 'cartCountState', 
    //파일명과 맞추면 관리 편이 이름은 재사용하면 안됨, 다른 어느곳에서도 사용 x
    default : {
        id : 1,
        name : "kim",
        cartCnt : 3
    } 
});

export default cartCountState ;