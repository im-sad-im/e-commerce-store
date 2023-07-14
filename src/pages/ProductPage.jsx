import { useState } from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import { useParams } from "react-router-dom";
import items from "../components/allData";

export default function ProductPage() {
    const { id } = useParams();
    const item = items.filter((item)=> item.id === parseInt(id));

    const [image, setImage] = useState(item[0].img);

    const handleMouseOver = (e) => {
        setImage(e.target.src);
    }

    return (
        <>
            <div className="product-page">
                <Container>
                    <h1 className="text-center my-5"> Product Detail</h1>
                    <Row gap={10}>
                        <Col lg={7}>
                            <div className="left mb-sm-5">
                                <div className="main-img w-100 d-flex justify-content-center">
                                    <img src={image} alt="product image" className="w-75 h-100 object-cover-fit" />
                                </div>
                                <div className="alternate-img d-flex w-100 justify-content-center align-item-center py-3 gap-3">
                                    <img src={item[0].img} alt="product image" className="w-19 object-fit-cover h-25" onMouseOver={handleMouseOver} />
                                    <img src={item[0].otherImgs[0]} alt="product image" className="w-19 object-fit-cover h-25" onMouseOver={handleMouseOver} />
                                    <img src={item[0].otherImgs[1]} alt="product image" className="w-19 object-fit-cover h-25" onMouseOver={handleMouseOver} />
                                </div>
                            </div>
                        </Col>
                        
                        <Col lg={5}>
                            <div className="right">
                                <h2>{item[0].name}</h2>
                                <h3>{item[0].subName}</h3>
                                <div className="product-spec">
                                    <div className="product-des">
                                        <p> {item[0].description} </p>
                                    </div>
                                    <div className="product-detail">
                                        <p className=""> Style : {item[0].style} </p>
                                        <p className=""> Colorway : {item[0].colorway} </p>
                                        {(item[0].releaseDate != "") &&
                                            <p className=""> Release Date : {item[0].releaseDate} </p>
                                        }
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>

                </Container>
            </div>
        </>
    )
}