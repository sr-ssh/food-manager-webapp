import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, Circle, Tooltip } from 'react-leaflet'
import { Header } from "../base/header2";
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { meters2ScreenPixels } from 'google-map-react';

import { useDispatch, useSelector } from "react-redux";




export const Station = () => {
    const dispatch = useDispatch();

    const mapPositions = [36.310699, 59.599457]

    const circleOptions = {
        color: 'blue',
        fillOpacity: .1,
        fillColor: '',
        weight: 1
    }


    return (
        <div className="stations">
            <MapContainer className="stations__map" center={mapPositions} zoom={15} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Circle
                    center={mapPositions}
                    pathOptions={circleOptions}
                    radius={200}
                    metric={meters2ScreenPixels}>
                    <Tooltip>نام ایستگاه : {"dsf"} <br /> شعاع : {"df"}</Tooltip>
                </Circle>

            </MapContainer>
        </div>
    );
};
