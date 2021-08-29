import React, { Component } from 'react';
import AdminLTE, { Sidebar, Content, Row, Col, Box, Button } from 'adminlte-2-react';

const Auth = (props) => {
      return (
        <Content title="Auth" subTitle="" browserTitle="Auth">
          <Row>
            <Col xs={6}>
              <Box title="My first box" type="primary" closable collapsable footer={<Button type="danger" text="Danger Button" />}>
                Auth
              </Box>
            </Col>
            <Col xs={6}>
              <Box title="Another box">
                Content goes here
              </Box>
            </Col>
          </Row>
        </Content>
      );
  }

export default Auth;