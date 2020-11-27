import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import CardCategory, { ICategory, IProductResponse } from '../../components/CardCategory/card-category.component';
import { getProducts } from '../../redux/actions/products.actions';
import { Container, Row, Col, Navbar, NavbarText, InputGroup, InputGroupAddon, Input, InputGroupText } from 'reactstrap';
import { FaSearch } from 'react-icons/fa';
import Product from '../../components/Product/product.component';

function Home(props: any) {
    const initialProductsValue: IProductResponse[] = [];
    const [user, setUser] = useState({});
    const [search, setSearch] = useState('');
    const [searchedProducts, setSearchedProducts] = useState(initialProductsValue);

    const { dispatch,
        categories: {
            categories
        }
    } = props;

    useEffect(() => {
        categories.length === 0 && dispatch(getProducts('5fbeda5dc8f97c045b9b4120'));
    }, [categories]);

    const handleSearchInput = (e: any) => {
        setSearch(e.target.value);
        filterProducts(e.target.value);
    }

    const filterProducts = (query: string) => {
        let allProducts: any[] = [];
        categories.forEach((category: ICategory) => {
            if (category.products?.length !== 0) {
                allProducts.push(category.products);
            };
        });
        const products: IProductResponse[] = allProducts.flat()
        const filteredProducts: IProductResponse[] = products.filter((product: IProductResponse) => {
            return product.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
        });

        setSearchedProducts(filteredProducts);
        if(query === '') setSearchedProducts([]);
    }


    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarText>Simple Text</NavbarText>
            </Navbar>
            <InputGroup>
                <InputGroupAddon addonType="prepend">
                    <InputGroupText><FaSearch /></InputGroupText>
                </InputGroupAddon>
                <Input
                    type="text"
                    value={search}
                    onChange={handleSearchInput}
                    placeholder="search" />
            </InputGroup>

            {/* Result Search */}
            <Container>
            </Container>
            {
                searchedProducts.map((product: IProductResponse, index: number) => {
                    return (
                        <div key={index}>
                            <Product product={product} />
                        </div>
                    )
                })
            }
            {/* Main Search */}
            {console.log(searchedProducts)}
            { searchedProducts.length === 0 ?
                <Container >
                    <Row>
                        {
                            categories.map((val: any, index: any) => {
                                return (
                                    <Col key={index} xs="6">
                                        <CardCategory category={val} />
                                    </Col>
                                );
                            })
                        }
                    </Row>
                </Container> : null
            }
        </div>
    );
}

const mapStateToProps = (state: any) => {
    return {
        categories: state.categories,
    };
};

export default connect(mapStateToProps)(Home);
