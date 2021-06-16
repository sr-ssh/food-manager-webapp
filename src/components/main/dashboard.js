import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Sidebar from "react-sidebar"

export const Dashboard = () => {
    const [sidebarOpen, setOpen] = useState(false)

    return (
        <>
            <Sidebar
                sidebar={<b>Sidebar content</b>}
                open={sidebarOpen}
                onSetOpen={setOpen}
                styles={{ sidebar: { background: "white", width : "200px"} }}
            >
                <button onClick={() => setOpen(true)}>
                    Open sidebar
                </button>
            </Sidebar>
        </>
    )
}
