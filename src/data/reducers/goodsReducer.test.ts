import {chooseCategoryAC, goodsReducer, InitialGoodsStateType} from './goodsReducer';

let startState: InitialGoodsStateType = {
    chosenCategory: [
        {id: 1, category: 'drySkin', active: false},
        {id: 1, category: 'wetSkin', active: false},
    ],
    drySkin: [{
        id: 1,
        title: 'Крем. Питание и Восстановление',
        pictureUrl: "372",
        description: {
            action: ['Мгновенное и продолжительное увлажнение 24 часа (подтверждено с помощью корнеометрии)', 'Заживление трещин и дефектов, заметное сокращение гиперкератоза за 7 дней', 'Значительное улучшение состояния сухой и грубой кожи через две недели', 'Восстановление кожи: рост синтеза коллагена типа III', 'Насыщенная текстура, легко впитывается, не липкий, без парабенов'],
            ingredients: ['Натуральное масло ши, масло макадамии и растительный глицерин способствуют увлажнению, питанию и восстановлению кожи. Восстанавливают барьерную функцию и гидролипидную пленку', 'Конский каштан и масло арники улучшают оксигенацию тканей, стимулируют микроциркуляцию, снимают воспаления', 'Ипарзин® 4А – эксклюзивный запатентованный ингредиент, поддерживает молодость кожи, способствует восстановлению, снимает воспаления'],
            applying: ['Применять 1-2 раза в день. Нанести на сухую чистую кожу, впитать массажными движениями.'],
        },
        variety: [{id: 372, volume: '50 мл', price: '1000 руб'}, {id: 306, volume: '150 мл', price: '2250 руб'},],
    }, {
        id: 2,
        title: 'Бальзам. Гидро-защита',
        pictureUrl: "832",
        description: {
            action: ['Интенсивное увлажение с первого применения, подтвержденное корнеометрией', 'За неделю применения заживляет мелкие трещины', 'Разглаживает проявления гиперкератоза', 'Создаёт эффект гладкой, увлажнённой и восстановленной кожи'],
            ingredients: ['Масло виноградной косточки восстанавливает барьерную функцию кожи, сокращает трансэпидермальную потерю влаги', 'Мочевина 15% обладает кератолитическим и отшелушивающим эффектом, стимулирует обновление эпидермиса', 'Папаин – энзим с отшелушивающим эффектом', 'Экстракт императы цилиндрической – растения из пустыни с мощным увлажняющим действием', 'Аллантоин увлажняет, успокаивает и заживляет микроповреждения'],
            applying: ['Наносить утром и вечером на чистую кожу стопы, впитать массажными движениями. Приятная консистенция облегчает полное впитывание.'],
        },
        variety: [{id: 832, volume: '125 мл', price: '1150 руб'},],
    }, ],
    wetSkin: [{
        id: 7,
        title: 'Гель. Антиперспирант',
        pictureUrl: "889",
        description: {
            action: ['Быстро регулирует сильное потоотделение, защищает кожу от раздражения и агрессивного воздействия пота', 'Формула приспособлена для очень чувствительной кожи: подходит для детей от 6 лет и взрослых с чувствительной кожей (микозы, мацерация, сахарный диабет)'],
            ingredients: ['Липестеры® шелка и серина – запатентованная противогрибковая формула защищает и дезодорирует кожу', 'Липоаминокислота C8G/Al – производная глицина, аминокислота с заживляющим действием'],
            applying: ['Применять 1-2 раза в день. Нанести на сухую чистую кожу стопы, уделяя внимание пространству между пальцами.'],
        },
        variety: [{id: 889, volume: '75 мл', price: '1200 руб'},],
    }, {
        id: 8,
        title: 'Крем. Антиперспирант',
        pictureUrl: "367",
        description: {
            action: ['Мгновенный освежающий эффект', 'Регулирует потоотделение и неприятные запахи', 'Надежно действует в течение всего дня', 'Имеет приятный запах, очень прост и комфортен в применении'],
            ingredients: ['Хлоргидрат алюминия, соли аллантоина регулируют потоотделение, снижают раздражение кожи', 'Экстракт лишайника с высоким содержанием усниновой кислоты, мощного природного антибактериального средства, предотвращает развитие запахов, возникающих из-за разложения пота бактериями', 'Двойная система поглощения запахов поглощает и нейтрализует неприятные запахи с момента их появления'],
            applying: ['Применять 1 раз в день по утрам. Нанести на сухую чистую кожу стопы. Дать высохнуть на коже одну минуту.'],
        },
        variety: [{id: 367, volume: '50 мл', price: '1200 руб'},],
    }, ],
}

test('Choose a category', ()=> {
    let endState = goodsReducer(startState, chooseCategoryAC('wetSkin'))

    expect(startState.chosenCategory[0].active).toBeFalsy()
    expect(startState.chosenCategory[1].active).toBeFalsy()
    expect(endState.chosenCategory[0].active).toBeFalsy()
    expect(endState.chosenCategory[1].active).toBeTruthy()
})
test('Choose both categories', ()=> {
    let endState = goodsReducer(startState, chooseCategoryAC('all'))

    expect(startState.chosenCategory[0].active).toBeFalsy()
    expect(startState.chosenCategory[1].active).toBeFalsy()
    expect(endState.chosenCategory[0].active).toBeTruthy()
    expect(endState.chosenCategory[1].active).toBeTruthy()
})