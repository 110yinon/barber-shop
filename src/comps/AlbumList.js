import React from 'react'
import shop from '../assets/shop.jpg'
import kidsplayground from '../assets/kidsplayground.jpg'

const AlbumList = () => {
    return (
        <div className="album-list">
            <img src={shop} alt="shop"/>
            <img src={kidsplayground} alt="kids plygrnd"/>
            <img src={require('../assets/hair7.jpg')} alt="hair7"/>
            <img src={require('../assets/hair5.jpg')} alt="hair5"/>
            <img src={require('../assets/hair3.jpg')} alt="hair3"/>
            <img src={require('../assets/hair4.jpg')} alt="hair4"/>
            <img src={require('../assets/hair2.jpg')} alt="hair2"/>
            <img src={require('../assets/hair6.jpg')} alt="hair6"/>
        </div>
    );
}
export default AlbumList;