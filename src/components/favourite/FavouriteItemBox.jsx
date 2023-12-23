import React from "react";
import { Button, Card, Col, Image, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  numberWithCommas,
  setToast,
  shortString,
} from "../../utils/extraFunctions";
import { setItemSession } from "../../utils/sessionStorage";
import {
  deleteFavorite,
  getFavourite,
} from "../../redux/Reducers/favouriteReducer";

export const FavouriteItemBox = ({
  favoriteId,
  id,
  title,
  description,
  price,
  img,
  data,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.token);

  const handleDeleteRequest = async () => {
    try {
      let payload = [favoriteId, token];
      await dispatch(deleteFavorite(payload)).unwrap();
      await dispatch(getFavourite(token)).unwrap();
      setToast("Product removed from favorites", "success");
    } catch (rejectedValueOrSerializedError) {
      setToast("Something went wrong", "error");
    }
  };

  const handleDisplayProduct = () => {
    setItemSession("singleProduct", data);
    navigate(`/description/${id}`);
  };

  return (
    <Row className="mb-3">
      <Col xs={12} md={2} lg={12}>
        <Card>
          <Card.Img
            onClick={handleDisplayProduct}
            variant="top"
            src={img[0]}
            className="imgAnimation"
            style={{ cursor: "pointer" }}
          />
          <Card.Body>
            <Card.Title>{shortString(title)}</Card.Title>
            <Card.Text>
              PKR {numberWithCommas(price)}
            </Card.Text>
            <Card.Text className="text-muted">
              {shortString(description, 20)}
            </Card.Text>
            <Button
              variant="outline-secondary"
              className="mt-3"
              onClick={handleDeleteRequest}
            >
              Remove Item
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};
