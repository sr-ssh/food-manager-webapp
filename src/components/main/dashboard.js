import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Sidebar from 'react-sidebar'

import { SidebarItems } from './sidebarItems'

import logo from "../../assets/images/back.svg"

export const Dashboard = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <Sidebar
                sidebar={<SidebarItems />}
                open={isOpen}
                onSetOpen={setIsOpen}
                pullRight={true}
                styles={{ 
                    sidebar: { background: "white", width : "42vw" },
                    overlay: { backgroundColor: "none" }
                }}
                overlayClassName="test3"
                shadow={false}
                touch={false}
            >
                <div className="mainPage h-100">
                    <button onClick={() => setIsOpen(!isOpen)} className="d-block me-auto">
                        Open sidebar
                    </button>
                </div>
            </Sidebar>
        </>
    )
}
