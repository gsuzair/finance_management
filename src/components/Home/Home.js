import React, { Component } from 'react';
import AdminLTE, { Inputs, Content, Row, Col, Box, Button } from 'adminlte-2-react';

const { Select2, Date, DateTime, Text, Label } = Inputs;

const Home = (props) => {
    return (
      <div>
        <Content title="Home" subTitle="" browserTitle="Home">
          <Row>
            <Col xs={12}>
              <Box title="Enter your spendings" type="primary">
                <h5>Budget Remaining: 100</h5>
                <form action="" className="form-validation">
                  {/* <Label name = "Title" /> */}
                  <Text placeholder="Title" />
                  <Text placeholder="Amount Spent" />
                  <Date placeholder="Date" />
                  <Button type="submit" text="Submit" pullRight margin={10}/>
                </form>
              </Box>
            </Col>
          </Row>
        </Content>
      </div>
        
    );
}

export default Home;