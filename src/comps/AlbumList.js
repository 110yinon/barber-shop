import React from 'react'
import shop from '../assets/shop.jpg'
import kidsplayground from '../assets/kidsplayground.jpg'

const AlbumList = () => {
    return (
        <>
            <img src={shop} alt="shop" className="pic1" />
            <img src={kidsplayground} alt="kids plygrnd" className="pic2" />
            <img src={require('../assets/hair7.jpg')} alt="hair7" className="pic3" />
            <img src={require('../assets/hair5.jpg')} alt="hair5" className="pic4 propotion-pic" />
            <img src={require('../assets/hair3.jpg')} alt="hair3" className="pic5" />
            <img src={require('../assets/hair4.jpg')} alt="hair4" className="pic6 propotion-pic" />
            <img src={require('../assets/hair2.jpg')} alt="hair2" className="pic7 propotion-pic" />
            <img src={require('../assets/hair6.jpg')} alt="hair6" className="pic8" />
        </>
    );
}
export default AlbumList;