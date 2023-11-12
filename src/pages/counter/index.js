import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Row, Col } from "antd";
import { decrement, increment, incrementByAmount, decrementByAmount, incrementAsync, decrementAsync } from "./counterSlice";
import "./index.css";

export default function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div className="container">
      <div>{count}</div>
      <Row>
        <Col span={4}>
          <Button
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
          >
            Increment
          </Button>
        </Col>
        <Col span={4}>
          <Button
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </Button>
        </Col>
        <Col span={4}>
          <Button
            aria-label="incrementByAmount value"
            onClick={() => dispatch(incrementByAmount(2))}
          >
            Increment Amount
          </Button>
        </Col>
        <Col span={4}>
          <Button
            aria-label="decrementByAmount value"
            onClick={() => dispatch(decrementByAmount(2))}
          >
            Decrement Amount
          </Button>
        </Col>
        <Col span={4}>
          <Button
            aria-label="Async incrementByAmount"
            className="async-button"
            onClick={() => dispatch(incrementAsync(2))}
          >
            Increment Async
          </Button>
        </Col>
        <Col span={4}>
          <Button
            aria-label="Async decrementByAmount"
            className="async-button"
            onClick={() => dispatch(decrementAsync(2))}
          >
            Decrement Async
          </Button>
        </Col>
      </Row>
    </div>
  );
}
