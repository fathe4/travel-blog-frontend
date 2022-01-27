import React from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';
import UseAuth from '../../../hooks/UseAuth';
import useUserOrders from '../../../hooks/useUserOrders';

const MyOrderDetails = ({ order, number }) => {
    const { userOrders, setUserOrders } = useUserOrders()
    const { setIsLoading } = UseAuth()



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
                        const remainingOrders = userOrders.filter(order => order._id !== id)
                        setUserOrders(remainingOrders)
                    }

                })
                .finally(() => setIsLoading(false))
        } else {
            fetch(`https://polar-savannah-40370.herokuapp.com/dashboard/orders`)
                .then(res => res.json())
                .then(data => setUserOrders(data))
        }
    }
    return (
        <tr>
            <td>{number + 1}</td>
            <td>{order.product?.title.slice(0, 50)}...</td>
            <td>{order.product?.price}</td>
            <td>{order.email}</td>
            <td>{order.address}</td>
            <td>{order.date}</td>
            <td>{order.status}</td>
            <td>
                <ButtonGroup size="sm">
                    <Button variant='danger' onClick={() => deleteOrder(order._id)}>Cancel</Button>
                </ButtonGroup>
            </td>

        </tr>
    );
};

export default MyOrderDetails;