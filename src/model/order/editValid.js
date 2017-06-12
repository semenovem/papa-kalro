import orderBaseValid from './baseValid';
import clientBaseValid from '../client/baseValid';
import {getState} from "../../store/index";

/**
 * Валидация
 * @param {ModelOrderEdit} model
 * @returns {Boolean}
 */
export default function valid(model) {
    if (!orderBaseValid(model)) {
        return false;
    }

    if (!clientBaseValid(model.client)) {
        return false;
    }

    // доставка и сборка выключенны
    if (!model.delivery.has && !model.assembly.has) {
        return false;
    }

    // выбранные продукты относятся ко включенному разделу
    const productHash = getState().product.hash;
    const itemLiOn = model.itemLi.some(item => {
        const section = productHash[item.productId].section;

        if (model.delivery.has && section === 'DELIVERY') {
            return true;
        }
        return model.assembly.has && section === 'ASSEMBLY';
    });

    if (!itemLiOn) {
        return false;
    }

    return true;
}
