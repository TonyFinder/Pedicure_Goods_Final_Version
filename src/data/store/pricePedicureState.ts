export const pricePedicureState = {
    header: 'Аппаратный педикюр',
    priceList: [
        {
            item: 'Обработка пальчиков или стопы  без покрытия',
            price: '1800 рублей'
        },
        {
            item: 'Обработка  стопы и пальчиков без покрытия',
            price: '2500 рублей'
        },
        {
            item: 'Обработка пальчиков с покрытием гель-лак',
            price: '2500 рублей'
        },
        {
            item: 'Обработка стопы и пальчиков с покрытием гель-лак',
            price: '3000 рублей'
        },
    ],
    restInfo: ['Дизайн оплачивается отдельно', 'Снятие покрытия от другого мастера - 200 рублей']
}

// types
export type PriceForPedicureStateType = typeof pricePedicureState
