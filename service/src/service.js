import { apiRoot } from "./client/apiClient.js";

export async function updateOrderNumber(orderId) {
    const order = await getOrderById(orderId);
    const getLastOrder = await getLastOrderDetails();
    const lastOrderNumber = getLastOrder.orderNumber;
    if (lastOrderNumber) {
        const orderNumber = parseInt(lastOrderNumber) + 1;
        order.orderNumber = orderNumber.toString();
        await apiRoot.orders().withId({ ID: orderId }).post({
            body: order
        }).execute();
    } else {
        const orderNumber = Math.floor(Math.random() * 1000000).toString();
        updatedOrder = await apiRoot.orders().withId({ ID: orderId }).post({
            body: {
                ...order,
                orderNumber: orderNumber
            }
        }).execute();
    }
    return order;
}

async function getOrderById(orderId) {
    return (await apiRoot.orders().withId({ ID: orderId }).get().execute()).body;
}

async function getLastOrderDetails() {
    const lastOrder = (await apiRoot.orders().get(
        {
            queryArgs: {
                sort: 'createdAt desc',
                limit: 1
            }
        }
    ).execute()).body;
    return lastOrder;
}