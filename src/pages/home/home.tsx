import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import CardCategory from '../../components/CardCategory/card-category.component';
import { getProducts } from '../../redux/actions/products.actions';
import { Container, Row, Col, Navbar, NavbarText } from 'reactstrap';

function Home(props: any) {

    const [user, setUser] = useState(0);
    const { dispatch,
        categories: {
            categories
        }
    } = props;

    useEffect(() => {
        categories.length === 0 && dispatch(getProducts('5fbeda5dc8f97c045b9b4120'));
    }, [categories]);


    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarText>Simple Text</NavbarText>
            </Navbar>
            <Container >
                <Row>
                    {
                        categories.map((val: any, index: any) => {
                            return (
                                <Col key={index} xs="4">
                                    <CardCategory category={val} />
                                </Col>
                            );
                        })
                    }
                </Row>
            </Container>
        </div>
    );
}

const mapStateToProps = (state: any) => {
    return {
        categories: state.categories,
    };
};

export default connect(mapStateToProps)(Home);
