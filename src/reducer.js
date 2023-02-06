import {
    CATEGORIES
} from './action';
const initialState = {
    counter:0,
    categoryArray: ['Produce','Prepared foods','Canned foods','Bakery','Dairy & Eggs','Frozen','Meat & Seafood','Canned foods','Bakery','Dairy & Eggs','Frozen','Meat & Seafood'],
    item:[
        {
            'productImg': './assets/banana.png',
            'price':'0.69',
            'name':'Banana 1 ct',
            'weight':'18 oz'
           
        },
        {
            'productImg':'./assets/strawberries.png',
            'price':'0.69',
            'name':'Straberries',
            'weight':'1 lb'
        },
        {
            'productImg':'./assets/yogurt.png',
            'price':'0.69',
            'name':'Yogurt',
            'weight':'1 lb'
        },
        {
            'productImg':'./assets/blackberries.png',
            'price':'0.69',
            'name':'Blackberries',
            'weight':'1 lb'
        },
        {
            'productImg': './assets/banana.png',
            'price':'0.69',
            'name':'Banana 1 ct',
            'weight':'18 oz'
        },
        {
            'productImg':'./assets/strawberries.png',
            'price':'0.69',
            'name':'Straberries',
            'weight':'1 lb'
        },
        {
            'productImg':'./assets/yogurt.png',
            'price':'0.69',
            'name':'Yogurt',
            'weight':'1 lb'
        },
        {
            'productImg':'./assets/blackberries.png',
            'price':'0.69',
            'name':'Blackberries',
            'weight':'1 lb'
        }
    ]  

}

function reducer(state = initialState, action){
    switch(action.type){
        case CATEGORIES:
            return{
                ...state,
                counter: state.counter+1
            }
            
        default:
            return state
    }
}

export default reducer