import React from "react";
import RoomItem from "../Components/RoomItem";
import getRoom from "../API/GetRoom";
import { useState } from 'react';
import "./Home.css";
import Navbar from "../Components/Navbar";
import EditForm from "../Components/EditForm";
export const Home = (props) => {
    
    return (
        <div>
            
        <div className="room">
            <h1 className="title">Room List</h1>
            <div className="roomlist">
                <div className="roomItem" onClick={() => EditForm()}>
                    <div></div>
                    <h2 >Nhà Cầu Giấy</h2>
                </div>
                <div className="roomItem" onClick={() => EditForm()}>
                    <div></div>
                    <h2 >Nhà Hai Bà Trưng</h2>
                </div>
                <div className="roomItem" onClick={() => EditForm()}>
                    <div></div>
                    <h2 >Nhà Yên Hòa</h2>
                </div>
                <div className="roomItem" onClick={() => EditForm()}>
                    <div></div>
                    <h2 >Nhà Trung Kính</h2>
                </div>
                <div className="roomItem" onClick={() => EditForm()}>
                    <div></div>
                    <h2 >Nhà Phố Huế</h2>
                </div>
                <div className="roomItem" onClick={() => EditForm()}>
                    <div></div>
                    <h2 >Nhà Láng Hạ</h2>
                </div>
                <div className="roomItem" onClick={() => EditForm()}>
                    <div></div>
                    <h2 >Nhà Hồng Mai</h2>
                </div>
                <div className="roomItem" onClick={() => EditForm()}>
                    <div></div>
                    <h2 >Nhà Trung Hòa</h2>
                </div>

            </div>
        
        </div>
        </div>
    );
}