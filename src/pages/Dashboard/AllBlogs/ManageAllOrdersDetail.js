import { useState } from 'react';
import { useEffect } from 'react';
import { Table, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import UseAuth from '../../../hooks/UseAuth';
import useUserOrders from '../../../hooks/useUserOrders';
import './orderStyle.css'



const ManageAllORdersDetail = () => {
    const { userOrders, setUserOrders } = useUserOrders()
    const { setIsLoading } = UseAuth()
    const [loading, setLoading] = useState(true)
    const { id } = useParams()


    // Fetch orders
    useEffect(() => {
        setLoading(true)
        fetch(`http://localhost:5000/dashboard/orders/${id}`)
            .then(res => res.json())
            .then(data => setUserOrders(data))
            .finally(() => setLoading(false))
    }, [id, setUserOrders])

    // Order Actions
    const handleOrderAction = () => {
        const value = document.getElementById('mySelect').value
        if (value === 'order-shipped') {
            updateStatus(id, 'shipped')
        } else if (value === 'order-cancel') {
            updateStatus(id, 'cancelled')
        }

    }

    // DELETE ORDER
    const deleteOrder = (id) => {
        if (window.confirm('Are you sure you want to delete?')) {
            setIsLoading(true)
            fetch(`https://polar-savannah-40370.herokuapp.com/dashboard/orders/${id}`, {
                method: 'DELETE'
            }).then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount) {
                        alert('Order Deleted')
                        window.history.back();
                        // const remainingOrders = userOrders.filter(order => order._id !== id)
                        // setUserOrders(remainingOrders)
                    }

                })
                .finally(() => setIsLoading(false))
        } else {
            fetch(`https://polar-savannah-40370.herokuapp.com/dashboard/orders`)
                .then(res => res.json())
                .then(data => setUserOrders(data))
        }
    }

    // UPDATE ORDER STATUS
    const updateStatus = (id, status) => {
        const updateStatus = { status: status }
        fetch(`http://localhost:5000/dashboard/orders/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateStatus)
        }).then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setLoading(true)
                    fetch(`http://localhost:5000/dashboard/orders/${id}`)
                        .then(res => res.json())
                        .then(data => setUserOrders(data))
                        .finally(() => setLoading(false))
                    alert(`Status changed to ${status}`)
                }

            })

    }

    return (<>
        <div className='d-flex'>
            <div className='col-md-10'>
                <div className="col-md-12 shadow-sm bg-white p-3 rounded mb-3">
                    <h3>Order Details</h3>
                    <Table responsive striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Title</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>

                            {loading ? <Spinner animation="border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </Spinner> :
                                userOrders?.map((order, idx) =>
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
                </div>
                <div className="col-md-12 shadow-sm bg-white p-3 rounded">
                    <h3>Customer Details</h3>
                    <table class="table">
                        <thead>

                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Address</th>
                                <th scope="col">City</th>
                                <th scope="col">Country</th>
                                <th scope="col">Postal Code</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Shipping Status</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                loading ? <Spinner animation="border" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </Spinner> : userOrders.map(order => <tr>
                                    <th scope="row">{order.billing.name}</th>
                                    <td>{order.billing.line1}</td>
                                    <td>{order.billing.city}</td>
                                    <td>{order.billing.state}</td>
                                    <td>{order.billing.postal_code}</td>
                                    <td>{order.billing.phone}</td>
                                    <td>{order.status}</td>

                                </tr>)
                            }


                        </tbody>
                    </table>
                </div>
                <div className="col-md-6"></div>
            </div>
            <div className="col-md-2 bg-white shadow-sm mx-3 p-3">
                <h5>Order Action</h5>

                <select id="mySelect" className='w-100'>
                    <option>Choose an action..</option>
                    <option value='order-shipped'>Order Shipped</option>
                    <option value='order-cancel'>Cancel Order</option>
                </select>

                <div className='d-flex justify-content-between'>
                    <button type="button" onClick={handleOrderAction} class="btn btn-primary btn-sm mt-3">Update</button>
                    <button type="button" onClick={() => deleteOrder(id)} class="btn btn-danger btn-sm mt-3 ">Delete</button>
                </div>

            </div>
        </div>
    </>
    );
};

export default ManageAllORdersDetail;