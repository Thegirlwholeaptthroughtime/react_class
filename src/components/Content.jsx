import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import cartCountState from '../recoil/atom/cartCountState';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { selCartCountState } from '../recoil/selector/selCartCountState';

function Content() {
    const [myCart, setMyCart] = useRecoilState(cartCountState);
    const cartData = useRecoilValue(selCartCountState)
    const newData = useSetRecoilState(selCartCountState)
    console.log(newData)

    const handleCartCnt = () => {
        
        setMyCart({
            ...myCart, cartCnt : myCart.cartCnt + 1
            //myCart를 다 불러오고 그중에 cartCnt 만 변화ㅣ켜
        })
    }
    return ( 
        <>


        <div className='mt-5'>
          <Card style={{ width: '18rem' }}>
              
              <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                     현재 카트 개수는 {myCart.cartCnt}개 입니다
                  </Card.Text>
                  <Button variant="primary" onClick={handleCartCnt}>Go somewhere</Button>
              </Card.Body>
          </Card>
          </div>
        </>
     );
}

export default Content;