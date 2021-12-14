import React, { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Circle,
  Tooltip,
} from "react-leaflet";
import { Header } from "../base/header2";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { meters2ScreenPixels } from "google-map-react";

import { useDispatch, useSelector } from "react-redux";
import { stationActions } from "../../../actions";

export const Station = () => {
  let { stations, loading } = useSelector((state) => state.getStations);
  const dispatch = useDispatch();

  const mapPositions = [36.310699, 59.599457];

  const circleOptions = {
    color: "#373737",
    fillOpacity: 0.2,
    fillColor: "",
    weight: 0,
  };

  const innerCircleOptions = {
    color: "#f44336",
    fillOpacity: 1,
    fillColor: "#373737",
    weight: 1,
  };

  useEffect(() => {
    dispatch(stationActions.getStations());
  }, [dispatch]);

  return (
    <div className="stations">
      <Header title="ایستگاه ها" backLink="/dashboard" />
      <MapContainer
        className="stations__map"
        center={mapPositions}
        zoom={15}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {!loading &&
          stations.length &&
          stations.map((item, index) => (
            <Circle
              key={index}
              center={[item.latitude, item.longitudes]}
              pathOptions={circleOptions}
              radius={item.dimeter}
              metric={meters2ScreenPixels}
            >
              <Tooltip>
                {item.description}
              </Tooltip>
              <Circle
                center={[item.latitude, item.longitudes]}
                pathOptions={innerCircleOptions}
                radius={30}
                metric={meters2ScreenPixels}
              >
                <Tooltip
                  offset={[20, 0]}
                  permanent
                  direction="center"
                  className="textOptions"
                >
                  {item.code}
                </Tooltip>
              </Circle>
            </Circle>
          ))}
      </MapContainer>
    </div>
  );
};