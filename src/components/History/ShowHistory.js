import React, { Component } from 'react';
import AdminLTE, { SimpleTable, Content, Row, Col, Box, Button } from 'adminlte-2-react';

const History = (props) => {
    return (
      <Content title="History" subTitle="" browserTitle="History">
        <Row>
          <Col xs={12}>
            <Box title="My first box" type="primary" closable collapsable footer={<Button type="danger" text="Danger Button" />}>
            </Box>
          </Col>
        </Row>
      </Content>
    );
}

export default History;