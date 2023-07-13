import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Product from "./Product";
import items from "./allData";

export default function ProductItem() {
    return (
        <>
            <Container>
                <Row>
                    {
                        items.map((item) => {
                            return (
                                <Col key={item.id} lg={3} md={6} >
                                    <Product img={item.img} title={item.name} subTitle={item.subName} price={item.price} id={item.id} />
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        </>
    );
}