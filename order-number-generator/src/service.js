import { apiRoot } from "./client/apiClient.js";

export async function updateOrderNumber(orderId) {
    try {
        const order = await getOrderById(orderId);
        const getLastOrder = await getLastOrderDetails();
        const lastOrderNumber = getLastOrder.orderNumber;
        let updatedOrder;
        if (lastOrderNumber) {
            const orderNumber = parseInt(lastOrderNumber) + 1;
            updatedOrder = await apiRoot.orders().withId({ ID: orderId }).post({
                body: {
                    version: order.version,
                    actions: [
                        {
                            action: 'setOrderNumber',
                            orderNumber: orderNumber.toString()
                        }
                    ]
                }
            }).execute();
        } else {
            const orderNumber = Math.floor(Math.random() * 1000000).toString();
            updatedOrder = await apiRoot.orders().withId({ ID: orderId }).post({
                body: {
                    version: order.version,
                    actions: [
                        {
                            action: 'setOrderNumber',
                            orderNumber: orderNumber.toString()
                        }
                    ]
                }
            }).execute();
        }
        return { updatedOrder, status: 200 };
    } catch (ex) {
        console.log(ex);
        return { status: 500, exception: ex };
    }
}

async function getOrderById(orderId) {
    try {
        return (await apiRoot.orders().withId({ ID: orderId }).get().execute()).body;
    } catch (ex) {
        console.log(ex);
    }
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