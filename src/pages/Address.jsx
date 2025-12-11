import React, { useState } from "react";
import { Col, Form, Row, Button, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addAddress, selectAddress } from "../store/slices/addressSlice";

function Address() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addressList = useSelector((state) => state.address.addressList);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    line1: "",
    city: "",
    pincode: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    dispatch(addAddress(form));
    dispatch(selectAddress(form));

    navigate("/checkout");
  }

  function useAddress(addr) {
    dispatch(selectAddress(addr));
    navigate("/checkout");
  }

  return (
    <Container className="mt-4">
      <h3>Add / Choose Address</h3>

      {addressList.length > 0 && (
        <div className="mt-4 mb-4">
          <h5>Your Saved Addresses</h5>

          {addressList.map((addr, idx) => (
            <div key={idx} className="border p-3 rounded mb-3">
              <strong>{addr.name}</strong> — {addr.phone}
              <br />
              {addr.line1}, {addr.city}, {addr.pincode}
              <br />
              <Button
                className="mt-2"
                variant="outline-danger"
                size="sm"
                onClick={() => useAddress(addr)}
              >
                Use This Address
              </Button>
            </div>
          ))}
        </div>
      )}

      <hr />

      <h5>Add New Address</h5>

      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control name="name" onChange={handleChange} required />
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Phone</Form.Label>
              <Form.Control name="phone" onChange={handleChange} required />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-3">
          <Form.Label>Address</Form.Label>
          <Form.Control name="line1" onChange={handleChange} required />
        </Form.Group>

        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>City</Form.Label>
              <Form.Control name="city" onChange={handleChange} required />
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Pincode</Form.Label>
              <Form.Control name="pincode" onChange={handleChange} required />
            </Form.Group>
          </Col>
        </Row>

        <Button type="submit" variant="danger">
          Save Address & Continue
        </Button>
      </Form>
    </Container>
  );
}

export default Address;
