import React from "react";
import { Navbar, Nav } from "react-bootstrap";

import ReactExport from "react-export-excel";
import { filterColumns } from "../../../helpers/transform";
import { history } from "../../../helpers";

// icon
import backIcon from "./../../assets/images/back.svg";
import searchIcon from "./../../assets/images/search.svg";
import excelIcon from "./../../assets/images/header/excel.svg";

// Excell
const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

export const Header = ({
  title,
  setButton1 = false,
  setModalShow1 = {},
  setButton2 = false,
  excelData=[]
}) => {
  return (
    <>
      <Navbar variant="dark" sticky="top" className="py-2 my-nav noPrint">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="align-items-center w-100">
            {setButton1 && (
              <Nav.Link
                className="ms-0 pe-4"
                onClick={() => setModalShow1(true)}
              >
                <img
                  src={searchIcon}
                  height="40px"
                  alt="plus-icon"
                  className="noPrint"
                />
              </Nav.Link>
            )}
            {setButton2 && (
              <ExcelFile
                filename="report customer"
                element={
                  <Nav.Link
                    className="ms-4 pe-0"
                  >
                    <img
                      src={excelIcon}
                      height="35px"
                      alt="plus-icon"
                      className="noPrint"
                    />
                  </Nav.Link>
                }
              >
                <ExcelSheet data={excelData} name="Test">
                  {filterColumns(excelData).map((col) => {
                    return <ExcelColumn label={col} value={col} />;
                  })}
                </ExcelSheet>
              </ExcelFile>
            )}
            <Navbar.Text className="fs-6 fw-normal text-light noPrint me-4 pe-3">
              {title}
            </Navbar.Text>
            <Nav.Link onClick={() => history.push('/dashboard')} className="me-auto ps-4">
              <img src={backIcon} height="30px" alt="back-icon" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};
