import React, { useEffect, useState } from 'react';
import { Spinner, Table } from 'react-bootstrap';
import UseAuth from '../../../hooks/UseAuth';
import MyOrderDetails from './MyOrderDetails';

const MyOrders = () => {
    const [orders, setOrders] = useState([])
    const [loading, setLoading] = useState(false)
    const { user } = UseAuth()

    useEffect(() => {
        setLoading(true)
        fetch(`https://polar-savannah-40370.herokuapp.com/dashboard/orders?userEmail=${user.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
            .finally(() => setLoading(false))
    }, [user.email])

    console.log(orders);
    return (
        <div>
            <h2>My Orders</h2>

            <Table responsive striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Order Date</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>

                    {loading ? <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner> :
                        orders?.map((order, idx) =>
                            Object.entries(order).map(
                                ([key, { description, title, price, cartQuantity, url }]) => {
                                    if (key !== "_id" && key !== 'details' && key !== 'billing' && key !== 'status') {
                                        return (
                                            <tr>
                                                <td><img src={`data:image/jpeg;base64,${url}`} width={40} alt="" /></td>
                                                <td>{title}</td>
                                                <td>{price}</td>
                                                <td>{cartQuantity}</td>
                                                <td>{cartQuantity * price}</td>
                                            </tr>
                                        );
                                    }
                                }
                            )
                        )}


                </tbody>
            </Table>
            <h2 className='text-center'>Working with api, it will update soon</h2>
        </div>
    );
};

export default MyOrders;