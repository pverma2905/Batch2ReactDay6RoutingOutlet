import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Header from './Header'
import Footer from './Footer'
import Aside from './Aside'

import { Outlet } from 'react-router-dom'

export default function Layout() {
    return (
        <>
            <Header></Header>
            <main>
                <Row className="h-100">
                    <Col sm={4} className="g_bdr" >
                        <Aside />
                    </Col>
                    <Col sm={8} className="g_bdr">
                        <Outlet />
                    </Col>
                </Row>


            </main>
            <Footer></Footer>
        </>
    )
}
