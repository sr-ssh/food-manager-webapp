import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Circle, Tooltip } from "react-leaflet";
import { Header } from "../base/productHeader";
import "leaflet/dist/leaflet.css";
import { meters2ScreenPixels } from "google-map-react";
import { useDispatch, useSelector } from "react-redux";
import { stationActions } from "../../../actions";
import { AddStation } from "./addStation";
import { EditStation } from "./editStation";

export const Station = () => {
  const [addModalShow, setAddModalShow] = useState(false);
  const [editModalShow, setEditModalShow] = useState(false);

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
      <Header
        title="ایستگاه ها"
        setModalShow={setAddModalShow}
        modalShow={addModalShow}
        setEdit="true"
        setEditModal={setEditModalShow}
      />
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
              center={[item.location[1], item.location[0]]}
              pathOptions={circleOptions}
              radius={item.dimeter}
              metric={meters2ScreenPixels}
            >
              <Tooltip offset={[20, 0]} opacity="1" className="station-name">
                {item.description}
              </Tooltip>
              <Circle
                center={[item.location[1], item.location[0]]}
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
      <AddStation show={addModalShow} onHide={() => setAddModalShow(false)} />
      <EditStation
        show={editModalShow}
        onHide={() => setEditModalShow(false)}
      />
    </div>
  );
};
